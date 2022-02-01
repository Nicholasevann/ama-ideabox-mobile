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
import {Check, Cross, Eye, Trash, Xapproval} from '../../../assets/icon';
import CardSubmittedIdea from '../../../components/CardSubmittedIdea';
import CardTalentApproval from '../../../components/CardTalentApproval';
import getData from '../../../components/GetData';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {defaultAuthState} from '../../../config/Auth.cfg';
import GetDataTalentApproval from '../../../config/GetData/GetDataTalentApproval';
import style from '../../../config/Style/style.cfg';
import styles from '../style/TalentApproval.style';
const TalentApproval = ({navigation}) => {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalAcceptVisible, setModalAcceptVisible] = useState(false);
  const [dataTalentApproval, setDataTalentApproval] = useState(null);
  const [data, setData] = useState(defaultAuthState);
  const [name, setName] = useState(null);
  useEffect(() => {
    if (dataTalentApproval === null) {
      getData().then(jsonValue => setData(jsonValue));
      if (data === defaultAuthState) {
        return <LoadingScreen />;
      }
      GetDataTalentApproval(data.id).then(response =>
        setDataTalentApproval(response),
      );
    }
  });
  if (dataTalentApproval === null) {
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
              <Text style={styles.textActive}>Talent Approval</Text>
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
            <View style={styles.email}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Request By
              </Text>
            </View>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Idea Name
              </Text>
            </View>
            <View style={styles.email}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Created Date
              </Text>
            </View>
          </View>
          <SwipeListView
            data={dataTalentApproval}
            renderItem={({item}) => {
              // console.log(item)
              return (
                <View>
                  <CardTalentApproval
                    title={item.ideasId}
                    name={item.approvalTo.name}
                    createdDate={item.createdDate}
                  />
                </View>
              );
            }}
            renderHiddenItem={({item}) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailIdeaUser', {data: item})
                  }
                  style={[styles.backRightBtn, styles.backRightBtnRight3]}>
                  <Eye />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setName(item.approvalTo.name);
                    setModalDeleteVisible(true);
                  }}
                  style={[styles.backRightBtn, styles.backRightBtnRight2]}>
                  <Xapproval />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setName(item.approvalTo.name);
                    setModalAcceptVisible(true);
                  }}
                  style={[styles.backRightBtn, styles.backRightBtnRight]}>
                  <Check />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-225}
            leftOpenValue={0}
          />
          {/* <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={dataTalentApproval}
              renderItem={({item, index}) => {
                return (
                  <CardTalentApproval
                    onDetail={() =>
                      navigation.navigate('DetailIdeaUser', {data: item})
                    }
                    delete={() => setModalDeleteVisible(true)}
                    title={item.ideas.desc.value}
                    name={item.approvalTo.name}
                    createdDate={item.createdDate}
                  />
                );
              }}
            /> */}
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
                <Text style={styles.textEdit}>Talent Approval</Text>
                <TouchableOpacity onPress={() => setModalDeleteVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.h2}>
                  Apakah kamu yakin menolak {name} ke dalam ide ini?
                </Text>
                <View style={styles.rowDelete}>
                  <TouchableOpacity
                    style={styles.buttondelete}
                    onPress={() => setModalDeleteVisible(false)}>
                    <Text style={styles.save}>Ya</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttoncancel}
                    onPress={() => setModalDeleteVisible(false)}>
                    <Text style={styles.save}>Tidak</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* EndPopup */}
      {/* Popup delete  */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalAcceptVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalDeleteVisible(!modalAcceptVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.centeredcontainer}>
            <View style={styles.modalView}>
              <View style={styles.titleContainer}>
                <Text style={styles.textEdit}>Talent Approval</Text>
                <TouchableOpacity onPress={() => setModalAcceptVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.h2}>
                  Apakah kamu yakin menerima {name} ke dalam ide ini?
                </Text>
                <View style={styles.rowDelete}>
                  <TouchableOpacity
                    style={styles.buttonaccept}
                    onPress={() => setModalAcceptVisible(false)}>
                    <Text style={styles.save}>Ya</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttoncancel}
                    onPress={() => setModalAcceptVisible(false)}>
                    <Text style={styles.save}>Tidak</Text>
                  </TouchableOpacity>
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

export default TalentApproval;
