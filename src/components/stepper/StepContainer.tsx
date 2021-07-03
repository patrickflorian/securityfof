import React, {Component, useState} from 'react';
import {Form, Formik, FormikConfig, FormikHelpers, FormikValues} from 'formik';
import {StepProps} from './Step';
import classNames from 'classnames';
import set = Reflect.set;

/**
 * @interface StepContainerProps
 * @description Proprietes pour le Formulaire
 * @param initialValues c'est un objet con tenant les differentes values initiales a chaque etape
 * @param Wrapper defini le composant qui sera utilisé pour afficher le contenu d'un step
 * @param currentStep = 0 defini a quelle etape on se trouve : elle debute a 0
 * @param setStep cette fontion doit etre utilisée pour modifier l'etape courante
 * @param onSubmit  cette fonction est executée une fois que les differentes etapes on été validée
 */
export interface StepContainerProps extends Pick<FormikConfig<FormikValues>, "onSubmit" | "children" | "onReset" | "initialValues"> {
    Wrapper?: React.ElementType;
    currentStep: number;
    setStep: any;
    onSubmit: (values: any, helpers: FormikHelpers<any>) => Promise<any>;
    name: string;
    loading?: boolean;
}

export interface StepContainerState {
    completed: boolean;
    switchState: boolean;
    loading: boolean;
    //step: number
    //childrenArray: React.ReactElement<| StepProps>[];
}

/**
 * @class FormStepContainer.
 * @classdesc Composant principal permettant de creer un formulaire par etape .
 *
 * @link       http://github.com/patrickflorian
 * @author     NOUMBISSI MALANOU Patrick Florian <noumbissipatrick@gmail.com>
 */
export class FormStepContainer extends Component<StepContainerProps, StepContainerState> {

    childrenArray: React.ReactElement<| StepProps>[];

    constructor(props: StepContainerProps) {
        super(props);
        this.state = {
            completed: false,
            switchState: false,
            loading: props.loading,
            //step: props.currentStep|0,
        };
        this.childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<| StepProps>[];
        this.isLastStep = this.isLastStep.bind(this);
        this.isFirstStep = this.isFirstStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    isLastStep() {
        return this.props.currentStep === this.childrenArray.length - 1;
    }

    isFirstStep() {
        return this.props.currentStep === 0;
    }

    previousStep(e: any) {
        //this.setState((state) => { return { ...state, step: state.step - 1 } });
        this.props.setStep(this.props.currentStep - 1)
    }

    componentDidUpdate(prevProps: Readonly<StepContainerProps>, prevState: Readonly<StepContainerState>, snapshot?: any): void {
       if(prevProps.loading!==this.props.loading) this.setState((state)=>{
            return {
                ...state,
                loading: this.props.loading
            }
        })
    }

    render() {

        const {children, currentStep = 0, Wrapper, onSubmit, onReset, setStep, ...rest} = this.props;
        //const { step } = this.state;

        const currentChild = this.childrenArray[currentStep];
        return (
            <Formik
                {...rest}
                validationSchema={currentChild.props.validationSchema && currentChild.props.validationSchema}
                onSubmit={(values, helpers) => {
                    if (this.isLastStep()) {
                        this.setState((state) => {
                            return {...state, loading: true}
                        });
                        currentChild.props.onNextStep ? currentChild.props.onNextStep(values, helpers)
                            : onSubmit(values, helpers).then(value => {
                                this.setState({...this.state, completed: true, loading: false});
                            }).catch(e => {
                                this.setState({...this.state, loading: false});
                            });
                    } else {
                        currentChild.props.onNextStep ? currentChild.props.onNextStep(values, helpers) : setStep(currentStep + 1);
                    }
                    helpers.setSubmitting(false);
                }}
            >
                {(props) => {
                    return (
                        <div className={classNames(["divLoader", this.state.loading && 'loading'])}>
                            <Form autoComplete="off" onSubmit={(e) => props.handleSubmit(e)}
                                  onReset={(e) => props.handleReset(e)}
                                  className="step-form">

                                {Wrapper ? <Wrapper>{this.childrenArray[currentStep]}</Wrapper>
                                    : <div className='step-form-content'>
                                        <div className="divModalLoader"/>
                                        {this.childrenArray.map((child, index) =>
                                            (currentStep === index) &&<div key={index}
                                                 className={classNames(['form-slide ', (currentStep !== index) && 'form-slide-hide', (currentStep === index) && 'form-slide-show',])}>{child}</div>)}
                                    </div>}
                                <div className="row submit-block ml-2">
                                    <div className=" col-xs-12">
                                        <div className="">
                                            {currentStep == 0 ? <a
                                                className="btn btn-outline-warning rounded-pill mb-3" href="#">
                                                Retourner à la page d'accueil
                                            </a> : <a
                                                className="btn btn-outline-warning rounded-pill mb-3" href="#"
                                                onClick={this.previousStep}>
                                                Precedent
                                            </a>}
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-xs-12">
                                        <div className="">
                                            <div className="form-group">
                                                <input
                                                    type='submit'
                                                    className="btn btn-primary rounded-pill "
                                                    itemProp="url"
                                                    value={this.isLastStep() ? 'Terminer' : 'Poursuivre'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        );
    }

}
