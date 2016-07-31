/**
* @Author: Mervyn
* @Date:   2016,Feb,27 21:47:14
* @Last modified by:   Mervyn
* @Last modified time: 2016,Jul,31 23:44:48
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

import {Main} from './views/main';

class playwithrn extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}

AppRegistry.registerComponent('playwithrn', () => playwithrn);
