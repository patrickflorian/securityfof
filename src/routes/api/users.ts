import { User } from "@classes/User"
import { Alert } from "react-native";
import { API_URL } from "."

const MAIN_URL = API_URL + '/api/users';

export const all = () => {
    return fetch(MAIN_URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

    });
}

export const edit = (user: User) => {
    return fetch(MAIN_URL + '/edit', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}


export const uploadImage = async (userId: number,singleFile: any) => {
    //Check if any file is selected or not
    if (singleFile != null) {
      //If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file', fileToUpload);
      let res = await fetch(
        API_URL + '/api/user/'+userId+'/image',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        Alert.alert('Upload Successful');
      }
    } else {
      //if no file selected the show alert
      Alert.alert('Please Select File first');
    }
};