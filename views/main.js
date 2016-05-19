/**
* @Author: MervynFang
* @Date:   2016,May,01 18:08:02
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,19 23:28:52
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
import {Screen} from 'NativeModules';

import {MKButton, MKColor} from 'react-native-material-kit';

import {Cam} from './cam';

import {styles} from '../styles/styles';

const BasicButton = MKButton.coloredFab()
    .withBackgroundColor('#11ab56')
    // .withText('Add Pic')
    // .withOnPress(() => {
    //     this.selectImage();
    // })
    // .withShadowColor('black')
    .withStyle({
        width: 60,
        height: 60,
        // todo 这里开了chrome debug 卡顿，不过也没有关系啦
        elevation: 0, // 去掉阴影
    })
    .build();


class Main extends Component {

    // state =  {
    //     selectedImage: null
    // };

    constructor(props) {
        super(props);
        this.state =  {
            selectedImage: null, // 选中图片的路径
            imageData: null, // 图像的base64数据
            faceData: null, // 脸部的数据 json
            imageWidth: null, // 图片原来的宽度
            imageHeight: null, // 图片原来的高度
            regTag: 0 // 是否显示识别框
        };
    }

    selectImage() {
        const options = {
            title: 'Please select image',
            cancelButtonTitle: 'Cancel',
            takePhotoButtonTitle: 'Camera',
            chooseFromLibraryButtonTitle: 'Gallery',
            // quality: 0.5,
            // maxWidth: 300,
            // maxHeight: 300,
            allowsEditing: false,
            aspectX: 3, // android only - aspectX:aspectY, the cropping image's ratio of width to height
            aspectY: 4, // android only
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

                var source, image;
                if (Platform.OS === 'android') {
                    source = {uri: 'file://' + response.path, isStatic: true};
                    console.log(source);
                    image = response.data;
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true};
                }

                this.setState({
                    selectedImage: source,
                    imageData: image,
                    imageWidth: response.width,
                    imageHeight: response.height,
                    regTag: 0
                });
            }
        });
    }
    
    getObject(obj) {
        let a = '';
        for(let i in this.state.selectedImage){
            a = a + i + ':' + this.state.selectedImage[i];
        }
        return a;
    }
    
    handleState() {
        this.setState({
            regTag: 1
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.selectImage.bind(this)}>
                    {this.state.selectedImage === null
                        ? <View style={styles.selectdesp}>
                            <Text style={styles.desptxt}>Please select image</Text></View>
                        : <Image 
                            source={this.state.selectedImage} 
                            resizeMode={Image.resizeMode.contain} 
                            style={styles.pic}></Image>}
                </TouchableOpacity>
                <View style={styles.btn2}>
                    <BasicButton
                        onPress={() => {
                            if (this.state.selectedImage === null) {
                                ToastAndroid.show('Please select image', ToastAndroid.SHORT)
                            } else {
                                Alert.alert('Save to Gallery', 'Would you like to save to Gallery？', [
                                    {
                                        text: 'Cancel',
                                        onPress: () => ToastAndroid.show('Save fail', ToastAndroid.SHORT)
                                    },
                                    {
                                        text: 'OK',
                                        onPress: () => {
                                            ToastAndroid.show('Save succeed', ToastAndroid.SHORT);
                                            Screen.screenShot();
                                        }
                                    }
                                ]);
                            }
                        }}>
                        <Image 
                            pointerEvents='none' 
                            style={styles.gall} 
                            source={require('../images/gallery.png')} />
                    </BasicButton>
                </View>
                <Cam 
                    selectedImage={this.state.selectedImage} 
                    imageData={this.state.imageData} 
                    imageWidth={this.state.imageWidth} 
                    imageHeight={this.state.imageHeight} 
                    regTag={this.state.regTag} 
                    handleState={this.handleState.bind(this)}></Cam>
                <View style={styles.btn}>
                    <BasicButton
                        onPress={this.selectImage.bind(this)}>
                        <Image 
                            pointerEvents='none' 
                            style={styles.plus} 
                            source={require('../images/plus_white.png')} />
                    </BasicButton>
                </View>
                
            </View>
        );
    }
}

export {Main};