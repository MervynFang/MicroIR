/**
* @Author: Mervyn
* @Date:   2016,May,12 22:53:28
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,19 14:08:56
*/

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Alert,
    ScrollView,
    Image,
    Dimensions,
    Platform,
    ToastAndroid,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {styles} from '../styles/styles';
import {MKButton, MKColor} from 'react-native-material-kit';
import {GetFaceDetect} from 'NativeModules';

import RNFetchBlob from 'react-native-fetch-blob';

let WINDOW_WIDTH = Dimensions.get('window').width;
const apiKey = '5417afc042b34cf6b2da1ca0e9e42d8a';
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
    
    constructor(props) {
        super(props);
        this.state =  {
            faceData: null
        };
    }
    
    render() {
        let selectedImage = this.props.selectedImage;
        return (
                <View style={styles.all}>
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
                                    this.detectFace();
                                }
                            }
                        }>
                        <Image 
                            pointerEvents='none' 
                            source={require('../images/main.png')} />
                    </MainButton>
                </View>
                {this.props.regTag === 0 ? <View></View> : this.renderArea.call(this)}
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
            this.props.imageData)
    	.then((res) => {
    		return res.json();		
    	})
    	.then((json) => {
    		
    		if(json.length){
                console.log(json);
                this.props.handleState();
    			this.setState({
    				faceData: json
    			});
    		}else{
    			alert("Can't detect any face");
    		}
    		
    		return json;
    	})
    	.catch (function (error) {
    		console.log(error);
        	alert('NetWork Failure');
    	});
    }
    
    renderArea() {
        let views = [];
        let iH = this.props.imageHeight;
        let iW = this.props.imageWidth;
        if (this.state.faceData !== null) {
            if (iW / 3 * 4 >= iH) {
                this.state.faceData.map((key,index) => {
                    console.log(key.faceRectangle);
                    let box = {
                        position: 'absolute',
                        top: key.faceRectangle.top  * WINDOW_WIDTH / iW + (WINDOW_WIDTH / 3 * 4 - iH * WINDOW_WIDTH / iW) / 2,
                        left: key.faceRectangle.left * WINDOW_WIDTH / iW,
                        width: key.faceRectangle.width  * WINDOW_WIDTH / iW,
                        height: key.faceRectangle.height  * WINDOW_WIDTH / iW,
                        borderWidth: 2,
                        borderColor: '#fff',
                    };
                    
                    // let style = { 
                    //     width: 10,
                    //     height: 10,
                    //     backgroundColor: '#000'
                    // };
                    
                    views.push(
                        <View key={key.faceId} style={box}></View>
                    );
                    
                    // can't write like this
                    // return  <View style={{width: 10, height: 10, backgroundColor: '#000'}}></View>
                });
                // return <View>{views}</View>
                return  views;
            } else {
                this.state.faceData.map((key,index) => {
                    console.log(key.faceRectangle);
                    let box = {
                        position: 'absolute',
                        top: key.faceRectangle.top * WINDOW_WIDTH / 3 * 4 / iH,
                        left: key.faceRectangle.left * WINDOW_WIDTH / 3 * 4 / iH + (WINDOW_WIDTH - iW * WINDOW_WIDTH / 3 * 4 / iH) / 2,
                        width: key.faceRectangle.width * WINDOW_WIDTH / 3 * 4 / iH,
                        height: key.faceRectangle.height * WINDOW_WIDTH / 3 * 4 / iH,
                        borderWidth: 2,
                        borderColor: '#fff',
                    };
                    
                    // let style = { 
                    //     width: 10,
                    //     height: 10,
                    //     backgroundColor: '#000'
                    // };
                    
                    views.push(
                        <View key={key.faceId} style={box}></View>
                    );
                    
                    // can't write like this
                    // return  <View style={{width: 10, height: 10, backgroundColor: '#000'}}></View>
                });
                // return <View>{views}</View>
                return  views;
            }
        }
    }
}

export {Cam};
