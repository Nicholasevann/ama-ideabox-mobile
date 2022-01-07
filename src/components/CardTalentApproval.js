import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Trash} from '../assets/icon';
import style from '../config/Style/style.cfg';

const CardTalentApproval = props => {
  return (
    <Swipeable
      rightButtons={[
        <TouchableOpacity
          style={[styles.rightSwipeItem, {backgroundColor: '#DE1B1B'}]}
          onPress={props.delete}>
          <Trash />
        </TouchableOpacity>,
      ]}>
      <TouchableNativeFeedback onPress={props.onDetail}>
        <View style={styles.cardContent}>
          <View style={styles.email}>
            <Text style={style.h5}>{props.name}</Text>
          </View>
          <View style={styles.title}>
            <Text style={style.h5}>{props.title}</Text>
          </View>
          <View style={styles.email}>
            <Text style={style.h5}>{props.createdDate}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  );
};

export default CardTalentApproval;

const styles = StyleSheet.create({
  title: {
    flex: 2,
    padding: 10,
  },
  email: {
    flex: 1,
    padding: 10,
  },
  cardContent: {
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});
