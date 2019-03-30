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
      otpEntered: false
    }
  }

  componentDidMount() {
    // AsyncStorage.removeItem('unread_notifications');
    // AsyncStorage.removeItem('read_notifications');
    this.storeData();

  }

  storeData = async () => {
    let unreadNotify = [
      {
        name: 'James Like your post'
      },
      {
        name: 'James commented your post'
      },
      {
        name: 'James gave like post'
      }
    ];
    // You only need to define what will be added or updated
    let readNotify = [
      {
        name: 'Jack Like your post'
      },
      {
        name: 'Sam commented your post'
      },
      {
        name: 'Jenny gave like post'
      },
      {
        name: 'James Like your post'
      },
      {
        name: 'Jacob commented your post'
      },
      {
        name: 'Jerry gave like post'
      },{
        name: 'June Like your post'
      }
    ];

    AsyncStorage.setItem('unread_notifications', JSON.stringify(unreadNotify));
    AsyncStorage.setItem('read_notifications', JSON.stringify(readNotify));
  };

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