import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import { View } from "react-native";
import { Card, Text, Button, Paragraph, Title, Avatar, IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const LeftContent = (props: any) => {
    const theme = useTheme();
        return <Avatar.Text size={40} label="DI" style={{ backgroundColor: theme.colors.border }} />
    }
    const DirectorMessageCard = (props: any) => {
    const [complete, setComplete] = useState(false);
    const theme = useTheme();
    const message = "Très chers collègues, comme vous le savez, la sécurité est une valeur très cher pour notre entreprise SIMTECH-3D, lors de l’exécution des différents chantiers auquel vous serez assignés, vous allez être exposé à de nombreux risque qui s’il n’est pas identifié et traité pourrais avoir des impacts négatifs sur le fonctionnement de notre entreprise, ce que nous ne souhaitons pas. A cet effet nous vous exhortons à toujours effectuer, formaliser et transmettre avant chaque intervention les documents sécurité chantiers et suivre régulièrement les formations disponibles sur cette application. Sachant compter sur votre rigueur et dévouement pour l’atteinte des objectifs sécurités fixés, nous vous exhortons à toujours mettre la sécurité aux centres de nos activés.";

    const [user, setUser] = React.useState();
    React.useEffect(() => {
        AsyncStorage.getItem('user').then(value => {
          if (value) {
            setUser(JSON.parse(value));
          }
        });
      })

    const switchState = () => {
        setComplete(!complete);
    };

    return (<Card theme={theme} style={{ marginBottom: 15, marginHorizontal: 5 }}>
        <Card.Title title="Le directeur" left={LeftContent}
            right={props => user?.is_admin && <IconButton {...props} icon="comment-edit-outline" />} />
        <Card.Content>
            <Title>Message du DG</Title>
            <Paragraph>{complete ? message : (message.substring(0, 180) + " ...")}</Paragraph>
        </Card.Content>
        <Card.Actions >
            <Button icon="read" labelStyle={{ textTransform: 'none' }} onPress={switchState} >{complete ? "Voir moins" : "Lire entierement"}</Button>
        </Card.Actions>
    </Card>);
}

export default DirectorMessageCard;