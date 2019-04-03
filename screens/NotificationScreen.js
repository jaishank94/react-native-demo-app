import React, { Component } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    AsyncStorage,
    FlatList,
    TouchableOpacity
} from "react-native";
import { Card, Button, Icon, colors } from 'react-native-elements';
import Header from "../components/Header";

export default class NotificationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        // AsyncStorage.removeItem('notifications');
        const defaultMsg = [
            {
                'name': 'Jack Like your post',
                'is_read': false
            },
            {
                'name': 'Sam commented your post',
                'is_read': false
            },
            {
                'name': 'Jenny gave like post',
                'is_read': true
            },
            {
                'name': 'James Like your post',
                'is_read': true
            },
            {
                'name': 'Jacob commented your post',
                'is_read': true
            },
            {
                'name': 'Jerry gave like post',
                'is_read': true
            },
            {
                'name': 'Juddy Like your post',
                'is_read': true
            },
            {
                'name': 'Mahim Like your post',
                'is_read': true
            },
            {
                'name': 'Soni Like your post',
                'is_read': true
            },
            {
                'name': 'Aishu Like your post',
                'is_read': true
            }
        ];

        (AsyncStorage.getItem('notifications')) ?
            AsyncStorage.getItem('notifications',
                (err, result) => {
                    // console.log(result);
                    if (!err && result != null) {
                        this.setState({
                            notifications: JSON.parse(result),
                        });
                    } else {
                        this.setState({
                            notifications: defaultMsg
                        })
                    }
                })
            :
            null
    }

    markAsReadNotification(indx) {
        let items = this.state.notifications;
        items[indx].is_read = true;

        // console.log(indx)
        
        this.setState({
            notifications: items
        })

        AsyncStorage.removeItem('notifications');
        this.renderNotifications();
    }

    renderNotifications() {
        // console.log(this.state.notifications);
        AsyncStorage.setItem('notifications', JSON.stringify(this.state.notifications), () => {
            AsyncStorage.getItem('notifications', (err, result) => {
                console.log('prod', result);
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header textHeader="Notifications"></Header>
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true} />

                <FlatList
                    data={this.state.notifications}
                    extraData={this.state}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={()=>this.markAsReadNotification(index)}>
                            <Card
                                key={item.name}
                                title={item.name}
                                style={{ marginTop: 50 }}
                            >
                                {
                                    (item.is_read) ?
                                        <Text style={{ marginBottom: 10 }}>
                                            The idea with React Native Elements is more about component structure than actual design.
                                        </Text>
                                        :
                                        <Text style={{ marginBottom: 10, color: 'red' }}>
                                            This is New
                                        </Text>
                                }
                            </Card>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.name}
                />
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