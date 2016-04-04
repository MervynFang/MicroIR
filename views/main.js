/**
 * Created by Mervyn on 16/4/4.
 */

import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Let's Start React Native!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000git ',
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
});

export {Main};