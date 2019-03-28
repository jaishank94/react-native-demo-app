import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text
} from "react-native";
import { Card, Button, Icon } from 'react-native-elements'

export default class NotificationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
                <Card
                    title='James likes your post'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
                <Card
                    title='Sam likes your post'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
                <Card
                    title='Jack posted for the first time!'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
                <Card
                    title='Jack just joined the team'
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
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
    }
});