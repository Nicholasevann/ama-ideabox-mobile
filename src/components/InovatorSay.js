import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import style from '../config/Style/style.cfg';
const InovatorSay = props => {
  return (
    <View style={styles.inovatorContainer}>
      <Image source={props.image} style={styles.imageInovator} />
      <Text style={[style.h5, styles.descInovator]}>{props.desc}</Text>
    </View>
  );
};

export default InovatorSay;

const styles = StyleSheet.create({
  inovatorContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  imageInovator: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  descInovator: {
    textAlign: 'center',
    marginTop: 10,
  },
});
