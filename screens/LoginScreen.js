import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from "react-native";
import { Card, Button, Input } from 'react-native-elements';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            (this.props.otpGenerated) ?
                <View style={styles.container}>
                    <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
                    <Card
                        title='OTP'
                    >
                        <Text style={{ marginBottom: 10 }}>
                            Please enter the OTP Sent to your registered number
                </Text>

                        <Input
                            placeholder='OTP'
                        />

                        <Button
                            onPress={this.props.otpEntered}
                            type="outline"
                            backgroundColor='#a13fca'
                            buttonStyle={{ borderRadius: 0, marginTop: 20, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Submit OTP' />
                    </Card>
                </View>
                :
                <View style={styles.container}>
                    <StatusBar barStyle = "dark-content" hidden = {true} backgroundColor = "#00BCD4" translucent = {true}/>
                    <Card
                        title='Login'
                    >
                        <Text style={{ marginBottom: 10 }}>
                            Login to dashboard to access control over your stuff
                </Text>

                        <Input
                            placeholder='Username'
                        />
                        <Input
                            placeholder='Password'
                        />

                        <Button
                            onPress={this.props.getOtp}
                            type="outline"
                            backgroundColor='#a13fca'
                            buttonStyle={{ borderRadius: 0, marginTop: 20, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Login' />
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