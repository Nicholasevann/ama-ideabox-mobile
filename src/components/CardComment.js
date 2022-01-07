import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CardComment = props => {
  return (
    <View
      style={{
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
        marginBottom: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/image/profilepicture.jpg')}
          style={styles.imageContent}
        />
        <Text style={{fontWeight: '700', marginLeft: 10}}>Karyawan Telkom</Text>
      </View>
      <Text style={{marginLeft: 10, marginVertical: 15}}>{props.desc}</Text>
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
