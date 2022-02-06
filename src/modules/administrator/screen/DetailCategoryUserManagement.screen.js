import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Back} from '../../../assets/icon';
import DetailCategory from '../../../components/DetailCategory';
import SearchHeader from '../../../components/SearchHeader';

const DetailCategoryUserManagement = ({navigation, route}) => {
  const data = route.params.data;
  return (
    <View style={styles.container}>
      <SearchHeader />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.textEdit}>Detail User</Text>
          <View style={styles.button}></View>
        </View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <DetailCategory
              name={data.name}
              type={data.type}
              parent={data.parent}
              status={'-'}
              createdBy={data.createdBy}
              createdDate={data.createdDate}
              updatedBy={data.updatedBy}
              updatedDate={data.updatedDate}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailCategoryUserManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingBottom: 70,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  textEdit: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#085D7A',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  save: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
