import React from "react";
import { View } from 'react-native';


function ModalScreen(props: any) {
    const { navigation } = props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {navigation.getParam('component')}
      </View>
    );
}

export default ModalScreen;