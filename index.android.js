/**
* @Author: Mervyn
* @Date:   2016,Apr,30 11:52:05
* @Last modified by:   Mervyn
* @Last modified time: 2016,Aug,01 01:02:40
*/

'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  BackAndroid,
  ToastAndroid,
} from 'react-native';

import {Main} from './views/android/main';
import {Pop} from './views/android/pop';

class playwithrn extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      mainTag: false,
      // outTag: 0
    };
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({mainTag: true});
      },
    2000);
      
    let outTag = 0;
    BackAndroid.addEventListener('hardwareBackPress', () => {
      // return true;
      // ToastAndroid.show(outTag + '', ToastAndroid.SHORT);
      if (outTag < 1) {
        var toast = ToastAndroid.show('Press again to exit MicroIR', ToastAndroid.SHORT);
        outTag++;
        setTimeout(
          () => {
            outTag = 0;
          },
        1000);
        return true;
      } else {
        // BackAndroid.exitApp();
        // toast.cancel();
        return false;
      }
    });
  }

  render() {
    
    if (this.state.mainTag) {
      return (
        <Main></Main>
      );
    } else {
      return (
        <Pop></Pop>
      );
    }
  }
}

AppRegistry.registerComponent('playwithrn', () => playwithrn);
