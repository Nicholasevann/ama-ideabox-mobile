import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BackBlue} from '../assets/icon';
import {windowHeight, windowWidth} from './WindowDimensions';

const CardProfile = props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.profile}>
          <Image
            source={require('../assets/image/profilepicture2.jpg')}
            style={styles.imageProfileProductive}
          />
          <TouchableOpacity onPress={props.profile}>
            <View style={styles.content}>
              <Text style={styles.textProfileProductive}>Karyawan Telkom</Text>
              <Text style={styles.textLikeProductive}>516278 </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.iconBack}>
          <TouchableOpacity onPress={props.onPress}>
            <BackBlue />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: windowWidth / 42.3,
    marginVertical: windowHeight / 86.4,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  profile: {
    flexDirection: 'row',
  },
  imageProfileProductive: {
    width: windowWidth / 7,
    height: windowHeight / 14,
    borderRadius: 1000 / 2,
  },
  textProfile: {
    fontWeight: '700',
    fontSize: windowHeight > 800 ? 12 : 10,
    fontFamily: 'Roboto',
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  textProfileProductive: {
    fontWeight: '700',
    fontSize: windowHeight > 800 ? 24 : 16,
    fontFamily: 'Roboto',
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  content: {
    flexDirection: 'column',

    marginLeft: windowWidth / 42.3,
  },
  titleContent: {
    fontWeight: 'bold',
    fontSize: windowHeight > 800 ? 20 : 14,
    fontFamily: 'Roboto',
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  textLike: {
    fontSize: windowHeight > 800 ? 10 : 8,
    fontFamily: 'Roboto',
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  textLikeProductive: {
    fontSize: windowHeight > 800 ? 16 : 12,
    fontFamily: 'Roboto',
    marginTop: windowWidth / 300,
    marginLeft: windowHeight / 84.6,
  },
  iconBack: {
    justifyContent: 'center',
  },
});
