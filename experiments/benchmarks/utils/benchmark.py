"""Benchmarking functions"""
import logging
import torch
from utils.integrator_integrals import validate_integral_integrator
from utils.flat_integrals import validate_known_integrand_flat

logger = logging.getLogger(__name__)


def benchmark_known_integrand(d, integrand, integrator, n_batch=100000, integrand_params=None, integrator_params=None,
                              device=torch.device("cpu")):
    """

    Parameters
    ----------
    d
    integrand
    integrator
    n_batch
    integrand_params
    integrator_params
    device

    Returns
    -------

    """

    logger.debug("=" * 72)
    logger.info("Running integrator")
    integrator_result = validate_integral_integrator(integrand, integrator, n_batch=n_batch)
    logger.debug("=" * 72)
    logger.info("Running flat sampler")
    flat_result = validate_known_integrand_flat(integrand, d=d, n_batch=n_batch, device=device)
    logger.debug("=" * 72)
    integrator_result["speedup"] = (flat_result["value_std"] / integrator_result["value_std"]) ** 2
    logger.info(f"speedup: {integrator_result['speedup']}")
    logger.debug("=" * 72)
    logger.debug(" " * 72)
    integrator_result["d"] = d

    if integrand_params is None:
        integrand_params = dict()
    if integrator_params is None:
        integrator_params = dict()

    for key in integrand_params:
        integrator_result[key] = integrand_params[key]
    for key in integrator_params:
        integrator_result[key] = integrator_params[key]

    return integrator_result