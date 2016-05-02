/**
* @Author: Mervyn
* @Date:   2016,May,02 22:46:43
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,03 01:51:47
*/

import React, {
    Component,
    Text,
    View,
    Image,
    Platform,
    Dimensions,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styles/styles';

let WINDOW_WIDTH = Dimensions.get('window').width;

class Pop extends Component {
    render() {
        return (
            <View style={styles.pop}>
                <Image source={require('../images/microir.png')} style={styles.popImg}></Image>
                <Text style={styles.lic}>@2016 MicroIR</Text>
            </View>
        );
    }
}

export {Pop};