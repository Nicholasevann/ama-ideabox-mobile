import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import {Cross} from '../../../assets/icon';
import CardSubmittedIdea from '../../../components/CardSubmittedIdea';
import getData from '../../../components/GetData';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {defaultAuthState} from '../../../config/Auth.cfg';
import {GetDataSubmittedIdea} from '../../../config/GetData/GetDataMyIdea';
import style from '../../../config/Style/style.cfg';
import styles from '../style/MyIdea.style';
const SubmittedIdea = ({navigation}) => {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [data, setData] = useState(defaultAuthState);
  const [submittedIdea, setSubmittedIdea] = useState(null);
  useEffect(() => {
    getData().then(jsonValue => setData(jsonValue));
    if (data === defaultAuthState) {
      return <LoadingScreen />;
    }
    GetDataSubmittedIdea(data.id).then(response => setSubmittedIdea(response));
  }, [data]);
  if (submittedIdea === null || data === defaultAuthState) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />

      {/* Header navigation */}
      <View style={styles.headerContainer}>
        <View style={styles.headerWrap}>
          <TouchableOpacity style={styles.wrap} onPress={() => {}}>
            <View style={styles.tabBarActive}>
              <Text style={styles.textActive}>Submitted Idea</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrap}
            onPress={() => navigation.navigate('MyAction')}>
            <View style={styles.tabBar}>
              <Text style={styles.textNonActive}>Sharing Idea</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* content */}
      <View style={styles.contentContainer}>
        {/* <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Text>1</Text>
          </View>
        </View> */}

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Idea Name
              </Text>
            </View>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Created By
              </Text>
            </View>
            <View style={styles.email}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Created Date
              </Text>
            </View>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={submittedIdea.ideas}
            renderItem={({item, index}) => {
              return (
                <ScrollView>
                  <CardSubmittedIdea
                    onDetail={() =>
                      navigation.navigate('DetailIdeaUser', {data: item})
                    }
                    delete={() => setModalDeleteVisible(true)}
                    title={item.desc[0].value}
                    name={item.createdBy}
                    createdDate={item.createdDate}
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

export default SubmittedIdea;
