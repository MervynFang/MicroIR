/**
 * author: Mervyn Fang
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
