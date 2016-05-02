/**
* @Author: Mervyn
* @Date:   2016,Apr,30 11:52:05
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,02 23:20:59
*/

'use strict';
import React, {
    AppRegistry,
    Component,
    // StyleSheet,
    // Text,
    // View
} from 'react-native';

import {Main} from './views/main';
import {Pop} from './views/pop'

class playwithrn extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            mainTag: false
        };
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({mainTag: true});
            },
        2000);
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
