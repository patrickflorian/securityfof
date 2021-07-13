import React, { Component, useState } from 'react';
import { Formik, FormikConfig, FormikHelpers, FormikValues, useFormik } from 'formik';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { StepProps } from './Step';
import { View, ScrollView } from 'react-native';
import { DOCUMENT_FORM } from '@constants/formNames';
import { Button, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

/**
 * @interface StepContainerProps
 * @description Proprietes pour le Formulaire
 * @param initialValues c'est un objet con tenant les differentes values initiales a chaque etape
 * @param Wrapper defini le composant qui sera utilisé pour afficher le contenu d'un step
 * @param currentStep = 0 defini a quelle etape on se trouve : elle debute a 0
 * @param setStep cette fontion doit etre utilisée pour modifier l'etape courante
 * @param onSubmit  cette fonction est executée une fois que les differentes etapes on été validée
 */
export interface StepContainerProps  {
    Wrapper?: React.ElementType;
    currentStep?: number;
    setStep?: any;
    onSubmit?: (values: any, helpers: FormikHelpers<any>) => Promise<any>;
    name?: string;
    loading?: boolean;
}

export interface StepContainerState {
    completed: boolean;
    switchState: boolean;
    loading?: boolean;
    step: number
    //childrenArray: React.ReactElement<| StepProps>[];
}

/**
 * @class FormStepContainer.
 * @classdesc Composant principal permettant de creer un formulaire par etape .
 *
 * @link       http://github.com/patrickflorian
 * @author     NOUMBISSI MALANOU Patrick Florian <noumbissipatrick@gmail.com>
 */
class FormComponent extends Component<StepContainerProps, StepContainerState> {

    childrenArray: React.ReactElement<| StepProps>[];

    constructor(props: StepContainerProps) {
        super(props);
        this.state = {
            completed: false,
            switchState: false,
            loading: props.loading,
            step: props.currentStep|0,
        };
        this.childrenArray = React.Children.toArray(this.props.children) as React.ReactElement<| StepProps>[];
        this.isLastStep = this.isLastStep.bind(this);
        this.isFirstStep = this.isFirstStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    isLastStep() {
        return this.state.step === this.childrenArray.length - 1;
    }

    isFirstStep() {
        return this.state.step === 0;
    }

    previousStep() {
        this.setState((state) => { return { ...state, step: state.step - 1 } });
        //this.props?.setStep(this.props.currentStep?this.props.currentStep - 1:0)
    }

    nextStep() {
        this.setState((state) => { return { ...state, step: state.step + 1 } });
        //this.props?.setStep(this.props.currentStep?this.props.currentStep - 1:0)
    }

    componentDidUpdate(prevProps: Readonly<StepContainerProps>, prevState: Readonly<StepContainerState>, snapshot?: any): void {
        if (prevProps.loading !== this.props.loading) this.setState((state) => {
            return {
                ...state,
                loading: this.props.loading
            }
        })
    }
    onSubmit(values: any, helpers: any){
        const { currentStep = 0, onSubmit, setStep} = this.props;
        //const { step } = this.state;
        const currentChild = this.childrenArray[currentStep];
        if (this.isLastStep()) {
            this.setState((state) => {
                return { ...state, loading: true }
            });
            currentChild.props.onNextStep ? currentChild.props.onNextStep(values, helpers)
                : onSubmit && onSubmit(values, helpers).then(value => {
                    this.setState({ ...this.state, completed: true, loading: false });
                }).catch(e => {
                    this.setState({ ...this.state, loading: false });
                });
        } else {
            currentChild.props.onNextStep ? currentChild.props.onNextStep(values, helpers) : setStep(currentStep + 1);
        }
        helpers.setSubmitting(false);
    }
    render() {

        const styles = StyleSheet.create({
            container: {
                justifyContent: 'center',
                alignContent:'center',
                alignItems: 'flex-start',
                flexDirection:'row',
                alignSelf:'stretch',
            },
            navigationButtonContainer: {
                //flex:1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                marginVertical: 10,
                alignSelf: 'stretch',
            },
            rightButton: {
                alignSelf: 'flex-end'
            },
            leftButton: {
                alignSelf: 'flex-start'
            },
        })
        const { children,Wrapper, onSubmit, setStep, ...rest } = this.props;
        const { step  } = this.state;
        const currentChild = this.childrenArray[step];
        return (
            <View>
                <ScrollView >
                    {this.childrenArray.map((child: any, index: number) =>
                        (step === index) && <View key={index}>{child}</View>)}
                </ScrollView>
                <View  style={styles.navigationButtonContainer}>
                        {/* !this.isFirstStep() && */ <Button icon='arrow-left' disabled={this.isFirstStep()} onPress={()=>this.previousStep()} >Prev</Button>}
                        {/* !this.isLastStep() &&  */<Button icon='arrow-right'contentStyle={{flexDirection: 'row-reverse'}} disabled={this.isLastStep()} onPress={()=>this.nextStep()}>Next</Button>}
                </View>
            </View>
        );
    }

}
;

const StepFormContainer = reduxForm({ form: DOCUMENT_FORM })(FormComponent)
export default StepFormContainer;