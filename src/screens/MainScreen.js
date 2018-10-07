import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  View,
  Dimensions,
  StatusBar
} from 'react-native';
import { Video } from 'expo';
import { Button } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import MockUp from '../assets/eventmock.png';
import Modal from 'react-native-modalbox';
import IRCLink from '../assets/ircVid.mp4';
import heroImg from '../assets/heroImg.png';

import eventDate1 from '../assets/carousel/Event_Date_1.png';
import eventDate2 from '../assets/carousel/Event_Date_2.png';
import eventDate3 from '../assets/carousel/Event_Date_3.png';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  testingImage = () => {
    this.refs.modal3.open();
  };

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <Image source={heroImg} style={{ flex: 1 }} />
        </View>

        {/* After Image, Onto Description */}
        <View style={styles.description}>
          <View style={styles.descriptionHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>Seattle Food Bank</Text>
              <Text style={styles.caption}>Bringing food to people</Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={styles.caption2}> ♥ 324 &nbsp;</Text>
            </View>
          </View>
        </View>

        {/*  Hours and opportunities  */}
        <View style={styles.opport}>
          <View style={styles.opportBox}>
            <Text style={styles.time1}>18</Text>
            <Text style={styles.time2}>Hours</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.opportBox}>
            <Text style={styles.time1}>3</Text>
            <Text style={styles.time2}>Opportunities</Text>
          </View>
        </View>

        <View style={styles.carousel}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.slidingWindow}
            showsHorizontalScrollIndicator={false}
          >
            <Image source={eventDate1} style={styles.carStyle} />
            <Image source={eventDate2} style={styles.carStyle} />
            <Image source={eventDate3} style={styles.carStyle} />
          </ScrollView>
        </View>

        <Modal
          style={[styles.modal, styles.modal3]}
          position={'center'}
          ref={'modal3'}
          backdropOpacity={1}
          isDisabled={this.state.isDisabled}
          swipeToClose
          coverScreen
        >
          <Video
            source={require('../assets/portVid.mp4')}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            style={styles.video}
          />
        </Modal>
      </ScrollView>
    );
  }
}

// onPress={() => this.props.navigation.navigate('second')}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text1: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal3: {
    width: SCREEN_WIDTH,
    backgroundColor: 'black'
  },

  text: {
    color: 'black',
    fontSize: 22
  },
  video: {
    height: 500,
    width: SCREEN_WIDTH
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  carousel: {
    height: 100,
    width: SCREEN_WIDTH
  },
  carStyle: {
    marginLeft: 22
  },
  slidingWindow: {
    display: 'flex',
    alignItems: 'center'
  },
  description: {
    height: 120,
    width: SCREEN_WIDTH
  },
  descriptionHeader: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    paddingLeft: 22,
    marginTop: 20
  },
  headerLeft: {
    flex: 2
  },
  headerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 16,
    color: '#6BC5A3',
    fontWeight: 'bold',
    marginTop: 5
  },
  caption2: {
    fontSize: 20,
    color: '#6BC5A3',
    fontWeight: 'bold',
    marginTop: 5
  },
  opport: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  opportBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time1: {
    fontSize: 48,
    color: '#6BC5A3'
  },
  time2: {
    fontSize: 14,
    color: '#d3d3d3',
    fontWeight: 'bold'
  },
  line: {
    width: 1,
    height: 80,
    backgroundColor: 'grey'
  }
};

export default MainScreen;
