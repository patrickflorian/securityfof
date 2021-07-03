import React from 'react';
import { FormikConfig, FormikValues, Field, FormikProps, FieldInputProps, FormikHelpers } from 'formik';

/**
 * @interface StepProps Proprietes pour les step 
 * @param validationSchema utiliser pour la validation des champs d'une etape avant de passer a la suivante , elle utilise les schemas de validation fournies par yup
 * @param Component defini le composant qui sera utilisé pour afficher le contenu d'un step  
 * @param form contient les fonctions permettant de soumettre les elelments de formulaire
 * @param name le nom qui sera utilisé pour les valeurs du form final
 * @param title le titre qui sera utilisé pour l'etape
 * @param onNextStep si cette fonction est definie alors elle sera utilisée pour gerer le passage a l'etape suivant 
 */
export interface StepProps extends Pick<FormikConfig<FormikValues>,/*  "onSubmit" | */ "children" | "onReset"> {
    validationSchema?: any;
    Component?: React.ElementType<StepComponentProps>;
    form?: any;
    name: string;
    title: string;
    onNextStep?: (values: any, helpers: FormikHelpers<FormikValues>) => any;
}

export interface StepComponentProps {
    form: FormikProps<FormikValues>;
    field: FieldInputProps<FormikValues>;
}

/**
 * @class FormStep.
 * @classdesc Composant principal permettant de creer un step .
 *
 * @link       http://github.com/patrickflorian
 * @author     NOUMBISSI MALANOU Patrick Florian <noumbissipatrick@gmail.com>
 */
export class FormStep extends React.Component<StepProps>{
    constructor(props: StepProps) {
        super(props);
    }

    render() {

        const DeFaultComponent = (props: any) => {
            return this.props.Component && <this.props.Component {...props} />
        }
        const { children, Component, ...rest } = this.props;
        return <Field component={this.props.Component && DeFaultComponent}{...rest} ></Field>;
    }
}