/**
* @Author: Mervyn
* @Date:   2016,May,12 22:53:28
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,15 13:09:54
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

class Cam extends Component {
    render() {
        return (
            <View style={styles.mainbtn}>
                <MainButton
                    onPress={() => {
                        if (this.state.selectedImage === null) {
                            ToastAndroid.show('Please select image', ToastAndroid.SHORT)
                        } else {
                            ToastAndroid.show('Intelegent Recognizing', ToastAndroid.SHORT)
                        }
                    }}>
                    <Image pointerEvents='none' source={require('../images/main.png')} />
                </MainButton>
            </View>
        );
    }
}

export {Main};
