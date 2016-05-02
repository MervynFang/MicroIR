/**
* @Author: Mervyn
* @Date:   2016,May,02 12:13:15
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,02 12:22:21
*/

import {StyleSheet, Platform} from 'react-native';

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#acd',
    },
    pic: {
        width: 400,
        height: 300
    },
    desp: {
        color: '#fff',
        fontSize: 30,
        // backgroundColor: '#aed',
    },
    selectdesp: {
        width: 400,
        height: 300,
        fontSize: 30,
        textAlign: 'center',
        color: '#808080',
        backgroundColor: '#F2F2F5'
    }
});

export {styles};