/**
* @Author: Mervyn
* @Date:   2016,May,12 22:53:28
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,15 17:39:57
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

import {styles} from '../styles/styles';
import {MKButton, MKColor} from 'react-native-material-kit';
import {GetFaceDetect} from 'NativeModules';

const MainButton = MKButton.coloredButton()
    .withBackgroundColor(MKColor.Cyan)
    .withStyle({
        width: 80,
        height: 80,
        borderRadius: 40,
        elevation: 0, // 去掉阴影
    })
    .build();

class Cam extends Component {
    render() {
        let selectedImage = this.props.selectedImage;
        return (
            <View style={styles.mainbtn}>
                <MainButton
                    onPress={() => {
                        if (selectedImage === null) {
                            GetFaceDetect.measureLayout(() => {
                                console.log('fail');
                            },(x, y, z, a) => {
                                console.log('hello ' + x + y + z + a);
                                ToastAndroid.show('hello ' + x + y + z + a, ToastAndroid.SHORT)
                            })
                        } else {
                            ToastAndroid.show('Intelegent Recognizing', ToastAndroid.SHORT)
                        }
                    }
                }>
                    <Image pointerEvents='none' source={require('../images/main.png')} />
                </MainButton>
            </View>
        );
    }
}

export {Cam};
