import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardComment = props => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/image/profilepicture.jpg')}
          style={styles.imageContent}
        />
        <View style={{marginTop: 5, marginLeft: 10}}>
          <Text style={{fontWeight: '700'}}>{props.name}</Text>
          <Text style={{color: 'grey'}}>Reply</Text>
        </View>
      </View>
      <Text style={{marginLeft: 10, marginTop: 10}}>{props.desc}</Text>
    </View>
  );
};

export default CardComment;

const styles = StyleSheet.create({
  imageContent: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    resizeMode: 'cover',
  },
});
