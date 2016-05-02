/**
* @Author: Mervyn
* @Date:   2016,May,02 12:13:15
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,03 02:21:32
*/

import {StyleSheet, Platform, Dimensions} from 'react-native';

let WINDOW_WIDTH = Dimensions.get('window').width;

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    pic: {
        width: WINDOW_WIDTH,
        height: 400
    },
    desp: {
        color: '#fff',
        fontSize: 24,
        // backgroundColor: '#aed',
    },
    selectdesp: {
        width: WINDOW_WIDTH,
        height: 400,
        backgroundColor: '#00BCD4',
    },
    desptxt: {
        width: WINDOW_WIDTH,
        fontSize: 30,
        textAlign: 'center',
        color: '#fff',
        position: 'absolute',
        top: 150
    },
    btn: {
        position: 'absolute',
        bottom: 30,
        right: 20,
    },
    btn2: {
        position: 'absolute',
        bottom: 30,
        left: 20,
    },
    pop: {
        flex: 1,
        backgroundColor: '#00BCD4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    popImg: {
        width: 100,
        height: 100
    },
    lic: {
        position: 'absolute',
        width: 100,
        bottom: 30,
        left: WINDOW_WIDTH * 0.5 - 50,
        textAlign: 'center',
        color: '#fff'
    }
});

export {styles};