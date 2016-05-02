/**
* @Author: Mervyn
* @Date:   2016,Apr,30 11:52:05
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,02 12:21:55
*/

'use strict';
import React, {
    AppRegistry,
    Component,
    // StyleSheet,
    // Text,
    // View
} from 'react-native';

import {Main} from './views/main'

class playwithrn extends Component {
    render() {
        return (
            <Main></Main>
        );
    }
}

AppRegistry.registerComponent('playwithrn', () => playwithrn);
