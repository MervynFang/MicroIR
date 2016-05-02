/**
* @Author: MervynFang
* @Date:   2016,May,01 18:08:02
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,02 22:27:55
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
} from 'react-native';

import {ImagePickerManager} from 'NativeModules';

import {MKButton, MKColor} from 'react-native-material-kit';

import {styles} from '../styles/styles';

const AddButton = MKButton.coloredFab()
    // .withText('Add Pic')
    // .withOnPress(() => {
    //     this.selectImage();
    // })
    .build();
    
const SaveButton = MKButton.coloredButton().build();

class Main extends Component {

    // state =  {
    //     selectedImage: null
    // };

    constructor(props) {
        super(props);
        this.state =  {
            selectedImage: null
        };
    }

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
                <TouchableOpacity
                    onPress={this.selectImage.bind(this)}>
                    {this.state.selectedImage === null
                        ? <Text style={styles.selectdesp}>Please Select Image</Text>
                        : <Image source={this.state.selectedImage} style={styles.pic}></Image>}
                </TouchableOpacity>
                <SaveButton
                    backgroundColor={MKColor.Cyan}
                    onPress={() => Alert.alert('Save Tips', 'Would You like to save the Image?', [
                        {text: 'Three', onPress: () => ToastAndroid.show('click three', ToastAndroid.SHORT)},
                        {text: 'YES', onPress: () => ToastAndroid.show('click one', ToastAndroid.SHORT)},
                        {text: 'NO', onPress: () => ToastAndroid.show('click two', ToastAndroid.SHORT)}
                    ])}>
                    <Text style={styles.desp}>Save</Text>
                </SaveButton>
                <AddButton
                    backgroundColor={MKColor.Cyan}
                    onPress={this.selectImage.bind(this)}>
                    <Image pointerEvents='none' source={require('../images/plus_white.png')} />
                </AddButton>
            </View>
        );
    }
}

export {Main};