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
import {SwipeListView} from 'react-native-swipe-list-view';
import {Cross, Eye, Left, Trash} from '../../../assets/icon';
import CardSubmittedIdea from '../../../components/CardSubmittedIdea';
import CardJoinIdea from '../../../components/CardJoinIdea';
import getData from '../../../components/GetData';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {defaultAuthState} from '../../../config/Auth.cfg';
import {GetDataSharingIdea} from '../../../config/GetData/GetDataMyIdea';
import style from '../../../config/Style/style.cfg';
import styles from '../style/MyIdea.style';
const MyAction = ({navigation}) => {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [sharingIdea, setSharingIdea] = useState(null);
  const [data, setData] = useState(defaultAuthState);
  useEffect(() => {
    if (sharingIdea === null) {
      getData().then(jsonValue => setData(jsonValue));
      if (data === defaultAuthState) {
        return <LoadingScreen />;
      }
      GetDataSharingIdea(data.id).then(response => setSharingIdea(response));
    }
  });
  if (sharingIdea === null) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />

      {/* Header navigation */}
      <ScrollView>
        <View style={styles.headerContainer2}>
          <View style={styles.headerWrap}>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() => navigation.navigate('SubmittedIdea')}>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Submitted Idea</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrap} onPress={() => {}}>
              <View style={styles.tabBarActive}>
                <Text style={styles.textActive}>Join Idea</Text>
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
                  Status
                </Text>
              </View>
            </View>
            <SwipeListView
              data={sharingIdea.ideas}
              renderItem={({item}) => {
                // console.log(item)
                return (
                  <View>
                    <CardSubmittedIdea
                      delete={() => setModalDeleteVisible(true)}
                      title={item.desc[0].value}
                      name={item.createdBy}
                      createdDate={item.createdDate}
                    />
                  </View>
                );
              }}
              renderHiddenItem={({item}) => (
                <View style={styles.rowBack}>
                  <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <Left />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight2]}
                    onPress={() =>
                      navigation.navigate('DetailIdeaUser', {data: item})
                    }>
                    <Eye />
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-150}
              leftOpenValue={0}
            />
            <CardJoinIdea
              delete={() => setModalDeleteVisible(true)}
              title={'ada'}
              name={'ada'}
              createdDate={'ada'}
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
                  <TouchableOpacity
                    onPress={() => setModalDeleteVisible(false)}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAction;
