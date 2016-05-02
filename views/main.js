/**
* @Author: MervynFang
* @Date:   2016,May,01 18:08:02
* @Last modified by:   MervynFang
* @Last modified time: 2016,May,02 11:06:11
*/

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    Image,
    Platform,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity
    // NativeModules:{
    //     ImagePickerManager
    // }
} from 'react-native';

import {ImagePickerManager} from 'NativeModules';

import {MKButton} from 'react-native-material-kit';

const AButton = MKButton.coloredButton()
    .withText('Add Pic')
    // .withOnPress(() => {
    //     this.selectImage();
    // })
    .build();

class Main extends Component {
    state = {
        selectedImage: null
    };

    selectImage() {
        const options = {
            title: 'Select Image',
            cancelButtonTitle: 'Cancel',
            // takePhotoButtonTitle: 'Take Photo...',
            chooseFromLibraryButtonTitle: 'Select from Library',
            // quality: 0.5,
            // maxWidth: 300,
            // maxHeight: 300,
            allowsEditing: true
        };

        ImagePickerManager.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
                // camera always be here
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);

            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);

            }
            else {
                // You can display the image using either:
                //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                var source;
                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true};

                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true};
                }

                this.setState({
                    selectedImage: source
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Learn How to Use Phone
                </Text>
                <TouchableOpacity
                    onPress={this.selectImage.bind(this)}>
                    <Text style={styles.desp}>Select Image</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Alert.alert('Save Tips', 'Would You like to save the Image?', [
                        {text: 'Three', onPress: () => ToastAndroid.show('click three', ToastAndroid.SHORT)},
                        {text: 'YES', onPress: () => ToastAndroid.show('click one', ToastAndroid.SHORT)},
                        {text: 'NO', onPress: () => ToastAndroid.show('click two', ToastAndroid.SHORT)}
                    ])}>
                    <Text style={styles.desp}>The Button</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.selectImage.bind(this)}>
                    {this.state.selectedImage === null
                        ? <Text style={styles.selectdesp}>Please Select Image</Text>
                        : <Image source={this.state.selectedImage} style={styles.pic}></Image>}
                </TouchableOpacity>
                <AButton
                    onPress={this.selectImage.bind(this)}></AButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#acd',
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
    pic: {
        width: 300,
        height: 300
    },
    desp: {
        color: '#fff',
        fontSize: 30,
        // backgroundColor: '#aed',
    },
    selectdesp: {
        width: 300,
        height: 300,
        fontSize: 30,
        textAlign: 'center',
        color: '#808080',
        backgroundColor: '#F2F2F5'
    }
});

export {Main};