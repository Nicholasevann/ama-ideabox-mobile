import React, {useEffect, useState} from 'react';
import {prefetchConfiguration} from 'react-native-app-auth';
import styles from '../style/Profile.style';
import getData from '../../../components/GetData';
import {AuthConfig, defaultAuthState} from '../../../config/Auth.cfg';
import {Back, Cross, Edit, Notif} from '../../../assets/icon';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  TextInput,
  Modal,
  Alert,
} from 'react-native';
import CardTrackRecord from '../../../components/CardTrackRecord';
import CardAchievement from '../../../components/CardAchievement';
import CardContent from '../../../components/CardContent';
import style from '../../../config/Style/style.cfg';
import LoadingScreen from '../../../components/LoadingScreen';
import GetDataTrackRecord from '../../../config/GetData/GetDataTrackRecord';

const Tag = props => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{props.title}</Text>
    </View>
  );
};

const Profile = ({navigation}) => {
  const [data, setData] = useState(defaultAuthState);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAboutVisible, setModalAboutVisible] = useState(false);
  const [dataTrackRecord, setDataTrackRecord] = useState('');
  var indexSupport = 0;
  var indexJoin = 0;
  useEffect(() => {
    getData().then(jsonValue => setData(jsonValue));
    prefetchConfiguration({
      warmAndPrefetchChrome: Platform.OS === 'android',
      ...AuthConfig,
    });
    GetDataTrackRecord().then(response => setDataTrackRecord(response));
  }, []);
  if (dataTrackRecord === '') {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* header */}
        <View style={styles.head}>
          <View style={styles.Button}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Back />
            </TouchableOpacity>
          </View>
          <View style={styles.Button}>
            <Notif />
          </View>
        </View>
        <View style={styles.profilePicture}>
          <Image
            source={require('../../../assets/image/profilepicture.jpg')}
            style={styles.image}
          />
        </View>
        {/*image*/}
        <View style={styles.imageBackground}>
          <Image
            source={require('../../../assets/image/dummyPicture2.png')}
            style={styles.backgroundImage}
          />
        </View>
        {/*main content */}
        <View style={styles.mainContainer}>
          <View style={styles.mainContent}>
            <Text style={styles.h1}>{data.name}</Text>
            <Text style={styles.h2}>{data.email}</Text>
            <Text style={styles.h3}>Kota Bandung, Jawa Barat</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('InputProfile')}>
            <View style={styles.Button}>
              <Edit />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 15, paddingTop: 10}}>
          {/* Track Record */}
          <View style={styles.CardTrackRecord}>
            <CardTrackRecord
              number={dataTrackRecord.totalIdeas}
              text={'Ideas'}
              image={require('../../../assets/image/dummy1.png')}
              color={'#FC9C10'}
            />
            <CardTrackRecord
              number={dataTrackRecord.totalLike}
              text={'Likes'}
              image={require('../../../assets/image/dummy2.png')}
              color={'#ED1B5C'}
            />
            <CardTrackRecord
              number={dataTrackRecord.totalComment}
              text={'Comments'}
              image={require('../../../assets/image/dummy3.png')}
              color={'#177FC6'}
            />
            <CardTrackRecord
              number={'016'}
              text={'Trendings'}
              image={require('../../../assets/image/dummy4.png')}
              color={'#3ACECA'}
            />
          </View>

          {/* About */}
          <View style={styles.cardContainer}>
            <View style={styles.aboutTitleContainer}>
              <Text style={styles.title}>About</Text>
              <TouchableOpacity onPress={() => setModalAboutVisible(true)}>
                <Image
                  source={require('../../../assets/icon/edit.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
            {/* Textbox using const */}
            <View style={styles.textBox}>
              <Text style={style.h5}>{dataTrackRecord.about}</Text>
            </View>
          </View>

          {/*Skill */}
          <View style={styles.cardContainer}>
            <View style={styles.aboutTitleContainer}>
              <Text style={styles.title}>Skill</Text>
            </View>
            {/* Tag */}
            <View style={styles.tagContainer}>
              {dataTrackRecord.skillSet.map(val => (
                <Tag title={val.name} />
              ))}
            </View>
          </View>

          {/* Achievement */}
          {/* <View style={styles.cardContainer}>
            <View style={styles.aboutTitleContainer}>
              <Text style={styles.title}>Achievement</Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../../assets/icon/add.png')}
                  style={{width: 20, height: 20, marginRight: 10}}
                />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image
                    source={require('../../../assets/icon/edit.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.achievementContainer}>
              <CardAchievement
                title={
                  'Sistem keuangan berbasis web untuk KUKM Sistem keuangan berbasis web untuk KUKM'
                }
                desc={'Top 25 Ideahack'}
              />
              <CardAchievement
                title={'Indonesia Menerapkan IoT'}
                desc={'Juara Harapan 2'}
              />
            </View>
          </View> */}

          {/* Inovation*/}
          <View style={styles.cardContainer}>
            <View style={styles.aboutTitleContainer}>
              <Text style={styles.title}>Innovation</Text>
            </View>
            <View style={styles.textInnovation}>
              {dataTrackRecord.ideas.map(val => (
                <View>
                  <View
                    style={{
                      width: '100%',
                      height: 200,
                      borderWidth: 1,
                      borderRadius: 10,
                    }}></View>
                  <View>
                    <Text style={[style.h4, {marginVertical: 10}]}>
                      {val.desc.value}
                    </Text>
                    <Text style={[style.h5]}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed vel, accumsan praesent bibendum aenean morbi. Semper
                      mauris tempor, neque convallis risus nam.
                    </Text>
                    <Text style={[style.h4, {marginVertical: 10}]}>Team:</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        flexWrap: 'wrap',
                      }}>
                      {val.approval.map(data => {
                        if (data.request === 'join') {
                          indexJoin = indexJoin + 1;
                          return (
                            <View style={{marginRight: 10}}>
                              <Text style={[style.h5]}>
                                {' '}
                                {indexJoin}. {data.approvalTo.name}
                              </Text>
                            </View>
                          );
                        }
                        return null;
                      })}
                    </View>
                    <Text style={[style.h4, {marginVertical: 10}]}>
                      Support:
                    </Text>
                    {val.approval.map(data => {
                      if (data.request === 'support') {
                        indexSupport = indexSupport + 1;
                        return (
                          <View style={{marginRight: 10}}>
                            <Text style={[style.h5]}>
                              {' '}
                              {indexSupport}. {data.approvalTo.name}
                            </Text>
                          </View>
                        );
                      }
                      return null;
                    })}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Popup Edit achievment */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.centeredcontainer}>
            <View style={styles.modalView}>
              <View style={styles.titleContainer}>
                <Text style={styles.textEdit}>Achievement</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.h2}>Nama Inovasi :</Text>
                <TextInput
                  style={styles.input}
                  // value={''}
                  // onChangeText={() => { }}
                />
                <Text style={styles.h2}>Pencapaian :</Text>
                <TextInput
                  style={styles.input}
                  // value={''}
                  // onChangeText={() => { }}
                />
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.save}>SAVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* EndPopup */}

      {/* Popup About*/}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalAboutVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalAboutVisible(!modalAboutVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.centeredcontainer}>
            <View style={styles.modalView}>
              <View style={styles.titleContainer}>
                <Text style={styles.textEdit}>About</Text>
                <TouchableOpacity onPress={() => setModalAboutVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <View style={styles.inputAbout}>
                  <TextInput
                    style={styles.textInputAbout}
                    multiline={true}
                    // value={''}
                    // onChangeText={() => { }}
                  />
                </View>
                <View style={styles.button}>
                  <TouchableOpacity onPress={() => setModalAboutVisible(false)}>
                    <Text style={styles.save}>SAVE</Text>
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

export default Profile;
