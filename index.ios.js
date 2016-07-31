/**
* @Author: Mervyn
* @Date:   2016,Feb,27 21:47:14
* @Last modified by:   Mervyn
* @Last modified time: 2016,Aug,01 01:03:21
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Main} from './views/ios/main';

class playwithrn extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}

AppRegistry.registerComponent('playwithrn', () => playwithrn);
