Search.setIndex({docnames:["about","api/zunis","api/zunis.integration","api/zunis.integration.adaptive_survey_integrator","api/zunis.integration.default_integrator","api/zunis.integration.dkltrainer_integrator","api/zunis.integration.flat_survey_integrator","api/zunis.integration.integratorAPI","api/zunis.models","api/zunis.models.flows","api/zunis.models.flows.analytic_flows","api/zunis.models.flows.analytic_flows.analytic_flow","api/zunis.models.flows.analytic_flows.element_wise","api/zunis.models.flows.backprop_jacobian_flows","api/zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow","api/zunis.models.flows.backprop_jacobian_flows.nnflows","api/zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows","api/zunis.models.flows.coupling_cells","api/zunis.models.flows.coupling_cells.general_coupling","api/zunis.models.flows.coupling_cells.piecewise_coupling","api/zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear","api/zunis.models.flows.coupling_cells.real_nvp","api/zunis.models.flows.coupling_cells.transforms","api/zunis.models.flows.general_flow","api/zunis.models.flows.masking","api/zunis.models.flows.sampling","api/zunis.models.flows.sequential","api/zunis.models.flows.sequential.invertible_sequential","api/zunis.models.flows.sequential.repeated_cell","api/zunis.models.generators","api/zunis.models.layers","api/zunis.models.layers.activations","api/zunis.models.layers.trainable","api/zunis.models.utils","api/zunis.training","api/zunis.training.weighted_dataset","api/zunis.training.weighted_dataset.dkl_training","api/zunis.training.weighted_dataset.generators","api/zunis.training.weighted_dataset.stateful_trainer","api/zunis.training.weighted_dataset.training_record","api/zunis.training.weighted_dataset.variance_training","api/zunis.training.weighted_dataset.weighted_dataset_trainer","api/zunis.utils","api/zunis.utils.function_wrapper","api/zunis.utils.logger","background/nis","background/training","genindex","index","library/basic-example","library/concepts","library/flow","library/function","library/installation","library/integrator","library/trainer","py-modindex","references"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["about.rst","api/zunis.rst","api/zunis.integration.rst","api/zunis.integration.adaptive_survey_integrator.rst","api/zunis.integration.default_integrator.rst","api/zunis.integration.dkltrainer_integrator.rst","api/zunis.integration.flat_survey_integrator.rst","api/zunis.integration.integratorAPI.rst","api/zunis.models.rst","api/zunis.models.flows.rst","api/zunis.models.flows.analytic_flows.rst","api/zunis.models.flows.analytic_flows.analytic_flow.rst","api/zunis.models.flows.analytic_flows.element_wise.rst","api/zunis.models.flows.backprop_jacobian_flows.rst","api/zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow.rst","api/zunis.models.flows.backprop_jacobian_flows.nnflows.rst","api/zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows.rst","api/zunis.models.flows.coupling_cells.rst","api/zunis.models.flows.coupling_cells.general_coupling.rst","api/zunis.models.flows.coupling_cells.piecewise_coupling.rst","api/zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear.rst","api/zunis.models.flows.coupling_cells.real_nvp.rst","api/zunis.models.flows.coupling_cells.transforms.rst","api/zunis.models.flows.general_flow.rst","api/zunis.models.flows.masking.rst","api/zunis.models.flows.sampling.rst","api/zunis.models.flows.sequential.rst","api/zunis.models.flows.sequential.invertible_sequential.rst","api/zunis.models.flows.sequential.repeated_cell.rst","api/zunis.models.generators.rst","api/zunis.models.layers.rst","api/zunis.models.layers.activations.rst","api/zunis.models.layers.trainable.rst","api/zunis.models.utils.rst","api/zunis.training.rst","api/zunis.training.weighted_dataset.rst","api/zunis.training.weighted_dataset.dkl_training.rst","api/zunis.training.weighted_dataset.generators.rst","api/zunis.training.weighted_dataset.stateful_trainer.rst","api/zunis.training.weighted_dataset.training_record.rst","api/zunis.training.weighted_dataset.variance_training.rst","api/zunis.training.weighted_dataset.weighted_dataset_trainer.rst","api/zunis.utils.rst","api/zunis.utils.function_wrapper.rst","api/zunis.utils.logger.rst","background/nis.rst","background/training.rst","genindex.rst","index.rst","library/basic-example.rst","library/concepts.rst","library/flow.rst","library/function.rst","library/installation.rst","library/integrator.rst","library/trainer.rst","py-modindex.rst","references.rst"],objects:{"":{zunis:[1,0,0,"-"]},"zunis.integration":{adaptive_survey_integrator:[3,0,0,"-"],default_integrator:[4,0,0,"-"],dkltrainer_integrator:[5,0,0,"-"],flat_survey_integrator:[6,0,0,"-"],integration_logger:[2,4,1,""],integratorAPI:[7,0,0,"-"]},"zunis.integration.adaptive_survey_integrator":{AdaptiveSurveyIntegrator:[3,1,1,""]},"zunis.integration.adaptive_survey_integrator.AdaptiveSurveyIntegrator":{process_survey_step:[3,2,1,""],sample_survey:[3,2,1,""],survey_switch_condition:[3,2,1,""]},"zunis.integration.default_integrator":{Integrator:[4,3,1,""]},"zunis.integration.dkltrainer_integrator":{DKLAdaptiveSurveyIntegrator:[5,1,1,""]},"zunis.integration.dkltrainer_integrator.DKLAdaptiveSurveyIntegrator":{survey_switch_condition:[5,2,1,""]},"zunis.integration.flat_survey_integrator":{FlatSurveySamplingIntegrator:[6,1,1,""],PosteriorSurveySamplingIntegrator:[6,1,1,""]},"zunis.integration.flat_survey_integrator.PosteriorSurveySamplingIntegrator":{empty_history:[6,2,1,""],finalize_integration:[6,2,1,""],finalize_refine:[6,2,1,""],finalize_survey:[6,2,1,""],initialize:[6,2,1,""],initialize_refine:[6,2,1,""],initialize_survey:[6,2,1,""],process_refine_step:[6,2,1,""],process_survey_step:[6,2,1,""],sample_refine:[6,2,1,""],sample_survey:[6,2,1,""]},"zunis.integration.integratorAPI":{SurveyRefineIntegratorAPI:[7,1,1,""]},"zunis.integration.integratorAPI.SurveyRefineIntegratorAPI":{finalize_integration:[7,2,1,""],finalize_refine:[7,2,1,""],finalize_survey:[7,2,1,""],format_arguments:[7,2,1,""],initialize:[7,2,1,""],initialize_refine:[7,2,1,""],initialize_survey:[7,2,1,""],integrate:[7,2,1,""],process_refine_step:[7,2,1,""],process_survey_step:[7,2,1,""],refine:[7,2,1,""],refine_step:[7,2,1,""],sample_refine:[7,2,1,""],sample_survey:[7,2,1,""],set_verbosity:[7,2,1,""],survey:[7,2,1,""],survey_step:[7,2,1,""]},"zunis.models":{flows:[9,0,0,"-"],generators:[29,0,0,"-"],layers:[30,0,0,"-"],utils:[33,0,0,"-"]},"zunis.models.flows":{analytic_flows:[10,0,0,"-"],backprop_jacobian_flows:[13,0,0,"-"],coupling_cells:[17,0,0,"-"],general_flow:[23,0,0,"-"],masking:[24,0,0,"-"],sampling:[25,0,0,"-"],sequential:[26,0,0,"-"]},"zunis.models.flows.analytic_flows":{analytic_flow:[11,0,0,"-"],element_wise:[12,0,0,"-"]},"zunis.models.flows.analytic_flows.analytic_flow":{AnalyticFlow:[11,1,1,""],InvertibleAnalyticFlow:[11,1,1,""]},"zunis.models.flows.analytic_flows.analytic_flow.AnalyticFlow":{flow:[11,2,1,""],training:[11,5,1,""]},"zunis.models.flows.analytic_flows.analytic_flow.InvertibleAnalyticFlow":{flow:[11,2,1,""],invert:[11,2,1,""],runs_forward:[11,2,1,""],training:[11,5,1,""],transform_and_compute_jacobian:[11,2,1,""]},"zunis.models.flows.analytic_flows.element_wise":{AnalyticInverseSigmoid:[12,1,1,""],AnalyticSigmoid:[12,1,1,""],InvertibleAnalyticSigmoid:[12,1,1,""],inverse_sigmoid:[12,3,1,""]},"zunis.models.flows.analytic_flows.element_wise.AnalyticInverseSigmoid":{training:[12,5,1,""],transform_and_compute_jacobian:[12,2,1,""]},"zunis.models.flows.analytic_flows.element_wise.AnalyticSigmoid":{training:[12,5,1,""],transform_and_compute_jacobian:[12,2,1,""]},"zunis.models.flows.analytic_flows.element_wise.InvertibleAnalyticSigmoid":{training:[12,5,1,""]},"zunis.models.flows.backprop_jacobian_flows":{general_backprop_j_flow:[14,0,0,"-"],nnflows:[15,0,0,"-"],simple_backprop_flows:[16,0,0,"-"]},"zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow":{GeneralBackpropJacobianFlow:[14,1,1,""]},"zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow.GeneralBackpropJacobianFlow":{flow:[14,2,1,""],training:[14,5,1,""],transform_and_compute_jacobian:[14,2,1,""]},"zunis.models.flows.backprop_jacobian_flows.nnflows":{NNFlow:[15,1,1,""]},"zunis.models.flows.backprop_jacobian_flows.nnflows.NNFlow":{training:[15,5,1,""],weight_init_identity_:[15,2,1,""]},"zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows":{LinearFlow:[16,1,1,""],SigmoidFlow:[16,1,1,""]},"zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows.LinearFlow":{training:[16,5,1,""],weight_init_identity_:[16,2,1,""]},"zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows.SigmoidFlow":{training:[16,5,1,""]},"zunis.models.flows.coupling_cells":{general_coupling:[18,0,0,"-"],piecewise_coupling:[19,0,0,"-"],real_nvp:[21,0,0,"-"],transforms:[22,0,0,"-"]},"zunis.models.flows.coupling_cells.general_coupling":{GeneralCouplingCell:[18,1,1,""],InvertibleCouplingCell:[18,1,1,""],not_list:[18,3,1,""]},"zunis.models.flows.coupling_cells.general_coupling.GeneralCouplingCell":{flow:[18,2,1,""],training:[18,5,1,""],transform_and_compute_jacobian:[18,2,1,""]},"zunis.models.flows.coupling_cells.general_coupling.InvertibleCouplingCell":{invert:[18,2,1,""],runs_forward:[18,2,1,""],training:[18,5,1,""]},"zunis.models.flows.coupling_cells.piecewise_coupling":{piecewise_linear:[20,0,0,"-"]},"zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear":{ElementWisePWLinearTransform:[20,1,1,""],GeneralPWLinearCoupling:[20,1,1,""],PWLinearCoupling:[20,1,1,""],piecewise_linear_inverse_transform:[20,3,1,""],piecewise_linear_transform:[20,3,1,""]},"zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear.ElementWisePWLinearTransform":{backward:[20,2,1,""],forward:[20,2,1,""]},"zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear.GeneralPWLinearCoupling":{training:[20,5,1,""]},"zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear.PWLinearCoupling":{training:[20,5,1,""]},"zunis.models.flows.coupling_cells.real_nvp":{ElementWiseAffineTransform:[21,1,1,""],FakeRealNVP:[21,1,1,""],FakeT:[21,1,1,""],GeneralRealNVP:[21,1,1,""],RealNVP:[21,1,1,""],element_wise_affine:[21,3,1,""],inverse_element_wise_affine:[21,3,1,""]},"zunis.models.flows.coupling_cells.real_nvp.ElementWiseAffineTransform":{backward:[21,2,1,""],forward:[21,2,1,""]},"zunis.models.flows.coupling_cells.real_nvp.FakeRealNVP":{training:[21,5,1,""]},"zunis.models.flows.coupling_cells.real_nvp.FakeT":{forward:[21,2,1,""],training:[21,5,1,""]},"zunis.models.flows.coupling_cells.real_nvp.GeneralRealNVP":{training:[21,5,1,""]},"zunis.models.flows.coupling_cells.real_nvp.RealNVP":{training:[21,5,1,""]},"zunis.models.flows.coupling_cells.transforms":{InvertibleTransform:[22,1,1,""]},"zunis.models.flows.coupling_cells.transforms.InvertibleTransform":{backward:[22,2,1,""],forward:[22,2,1,""],inverse:[22,5,1,""],invert:[22,2,1,""]},"zunis.models.flows.general_flow":{GeneralFlow:[23,1,1,""]},"zunis.models.flows.general_flow.GeneralFlow":{flow:[23,2,1,""],forward:[23,2,1,""],training:[23,5,1,""],transform_and_compute_jacobian:[23,2,1,""]},"zunis.models.flows.masking":{n_ary_mask:[24,3,1,""],n_ary_mask_strategy:[24,3,1,""]},"zunis.models.flows.sampling":{FactorizedFlowSampler:[25,1,1,""],FactorizedGaussianSampler:[25,1,1,""],UniformSampler:[25,1,1,""]},"zunis.models.flows.sampling.FactorizedFlowSampler":{forward:[25,2,1,""],log_prob:[25,2,1,""],training:[25,5,1,""]},"zunis.models.flows.sampling.FactorizedGaussianSampler":{training:[25,5,1,""]},"zunis.models.flows.sampling.UniformSampler":{training:[25,5,1,""]},"zunis.models.flows.sequential":{invertible_sequential:[27,0,0,"-"],repeated_cell:[28,0,0,"-"]},"zunis.models.flows.sequential.invertible_sequential":{InvertibleSequentialFlow:[27,1,1,""]},"zunis.models.flows.sequential.invertible_sequential.InvertibleSequentialFlow":{flow:[27,2,1,""],invert:[27,2,1,""],training:[27,5,1,""],transform_and_compute_jacobian:[27,2,1,""]},"zunis.models.flows.sequential.repeated_cell":{MaskListRepeatedCellFlow:[28,1,1,""],RepeatedCellFlow:[28,1,1,""]},"zunis.models.flows.sequential.repeated_cell.MaskListRepeatedCellFlow":{training:[28,5,1,""]},"zunis.models.flows.sequential.repeated_cell.RepeatedCellFlow":{cells:[28,5,1,""],masking:[28,5,1,""],training:[28,5,1,""]},"zunis.models.generators":{create_checkerboard_hypercube_realnvp:[29,3,1,""],create_hypercube_flow:[29,3,1,""],create_n_ary_hypercube_flow:[29,3,1,""],create_n_ary_hypercube_realnvp:[29,3,1,""]},"zunis.models.layers":{activations:[31,0,0,"-"],trainable:[32,0,0,"-"]},"zunis.models.layers.activations":{BiLU:[31,1,1,""],NormBiTanh:[31,1,1,""]},"zunis.models.layers.activations.BiLU":{forward:[31,2,1,""],training:[31,5,1,""]},"zunis.models.layers.activations.NormBiTanh":{forward:[31,2,1,""],training:[31,5,1,""]},"zunis.models.layers.trainable":{ArbitraryShapeRectangularDNN:[32,1,1,""],OverallAffineLayer:[32,1,1,""],create_rectangular_dnn:[32,3,1,""]},"zunis.models.layers.trainable.ArbitraryShapeRectangularDNN":{forward:[32,2,1,""],training:[32,5,1,""]},"zunis.models.layers.trainable.OverallAffineLayer":{forward:[32,2,1,""],training:[32,5,1,""]},"zunis.models.utils":{Reshift:[33,1,1,""]},"zunis.models.utils.Reshift":{forward:[33,2,1,""],training:[33,5,1,""]},"zunis.training":{training_logger:[34,4,1,""],weighted_dataset:[35,0,0,"-"]},"zunis.training.weighted_dataset":{dkl_training:[36,0,0,"-"],generators:[37,0,0,"-"],stateful_trainer:[38,0,0,"-"],training_record:[39,0,0,"-"],variance_training:[40,0,0,"-"],weighted_dataset_trainer:[41,0,0,"-"]},"zunis.training.weighted_dataset.dkl_training":{BasicDKLTrainer:[36,1,1,""],BasicStatefulDKLTrainer:[36,1,1,""],weighted_dkl_loss:[36,3,1,""]},"zunis.training.weighted_dataset.generators":{create_dkl_trainer:[37,3,1,""]},"zunis.training.weighted_dataset.stateful_trainer":{StatefulTrainer:[38,1,1,""]},"zunis.training.weighted_dataset.stateful_trainer.StatefulTrainer":{default_flow_priors:[38,5,1,""],flow_priors:[38,5,1,""],loss_map:[38,5,1,""]},"zunis.training.weighted_dataset.training_record":{DictWrapper:[39,1,1,""],TrainingRecord:[39,1,1,""]},"zunis.training.weighted_dataset.training_record.DictWrapper":{keys:[39,2,1,""],values:[39,2,1,""]},"zunis.training.weighted_dataset.training_record.TrainingRecord":{epoch:[39,2,1,""],log_loss:[39,2,1,""],log_metric:[39,2,1,""],loss:[39,2,1,""],losses:[39,2,1,""],metrics:[39,2,1,""],new_epoch:[39,2,1,""],next_step:[39,2,1,""],step:[39,2,1,""]},"zunis.training.weighted_dataset.variance_training":{BasicStatefulVarTrainer:[40,1,1,""],BasicVarTrainer:[40,1,1,""],weighted_variance_loss:[40,3,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer":{BasicStatefulTrainer:[41,1,1,""],BasicTrainer:[41,1,1,""],GenericTrainerAPI:[41,1,1,""],InvalidLossError:[41,6,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer.BasicStatefulTrainer":{get_config:[41,2,1,""],process_loss:[41,2,1,""],set_config:[41,2,1,""],train_on_batch:[41,2,1,""],train_on_target_batches_from_posterior:[41,2,1,""],train_step_on_target_batch:[41,2,1,""],train_step_on_target_minibatch:[41,2,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer.BasicTrainer":{compute_loss_no_grad:[41,2,1,""],generate_target_batch_from_posterior:[41,2,1,""],handle_invalid_loss:[41,2,1,""],process_loss:[41,2,1,""],sample_forward:[41,2,1,""],set_verbosity:[41,2,1,""],train_on_target_batch:[41,2,1,""],train_on_target_batches_from_posterior:[41,2,1,""],train_step_on_target_batch:[41,2,1,""],train_step_on_target_minibatch:[41,2,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer.GenericTrainerAPI":{get_config:[41,2,1,""],reset:[41,2,1,""],sample_forward:[41,2,1,""],set_config:[41,2,1,""],train_on_batch:[41,2,1,""]},"zunis.utils":{function_wrapper:[43,0,0,"-"],logger:[44,0,0,"-"]},"zunis.utils.function_wrapper":{wrap_compact_arguments_function:[43,3,1,""],wrap_hypercube_arguments_function:[43,3,1,""],wrap_numpy_compact_batch_function:[43,3,1,""],wrap_numpy_hypercube_batch_function:[43,3,1,""]},"zunis.utils.logger":{set_verbosity:[44,3,1,""]},zunis:{integration:[2,0,0,"-"],logger:[1,4,1,""],logger_integration:[1,4,1,""],logger_training:[1,4,1,""],models:[8,0,0,"-"],setup_std_stream_logger:[1,3,1,""],training:[34,0,0,"-"],utils:[42,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:data","5":"py:attribute","6":"py:exception"},terms:{"0001":37,"100000":4,"256":[21,29],"\u0142og":36,"\u03b7":36,"\u03bb":36,"\u03c6":36,"abstract":[3,7,11,12,14,18,20,22,23,27,41,48,50],"boolean":[3,18,21],"case":[35,36],"class":[3,5,6,7,11,12,14,15,16,18,20,21,22,23,25,27,28,29,31,32,33,36,38,39,40,41],"default":[1,29,37,38,41,49],"final":[4,6,7],"float":[33,43],"function":[4,5,6,7,14,18,19,20,21,22,28,31,35,38,39,40,41,43,49,50],"g\u00f6tz":0,"import":[1,2,4,36,40,49],"int":[4,5,20,21,24,28,29,38],"new":41,"return":[4,18,20,21,22,24,29,41,43,49],"static":[6,20,41],"switch":[3,5],"true":[1,11,18,20,21,22,24],"try":53,"while":[20,48],"z\u00fcni":[50,52,53],"z\u00fcrich":48,For:[0,14],One:36,The:[2,3,5,6,7,14,15,20,21,25,28,33,40,41,48,49,50,52],With:15,abc:[7,22,23,39,41],abl:48,about:39,abov:21,abus:20,access:[7,39],accord:[36,40],activ:[15,20,21,30,32,33,53],actual:[20,38,48,50],adam:38,adapt:[3,5],adaptive_survey_integr:[2,5],adaptivesurveyintegr:[3,5],admit:18,affin:[20,21,32],after:[21,28],agnost:[48,52],all:[1,2,17,20,24,29,34,41],allow:[48,50],alpha:[31,32,39],alreadi:25,also:20,alter:39,alwai:[15,25,48,52],analyt:10,analytic_flow:[9,28],analyticflow:[11,12],analyticinversesigmoid:12,analyticsigmoid:12,ani:[4,15,25,48],api:[2,4,7,28,38,41,43,49,52],appli:[18,20,21,39],applic:[14,16,53],approach:48,appropri:25,approxim:5,arbitrari:[39,49],arbitraryshaperectangulardnn:[20,32],architectur:28,arg:[3,5,6,7,11,12,14,15,16,18,20,21,22,23,27,28,36,38,39,40,41],argument:[4,7,18,20,21,22,38,41,43],ari:[24,29],around:48,art:48,artifici:48,attain:48,attribut:22,autograd:14,autom:[41,48,50],backprop_flow:14,backprop_jacobian_flow:9,backward:[11,18,20,21,22],base:[3,4,5,6,7,11,12,14,15,16,17,18,20,21,22,23,25,27,28,29,31,32,33,36,38,39,40,41,48,50],basic:[6,7,21,40,41,48],basicdkltrain:36,basicstatefuldkltrain:36,basicstatefultrain:[4,36,38,40,41],basicstatefulvartrain:40,basictrain:[36,40,41],basicvartrain:40,batch:[5,11,18,20,21,22,23,25,27,38,41,43,48,49,52],batch_siz:41,been:29,befor:[6,7,20,21,28,39,41],behavior:[14,29],below:[48,50],benchmark:53,benchmark_hyperspher:53,better:[3,5],better_abc:[7,22,23,41],between:[1,3,5,20,36,48,52],biject:[15,20,21,31,48,50],bilu:31,bin:[20,53],black:[35,48,52],boilerpl:28,bool:[4,11,12,14,15,16,18,20,21,22,23,24,25,27,28,31,32,33],both:[11,12,14,15,16,21,23,25,27,31,32,36,48,50],boundari:43,box:[29,35,37,48,52],build:[29,37],call:[22,41],callabl:[20,22,28,48,52],can:[15,19,25,35,36,38,40,48,50,52,53],cannot:[25,48],carlo:[48,50],cell:[17,18,19,20,21,22,24,28,29,38],cell_opt:29,cell_param:28,central:[48,52],chang:[17,18,20],check:[3,5,11,16,18],checkerboard:[28,29,37],checkpoint:[39,41],child:20,choic:[28,38],classnam:20,clone:53,collect:39,com:53,come:28,compact:43,compar:48,compat:43,comput:[4,11,12,14,16,18,20,21,22,23,25,27,40,48,52],compute_jacobian:[18,20,21,22],compute_loss_no_grad:41,condit:20,config:[39,41],configur:41,conserv:41,consist:38,constant:[19,20,21,36],constraint:20,constructor:[20,21,22,38],contain:20,continu:20,contribut:53,control:[48,50],conveni:25,coordin:[20,21],correct:[7,25],correl:4,correspond:[35,41],coupl:[17,18,19,20,21,22,24,28,29,38],coupling_cel:[9,28],cours:20,cpu:[4,37],creat:[4,6,24,29,37,53],create_checkerboard_hypercube_realnvp:29,create_dkl_train:37,create_hypercube_flow:29,create_n_ary_hypercube_flow:29,create_n_ary_hypercube_realnvp:29,create_rectangular_dnn:32,creation:[48,50],cuda:[49,53],current:41,d_hidden:[20,21,29,32],d_in:32,d_kl:5,d_out:32,data:[25,33,38],datapoint:36,dataset:[35,36,38,40,41],debug:[1,21],decid:[18,21],def:49,default_flow_prior:38,default_integr:2,defin:[14,15,19,21,38,48],definit:[7,15,22,41],deform:28,delta:[31,32],dens:20,depend:[17,22,53],depth:21,deriv:17,det:[14,16],determin:20,deutschmann:0,develop:[0,48],deviat:48,devic:[4,25,37,38,48,49,52],dict:[4,7,28,38],dictionari:[4,38,39],dictwrapp:39,differ:[28,41],differenti:[14,48,52],dimens:[20,21,23,25,29,43],dimension:[4,20,24,25,28,29,38,48,49,52],direct:20,directli:53,distanc:5,distribut:[3,5,6,25,35,36,38,41,48],dkl:[5,36,37,38,40],dkl_train:35,dkladaptivesurveyintegr:5,dkltrainer_integr:2,dnn:[20,32],document:53,doe:[3,35],doing:[5,40],domain:5,don:[20,25],done:[3,7],draw:[25,36,40],drawn:35,due:4,dure:[3,4,6,38],dx_j:14,dy_i:14,each:[15,17,20,21,24,25,28,29,41,43],easi:5,easiest:53,easili:[16,25],egg:53,either:36,element:[16,18,20,21,31,41,43,48,52],element_wis:[10,28],element_wise_affin:21,elementwiseaffinetransform:21,elementwisepwlineartransform:20,els:20,empti:6,empty_histori:6,enabl:53,encapsul:[20,21,22],enforc:[41,48,52],ensur:20,entri:[14,24],epoch:[38,39,41],error:[4,7,41],essenti:[15,16],estim:[3,4,7,36,40,48],etc:[41,48,50,52],eth:[0,48],eval:23,evalu:[3,41,43],evenli:20,everi:24,exactli:18,exampl:[41,48,53],except:41,exist:48,exp:21,expect:[16,25,36,40,48,52],experi:53,experiment:35,explicit:41,explicitli:[5,25,43],expos:2,extend:53,eye:[15,16],facil:41,factor:[21,25,43],factori:4,factorizedflowsampl:[25,38],factorizedgaussiansampl:[25,38],fake:21,fakerealnvp:21,faket:21,fals:[1,4,11,18,20,24,32],fashion:20,faster:48,feed:20,finalize_integr:[6,7],finalize_refin:[6,7],finalize_refine_arg:7,finalize_survei:[6,7],finalize_survey_arg:7,find:48,fine:[48,50],first:[22,25],fix:[20,41],flat:[3,4,5,15],flat_survey_integr:[2,3],flatsurveysamplingintegr:[3,6],flexibl:48,flip:22,flow:[4,5,7,8,29,35,36,37,38,40,48,50],flow_opt:[4,38],flow_prior:38,follow:[15,49,53],forc:1,format:[7,41],format_argu:7,forward:[11,18,20,21,22,23,25,31,32,33],frac:48,from:[3,5,6,15,18,20,21,25,28,35,40,41,48,49,50,53],full:[4,29,41],fulli:53,function_wrapp:42,functool:28,further:40,game:48,gaussian:[25,38],gener:[4,7,8,14,18,20,23,24,25,28,35,41],general_backprop_j_flow:[13,15,16],general_coupl:[17,20,21,28],general_flow:[9,11,14,18,27,38],generalbackpropjacobianflow:[14,15,16],generalcouplingcel:18,generalflow:[11,14,18,23,27,38],generalpwlinearcoupl:20,generalrealnvp:21,generate_target_batch_from_posterior:41,generictrainerapi:[7,41],get:41,get_config:41,git:53,github:53,given:[6,20,24,29,32,48],glorot:15,goal:[41,48,52],going:21,gradient:41,grain:[48,50],group:17,guarante:15,handl:41,handle_invalid_loss:41,has:[17,20],hat:48,have:[10,15,29,35,36,40,41,48,53],height:[19,20],here:[3,41,48,52],hidden:[20,21],hidden_activ:[20,21,32],high:[4,25,29,38,48,50],higher:28,highest:[48,50],highli:53,histori:[6,41,49],hold:39,how:[29,53],howev:[7,36],http:53,hypercub:[5,20,29,43,48,49,50,52],ignor:4,implement:[14,20,21,23,25,41],impor:48,impos:20,inde:[48,52],indep:17,independ:[20,21,36,40,41],index:53,indic:[5,18,21,41],info:1,initi:[6,7,11,12,14,15,16,21,23,25,27,31,32],initialize_refin:[6,7],initialize_survei:[6,7],input:[3,14,19,20,21,23,25,28,31,32,33,48,49,52],input_activ:[20,21,32],input_cel:28,input_cell_param:28,input_flow:28,instal:48,instanc:28,instanti:[4,18,21,29],instead:5,institut:0,int_:48,integr:[1,19,40,41,43,48,49,50,52],integral_var:[3,6,7],integrand:[3,36],integration_logg:2,integratorapi:[2,6],intellig:48,intend:41,interact:[7,41],interfac:4,intern:[11,12,14,15,16,21,23,25,27,31,32],interv:43,intial:[6,7],invalid:41,invalidlosserror:41,invers:[11,14,18,20,21,22,23,25],inverse_element_wise_affin:21,inverse_sigmoid:12,invert:[11,18,20,21,22,27,35,36,40],invertible_sequenti:[26,28],invertibleanalyticflow:[11,12],invertibleanalyticsigmoid:[12,28],invertiblecouplingcel:[18,20,21,28],invertiblesequentialflow:[27,28,29],invertibletransform:[20,21,22],iter:[4,24,41],its:[7,11,12,14,18,20,21,22,23,25,27,48,52],itself:[20,48,50],jacobian:[10,11,12,14,16,18,20,21,22,23,25,27,43],job:3,just:[14,20,21,22],kei:[38,39],keyword:7,know:[20,35],known:[35,36,40],kwarg:[3,5,6,7,11,12,14,15,16,18,20,21,22,23,27,28,36,38,39,40,41],languag:20,last:[14,21,23],latent:[3,28,35,38],layer:[8,15,16,20,21,25],lead:41,learn:[5,36,40,48],learnabl:32,least:41,left:48,less:15,level:[1,4,7,28,29,38,41,44,48,50],librari:[1,48,49,50,52,53],life:53,like:[15,16,39,48,53],likelihood:[35,36],limit:48,linear:[15,20,31],linearflow:16,list:[18,20,21,24,28,43],live:[20,35],log:[5,14,18,21,23,25,36,41],log_j:[18,21],log_loss:39,log_metr:39,log_prob:25,logarithm:14,logger:[1,2,34,42],logger_integr:1,logger_train:1,logqx:[36,40],look:48,loop:24,loss:[3,4,5,36,38,39,40,41,48,50],loss_map:38,low:[25,41],lower:43,machin:48,made:7,main:[2,38,41],mani:29,map:[15,21,38],mask:[9,18,20,21,28,29],mask_typ:[29,37],masking_opt:28,masklistrepeatedcellflow:28,mathbb:48,matric:15,matrix:16,matur:53,maxim:[15,35,36],mean:[20,48],meant:28,mechan:[48,50],metadata:39,method:[3,4,11,12,23,25,27,48],metric:39,min_level:1,minibatch:41,minibatch_s:41,minim:[36,40,48],minimum:1,mode:[11,14,18,23,41],model:[1,3,4,5,7,35,36,37,38,40,41,48,50],model_param:37,model_typ:[29,37],modul:[1,2,8,9,10,13,17,19,26,30,35,42],monoton:20,mont:[48,50],more:28,most:[6,23,49],move:25,multi:48,multipl:16,must:[7,20,48,52],mutablemap:39,n_ary_mask:24,n_ary_mask_strategi:[24,28],n_batch:[25,41],n_bin:20,n_epoch:[37,38,41],n_epochs_per_batch:41,n_hidden:[20,21,29,32],n_inter_refin:4,n_iter:4,n_iter_refin:4,n_iter_survei:4,n_point:[3,4,6,41],n_points_refin:4,n_points_survei:4,n_refine_step:7,n_survey_step:7,naiv:14,name:48,natur:[36,38],ndeutschmann:53,nearli:[15,25],need:[48,52],neg:5,negat:18,net:21,network:[15,19,20,21,30,48,50],neural:[1,2,15,19,20,21,30,48,50],nevertheless:53,new_epoch:39,next:24,next_step:39,nicola:0,nikla:0,nnflow:13,non:[5,21,48],none:[1,3,4,6,15,16,18,20,21,22,25,28,32,37,38,39,41],normal:[4,5,15,16,19,20,21,28,29,31,36,40,41,48,50],normbitanh:31,not_list:18,note:[1,20,25,35,36,41],now:48,nth:24,number:[4,7,20,24,38,41,43,48],numpi:43,nvp:21,obj:44,object:[4,6,22,25,39,41,48,52],observ:48,offset:[24,29,33],omega:48,onc:41,one:[24,29,35,41,48,50,53],onli:36,onto:48,oper:[1,2,6,7,34],optim:[36,38,40,41,48,50],optim_class:37,optimum:36,option:[4,7,20,28,29,38,41],order:[28,48],organ:15,other:[4,21,35],otherwis:[18,21,38],our:[5,35,36,40,48],out:[29,37],out_shap:32,output:[1,19,20,21,23,28,31,32,48,52],output_activ:[20,21,32],output_cel:28,output_cell_param:28,output_flow:28,over:[20,25,41,48,49,52],overal:[1,2,32,34],overallaffinelay:32,overrid:[1,4,41],overriden:[11,12,23,27],packag:53,page:48,pair:[20,43],param:[1,29,37],paramet:[4,18,20,21,22,24,25,28,29,31,33,36,38,41],parent:[1,2,34],partial:28,particular:[48,52],pass:[4,7,18,21,23,29,38],pdf:[5,14,20,23,25,36,38,41],per:[4,25,38,41],perform:[3,6,7,41],period:[24,29],phase:[3,5,6,7],physic:0,piec:20,piecewis:[19,20],piecewise_coupl:[17,28],piecewise_linear:[19,28],piecewise_linear_inverse_transform:20,piecewise_linear_transform:20,plug:25,point:[3,4,6,7,11,14,18,20,22,23,25,27,36,38,40,41,48,50],posit:[19,21,24,36,40,48,52],possibl:[7,24,29,48,52],posteriorsurveysamplingintegr:6,predict:[20,21],preserv:[21,43],previou:24,primit:19,prior:[25,38],prior_1d:25,prior_opt:38,probabl:[15,25,48],problem:[36,40,48],process:[3,6,7],process_loss:41,process_refine_step:[6,7],process_survey_step:[3,6,7],prod:21,product:21,progress:48,proper:43,properli:19,properti:39,proto:40,provid:[4,25,29,35,43,48,50,52],proxi:[36,40],pure:[16,23],pwlinear:[4,28,38],pwlinearcoupl:[20,28],pypi:53,python3:53,python:[48,52,53],pytorch:[4,14,20,25,41,43,48,53],q_tild:20,quantiti:48,rais:41,random:36,randomli:15,rank:15,rational:41,real:[21,40,53],real_nvp:[17,28],realiz:[7,15,16],realnvp:[21,28,29,37,38],reason:15,recommend:[4,53],record:39,rectangular:[20,32],refer:53,refin:[3,4,5,6,7],refine_step:7,refine_step_arg:7,reinitin:41,releas:53,relev:4,reload:41,relu:32,remind:[23,36,40],repeat:[28,29],repeated_cel:[4,26,38],repeatedcellflow:[4,28,38],repetit:[24,29],repositori:53,reproduc:36,requir:[25,53],reset:41,reshap:32,reshift:33,resnet:[15,16],respect:24,respond:25,result:[3,6,7,25,49],right:[7,25,48],root:1,run:[4,11,18,38,39,41,48,52,53],runs_forward:[11,18],same:[18,21,36],sampl:[1,2,3,4,5,6,7,9,23,35,36,38,40,41,50],sample_forward:41,sample_refin:[6,7],sample_survei:[3,6,7],sampling_arg:7,save:41,scalar:33,scale:[21,33],scriptmodul:[11,12,14,15,16,21,23,25,27,31,32],second:22,seem:48,self:[16,22],sens:5,separ:3,sequenc:[28,43],sequenti:[4,9,29,38],set:[1,4,18,21,35,41],set_config:41,set_verbos:[7,41,44],setup:[4,53],setup_std_stream_logg:1,sever:41,shape:[11,12,20,21,23,27,32,43,48,49,52],share:[11,12,14,15,16,21,23,25,27,31,32],shift:33,should:[7,11,12,18,20,21,23,27,41,48],sig:25,sigma:48,sigmoid:16,sigmoidflow:16,sign:31,sim:48,simpl:[16,17,19,48],simple_backprop_flow:13,simulaten:[11,12,23,27],sinc:5,singl:[28,41,43],size:[20,41,49],slope:20,softmax:20,solv:48,some:[3,20,21,23,25,41,48],someth:[41,48],soon:5,sort:7,sourc:[1,2,3,4,5,6,7,11,12,14,15,16,18,20,21,22,23,24,25,27,28,29,31,32,33,34,36,37,38,39,40,41,43,44,53],space:[3,4,5,6,20,21,24,28,35,38,41,48],span:20,specif:[7,20,21,41,48,52],specifi:[25,41],spend:3,split:1,sqrt:48,stack:25,stage:4,stand:19,standard:48,state:[4,11,12,14,15,16,21,23,25,27,31,32,38,40,41,48],stateful_train:[4,35],statefultrain:[4,38],std:[15,16],stderr:1,stdout:1,steer:[48,50],step:[3,6,7,19,29,39,41],str:[4,38],strategi:[24,28,48,50],string:38,strongli:53,structur:7,sub:19,subclass:4,subdirectori:53,sublcass:38,submodul:[1,34],subsequ:29,subset:21,suffici:20,suit:28,suitabl:7,sum:20,survei:[3,4,5,6,7],survey_step:7,survey_step_arg:7,survey_strategi:4,survey_switch_condit:[3,5],surveyrefineintegratorapi:[6,7],system:53,take:[6,18,19,21,23,43,49],taken:[15,41],tanh:31,target:[3,5,6,28,35,36,41],target_posterior:41,target_spac:41,temporari:[48,52],tensor:[18,20,21,22,48,49,52],tensorflow:25,term:[5,48,52],test:[3,5,16,21],than:[3,5,15],thei:[48,50,52],them:25,theoret:0,therefor:[20,41,48,52,53],thi:[0,1,4,5,7,11,12,14,19,20,21,22,23,27,28,35,36,38,41,48,49,53],thread:[48,52],three:[18,21,48,50],through:[7,18,21,24,29,48,50],throughout:19,time:[3,29,48],tool:[29,37,48,52],torch:[20,21,22,23,25,31,32,33,38,48,49,52],track:41,train:[1,3,4,5,7,11,12,14,15,16,18,20,21,23,25,27,28,31,32,33,48,50],train_on_batch:41,train_on_target_batch:41,train_on_target_batches_from_posterior:41,train_step_on_target_batch:41,train_step_on_target_minibatch:41,trainabl:[5,20,21,30,31,33,48,50],trainer:[4,5,6,37,38,40,41,48,50],trainer_config_arg:7,trainer_opt:4,trainer_verbos:4,training_arg:7,training_logg:34,training_record:[3,6,35],trainingrecord:39,tranform:21,transform:[10,11,12,14,15,16,17,18,19,20,21,23,27,28,31,32,33],transform_and_compute_jacobian:[11,12,14,18,23,27],transvers:20,treat:[48,52],tupl:[18,20,21,22,38],two:[3,17],txt:53,type:[4,20,22,24,28,29,37],typic:[28,35],uncertainti:[48,49],uncontrol:4,under:[35,36],underset:48,uniform:[3,5,25,38],uniformli:3,uniformsampl:[25,38],unit:[5,20,29,31,43,48,49,50,52],univers:14,unknown:35,unorm:20,unset:41,until:[5,29],untrain:33,upgrad:53,upper:43,usag:49,use:[3,4,21,22,25,36,38,48,50],use_batch_norm:[20,21,32],use_survei:[4,6],used:[4,5,20,28,29,38],useful:16,using:[2,3,14,20,24,36,38,40,41,48,49],util:[1,8],valid:41,valu:[3,38,39,40,41,43,48,52],valueerror:41,variabl:[17,18,20,21,23,38],varianc:[4,36,38,40],variance_train:35,vega:48,venv:53,verbos:4,virtual:53,volum:21,wai:[7,20],wait:48,want:[35,36,40,48],warn:[1,2,34],weight:[15,16,36,38,40,41,43],weight_init_identity_:[15,16],weighted_dataset:[4,34],weighted_dataset_train:[4,35,36,38,40],weighted_dkl_loss:[36,38],weighted_variance_loss:[38,40],when:[20,35,36],where:[20,21,22,35,36,40,43],whether:[3,4,18,20,21,22],which:[4,7,18,20,21,22,35,36,38,40,41,48,52,53],whole:[6,7,41],whose:19,width:21,wise:[16,18,20,21,31],without:[20,21,31],word:35,work:[0,18,48],would:53,wrap_compact_arguments_funct:43,wrap_hypercube_arguments_funct:43,wrap_numpy_compact_batch_funct:43,wrap_numpy_hypercube_batch_funct:43,wrapper:43,wrong:41,wrt:17,x_1:43,x_2:43,x_i:43,x_m:[18,21],x_n:43,y_m:[18,21],y_n:[18,21],yet:[20,53],yield:28,you:[48,53],your:53,zero:48,zuni:[49,53],zunis_lib:53,zunis_venv:53,zurich:0},titles:["About","zunis package","zunis.integration package","zunis.integration.adaptive_survey_integrator module","zunis.integration.default_integrator module","zunis.integration.dkltrainer_integrator module","zunis.integration.flat_survey_integrator module","zunis.integration.integratorAPI module","zunis.models package","zunis.models.flows package","zunis.models.flows.analytic_flows package","zunis.models.flows.analytic_flows.analytic_flow module","zunis.models.flows.analytic_flows.element_wise module","zunis.models.flows.backprop_jacobian_flows package","zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow module","zunis.models.flows.backprop_jacobian_flows.nnflows module","zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows module","zunis.models.flows.coupling_cells package","zunis.models.flows.coupling_cells.general_coupling module","zunis.models.flows.coupling_cells.piecewise_coupling package","zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear module","zunis.models.flows.coupling_cells.real_nvp module","zunis.models.flows.coupling_cells.transforms module","zunis.models.flows.general_flow module","zunis.models.flows.masking module","zunis.models.flows.sampling module","zunis.models.flows.sequential package","zunis.models.flows.sequential.invertible_sequential module","zunis.models.flows.sequential.repeated_cell module","zunis.models.generators module","zunis.models.layers package","zunis.models.layers.activations module","zunis.models.layers.trainable module","zunis.models.utils module","zunis.training package","zunis.training.weighted_dataset package","zunis.training.weighted_dataset.dkl_training module","zunis.training.weighted_dataset.generators module","zunis.training.weighted_dataset.stateful_trainer module","zunis.training.weighted_dataset.training_record module","zunis.training.weighted_dataset.variance_training module","zunis.training.weighted_dataset.weighted_dataset_trainer module","zunis.utils package","zunis.utils.function_wrapper module","zunis.utils.logger module","Neural Importance Sampling","Training Strategies","Index","Z\u00fcNIS documentation","Basic example","Concepts","Normalizing flows","Integrand functions","Installation","Integrators","Trainers","Module Index","References"],titleterms:{"function":[48,52],"import":[45,48],"z\u00fcni":48,Using:53,about:0,academ:57,activ:31,adaptive_survey_integr:3,analytic_flow:[10,11,12],api:48,author:0,backprop_jacobian_flow:[13,14,15,16],basic:49,concept:50,coupling_cel:[17,18,19,20,21,22],default_integr:4,depend:57,develop:53,dkl_train:36,dkltrainer_integr:5,document:48,element_wis:12,environ:53,exampl:49,flat_survey_integr:6,flow:[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,51],function_wrapp:43,gener:[29,37],general_backprop_j_flow:14,general_coupl:18,general_flow:23,get:48,gpu:53,index:[47,56],instal:53,integr:[2,3,4,5,6,7,54],integrand:52,integratorapi:7,invertible_sequenti:27,layer:[30,31,32],logger:44,mask:24,model:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],modul:[3,4,5,6,7,11,12,14,15,16,18,20,21,22,23,24,25,27,28,29,31,32,33,36,37,38,39,40,41,43,44,56],neural:45,nnflow:15,normal:51,overview:48,packag:[1,2,8,9,10,13,17,19,26,30,34,35,42],paper:57,piecewise_coupl:[19,20],piecewise_linear:20,pip:53,real_nvp:21,refer:57,relat:57,repeated_cel:28,sampl:[25,45,48],sequenti:[26,27,28],set:53,simple_backprop_flow:16,softwar:57,start:48,stateful_train:38,strategi:46,submodul:[2,8,9,10,13,17,19,26,30,35,42],subpackag:[1,8,9,17,34],support:53,train:[34,35,36,37,38,39,40,41,46],trainabl:32,trainer:55,training_record:39,transform:22,util:[33,42,43,44],variance_train:40,weighted_dataset:[35,36,37,38,39,40,41],weighted_dataset_train:41,work:57,zuni:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]}})