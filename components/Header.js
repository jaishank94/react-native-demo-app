import React, { Component } from 'react';
import {
    View,
    Text
} from "react-native";

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.textHeader}</Text>
        </View>
    );
}

const styles = {
    viewStyle:{
        justifyContent: 'center',
        alignItems:'center',  
        height: 50,
        paddingTop: 15,
        ShadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity:0.2
    },
    textStyle:{
        fontSize:20,
        color: '#fff'
    }
}

export default Header;