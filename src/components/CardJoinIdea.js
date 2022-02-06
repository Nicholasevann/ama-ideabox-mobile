import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ArrowDown, Trash} from '../assets/icon';
import style from '../config/Style/style.cfg';
const CardJoinIdea = props => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <View>
      <View style={styles.cardContent}>
        <View style={{flexDirection: 'row', height: 80}}>
          <View style={styles.title}>
            <Text style={style.h5}>{props.title}</Text>
          </View>
          <View style={styles.title}>
            <Text style={style.h5}>{props.name}</Text>
          </View>
          <TouchableOpacity style={styles.email} onPress={() => handleOpen()}>
            <ArrowDown />
          </TouchableOpacity>
        </View>
        {open === true ? (
          <View style={{width: '100%', height: 55}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.email}>
                <Text style={[{color: '#085D7A'}]}>Status</Text>
              </View>
              <View style={styles.title}>
                <Text style={[{color: '#085D7A'}]}>Request Date</Text>
              </View>
              <View style={styles.title} onPress={() => handleOpen()}>
                <Text style={[{color: '#085D7A'}]}>Response Date</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.email}>
                <Text style={style.h5}>Pending</Text>
              </View>
              <View style={styles.title}>
                <Text style={style.h5}>2021-09-26 00:29:42</Text>
              </View>
              <View style={styles.title} onPress={() => handleOpen()}>
                <Text style={style.h5}>2021-09-26 00:29:42</Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CardJoinIdea;

const styles = StyleSheet.create({
  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  email: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cardContent: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
