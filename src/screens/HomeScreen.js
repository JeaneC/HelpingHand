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
import { Button } from 'react-native-elements';
import { database, setMessage, getSecretMessages } from '../firebase/firebase';
import { caro1, caro2, caro3 } from '../assets/carousel';

import NavBar from '../components/common/NavBar';

import {
  homepage,
  block1,
  block2,
  block3,
  block4,
  block5,
  block6,
  block7,
  category,
  rec
} from '../assets/homeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

class HomeScreen extends Component {
  getFirebaseStuff = async () => {
    let firebasePromise = await getSecretMessages();
    console.log(firebasePromise);
  };

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Image
            source={homepage}
            style={{
              resizeMode: 'cover',
              width: SCREEN_WIDTH,
              marginBottom: 20
            }}
          />
          <Text source={category} style={[styles.header, { fontSize: 26 }]}>
            Recommended
          </Text>
          <View style={styles.carousel}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.slidingWindow}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('main')}
              >
                <Image
                  source={block1}
                  style={[styles.carStyle, { marginLeft: 30 }]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={block2} style={styles.carStyle} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={block3} style={styles.carStyle} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={block6} style={styles.carStyle} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={block7} style={styles.carStyle} />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text source={category} style={styles.header}>
            Categories
          </Text>

          <View style={[styles.carousel, { marginBottom: 20 }]}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.slidingWindow}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity>
                <Image
                  source={block4}
                  style={[styles.carStyle, { marginLeft: 30 }]}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={block5} style={styles.carStyle} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>

        <NavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  carousel: {
    width: SCREEN_WIDTH,
    marginTop: 15
  },
  carStyle: {
    marginRight: 14
  },
  header: {
    marginLeft: 22,
    marginTop: 20,
    fontSize: 24,
    color: '#6bc5a3',
    fontWeight: 'bold'
  }
};

export default HomeScreen;
