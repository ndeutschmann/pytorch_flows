Search.setIndex({docnames:["api/zunis","api/zunis.integration","api/zunis.integration.adaptive_survey_integrator","api/zunis.integration.default_integrator","api/zunis.integration.dkltrainer_integrator","api/zunis.integration.flat_survey_integrator","api/zunis.integration.integratorAPI","api/zunis.models","api/zunis.models.flows","api/zunis.models.flows.analytic_flows","api/zunis.models.flows.analytic_flows.analytic_flow","api/zunis.models.flows.analytic_flows.element_wise","api/zunis.models.flows.backprop_jacobian_flows","api/zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow","api/zunis.models.flows.backprop_jacobian_flows.nnflows","api/zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows","api/zunis.models.flows.coupling_cells","api/zunis.models.flows.coupling_cells.general_coupling","api/zunis.models.flows.coupling_cells.piecewise_coupling","api/zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear","api/zunis.models.flows.coupling_cells.real_nvp","api/zunis.models.flows.coupling_cells.transforms","api/zunis.models.flows.general_flow","api/zunis.models.flows.masking","api/zunis.models.flows.sampling","api/zunis.models.flows.sequential","api/zunis.models.flows.sequential.invertible_sequential","api/zunis.models.flows.sequential.repeated_cell","api/zunis.models.generators","api/zunis.models.layers","api/zunis.models.layers.activations","api/zunis.models.layers.trainable","api/zunis.models.utils","api/zunis.training","api/zunis.training.weighted_dataset","api/zunis.training.weighted_dataset.dkl_training","api/zunis.training.weighted_dataset.generators","api/zunis.training.weighted_dataset.stateful_trainer","api/zunis.training.weighted_dataset.training_record","api/zunis.training.weighted_dataset.variance_training","api/zunis.training.weighted_dataset.weighted_dataset_trainer","api/zunis.utils","api/zunis.utils.function_wrapper","api/zunis.utils.logger","getting-started","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["api/zunis.rst","api/zunis.integration.rst","api/zunis.integration.adaptive_survey_integrator.rst","api/zunis.integration.default_integrator.rst","api/zunis.integration.dkltrainer_integrator.rst","api/zunis.integration.flat_survey_integrator.rst","api/zunis.integration.integratorAPI.rst","api/zunis.models.rst","api/zunis.models.flows.rst","api/zunis.models.flows.analytic_flows.rst","api/zunis.models.flows.analytic_flows.analytic_flow.rst","api/zunis.models.flows.analytic_flows.element_wise.rst","api/zunis.models.flows.backprop_jacobian_flows.rst","api/zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow.rst","api/zunis.models.flows.backprop_jacobian_flows.nnflows.rst","api/zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows.rst","api/zunis.models.flows.coupling_cells.rst","api/zunis.models.flows.coupling_cells.general_coupling.rst","api/zunis.models.flows.coupling_cells.piecewise_coupling.rst","api/zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear.rst","api/zunis.models.flows.coupling_cells.real_nvp.rst","api/zunis.models.flows.coupling_cells.transforms.rst","api/zunis.models.flows.general_flow.rst","api/zunis.models.flows.masking.rst","api/zunis.models.flows.sampling.rst","api/zunis.models.flows.sequential.rst","api/zunis.models.flows.sequential.invertible_sequential.rst","api/zunis.models.flows.sequential.repeated_cell.rst","api/zunis.models.generators.rst","api/zunis.models.layers.rst","api/zunis.models.layers.activations.rst","api/zunis.models.layers.trainable.rst","api/zunis.models.utils.rst","api/zunis.training.rst","api/zunis.training.weighted_dataset.rst","api/zunis.training.weighted_dataset.dkl_training.rst","api/zunis.training.weighted_dataset.generators.rst","api/zunis.training.weighted_dataset.stateful_trainer.rst","api/zunis.training.weighted_dataset.training_record.rst","api/zunis.training.weighted_dataset.variance_training.rst","api/zunis.training.weighted_dataset.weighted_dataset_trainer.rst","api/zunis.utils.rst","api/zunis.utils.function_wrapper.rst","api/zunis.utils.logger.rst","getting-started.rst","index.rst"],objects:{"":{zunis:[0,0,0,"-"]},"zunis.integration":{DefaultIntegrator:[1,1,1,""],adaptive_survey_integrator:[2,0,0,"-"],default_integrator:[3,0,0,"-"],dkltrainer_integrator:[4,0,0,"-"],flat_survey_integrator:[5,0,0,"-"],integratorAPI:[6,0,0,"-"]},"zunis.integration.DefaultIntegrator":{integrate:[1,2,1,""],reset_trainer:[1,2,1,""]},"zunis.integration.adaptive_survey_integrator":{AdaptiveSurveyIntegrator:[2,1,1,""]},"zunis.integration.adaptive_survey_integrator.AdaptiveSurveyIntegrator":{process_survey_step:[2,2,1,""],sample_survey:[2,2,1,""],survey_switch_condition:[2,2,1,""]},"zunis.integration.default_integrator":{Integrator:[3,3,1,""]},"zunis.integration.dkltrainer_integrator":{DKLAdaptiveSurveyIntegrator:[4,1,1,""]},"zunis.integration.dkltrainer_integrator.DKLAdaptiveSurveyIntegrator":{survey_switch_condition:[4,2,1,""]},"zunis.integration.flat_survey_integrator":{FlatSurveySamplingIntegrator:[5,1,1,""],PosteriorSurveySamplingIntegrator:[5,1,1,""]},"zunis.integration.flat_survey_integrator.PosteriorSurveySamplingIntegrator":{empty_history:[5,2,1,""],finalize_integration:[5,2,1,""],finalize_refine:[5,2,1,""],finalize_survey:[5,2,1,""],initialize:[5,2,1,""],initialize_refine:[5,2,1,""],initialize_survey:[5,2,1,""],process_refine_step:[5,2,1,""],process_survey_step:[5,2,1,""],sample_refine:[5,2,1,""],sample_survey:[5,2,1,""]},"zunis.integration.integratorAPI":{SurveyRefineIntegratorAPI:[6,1,1,""]},"zunis.integration.integratorAPI.SurveyRefineIntegratorAPI":{finalize_integration:[6,2,1,""],finalize_refine:[6,2,1,""],finalize_survey:[6,2,1,""],format_arguments:[6,2,1,""],initialize:[6,2,1,""],initialize_refine:[6,2,1,""],initialize_survey:[6,2,1,""],integrate:[6,2,1,""],process_refine_step:[6,2,1,""],process_survey_step:[6,2,1,""],refine:[6,2,1,""],refine_step:[6,2,1,""],sample_refine:[6,2,1,""],sample_survey:[6,2,1,""],set_verbosity:[6,2,1,""],survey:[6,2,1,""],survey_step:[6,2,1,""]},"zunis.models":{flows:[8,0,0,"-"],generators:[28,0,0,"-"],layers:[29,0,0,"-"],utils:[32,0,0,"-"]},"zunis.models.flows":{analytic_flows:[9,0,0,"-"],backprop_jacobian_flows:[12,0,0,"-"],coupling_cells:[16,0,0,"-"],general_flow:[22,0,0,"-"],masking:[23,0,0,"-"],sampling:[24,0,0,"-"],sequential:[25,0,0,"-"]},"zunis.models.flows.analytic_flows":{analytic_flow:[10,0,0,"-"],element_wise:[11,0,0,"-"]},"zunis.models.flows.analytic_flows.analytic_flow":{AnalyticFlow:[10,1,1,""],InvertibleAnalyticFlow:[10,1,1,""]},"zunis.models.flows.analytic_flows.analytic_flow.AnalyticFlow":{flow:[10,2,1,""]},"zunis.models.flows.analytic_flows.analytic_flow.InvertibleAnalyticFlow":{flow:[10,2,1,""],invert:[10,2,1,""],runs_forward:[10,2,1,""],transform_and_compute_jacobian:[10,2,1,""]},"zunis.models.flows.analytic_flows.element_wise":{AnalyticInverseSigmoid:[11,1,1,""],AnalyticSigmoid:[11,1,1,""],InvertibleAnalyticSigmoid:[11,1,1,""],inverse_sigmoid:[11,3,1,""]},"zunis.models.flows.analytic_flows.element_wise.AnalyticInverseSigmoid":{transform_and_compute_jacobian:[11,2,1,""]},"zunis.models.flows.analytic_flows.element_wise.AnalyticSigmoid":{transform_and_compute_jacobian:[11,2,1,""]},"zunis.models.flows.backprop_jacobian_flows":{general_backprop_j_flow:[13,0,0,"-"],nnflows:[14,0,0,"-"],simple_backprop_flows:[15,0,0,"-"]},"zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow":{GeneralBackpropJacobianFlow:[13,1,1,""]},"zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow.GeneralBackpropJacobianFlow":{flow:[13,2,1,""],transform_and_compute_jacobian:[13,2,1,""]},"zunis.models.flows.backprop_jacobian_flows.nnflows":{NNFlow:[14,1,1,""]},"zunis.models.flows.backprop_jacobian_flows.nnflows.NNFlow":{weight_init_identity_:[14,2,1,""]},"zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows":{LinearFlow:[15,1,1,""],SigmoidFlow:[15,1,1,""]},"zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows.LinearFlow":{weight_init_identity_:[15,2,1,""]},"zunis.models.flows.coupling_cells":{general_coupling:[17,0,0,"-"],piecewise_coupling:[18,0,0,"-"],real_nvp:[20,0,0,"-"],transforms:[21,0,0,"-"]},"zunis.models.flows.coupling_cells.general_coupling":{GeneralCouplingCell:[17,1,1,""],InvertibleCouplingCell:[17,1,1,""],not_list:[17,3,1,""]},"zunis.models.flows.coupling_cells.general_coupling.GeneralCouplingCell":{flow:[17,2,1,""],transform_and_compute_jacobian:[17,2,1,""]},"zunis.models.flows.coupling_cells.general_coupling.InvertibleCouplingCell":{invert:[17,2,1,""],runs_forward:[17,2,1,""]},"zunis.models.flows.coupling_cells.piecewise_coupling":{piecewise_linear:[19,0,0,"-"]},"zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear":{ElementWisePWLinearTransform:[19,1,1,""],GeneralPWLinearCoupling:[19,1,1,""],PWLinearCoupling:[19,1,1,""],piecewise_linear_inverse_transform:[19,3,1,""],piecewise_linear_transform:[19,3,1,""]},"zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear.ElementWisePWLinearTransform":{backward:[19,2,1,""],forward:[19,2,1,""]},"zunis.models.flows.coupling_cells.real_nvp":{ElementWiseAffineTransform:[20,1,1,""],FakeRealNVP:[20,1,1,""],FakeT:[20,1,1,""],GeneralRealNVP:[20,1,1,""],RealNVP:[20,1,1,""],element_wise_affine:[20,3,1,""],inverse_element_wise_affine:[20,3,1,""]},"zunis.models.flows.coupling_cells.real_nvp.ElementWiseAffineTransform":{backward:[20,2,1,""],forward:[20,2,1,""]},"zunis.models.flows.coupling_cells.real_nvp.FakeT":{forward:[20,2,1,""]},"zunis.models.flows.coupling_cells.transforms":{InvertibleTransform:[21,1,1,""]},"zunis.models.flows.coupling_cells.transforms.InvertibleTransform":{backward:[21,2,1,""],forward:[21,2,1,""],inverse:[21,4,1,""],invert:[21,2,1,""]},"zunis.models.flows.general_flow":{GeneralFlow:[22,1,1,""]},"zunis.models.flows.general_flow.GeneralFlow":{flow:[22,2,1,""],forward:[22,2,1,""],transform_and_compute_jacobian:[22,2,1,""]},"zunis.models.flows.masking":{n_ary_mask:[23,3,1,""],n_ary_mask_strategy:[23,3,1,""]},"zunis.models.flows.sampling":{FactorizedFlowSampler:[24,1,1,""],FactorizedGaussianSampler:[24,1,1,""],UniformSampler:[24,1,1,""]},"zunis.models.flows.sampling.FactorizedFlowSampler":{forward:[24,2,1,""],log_prob:[24,2,1,""]},"zunis.models.flows.sequential":{invertible_sequential:[26,0,0,"-"],repeated_cell:[27,0,0,"-"]},"zunis.models.flows.sequential.invertible_sequential":{InvertibleSequentialFlow:[26,1,1,""]},"zunis.models.flows.sequential.invertible_sequential.InvertibleSequentialFlow":{flow:[26,2,1,""],invert:[26,2,1,""],transform_and_compute_jacobian:[26,2,1,""]},"zunis.models.flows.sequential.repeated_cell":{MaskListRepeatedCellFlow:[27,1,1,""],RepeatedCellFlow:[27,1,1,""]},"zunis.models.flows.sequential.repeated_cell.RepeatedCellFlow":{cells:[27,4,1,""],masking:[27,4,1,""]},"zunis.models.generators":{create_checkerboard_hypercube_realnvp:[28,3,1,""],create_hypercube_flow:[28,3,1,""],create_n_ary_hypercube_flow:[28,3,1,""],create_n_ary_hypercube_realnvp:[28,3,1,""]},"zunis.models.layers":{activations:[30,0,0,"-"],trainable:[31,0,0,"-"]},"zunis.models.layers.activations":{BiLU:[30,1,1,""],NormBiTanh:[30,1,1,""]},"zunis.models.layers.activations.BiLU":{forward:[30,2,1,""]},"zunis.models.layers.activations.NormBiTanh":{forward:[30,2,1,""]},"zunis.models.layers.trainable":{ArbitraryShapeRectangularDNN:[31,1,1,""],OverallAffineLayer:[31,1,1,""],create_rectangular_dnn:[31,3,1,""]},"zunis.models.layers.trainable.ArbitraryShapeRectangularDNN":{forward:[31,2,1,""]},"zunis.models.layers.trainable.OverallAffineLayer":{forward:[31,2,1,""]},"zunis.models.utils":{Reshift:[32,1,1,""]},"zunis.models.utils.Reshift":{forward:[32,2,1,""]},"zunis.training":{weighted_dataset:[34,0,0,"-"]},"zunis.training.weighted_dataset":{dkl_training:[35,0,0,"-"],generators:[36,0,0,"-"],stateful_trainer:[37,0,0,"-"],training_record:[38,0,0,"-"],variance_training:[39,0,0,"-"],weighted_dataset_trainer:[40,0,0,"-"]},"zunis.training.weighted_dataset.dkl_training":{BasicDKLTrainer:[35,1,1,""],BasicStatefulDKLTrainer:[35,1,1,""],weighted_dkl_loss:[35,3,1,""]},"zunis.training.weighted_dataset.generators":{create_dkl_trainer:[36,3,1,""]},"zunis.training.weighted_dataset.stateful_trainer":{StatefulTrainer:[37,1,1,""]},"zunis.training.weighted_dataset.stateful_trainer.StatefulTrainer":{default_flow_priors:[37,4,1,""],flow_priors:[37,4,1,""],loss_map:[37,4,1,""]},"zunis.training.weighted_dataset.training_record":{DictWrapper:[38,1,1,""],TrainingRecord:[38,1,1,""]},"zunis.training.weighted_dataset.training_record.TrainingRecord":{epoch:[38,2,1,""],log_loss:[38,2,1,""],log_metric:[38,2,1,""],loss:[38,2,1,""],losses:[38,2,1,""],metrics:[38,2,1,""],new_epoch:[38,2,1,""],next_step:[38,2,1,""],step:[38,2,1,""]},"zunis.training.weighted_dataset.variance_training":{BasicStatefulVarTrainer:[39,1,1,""],BasicVarTrainer:[39,1,1,""],weighted_variance_loss:[39,3,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer":{BasicStatefulTrainer:[40,1,1,""],BasicTrainer:[40,1,1,""],GenericTrainerAPI:[40,1,1,""],InvalidLossError:[40,5,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer.BasicStatefulTrainer":{get_config:[40,2,1,""],process_loss:[40,2,1,""],set_config:[40,2,1,""],train_on_batch:[40,2,1,""],train_on_target_batches_from_posterior:[40,2,1,""],train_step_on_target_batch:[40,2,1,""],train_step_on_target_minibatch:[40,2,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer.BasicTrainer":{compute_loss_no_grad:[40,2,1,""],generate_target_batch_from_posterior:[40,2,1,""],handle_invalid_loss:[40,2,1,""],process_loss:[40,2,1,""],sample_forward:[40,2,1,""],set_verbosity:[40,2,1,""],train_on_target_batch:[40,2,1,""],train_on_target_batches_from_posterior:[40,2,1,""],train_step_on_target_batch:[40,2,1,""],train_step_on_target_minibatch:[40,2,1,""]},"zunis.training.weighted_dataset.weighted_dataset_trainer.GenericTrainerAPI":{get_config:[40,2,1,""],reset:[40,2,1,""],sample_forward:[40,2,1,""],set_config:[40,2,1,""],train_on_batch:[40,2,1,""]},"zunis.utils":{function_wrapper:[42,0,0,"-"],logger:[43,0,0,"-"]},"zunis.utils.function_wrapper":{wrap_compact_arguments_function:[42,3,1,""],wrap_hypercube_arguments_function:[42,3,1,""],wrap_numpy_compact_batch_function:[42,3,1,""],wrap_numpy_hypercube_batch_function:[42,3,1,""]},"zunis.utils.logger":{set_verbosity:[43,3,1,""]},zunis:{integration:[1,0,0,"-"],models:[7,0,0,"-"],setup_std_stream_logger:[0,3,1,""],training:[33,0,0,"-"],utils:[41,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"\u0142og":35,"\u03b7":35,"\u03bb":35,"\u03c6":35,"abstract":[2,6,10,11,13,17,19,21,22,26,40],"boolean":[2,17,20],"case":[34,35],"class":[1,2,4,5,6,10,11,13,14,15,17,19,20,21,22,24,26,27,28,30,31,32,35,37,38,39,40,44],"default":[0,1,28,36,37,40,44],"final":[3,5,6],"float":[32,42],"function":[1,3,4,5,6,13,17,18,19,20,21,27,30,31,32,34,37,38,39,40,42,44,45],"import":[1,3,35,39,44,45],"int":[3,4,19,20,23,27,28,37],"new":40,"return":[3,17,19,20,21,23,28,40,42,44],"static":[1,5,19,40],"switch":[2,4],"true":[0,10,17,19,20,21,23],"while":[19,20,31,32],For:13,One:35,The:[1,2,4,5,6,13,14,19,20,24,27,32,39,40,44,45],With:14,abc:[6,21,22,38,40],about:38,abov:20,abus:19,accept:1,access:[6,38],accord:[35,39],activ:[14,19,20,29,31,32],activation_layer_class:14,actual:[19,37],adam:37,adapt:[2,4],adaptive_survey_integr:[1,4],adaptivesurveyintegr:[2,4],admit:17,affin:[19,20,31],after:[20,27],afterward:[20,31,32],all:[16,19,20,23,28,31,32,40],alpha:[30,31,38],alreadi:24,also:19,alter:38,although:[20,31,32],alwai:[14,24],analyt:9,analytic_flow:[8,27],analyticflow:[10,11],analyticinversesigmoid:11,analyticsigmoid:11,ani:[3,14,24],api:[3,6,27,37,40,42],appli:[17,19,20,38],applic:[13,15],appropri:24,approxim:4,arbitrari:[38,44],arbitraryshaperectangulardnn:[19,31],architectur:27,arg:[6,38],argument:[3,6,17,19,20,21,37,40,42],ari:[23,28],attribut:21,autograd:13,autom:40,backprop_flow:13,backprop_jacobian_flow:8,backward:[10,17,19,20,21],base:[1,2,3,4,5,6,10,11,13,14,15,16,17,19,20,21,22,24,26,27,28,30,31,32,35,37,38,39,40,45],basic:[1,5,6,20,39,40,44],basicdkltrain:35,basicstatefuldkltrain:35,basicstatefultrain:[3,35,37,39,40],basicstatefulvartrain:39,basictrain:[35,39,40],basicvartrain:39,batch:[1,4,10,17,19,20,21,22,24,26,37,40,42,44],batch_norm:14,batch_siz:40,been:28,befor:[5,6,19,20,27,38,40],behavior:[13,28],better:[2,4],better_abc:[6,21,22,40],between:[0,2,4,19,35],biject:[14,19,20,30],bilu:30,bin:19,black:[34,45],boilerpl:27,bool:[3,17,19,20,21,23,27],both:[10,11,13,14,15,20,22,24,26,30,31,35],boundari:42,box:[1,28,34,36,45],build:[28,36],call:[20,21,31,32,40],callabl:[19,21,27],can:[14,18,24,34,35,37,39],cannot:24,care:[20,31,32],carlo:45,cell:[16,17,18,19,20,21,23,27,28,37],cell_opt:28,cell_param:27,chang:[16,17,19,45],channel:45,check:[2,4,10,15,17],checkerboard:[1,27,28,36],checkpoint:[38,40],child:19,choic:[27,37],classic:45,classnam:19,collect:38,come:27,compact:42,compat:42,complic:45,comput:[1,3,10,11,13,15,17,19,20,21,22,24,26,31,32,39],compute_jacobian:[17,19,20,21],compute_loss_no_grad:40,condit:19,config:[38,40],configur:40,conserv:40,consist:37,constant:[18,19,20,35],constraint:19,constructor:[19,20,21,37],contain:19,continu:19,conveni:24,coordin:[19,20],correct:[6,24],correl:3,correspond:[34,40],coupl:[16,17,18,19,20,21,23,27,28,37],coupling_cel:[8,27],cours:19,cpu:[1,2,3,4,5,36,37],creat:[1,3,5,23,28,36],create_checkerboard_hypercube_realnvp:28,create_dkl_train:36,create_hypercube_flow:28,create_n_ary_hypercube_flow:28,create_n_ary_hypercube_realnvp:28,create_rectangular_dnn:31,cuda:44,current:40,d_hidden:[19,20,28,31],d_in:31,d_kl:4,d_out:31,data:[24,32,37],datapoint:35,dataset:[34,35,37,39,40],debug:[0,20],decid:[17,20],def:44,default_flow_prior:37,default_integr:1,defaultintegr:[1,44],defin:[13,14,18,20,31,32,37],definit:[6,14,21,40],deform:27,delta:[30,31],dens:19,depend:[16,21],depth:20,deriv:16,det:[13,15],determin:19,devic:[1,2,3,4,5,24,36,37,44],dict:[3,6,27,37],dictionari:[3,37,38],dictwrapp:38,differ:[27,40],differenti:13,dimens:[19,20,22,24,28,42],dimension:[1,3,19,23,24,27,28,37,44,45],direct:19,distanc:4,distribut:[2,4,5,24,34,35,37,40],dkl:[1,4,35,36,37,39],dkl_train:34,dkladaptivesurveyintegr:4,dkltrainer_integr:1,dnn:[19,31],doe:[2,34],doing:[4,39],domain:4,don:[19,24],done:[2,6],draw:[24,35,39],drawn:34,due:[3,45],dure:[2,3,5,37],dx_j:13,dy_i:13,each:[14,16,19,20,23,24,27,28,40,42],easi:4,easili:[15,24],either:35,element:[15,17,19,20,30,40,42],element_wis:[9,27],element_wise_affin:20,elementwiseaffinetransform:20,elementwisepwlineartransform:19,els:19,empti:5,empty_histori:5,encapsul:[19,20,21],enforc:40,ensur:19,entri:[13,23],epoch:[37,38,40],error:[3,6,40],essenti:[14,15],estim:[2,3,6,35,39],etc:40,eval:22,evalu:[2,40,42,45],evenli:19,everi:[20,23,31,32],exactli:17,exampl:40,except:40,exp:20,expect:[15,24,35,39],experiment:34,explicit:40,explicitli:[4,24,42],eye:[14,15],facil:40,factor:[20,24,42],factori:3,factorizedflowsampl:[24,37],factorizedgaussiansampl:[24,37],fake:20,fakerealnvp:20,faket:20,fals:[0,1,2,3,4,5,10,14,17,19,20,23,31],fashion:19,feed:19,finalize_integr:[5,6],finalize_refin:[5,6],finalize_refine_arg:6,finalize_survei:[5,6],finalize_survey_arg:6,first:[21,24],fix:[19,40],flat:[2,3,4,14],flat_survey_integr:[1,2],flatsurveysamplingintegr:[1,2,5],flexibl:45,flip:21,flow:[0,1,3,4,6,7,28,34,35,36,37,39,40,45],flow_opt:[3,37],flow_prior:37,follow:[14,44],forc:0,format:[6,40],format_argu:6,former:[20,31,32],forward:[10,17,19,20,21,22,24,30,31,32],from:[2,4,5,14,17,19,20,24,27,34,39,40,44],full:[3,28,40],function_wrapp:41,functool:27,further:39,gaussian:[24,37],gener:[3,6,7,13,17,19,22,23,24,27,34,40],general_backprop_j_flow:[12,14,15],general_coupl:[16,19,20,27],general_flow:[8,10,13,17,26,37],generalbackpropjacobianflow:[13,14,15],generalcouplingcel:17,generalflow:[10,13,17,22,26,37],generalpwlinearcoupl:19,generalrealnvp:20,generate_target_batch_from_posterior:40,generictrainerapi:[6,40],get:[40,45],get_config:40,given:[5,19,23,28,31],glorot:14,goal:[40,45],going:20,gradient:40,group:16,guarante:14,handl:40,handle_invalid_loss:40,has:[16,19],have:[9,14,28,34,35,39,40],height:[18,19],here:[2,40],hidden:[19,20],hidden_activ:[19,20,31],high:[3,24,28,37],higher:27,histori:[5,40,44],hold:38,hook:[20,31,32],how:28,howev:[6,35],hypercub:[1,4,19,28,42,44],ignor:[3,20,31,32],implement:[13,19,20,22,24,40],impor:45,impos:19,indep:16,independ:[19,20,35,39,40],index:45,indic:[4,17,20,40],info:[0,6,40],initi:[5,6,10,11,13,14,15,20,22,24,26,30,31],initialize_refin:[5,6],initialize_survei:[5,6],input:[2,13,18,19,20,22,24,27,30,31,32,44],input_activ:[19,20,31],input_cel:27,input_cell_param:27,input_flow:27,instanc:[20,27,31,32],instanti:[3,17,20,28],instead:[4,20,31,32],integr:[0,18,39,40,42,44,45],integral_var:[2,5,6],integrand:[2,35,45],integratorapi:[1,5],intend:40,interact:[6,40],interfac:3,intern:[10,11,13,14,15,20,22,24,26,30,31],interv:42,intial:[5,6],invalid:40,invalidlosserror:40,invers:[10,13,17,19,20,21,22,24],inverse_element_wise_affin:20,inverse_sigmoid:11,invert:[10,17,19,20,21,26,34,35,39],invertible_sequenti:[25,27],invertibleanalyticflow:[10,11],invertibleanalyticsigmoid:[11,27],invertiblecouplingcel:[17,19,20,27],invertiblesequentialflow:[26,27,28],invertibletransform:[19,20,21],iter:[3,23,40],its:[6,10,11,13,17,19,20,21,22,24,26,45],itself:19,jacobian:[9,10,11,13,15,17,19,20,21,22,24,26,42],job:2,just:[13,19,20,21],kei:[37,38],keyword:6,know:[19,34],known:[34,35,39],kwarg:[1,2,4,5,6,35,37,38,39,40],languag:19,last:[13,20,22],latent:[2,27,34,37],latent_prior:[35,39,40],latter:[20,31,32],layer:[7,14,15,19,20,24],lead:40,leakyrelu:[19,20],learn:[4,35,39],learnabl:31,least:40,less:14,level:[0,3,6,27,28,37,40,43],librari:[0,44,45],like:[14,15,38],likelihood:[34,35],linear:[14,19,30],linearflow:15,list:[17,19,20,23,27,42],live:[19,34],log:[4,13,17,20,22,24,35,40],log_j:[17,20],log_loss:38,log_metr:38,log_prob:24,logarithm:13,logger:[0,41],logqx:[35,39],loop:23,loss:[2,3,4,35,37,38,39,40],loss_map:37,low:[24,40],lower:42,made:6,main:[37,40],mani:28,map:[14,20,37],mask:[8,17,19,20,27,28],mask_typ:[1,28,36],masking_opt:27,masklistrepeatedcellflow:27,matric:14,matrix:15,max_reload:40,maxim:[14,34,35],mean:19,meant:27,metadata:38,method:[2,3,10,11,22,24,26,45],metric:38,min_level:0,minibatch:40,minibatch_s:[1,40],minim:[35,39],minimum:0,mode:[10,13,17,22,40],model:[0,1,2,3,4,6,34,35,36,37,39,40],model_param:[1,36],model_typ:[1,28,36],modul:[0,1,7,8,9,12,16,18,25,29,34,41,45],monoton:19,mont:45,more:27,most:[5,22,44],move:24,multi:45,multipl:15,must:[1,6,19],mutablemap:38,n_ary_mask:23,n_ary_mask_strategi:[23,27],n_batch:[24,40],n_bin:19,n_epoch:[1,36,37,40],n_epochs_per_batch:40,n_hidden:[19,20,28,31],n_inter_refin:3,n_iter:[1,2,3,4,5],n_iter_refin:[1,2,3,4,5],n_iter_survei:[1,2,3,4,5],n_point:[1,2,3,4,5,40],n_points_refin:[1,2,3,4,5],n_points_survei:[1,2,3,4,5],n_refine_step:[1,6],n_survey_step:[1,6],naiv:13,natur:[35,37],nearli:[14,24],need:[20,31,32],neg:4,negat:17,net:20,network:[14,18,19,20,29],neural:[1,14,18,19,20,29,45],new_epoch:38,next:23,next_step:38,nnflow:12,non:[4,20],none:[0,1,2,3,4,5,14,15,17,19,20,21,24,27,31,36,37,38,40],normal:[3,4,14,15,18,19,20,27,28,30,35,39,40],normalz:45,normbitanh:[14,30],not_list:17,note:[0,19,24,34,35,40],nth:23,number:[3,6,19,23,37,40,42],numpi:42,nvp:20,obj:43,object:[3,5,21,24,38,40],offset:[23,28,32],onc:40,one:[20,23,28,31,32,34,40],onli:35,oper:[5,6],optim:[35,37,39,40,45],optim_class:[1,36],optimum:35,option:[3,6,19,27,28,37,40],order:[27,45],organ:14,other:[3,20,34],otherwis:[17,20,37],our:[4,34,35,39],out:[1,28,36],out_shap:31,output:[0,1,18,19,20,22,27,30,31],output_activ:[19,20,31],output_cel:27,output_cell_param:27,output_flow:27,over:[19,24,40,44],overal:31,overallaffinelay:31,overrid:[0,3,40],overridden:[20,31,32],overriden:[10,11,22,26],packag:45,page:45,pair:[19,42],param:[0,1,28,36],paramet:[3,17,19,20,21,23,24,27,28,30,32,35,37,40],partial:27,pass:[3,6,17,20,22,28,31,32,37],pdf:[4,13,19,22,24,35,37,40],per:[3,24,37,40],perform:[2,5,6,20,31,32,40],period:[23,28],phase:[2,4,5,6],piec:19,piecewis:[18,19],piecewise_coupl:[16,27],piecewise_linear:[18,27],piecewise_linear_inverse_transform:19,piecewise_linear_transform:19,plug:24,point:[1,2,3,5,6,10,13,17,19,21,22,24,26,35,37,39,40],posit:[18,20,23,35,39],possibl:[6,23,28],posterior:5,posteriorsurveysamplingintegr:5,predict:[19,20],preserv:[20,42],prevent:45,previou:23,primit:18,prior:[24,37],prior_1d:24,prior_opt:37,probabl:[14,24],problem:[35,39],process:[2,5,6],process_loss:40,process_refine_step:[5,6],process_survey_step:[2,5,6],prod:20,product:20,progress:45,project:0,proper:42,properli:18,properti:38,proto:39,provid:[1,3,24,28,34,42,45],proxi:[35,39],pure:[15,22],pwlinear:[3,27,37],pwlinearcoupl:[19,27],pytorch:[0,3,13,19,24,40,42],q_tild:19,rais:40,random:35,randomli:14,rank:14,rational:40,real:[20,39],real_nvp:[16,27],realiz:[6,14,15],realnvp:[1,20,27,28,36,37],reason:14,recip:[20,31,32],recommend:3,record:38,rectangular:[19,31],refin:[2,3,4,5,6],refine_step:6,refine_step_arg:6,regist:[20,31,32],reinitin:40,relev:3,reload:40,relu:31,remind:[22,35,39],repeat:[27,28],repeated_cel:[3,25,37],repeatedcellflow:[3,27,37],repetit:[23,28],reproduc:35,requir:24,reset:40,reset_train:1,reshap:31,reshift:[19,32],resnet:[14,15],respect:23,respond:24,result:[2,5,6,24,44],right:[6,24],root:0,run:[3,10,17,20,31,32,37,38,40],runs_forward:[10,17],same:[17,20,35],sampl:[1,2,3,4,5,6,8,22,34,35,37,39,40,45],sample_forward:40,sample_refin:[5,6],sample_survei:[2,5,6],sampling_arg:6,save:40,scalar:32,scale:[20,32],scriptmodul:[10,11,13,14,15,20,22,24,26,30,31],search:45,second:21,self:[15,21],sens:4,separ:2,sequenc:[27,42],sequenti:[3,8,28,37],set:[0,3,17,20,34,40],set_config:40,set_verbos:[6,40,43],setup:3,setup_std_stream_logg:0,sever:40,shape:[1,10,11,19,20,22,26,31,42,44],share:[10,11,13,14,15,20,22,24,26,30,31],shift:32,should:[6,10,11,17,19,20,22,26,31,32,40],sig:24,sigmoid:15,sigmoidflow:15,sign:30,silent:[20,31,32],simpl:[15,16,18],simple_backprop_flow:12,simulaten:[10,11,22,26],sinc:[4,20,31,32],singl:[27,40,42],size:[19,40,44],slope:19,softmax:19,some:[2,19,20,22,24,40],someth:40,soon:4,sort:6,space:[2,3,4,5,19,20,23,27,34,37,40],span:19,specif:[6,19,20,40],specifi:[24,40],spend:2,split:0,stack:24,stage:3,stand:18,start:45,state:[3,10,11,13,14,15,20,22,24,26,30,31,37,39,40],stateful_train:[3,34],statefultrain:[3,37],std:[14,15],stderr:0,stdout:0,step:[2,5,6,18,28,38,40],str:[3,37],strategi:[23,27],string:37,structur:[6,45],sub:18,subclass:[3,20,31,32],sublcass:37,submodul:[0,33],subpackag:45,subsequ:28,subset:20,suffici:19,suit:27,suitabl:6,sum:19,survei:[2,3,4,5,6],survey_step:6,survey_step_arg:6,survey_strategi:3,survey_switch_condit:[2,4],surveyrefineintegratorapi:[5,6],take:[5,17,18,20,22,31,32,42,44],taken:[14,40],tanh:30,target:[2,4,5,27,34,35,40],target_posterior:40,target_spac:40,tensor:[1,17,19,20,21,44],tensorflow:24,term:4,test:[2,4,15,20],than:[2,4,14],them:[20,24,31,32],therefor:[19,40],thi:[0,3,4,6,10,11,13,18,19,20,21,22,26,27,31,32,34,35,37,40,44,45],three:[17,20],through:[6,17,20,23,28],throughout:18,time:[2,28],tool:[28,36,45],torch:[1,19,20,21,22,24,30,31,32,37,44],track:40,train:[0,2,3,4,6,13,20,22],train_on_batch:40,train_on_target_batch:40,train_on_target_batches_from_posterior:40,train_step_on_target_batch:40,train_step_on_target_minibatch:40,trainabl:[4,19,20,29,30,32],trainer:[1,2,3,4,5,36,37,39,40],trainer_config_arg:6,trainer_opt:3,trainer_verbos:[1,2,3,4,5],training_arg:6,training_record:[2,5,34],trainingrecord:38,tranform:20,transform:[9,10,11,13,14,15,16,17,18,19,20,22,26,27,30,31,32],transform_and_compute_jacobian:[10,11,13,17,22,26],transvers:19,trick:45,tupl:[17,19,20,21,37],two:[2,16],type:[1,2,3,4,5,19,21,23,27,28,36,37],typic:[27,34,45],uncertainti:44,uncontrol:3,under:[34,35],uniform:[2,4,24,37],uniformli:2,uniformsampl:[24,37],unit:[1,4,19,28,30,42,44],univers:13,unknown:[34,45],unorm:19,unset:40,until:[4,28],untrain:32,upper:42,usag:[1,44],use:[2,3,20,21,24,35,37],use_batch_norm:[19,20,31],use_survei:[1,2,3,4,5],used:[3,4,19,27,28,37],useful:15,uses:45,using:[1,2,13,19,23,35,37,39,40,44],util:[0,7,19],valid:40,valu:[2,37,38,39,40,42],valueerror:40,variabl:[16,17,19,20,22,37,45],varianc:[3,35,37,39],variance_train:34,vega:45,verbos:[1,2,3,4,5,6,40],volum:20,wai:[6,19],want:[34,35,39],warn:0,weight:[14,15,35,37,39,40,42],weight_init_identity_:[14,15],weighted_dataset:[3,33],weighted_dataset_train:[3,34,35,37,39],weighted_dkl_loss:[35,37],weighted_variance_loss:[37,39],well:45,when:[19,34,35],where:[19,20,21,34,35,39,42],whether:[2,3,17,19,20,21],which:[3,6,17,19,20,21,34,35,37,39,40,45],whole:[5,6,40],whose:18,width:20,wise:[15,17,19,20,30],within:[20,31,32],without:[19,20,30],word:34,work:[17,45],wrap_compact_arguments_funct:42,wrap_hypercube_arguments_funct:42,wrap_numpy_compact_batch_funct:42,wrap_numpy_hypercube_batch_funct:42,wrapper:42,wrong:40,wrt:16,x_1:42,x_2:42,x_i:42,x_m:[17,20],x_n:42,y_m:[17,20],y_n:[17,20],yet:19,yield:27,zuni:[44,45]},titles:["zunis package","zunis.integration package","zunis.integration.adaptive_survey_integrator module","zunis.integration.default_integrator module","zunis.integration.dkltrainer_integrator module","zunis.integration.flat_survey_integrator module","zunis.integration.integratorAPI module","zunis.models package","zunis.models.flows package","zunis.models.flows.analytic_flows package","zunis.models.flows.analytic_flows.analytic_flow module","zunis.models.flows.analytic_flows.element_wise module","zunis.models.flows.backprop_jacobian_flows package","zunis.models.flows.backprop_jacobian_flows.general_backprop_j_flow module","zunis.models.flows.backprop_jacobian_flows.nnflows module","zunis.models.flows.backprop_jacobian_flows.simple_backprop_flows module","zunis.models.flows.coupling_cells package","zunis.models.flows.coupling_cells.general_coupling module","zunis.models.flows.coupling_cells.piecewise_coupling package","zunis.models.flows.coupling_cells.piecewise_coupling.piecewise_linear module","zunis.models.flows.coupling_cells.real_nvp module","zunis.models.flows.coupling_cells.transforms module","zunis.models.flows.general_flow module","zunis.models.flows.masking module","zunis.models.flows.sampling module","zunis.models.flows.sequential package","zunis.models.flows.sequential.invertible_sequential module","zunis.models.flows.sequential.repeated_cell module","zunis.models.generators module","zunis.models.layers package","zunis.models.layers.activations module","zunis.models.layers.trainable module","zunis.models.utils module","zunis.training package","zunis.training.weighted_dataset package","zunis.training.weighted_dataset.dkl_training module","zunis.training.weighted_dataset.generators module","zunis.training.weighted_dataset.stateful_trainer module","zunis.training.weighted_dataset.training_record module","zunis.training.weighted_dataset.variance_training module","zunis.training.weighted_dataset.weighted_dataset_trainer module","zunis.utils package","zunis.utils.function_wrapper module","zunis.utils.logger module","Getting started","Z\u00fcNIS documentation"],titleterms:{"z\u00fcni":45,activ:30,adaptive_survey_integr:2,analytic_flow:[9,10,11],backprop_jacobian_flow:[12,13,14,15],content:45,coupling_cel:[16,17,18,19,20,21],default_integr:3,dkl_train:35,dkltrainer_integr:4,document:45,element_wis:11,flat_survey_integr:5,flow:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],function_wrapp:42,gener:[28,36],general_backprop_j_flow:13,general_coupl:17,general_flow:22,get:44,indic:45,integr:[1,2,3,4,5,6],integratorapi:6,invertible_sequenti:26,layer:[29,30,31],logger:43,mask:23,model:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],modul:[2,3,4,5,6,10,11,13,14,15,17,19,20,21,22,23,24,26,27,28,30,31,32,35,36,37,38,39,40,42,43],nnflow:14,packag:[0,1,7,8,9,12,16,18,25,29,33,34,41],piecewise_coupl:[18,19],piecewise_linear:19,real_nvp:20,repeated_cel:27,sampl:24,sequenti:[25,26,27],simple_backprop_flow:15,start:44,stateful_train:37,submodul:[1,7,8,9,12,16,18,25,29,34,41],subpackag:[0,7,8,16,33],tabl:45,train:[33,34,35,36,37,38,39,40],trainabl:31,training_record:38,transform:21,util:[32,41,42,43],variance_train:39,weighted_dataset:[34,35,36,37,38,39,40],weighted_dataset_train:40,zuni:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]}})