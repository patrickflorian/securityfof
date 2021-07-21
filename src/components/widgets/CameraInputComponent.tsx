import React from "react";
import { Dimensions, ImageBackgroundBase, ImageBase, StyleSheet } from "react-native";
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { IconButton, Subheading, Text } from "react-native-paper";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CameraInputProps {
    value: string,
    onFile: (path: string) => any
}
interface CameraInputState {
    showCameraView: boolean,
    height: number,
    width: number,
}

class CameraInputComponent extends React.Component<CameraInputProps, CameraInputState> {
    private camera: RNCamera | null;

    constructor(props: any) {
        super(props);
        this.camera = null;

        const { height, width } = Dimensions.get("window");
        this.state = {
            showCameraView: false,
            height: height,
            width: width,
        }

        this.switchState = this.switchState.bind(this);
    }

    takePicture = async () => {
        const { value, onFile } = this.props;

        try {
            const data = await this.camera?.takePictureAsync();
            if (data) {
                console.log('Path to image: ' + data.uri);
                this.switchState()
                onFile(data.uri);
            }
        } catch (err) {
            // console.log('err: ', err);
        }
    };

    switchState() {
        this.setState((state) => ({ ...state, showCameraView: !state.showCameraView }))
    }

    render() {
        const { value, onFile } = this.props;
        console.log(value);
        
        const { height, width } = this.state;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'black',
                alignSelf: 'stretch',
                height: height,
                width: width,
            },
            preview: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
            captureContainer: {
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center'
            },
            iconCamera: {

            },
            capture: {
                flex: 0,
                backgroundColor: '#fff',
                borderRadius: 5,
                padding: 15,
                paddingHorizontal: 20,
                alignSelf: 'center',
                margin: 20,
            },
            space: {

            },
            buttonContainer: {
                alignSelf: 'stretch',
                marginTop: 10,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
            }
        })

        return (<>
            {
                !this.state.showCameraView && <View style={styles.buttonContainer}>
                    <IconButton icon='camera' size={60} onPress={this.switchState} />
                    <Subheading>Prendre une photo du document</Subheading>
                </View>
            }
            {!value  && this.state.showCameraView && <View style={styles.container}>
                <RNCamera
                    ref={cam => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status, recordAudioPermissionStatus }) => {
                        if (status !== 'READY') return <PendingView />;
                        return (<View style={styles.captureContainer}>
                            <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
                                <Icon style={styles.iconCamera} name="camera"></Icon>
                                <Text>Take Photo</Text>
                            </TouchableOpacity>
                        </View>);
                    }}
                </RNCamera>
                <View style={styles.space} />
            </View>}
            {value!="" && <Image  source={{  uri: value, }} style={{width: "100%", height:200}}  />}
        </>
        );
    }
}

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

export default CameraInputComponent;