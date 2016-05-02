/**
* @Author: Mervyn
* @Date:   2016,May,02 12:13:15
* @Last modified by:   Mervyn
* @Last modified time: 2016,May,02 22:22:40
*/

import {StyleSheet, Platform} from 'react-native';

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    pic: {
        width: 350,
        height: 400
    },
    desp: {
        color: '#fff',
        fontSize: 30,
        // backgroundColor: '#aed',
    },
    selectdesp: {
        width: 350,
        height: 400,
        fontSize: 30,
        textAlign: 'center',
        color: '#808080',
        backgroundColor: '#F2F2F5'
    },
    btn: {
        
    },
    pop: {
        flex: 1,
        backgroundColor: '#00BCD4',
    }
});

export {styles};