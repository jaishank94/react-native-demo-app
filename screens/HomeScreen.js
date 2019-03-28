import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";
import { Card, Button, Icon } from 'react-native-elements';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true} />
                <Card
                    title='HELLO WORLD'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
                <Card
                    title='HELLO WORLD'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' />
                </Card>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a13fca',
        alignItems: 'center',
        justifyContent: 'center',
    },
});