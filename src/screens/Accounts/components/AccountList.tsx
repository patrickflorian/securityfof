import React from 'react';
import { ScrollView } from 'react-native';
import AccounListItem from './AccountListItem';


const AccountList =(props)=>{
    const accounts =[
        {
            id:1,
            type :'Orange Money',
            libelle :'Compte Principal',
            solde : 500,
        },
        {
            id:2,
            type :'Orange Money',
            libelle :'Compte Epargne',
            solde : 500,
        },
        {
            id:3,
            type :'Orange Money',
            libelle :'Compte Epargne',
            solde : 500,
        },
        {
            id:4,
            type :'Orange Money',
            libelle :'Compte Epargne',
            solde : 500,
        },
        {
            id:5,
            type :'Orange Money',
            libelle :'Compte Epargne',
            solde : 500,
        },
        {
            id:6,
            type :'Orange Money',
            libelle :'Compte Epargne',
            solde : 500,
        },
        {
            id:7,
            type :'Orange Money',
            libelle :'Compte Epargne',
            solde : 500,
        },
    ]

    return <ScrollView style={{flex:1, alignSelf: "stretch", marginTop:10}}>
        {
            accounts.map(
                (account,index)=>{
                    return <AccounListItem  key ={index} account={account} />
                }
            )
        }
    </ScrollView>
}

export default AccountList;