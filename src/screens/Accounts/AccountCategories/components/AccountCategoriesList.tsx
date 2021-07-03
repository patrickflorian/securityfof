import React from 'react';
import { ScrollView } from 'react-native';
import AccountCategoriesListItem from './AccountCategoriesListItem';


const AccountCategoriesList =(props)=>{
    const account_categories =[
        {
            id:1,
            libelle :'Orange Money',
        },
        {
            id:2,
            libelle :'Mobile Money',
        },
        {
            id:3,
            libelle :'Visa',
        },
        
    ]

    return <ScrollView style={{flex:1, alignSelf: "stretch", marginTop:10}}>
        {
            account_categories.map(
                (categorie,index)=>{
                    return <AccountCategoriesListItem key={index} categorie={categorie} />
                }
            )
        }
    </ScrollView>
}

export default AccountCategoriesList;