import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardAchievement = props => {
  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image
          source={require('../assets/image/dummyPictureAchievement1.png')}
          style={{height: '100%', aspectRatio: 1}}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {props.title}
        </Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
    </View>
  );
};

export default CardAchievement;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 60,
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 5,
  },
  pictureContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 2,
  },
  title: {
    color: '#085D7A',
    fontSize: 14,
    fontWeight: '700',
  },
  desc: {
    color: '#085D7A',
    fontSize: 9,
    fontWeight: '500',
  },
});