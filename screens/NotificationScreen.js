import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    ScrollView,
    AsyncStorage
} from "react-native";
import { Card, Button, Icon, colors } from 'react-native-elements';

export default class NotificationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            unReadNotifications: [],
            readNotifications: []
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('read_notifications',
            (err, result) => {
                this.setState({
                    readNotifications: result,
                });
            });
        AsyncStorage.getItem('unread_notifications',
            (err, result) => {
                this.setState({
                    unReadNotifications: result,
                });
            });
    }

    renderReadNotifications() {
        console.log('dads', this.state.readNotifications)
        return JSON.parse(this.state.readNotifications).map((msg, key) => {
            return (
                <Card
                    key={key}
                    title={msg.name}
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
            );
        }
        )
    }

    renderUnreadNotifications() {
        let read = JSON.parse(this.state.readNotifications);
        let unread = JSON.parse(this.state.unReadNotifications);

        const newArray = unread.concat(read);

        AsyncStorage.removeItem('unread_notifications');
        AsyncStorage.removeItem('read_notifications');

        AsyncStorage.setItem('read_notifications', JSON.stringify(newArray), () => {
              AsyncStorage.getItem('read_notifications', (err, result) => {
                console.log('prod',result);
              });
          });

        return JSON.parse(this.state.unReadNotifications).map((msg, key) => {
            return (
                <Card
                    key={key}
                    title={msg.name}
                    style={{ marginTop: 50 }}
                >
                    <Text style={{ marginBottom: 10, color:'red' }}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                </Card>
            );
        }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true} />
                <ScrollView>
                    {
                        (this.state.unReadNotifications && this.state.unReadNotifications !== undefined && this.state.unReadNotifications.length > 0) ?
                            this.renderUnreadNotifications()
                            : <Text></Text>
                    }
                    {
                        (this.state.readNotifications && this.state.readNotifications !== undefined && this.state.readNotifications.length > 0) ?
                            this.renderReadNotifications()
                            : <Text>No New Notifications</Text>
                    }
                </ScrollView>
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