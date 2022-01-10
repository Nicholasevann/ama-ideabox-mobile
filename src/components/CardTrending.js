import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './WindowDimensions';
import style from '../config/Style/style.cfg';
const CardTopTrending = props => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{uri: props.image}} style={styles.imageProfile} />
        <View style={styles.content}>
          <Text style={[styles.textProfile, style.h4medium]}>{props.name}</Text>
          <Text style={[styles.titleContent, style.h4]}>{props.title}</Text>
          <Text style={[styles.textLike, style.h5]}>
            Like by Pak Fraz and 100 peoples
          </Text>
        </View>
      </View>
    </View>
  );
};

const CardProductiveTrending = props => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{uri: props.image}}
          style={styles.imageProfileProductive}
        />
        <View style={styles.content}>
          <Text style={[styles.textProfileProductive, style.h4]}>
            {props.name}
          </Text>
          <Text style={[styles.textLikeProductive, style.h5]}>
            Shared {props.totalIdea} ideas{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};
export {CardTopTrending, CardProductiveTrending};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginHorizontal: windowWidth / 42.3,
    marginVertical: windowHeight / 100,
    borderRadius: 10,
    padding: 15,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  profile: {
    flexDirection: 'row',
  },
  imageProfile: {
    marginLeft: 5,
    width: windowWidth / 10,
    height: windowHeight / 21,
    borderRadius: 1000 / 2,
  },
  imageProfileProductive: {
    marginLeft: 5,
    width: windowWidth / 7,
    height: windowHeight / 14,
    borderRadius: 1000 / 2,
  },
  textProfile: {
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
    color: 'black',
  },
  textProfileProductive: {
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  content: {
    flexDirection: 'column',
    marginRight: windowWidth / 4.23,
    marginLeft: windowWidth / 42.3,
  },
  titleContent: {
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  textLike: {
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
  textLikeProductive: {
    marginTop: windowWidth / 100,
    marginLeft: windowHeight / 84.6,
  },
});