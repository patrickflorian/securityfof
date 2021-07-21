import React, { Component, useState } from 'react';
import { FormikHelpers } from 'formik';
import { reduxForm, SubmissionError } from 'redux-form';
import { StepProps } from './Step';
import { View, ScrollView, Dimensions, StatusBar } from 'react-native';
import { DOCUMENT_FORM } from '@constants/formNames';
import { Button, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import SubmitButton from '@components/widgets/FormBuilder/SubmitButton';

/**
 * @interface StepContainerProps
 * @description Proprietes pour le Formulaire
 * @param initialValues c'est un objet con tenant les differentes values initiales a chaque etape
 * @param Wrapper defini le composant qui sera utilisé pour afficher le contenu d'un step
 * @param currentStep = 0 defini a quelle etape on se trouve : elle debute a 0
 * @param setStep cette fontion doit etre utilisée pour modifier l'etape courante
 * @param onSubmit  cette fonction est executée une fois que les differentes etapes on été validée
 */
export interface StepContainerProps {
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
    step: number;
    //height: number;
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
    height = 0;
    constructor(props: StepContainerProps) {
        super(props);
        this.state = {
            completed: false,
            switchState: false,
            loading: props.loading,
            step: props.currentStep | 0,
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
    onSubmit(values: any, helpers: any) {
        const { currentStep = 0, onSubmit, setStep } = this.props;
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
        const STATUS_BAR = StatusBar.currentHeight || 24; 
        const WHeight = Dimensions.get("screen").height;
        const styles = StyleSheet.create({
            container: {
                flex:1,
                justifyContent: 'flex-end',
                alignContent: 'center',
                alignItems: 'flex-end',
                alignSelf: 'stretch',
                //position: 'absolute',
            },
            navigationButtonContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',/* 
                marginTop: 10,*/
                marginBottom: 5, 
                alignSelf: 'flex-end',
                height: 50,
                alignContent: 'flex-end'
            },
            contentContainer:{
                height: WHeight-45-STATUS_BAR*4,
                width:"100%",
                alignSelf:'stretch',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems:'center',
            },
            scrollOnTop: {
                width:"100%",
            }

        })
        const { children, Wrapper, onSubmit, setStep, ...rest } = this.props;
        const { step } = this.state;
        const currentChild = this.childrenArray[step];
        return (
            <View style={styles.container} >

                <View  style={styles.contentContainer}>
                    <ScrollView style={styles.scrollOnTop}>
                        {this.childrenArray.map((child: any, index: number) =>
                                <View key={index} style={{display:(step === index)?"flex":"none", width:'100%', height:'100%'}}>{child}</View>)}
                    </ScrollView>
                </View>
            
                <View style={styles.navigationButtonContainer}>
                    { <Button icon='arrow-left' disabled={this.isFirstStep()} onPress={() => this.previousStep()} >Prev</Button>}
                    {!this.isLastStep()
                    ? 
                    <Button icon='arrow-right'contentStyle={{ flexDirection: 'row-reverse', alignSelf:'flex-end' }} disabled={this.isLastStep()} onPress={() => this.nextStep()}>Next</Button>
                    :<SubmitButton type='primary' filled={false} contentStyle={{ flexDirection: 'row-reverse' }} disabled={this.isLastStep()} onPress={() => this.nextStep()}>Save</SubmitButton>
                    }
                </View>
            </View>
        );
    }

}
;

const StepFormContainer = reduxForm({ form: DOCUMENT_FORM, })(FormComponent)
export default StepFormContainer;