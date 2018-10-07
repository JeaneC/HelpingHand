import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Dimensions, Image } from 'react-native';
import { envelope, home, settings, heart, user } from '../../assets/Icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const NavBar = props => (
  <View style={styles.TouchableOpacityContainer}>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        props.navigation.navigate('home');
      }}
    >
      <Image source={home} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        props.navigation.navigate('notif');
      }}
    >
      <Image source={envelope} />
      <Text style={styles.navText}>Inbox</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        props.navigation.navigate('profile');
      }}
    >
      <Image source={user} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.box}>
      <Image source={heart} />
      <Text style={styles.navText}>Favorite</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.box}>
      <Image source={settings} />
      <Text style={styles.navText}>Settings</Text>
    </TouchableOpacity>
  </View>
);

const styles = {
  TouchableOpacityContainer: {
    height: 70,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#d3d3d3',
    paddingBottom: 15
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navText: {
    fontSize: 10,
    marginTop: 4,
    color: '#d3d3d3'
  }
};

export default NavBar;
