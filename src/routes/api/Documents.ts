import { User } from "@classes/User"
import { Alert } from "react-native";
import { API_URL } from "."

const MAIN_URL = API_URL + '/api/documents';

export const all = (type: any) => {
    return fetch(MAIN_URL+"/type/"+type, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

    });
}
export const add = (data: any) => {
  console.log(JSON.stringify(data))
    return fetch(MAIN_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export const edit = (document: any) => {
    return fetch(MAIN_URL + '/edit', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(document)
    });
}


export const uploadImage = async (documentId: number,singleFile: any) => {
    //Check if any file is selected or not
    if (singleFile != null) {
      //If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file', fileToUpload);
      let res = await fetch(
        API_URL + '/api/user/'+documentId+'/image',
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