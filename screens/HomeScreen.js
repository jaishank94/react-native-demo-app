import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    Image
} from "react-native";
import { Card, Button, Icon } from 'react-native-elements';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true} />
                <ScrollView>
                    <Card
                        title='HELLO WORLD'
                        style={{ marginTop: 50 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHa6vVW5B6KPuiHYBVOZcYAyuM8LgSJMJhcYhuJni8pCTdovTcnA' }}
                        />
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5 }}
                            title='VIEW NOW' />
                    </Card>
                    <Card
                        title='HELLO WORLD'
                        style={{ marginTop: 50 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZaDz5bosO14iw2IF71uNRNnR5zejYWo-GmQgAKlNplDwkuiC' }}
                        />
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5 }}
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
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MSNr9P29sqLb80wUNPW6PoDiSqp0Dwth9e-JX3lgmeqbTLI9SQ' }}
                        />
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5 }}
                            title='VIEW NOW' />
                    </Card>
                    <Card
                        title='HELLO WORLD'
                        style={{ marginTop: 50 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN702T9fOP-qVOyyhliC4ndMpVf4nL_kZrz0mP1-dHXPtEDnuzbA' }}
                        />
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5 }}
                            title='VIEW NOW' />
                    </Card>
                    <Card
                        title='HELLO WORLD'
                        style={{ marginTop: 50 }}
                    >
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'data:image/jpeg;base64,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' }}
                        />
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 5 }}
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
    },
    image: {
        width: 350,
        height: 165,
        padding: 10
    }
});