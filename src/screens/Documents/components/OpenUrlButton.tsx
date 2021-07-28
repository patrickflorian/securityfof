import ButtonComponent from "@components/widgets/Button/Button";
import React, { useCallback } from "react";
import { Alert, Linking } from "react-native";
import { Button } from "react-native-paper";

export const OpenURLButton = (props: any) => {
    const { url, children } = props;
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button {...props} onPress={handlePress} full ={false} >{children}</Button>;
  };