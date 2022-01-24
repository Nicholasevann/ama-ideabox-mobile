import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import {Cross} from '../../../assets/icon';
import CardIdeaManagement from '../../../components/CardIdeaManagement';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDataCategoryManagement} from '../../../config/GetData/GetDataAdministrator';
import style from '../../../config/Style/style.cfg';
import styles from '../style/Administrator.style';

const IdeaManagement = ({navigation}) => {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [dataCategoryManagement, setDataCategoryManagement] = useState();
  const data = require('../data/dataIDeaManagement.json');

  useEffect(() => {
    GetDataCategoryManagement().then(response =>
      setDataCategoryManagement(response),
    );
  }, []);
  if (dataCategoryManagement === null) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader onPress={() => navigation.openDrawer()} />

      {/* Header navigation */}
      <View style={styles.headerContainer}>
        <View style={styles.headerWrap}>
          {/* <TouchableOpacity
            style={styles.wrap}
            onPress={() => {
              navigation.navigate('UserManagement');
            }}>
            <View style={styles.tabBar}>
              <Text style={styles.textNonActive}>User Management</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.wrap}
            onPress={() => {
              navigation.navigate('CategoryManagement');
            }}>
            <View style={styles.tabBar}>
              <Text style={styles.textNonActive}>Category Management</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wrap} onPress={() => {}}>
            <View style={styles.tabBarActive}>
              <Text style={styles.textActive}>Idea Management</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.wrap}
            onPress={() => navigation.navigate('RoleManagement')}>
            <View style={styles.tabBar}>
              <Text style={styles.textNonActive}>Role Management</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>

      {/* content */}
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Image
              source={require('../../../assets/icon/plusAdmin.png')}
              style={styles.imageAdmin}
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                No.{' '}
              </Text>
            </View>
            <View style={styles.email}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Nama Idea
              </Text>
            </View>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Created By
              </Text>
            </View>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({item, index}) => {
              return (
                <ScrollView>
                  <CardIdeaManagement
                    delete={() => setModalDeleteVisible(true)}
                    id={item.id}
                    title={item.title}
                    create={item.created}
                  />
                </ScrollView>
              );
            }}
          />
        </View>
      </View>
      {/* Popup delete  */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalDeleteVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalDeleteVisible(!modalDeleteVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.centeredcontainer}>
            <View style={styles.modalView}>
              <View style={styles.titleContainer}>
                <Text style={styles.textEdit}>Delete User</Text>
                <TouchableOpacity onPress={() => setModalDeleteVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.h2}>Anda ingin menghapus user ini?</Text>
                <View style={styles.rowDelete}>
                  <View style={styles.buttondelete}>
                    <TouchableOpacity
                      onPress={() => setModalDeleteVisible(false)}>
                      <Text style={styles.save}>Hapus</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttoncancel}>
                    <TouchableOpacity
                      onPress={() => setModalDeleteVisible(false)}>
                      <Text style={styles.save}>Batal</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* EndPopup */}
    </SafeAreaView>
  );
};

export default IdeaManagement;
