/**
 * @Author: Mervyn
 * @Date: 2016-04-19 22:53
 */

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Alert,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Learn How to Use Phone
                </Text>
                <TouchableHighlight
                    underlayColor = '#fff'
                    onPress={() => Alert.alert('Save Tips', 'Would You like to save the picture?', [
                        {text: 'Three', onPress: () => ToastAndroid.show('click three', ToastAndroid.SHORT)},
                        {text: 'YES', onPress: () => ToastAndroid.show('click one', ToastAndroid.SHORT)},
                        {text: 'NO', onPress: () => ToastAndroid.show('click two', ToastAndroid.SHORT)}
                    ])}>
                    <Text style={{color: '#fff', fontSize: 30}}>The Button</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#acd',
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
});

export {Main};