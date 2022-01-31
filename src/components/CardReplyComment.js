import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardReplyComment = props => {
  return (
    <View
      style={{
        marginTop: 5,
        marginLeft: 30,
        marginBottom: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/image/profilepicture.jpg')}
          style={styles.imageContent}
        />
        <Text style={{fontWeight: '700', marginLeft: 10}}>{props.name}</Text>
      </View>
      <Text style={{marginLeft: 10, marginVertical: 10}}>{props.desc}</Text>
    </View>
  );
};

export default CardReplyComment;

const styles = StyleSheet.create({
  imageContent: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    resizeMode: 'cover',
  },
});
