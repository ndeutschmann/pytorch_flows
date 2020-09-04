"""Tools to collect information about the repository"""
import os
from hashlib import sha1
import git
from pip._internal.operations import freeze


def get_repo():
    """Get a repository object for the working directory

    Returns
    -------
        git.Repo
            the repository at the current working directory
    """
    return git.Repo(path=".", search_parent_directories=True)


def get_repo_hash(repo=None):
    """Collect the hash of the head of the repo

    Parameters
    ----------
    repo: git.Repo, None

    Returns
    -------
        str
    """

    if repo is None:
        repo = get_repo()

    return repo.head.commit.hexsha


def repo_is_dirty(repo=None):
    """Get the status information of the repository. We collect
    - the 'dirty' status of the repository (modified tracked files)
    - the presence of untracked files
    if either is true, we return "-dirty" to be appended to filenames


    Parameters
    ----------
    repo: git.Repo, None

    Returns
    -------
        bool
            whether the repo is dirty
    """

    if repo is None:
        repo = get_repo()

    status = repo.is_dirty() or len(repo.untracked_files) != 0
    return status


def get_dirt_hash(repo=None):
    """Get a SHA1 hash of all sources of dirt (modified tracked files or untracked files).
    Explicitly, we collect all such files, hash their contents one by one, concatenate all hashes and
    hash them again (to avoid loading many large files in memory)

    Parameters
    ----------
    repo

    Returns
    -------
        str
            hash summary of all the dirt elements
    """
    if repo is None:
        repo = get_repo()

    changed_files = [os.path.join(repo.working_dir, item.a_path) for item in repo.head.commit.diff(None)]

    hashes = b""

    for changed_file in changed_files:
        with open(os.path.join(repo.working_dir, changed_file), "rb") as cf:
            hashes += sha1(cf.read()).digest()

    for untracked_file in repo.untracked_files:
        with open(os.path.join(repo.working_dir, untracked_file), "rb") as uf:
            hashes += sha1(uf.read()).digest()

    return sha1(hashes).hexdigest()


def get_pipfreeze_hash():
    """Get a hash of the libraries installed in the current environment - generated by pip freeze

    Returns
    -------

    """
    reqs = freeze.freeze()
    binreqs = b""
    for req in reqs:
        binreqs += req.encode()

    return sha1(binreqs).hexdigest()


def get_git_summary(repo=None):
    """Generate a string summarizing the status of the repo
    The format is
    <commit hash>:<pip freeze hash>[:<dirt hash>]

    Parameters
    ----------
    repo

    Returns
    -------
        str
    """
    if repo is None:
        repo = get_repo()

    summary = [repo.head.commit.hexsha, get_pipfreeze_hash()]
    if repo_is_dirty(repo):
        dirt_hash = get_dirt_hash(repo)
        summary.append(dirt_hash)

    return ":".join(summary)
