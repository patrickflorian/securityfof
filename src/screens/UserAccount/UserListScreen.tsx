import React, { useEffect } from 'react';
import { StyleSheet, View, ScrollView, GestureResponderEvent } from 'react-native';
import { Text, Card, Paragraph, Button, List, ActivityIndicator } from 'react-native-paper';
import Animated from 'react-native-reanimated';

import routenames from '@routes/index'
import AppbarComponent from '@components/layouts/AppbarComponent/AppbarComponent';
import { useNavigation } from '@react-navigation/native';
import FormModalButton from '@components/modal/FormModalButton';
import { DocumentTypes } from '@constants/documentTypes';
import * as userApi from "@routes/api/Users";
import AsyncStorage from '@react-native-community/async-storage';
import ButtonComponent from '@components/widgets/Button/Button';
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    card: {
        width: "40%",
        height: 200,
    },
    cardCover: {
        height: 100
    }
});

const UserListScreen = (props: any) => {
    //const { navigation } = props;
    const navigation = useNavigation();
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true)

    const [didMount, setDidMount] = React.useState(false);

    const openAccountForm = () => {
        navigation.setOptions({ tabBarVisible: false });
        navigation.navigate(routenames.SIGN_UP)
      };

        
  let mounted = true;
  React.useEffect(() => {
    if (mounted) {
        userApi.all()
        .then(res => {
            res.json()
                .then((data) => { setLoading(false); setUsers(data) })
                .catch(e => console.log(e))
        }).catch(e => console.log(e))
    }
    console.log('effect user form');
    return () => { 
      mounted = false;
    };
  }, []);

    return (
        <>
            <AppbarComponent />
            <ButtonComponent onPress={openAccountForm} >Ajouter un agent</ButtonComponent>
            <ScrollView >

                <View style={styles.container}>
                    {loading && <ActivityIndicator animating />}
                    <View style={{ width: '100%' }}>
                        {users.map((user, index) => {
                            return <List.Item
                                key={index}
                                title={user.email}
                                description={user?.profession}
                                left={props => <List.Icon {...props} icon="file-document-outline" />}
                            />
                        })}
                    </View>
                </View>
            </ScrollView>
        </>
    );
};
export default UserListScreen;