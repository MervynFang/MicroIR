/**
* @Author: Mervyn
* @Date:   2016,Feb,27 21:47:14
* @Last modified by:   Mervyn
* @Last modified time: 2016,Jul,30 09:43:39
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View,
  ScrollView,
  DatePickerIOS,
} from 'react-native'

class playwithrn extends Component {
  render() {
    return (
      <View style={{ flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#fff',}}>
      <Image 
        style={{
          width: 224,
          height: 200,
        }}
        resizeMode={"contain"}
        source={{uri:'https://unsplash.it/600/400/?random'}}
      />
      <ScrollView 
        horizontal={false}>
        <Image 
          style={{
            width: 300,
            height: 200,
          }}
          resizeMode={"contain"}
          source={{uri:'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}}
        />
      </ScrollView>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
          <Text style={{textAlign: 'center', marginTop: 20}}>1233213</Text>
          <Image source={{uri: 'http://g.hiphotos.baidu.com/news/q%3D100/sign=63c0164541540923ac69677ea259d1dc/8694a4c27d1ed21be085c683a56eddc451da3f0c.jpg'}} style={{width: 100, height: 100}} />
          <Text>
            haha
          </Text>
        </ScrollView>
        <Text>
          Bottom
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('playwithrn', () => playwithrn);
