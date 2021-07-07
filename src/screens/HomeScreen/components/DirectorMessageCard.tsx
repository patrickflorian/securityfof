import React from "react";
import { View } from "react-native";
import { Card, Text, Button, Paragraph, Title, Avatar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const LeftContent = (props: any) =>{
    const theme = useTheme();
    return <Avatar.Text size={40} label="XD" style={{backgroundColor: theme.colors.border}}/>
}
const DirectorMessageCard = (props: any) => {
    const theme = useTheme();
    return (<Card theme={theme}>
        <Card.Title title="Le directeur" left={LeftContent} />
        <Card.Content>
            <Title>Le directeur</Title>
            <Paragraph>Le message du directeur</Paragraph>
        </Card.Content>
        <Card.Actions >
            <Button icon="read" labelStyle={{ textTransform: 'none' }} >Lire entierement</Button>
        </Card.Actions>
    </Card>);
}

export default DirectorMessageCard;