import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { database, setMessage, getSecretMessages } from '../firebase/firebase';
import eventmock2 from '../assets/eventmock2.png';

class SecondScreen extends Component {
  getFirebaseStuff = async () => {
    let firebasePromise = await getSecretMessages();
    console.log(firebasePromise);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={eventmock2} />
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    marginBottom: 10
  }
};

export default SecondScreen;
