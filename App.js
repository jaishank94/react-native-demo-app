import React from 'react';
import AppNavigator from './navigation/AppNavigator';

import LoginScreen from './screens/LoginScreen';
import { AsyncStorage } from 'react-native';
// import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      generateOtp: false,
      otpEntered: false,
      notifications:[]
    }
  }
  
  getOtp = () => {
    this.setState({
      generateOtp: true,
    })
  }

  setOtpEntered = () => {
    this.setState({
      otpEntered: true,
    })
  }

  render() {
    return (
      (this.state.otpEntered) ?
        // <HomeScreen />
        <AppNavigator />
        :
        <LoginScreen
          getOtp={this.getOtp}
          otpGenerated={this.state.generateOtp}
          otpEntered={this.setOtpEntered}
        />
    );
  }
}