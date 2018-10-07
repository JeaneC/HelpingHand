import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { database, setMessage, getSecretMessages } from '../firebase/firebase';
import NavBar from '../components/common/NavBar';
import { Ionicons } from '@expo/vector-icons';

import categoryHeader from '../assets/categoryScreen/category.png';

const SCREEN_WIDTH = Dimensions.get('window').width;
const GREEN_COLOR = '#6bc5a3';
const WHITE_COLOR = '#ffffff';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      color: GREEN_COLOR
    };
  }

  changeState = () => {
    this.setState({
      active: !this.state.active,
      color: this.state.color == WHITE_COLOR ? GREEN_COLOR : WHITE_COLOR
    });
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 40,
          width: 105,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: this.state.color,
          backgroundColor:
            this.state.color == GREEN_COLOR ? WHITE_COLOR : GREEN_COLOR,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          marginLeft: 3,
          marginRight: 3
        }}
        onPress={this.changeState}
      >
        <Text
          style={{ color: this.state.color, fontSize: 12, fontWeight: 'bold' }}
        >
          {this.props.word}
        </Text>
      </TouchableOpacity>
    );
  }
}

class CategoryScreen extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        '#food',
        '#nature',
        '#photography',
        '#art',
        '#technology',
        '#writing',
        '#books',
        '#travel',
        '#design',
        '#children',
        '#music',
        '#dogs',
        '#health',
        '#companion',
        '#seniors',
        '#basketball',
        '#justice',
        '#education',
        '#immigrant',
        '#human rights',
        '#desserts'
      ]
    };
  }
  getFirebaseStuff = async () => {
    let firebasePromise = await getSecretMessages();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Image
            source={categoryHeader}
            style={{
              resizeMode: 'cover',
              width: SCREEN_WIDTH,
              marginBottom: 20
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: 20
            }}
          >
            {this.state.categories.map(key => {
              return <Button word={key} />;
            })}
          </View>
          <TouchableOpacity
            style={{
              width: SCREEN_WIDTH,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              this.props.navigation.navigate('home');
            }}
          >
            <View
              style={{
                height: 60,
                width: 60,
                backgroundColor: GREEN_COLOR,
                borderRadius: 60,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Ionicons name="md-arrow-round-forward" size={36} color="white" />
              {/* <Image /> */}
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View />
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

export default CategoryScreen;
