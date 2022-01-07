import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {windowHeight, windowWidth} from '../components/WindowDimensions';

const CardTrackRecord = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.picture} />
      <Text style={{...styles.number, color: props.color}}>{props.number}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default CardTrackRecord;

const styles = StyleSheet.create({
  container: {
    width: (65 / 350) * windowWidth,
    height: (105 / 500) * windowHeight,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  pictureContainer: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  picture: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    fontWeight: '700',
    zIndex: 3,
    position: 'absolute',
    left: 20,
    top: 65,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    zIndex: 3,
    position: 'absolute',
    left: 9,
    top: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
