/**
* @Author: Mervyn
* @Date:   2016,May,02 12:13:15
* @Last modified by:   Mervyn
* @Last modified time: 2016,Aug,01 00:39:16
*/

import {StyleSheet, Platform, Dimensions} from 'react-native';

let WINDOW_WIDTH = Dimensions.get('window').width;
let WINDOW_HEIGHT = Dimensions.get('window').height;

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pic: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 3 * 4
  },
  selectdesp: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 3 * 4,
    backgroundColor: '#00BCD4',
  },
  desptxt: {
    width: WINDOW_WIDTH,
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    position: 'absolute',
    top: 200
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
  mainbtn: {
    position: 'absolute',
    bottom: 20,
    left: WINDOW_WIDTH * 0.5 - 40
  },
  allAndroid: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT - 25,
    top: 0,
    left: 0,
  },
  allIOS: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    top: 0,
    left: 0,
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
  },
  plus: {
    width: 20,
    height: 20
  },
  gall: {
    width: 27,
    height: 27
  },
});

export {styles};