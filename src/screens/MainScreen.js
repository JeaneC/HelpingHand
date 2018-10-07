import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
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
import callToAction from '../assets/callToAction.png';

import { caro1, caro2, caro3 } from '../assets/carousel';

import { assetOne, assetTwo, assetThree, assetFour } from '../assets/foodBank';

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
            <Image source={caro1} style={styles.carStyle} />
            <Image source={caro2} style={styles.carStyle} />
            <Image source={caro3} style={styles.carStyle} />
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{
            width: SCREEN_WIDTH,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <Image style={styles.callToActionButton} source={callToAction} />
        </TouchableOpacity>

        {/* Real Description */}
        <View style={styles.realDescription}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            Description
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#696969',
              marginTop: 8,
              lineHeight: 24
            }}
          >
            At Houston Food Bank, we use local resources to bring food to those
            in need within our community. As a volunteer, you will help with
            picking, sorting, and packing various food items to ensure each
            package includes the complete assortment of nutrients.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.realDescription}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>
            Experience
          </Text>

          <Text style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                color: '#696969',
                marginTop: 8,
                lineHeight: 24,
                fontStyle: 'italic'
              }}
            >
              "I had a great time meeting people who shared the same passion in
              providing food to thoes in need"
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                lineHeight: 24,
                fontWeight: 'bold'
              }}
            >
              &nbsp;&nbsp; - Jake
            </Text>
          </Text>

          <Text style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                color: '#696969',
                lineHeight: 24,
                fontStyle: 'italic'
              }}
            >
              "It was interesting to learn about how food bank works."
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: 'black',
                lineHeight: 24,
                fontWeight: 'bold',
                marginBottom: 10
              }}
            >
              - Erica
            </Text>
          </Text>
        </View>
        {/* Experiences Media */}

        <View style={styles.mediaRow}>
          <TouchableOpacity style={styles.mediaContent}>
            <Image source={assetOne} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediaContent}>
            <Image source={assetTwo} />
          </TouchableOpacity>
        </View>
        <View style={styles.mediaRow}>
          <TouchableOpacity style={styles.mediaContent}>
            <Image source={assetThree} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediaContent}>
            <Image source={assetFour} />
          </TouchableOpacity>
        </View>

        {/* FAQ */}
        <View style={[styles.realDescription, { marginTop: 10 }]}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>
            FAQ
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: '#696969',
              marginTop: 8,
              lineHeight: 24,
              fontWeight: 'bold'
            }}
          >
            Q: Can I bring a friend?
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#bdbdbd',
              lineHeight: 24,
              fontWeight: 'bold'
            }}
          >
            A: Yes! You can bring one friend with you.{' '}
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: '#696969',
              marginTop: 16,
              lineHeight: 24,
              fontWeight: 'bold'
            }}
          >
            Q: Where does the food?
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#bdbdbd',
              lineHeight: 24,
              fontWeight: 'bold'
            }}
          >
            A: The food from our warehouse is distributed locally to people
            struggling with hunger within Washington State.
          </Text>
        </View>

        {/* End */}
        <Text style={styles.botFooter}>See More</Text>

        {/* Modals */}
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
    width: SCREEN_WIDTH,
    paddingLeft: 22
  },
  carStyle: {
    marginRight: 14
  },
  slidingWindow: {
    display: 'flex',
    alignItems: 'center'
  },
  description: {
    height: 100,
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
    alignItems: 'center',
    marginBottom: 20
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
  },
  realDescription: {
    paddingLeft: 22,
    paddingRight: 22
  },
  mediaRow: {
    width: SCREEN_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20
  },
  botFooter: {
    color: '#6BC5A3',
    textDecorationLine: 'underline',
    marginLeft: 22,
    marginTop: 20,
    fontWeight: 'bold'
  },
  mediaContent: {
    backgroundColor: 'grey'
  }
};

export default MainScreen;
