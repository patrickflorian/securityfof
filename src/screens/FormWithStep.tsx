import { FormStep } from "@components/stepper/Step";
import React, { useState } from "react";
import FormStepContainer from '../components/stepper/StepContainer';
import FormComponent from "./DocumentsForm";
import { Text } from 'react-native';

interface FormWithStepState {
    currentStep: number;
}

class FormWithStep extends React.Component<any, FormWithStepState>{

    constructor(props: any) {
        super(props);
        this.state = {
            currentStep: 0,
        }
    }


    render() {

        return (<FormStepContainer initialValues={{ date: new Date() }}>
            <FormStep name='date' title='date' Component={(props) => <FormComponent {...props} />} />
            <FormStep name='date' title='date' Component={(props) => <Text>Bonjour dechet</Text>} />
        </FormStepContainer>)
    }
}

export default FormWithStep;