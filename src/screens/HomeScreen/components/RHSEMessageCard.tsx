import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import { Card, Text, Button, Paragraph, Title, Avatar, IconButton } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const LeftContent = (props: any) => {
    const theme = useTheme();
    return <Avatar.Text size={40} label="XD" style={{ backgroundColor: theme.colors.border }} />
}
const RHSEMessageCard = (props: any) => {
    const [complete, setComplete] = useState(false);
    const theme = useTheme();
    const message = "Chers collègues, notre slogan « Safety is not a Joke » traduit déjà à suffisance l’importance pour tout le monde se s’investir dans la sécurité. Lors de l’exécution de nos différents chantiers, vous êtes prié de toujours effectuer, formaliser et transmettre avant chaque intervention les documents sécurité à travers cette application qui les archivera et nous permettra d’actualiser notre tableau de bords KPI et mieux suivre les différents chantiers sur l’aspect. Pour résoudre le problème des absences aux formations organisées en interne, chaque agent a sur son profil des formations et répondra au quizz lié à chaque formation. Le but étant de se rassurer que la formation a été bien assimiler.  J’espère compter sur votre sens de responsabilités et de collaboration. ";

    const [user, setUser] = React.useState();

    let mounted = true;
    React.useEffect(() => {
        if (mounted) {
            AsyncStorage.getItem('user').then(value => {
                if (value) {
                    setUser(JSON.parse(value));
                }
            });
            mounted = false;
        }
        console.log("RHSE message");
        return () => { };
    }, []);
    const switchState = () => {
        setComplete(!complete);
    }

    return (<Card theme={theme} style={{ marginBottom: 15, marginHorizontal: 5 }}>
        <Card.Title title="Le RHSE" left={LeftContent} right={props => user?.is_manager && <IconButton {...props} icon="comment-edit-outline" />} />
        <Card.Content>
            <Title>Message du RHSE</Title>
            <Paragraph>
                {complete ? message : (message.substring(0, 180) + " ...")}
            </Paragraph>
        </Card.Content>
        <Card.Actions >
            <Button icon="read" labelStyle={{ textTransform: 'none' }} onPress={switchState} >{complete ? "Voir moins" : "Lire entierement"}</Button>
        </Card.Actions>
    </Card>);
}

export default RHSEMessageCard;