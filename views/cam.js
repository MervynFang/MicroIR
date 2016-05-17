/**
* @Author: Mervyn
* @Date:   2016,May,12 22:53:28
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,16 21:45:38
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
import RNFetchBlob from 'react-native-fetch-blob';

const apiKey = '';
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
    
    detectFace() {
        RNFetchBlob.fetch(
            'POST',
            'https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender',
            {
        		'Accept': 'application/json',
        	    'Content-Type': 'application/octet-stream',
        	    'Ocp-Apim-Subscription-Key': apiKey
        	},
            this.state.photo_data)
    	.then((res) => {
    		return res.json();		
    	})
    	.then((json) => {
    		
    		if(json.length){
    			this.setState({
    				face_data: json
    			});
    		}else{
    			alert("Sorry, I can't see any faces in there.");
    		}
    		
    		return json;
    	})
    	.catch (function (error) {
    		console.log(error);
        	alert('Sorry, the request failed. Please try again.' + JSON.stringify(error));
    	});
    }
}

export {Cam};
