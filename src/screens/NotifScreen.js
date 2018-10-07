import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';
import { Button } from 'react-native-elements';
import { database, setMessage, getSecretMessages } from '../firebase/firebase';
import NavBar from '../components/common/NavBar';

import foodBankScreen from '../assets/foodBankScreen.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

class NotifScreen extends Component {
  getFirebaseStuff = async () => {
    let firebasePromise = await getSecretMessages();
    console.log(firebasePromise);
  };

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Image
            source={foodBankScreen}
            style={{
              resizeMode: 'cover',
              width: SCREEN_WIDTH,
              marginBottom: 60
            }}
          />
        </ScrollView>
        <NavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white'
  }
};

export default NotifScreen;
