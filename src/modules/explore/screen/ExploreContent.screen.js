import React, {useState, useEffect, useRef} from 'react';
import styles from '../style/Explore.style';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Text,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import CardContent from '../../../components/CardContent';
import SearchHeader from '../../../components/SearchHeader';
import getDataIdea from '../../../components/GetDataIdeas';
import LoadingScreen from '../../../components/LoadingScreen';
import CardComment from '../../../components/CardComment';
import {Cross, Join, Promote, TopLine} from '../../../assets/icon';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useScrollToTop} from '@react-navigation/native';
import {MentionInput} from 'react-native-controlled-mentions';
import style from '../../../config/Style/style.cfg';
import {windowWidth} from '../../../components/WindowDimensions';
import axios from 'axios';
import {defaultAuthDataUser} from '../../../config/Auth.cfg';

const ExploreContent = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [modalComment, setModalComment] = useState(false);
  const [modalJoinVisible, setModalJoinVisible] = useState(false);
  const [modalPromoteVisible, setModalPromoteVisible] = useState(false);
  const [modalBottom, setModalBottom] = useState(false);
  const [hasil, setHasil] = useState('');
  const [value, setValue] = useState('');
  const dataUser = require('../data/User Services.postman_collection.json');
  const [dataUserState, setDataUserState] = useState(defaultAuthDataUser);
  const getData = dataSearch => {
    setHasil(dataSearch);
  };
  useEffect(() => {
    setData(getDataIdea());
    setLoading(false);
  }, []);
  const ref = useRef(null);
  useScrollToTop(ref);
  const suggestions = [
    {id: '1', name: 'David Tabaka'},
    {id: '2', name: 'Mary'},
    {id: '3', name: 'Tony'},
    {id: '4', name: 'Mike'},
    {id: '5', name: 'Grey'},
  ];

  useEffect(() => {
    axios
      .get(dataUser.item[0].item[1].request.url.raw)
      .then(response => {
        // setUpdate(response.data.data);
        setDataUserState(response.data.data);
      })
      .catch(err => console.log(err));
  });
  const renderSuggestions = ({keyword, onSuggestionPress}) => {
    if (keyword == null) {
      return null;
    }
    return (
      <View style={{position: 'relative', flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: 200,
            backgroundColor: '#FFFFFF',
            width: windowWidth - 22,
            borderColor: '#085D7A',
            top: -1,
            borderBottomWidth: 0.5,
          }}>
          {suggestions
            .filter(one =>
              one.name
                .toLocaleLowerCase()
                .includes(keyword.toLocaleLowerCase()),
            )
            .map(one => (
              <Pressable
                key={one.id}
                onPress={() => onSuggestionPress(one)}
                style={{padding: 12}}>
                <Text>{one.name}</Text>
              </Pressable>
            ))}
        </ScrollView>
      </View>
    );
  };
  if (
    isLoading ||
    data === undefined ||
    dataUserState === defaultAuthDataUser
  ) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
        getData={getData}
        placeholder={'Search an Idea ... '}
      />
      <ScrollView ref={ref}>
        {data
          .filter((val, key) => {
            if (hasil === '') {
              return val;
            } else if (
              val.desc[0].value.toLowerCase().includes(hasil.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <View key={key}>
                <CardContent
                  name={dataUserState.name}
                  title={val.desc[0].value}
                  desc={val.desc[2].value}
                  cover={val.desc[1].value}
                  more={() =>
                    navigation.navigate('DetailIdeaUser', {data: val})
                  }
                  comment={() => setModalComment(true)}
                  join={() => setModalJoinVisible(true)}
                  promote={() => setModalPromoteVisible(true)}
                  morePromote={() => setModalBottom(true)}
                  onProfile={() =>
                    navigation.navigate('ProfileUser', {data: dataUserState})
                  }
                />
              </View>
            );
          })}

        <View style={styles.bottomWrap} />

        {/* Modal comment */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalComment}
          onRequestClose={() => {
            setModalComment(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.totalComment}>Comments(4)</Text>
              <TouchableOpacity onPress={() => setModalComment(false)}>
                <Cross />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.contentModal}>
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
              <CardComment desc={'HEbat, kamu harus bisa melakukannya'} />
            </ScrollView>
          </View>
          <View style={styles.textInputContainer}>
            <View style={styles.textInputWrap}>
              <View style={styles.textInputRow}>
                <View style={{flex: 7}}>
                  <MentionInput
                    value={value}
                    onChange={setValue}
                    partTypes={[
                      {
                        trigger: '@', // Should be a single character like '@' or '#'
                        renderSuggestions: renderSuggestions,
                        textStyle: {fontWeight: 'bold', color: 'blue'}, // The mention style in the input
                      },
                    ]}
                    style={styles.textInput}
                    multiline={true}
                    placeholder="Masukkan Komentar..."
                  />
                </View>

                <TouchableOpacity onPress={() => {}} style={styles.buttonSend}>
                  <Text style={styles.textSend}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* end Modal */}

        {/* Popup join  */}
        <GestureRecognizer
          style={styles.gesture}
          onSwipeDown={() => {
            setModalJoinVisible(false);
          }}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalJoinVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalJoinVisible(!modalPromoteVisible);
            }}>
            <ScrollView>
              <View style={styles.modalPromoteContainer}>
                <View style={styles.titleWrap}>
                  <View style={styles.topLine}>
                    <TouchableOpacity
                      onPress={() => setModalJoinVisible(false)}>
                      <TopLine />
                      <View style={styles.lineSpace} />
                      <TopLine />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.textTitle}>Join Idea</Text>
                </View>
                <Text style={style.h5}>
                  Apakah Kamu yakin untuk join idea ini?
                </Text>
                <Text style={[style.h4, {marginVertical: 10}]}>Alasan:</Text>
                <View style={styles.inputAbout}>
                  <TextInput
                    multiline={true}
                    // value={''}
                    // onChangeText={() => { }}
                  />
                </View>
              </View>
              <View style={styles.buttonWrap}>
                <TouchableOpacity
                  style={styles.buttonYakin}
                  onPress={() => setModalJoinVisible(false)}>
                  <View>
                    <Text style={styles.textYakin}>Yakin</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonBatal}
                  onPress={() => setModalJoinVisible(false)}>
                  <View>
                    <Text style={styles.textBatal}>Batal</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>
        </GestureRecognizer>
        {/* EndPopup */}

        {/* Popup Promote Idea*/}
        <GestureRecognizer
          style={styles.gesture}
          onSwipeDown={() => {
            setModalPromoteVisible(false);
          }}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalPromoteVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalPromoteVisible(!modalPromoteVisible);
            }}>
            <ScrollView>
              <View style={styles.modalPromoteContainer}>
                <View style={styles.titleWrap}>
                  <View style={styles.topLine}>
                    <TouchableOpacity
                      onPress={() => setModalPromoteVisible(false)}>
                      <TopLine />
                      <View style={styles.lineSpace} />
                      <TopLine />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.textTitle}>Promote Idea</Text>
                </View>
                <Text style={style.h5}>
                  Sebelum kamu memutuskan untuk mempromosikan inovasi kamu harus
                  melengkapi beberapa informasi dibawah agar komunikasi diluar
                  website ideabox berjalan dengan lancar, good luck !
                </Text>
                <Text style={[style.h4, {marginVertical: 10}]}>
                  Nomor Telepon :
                </Text>
                <TextInput
                  style={styles.input}
                  // value={''}
                  // onChangeText={() => { }}
                />
                <Text style={[style.h4, {marginVertical: 10}]}>Alasan :</Text>
                <View style={styles.inputAbout}>
                  <TextInput
                    multiline={true}
                    // value={''}
                    // onChangeText={() => { }}
                  />
                </View>
              </View>
              <View style={styles.buttonWrap}>
                <TouchableOpacity
                  style={styles.buttonYakin}
                  onPress={() => setModalPromoteVisible(false)}>
                  <View>
                    <Text style={styles.textYakin}>Yakin</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonBatal}
                  onPress={() => setModalPromoteVisible(false)}>
                  <View>
                    <Text style={styles.textBatal}>Batal</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>
        </GestureRecognizer>
      </ScrollView>
      {/* EndPopup */}
      {/* Modal promet&join idea */}
      <GestureRecognizer
        style={styles.gesture}
        onSwipeDown={() => {
          setModalBottom(false);
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalBottom}
          onRequestClose={() => {
            setModalBottom(false);
          }}>
          <View style={styles.modalPromoteContainer}>
            <View style={styles.topLine}>
              <TouchableOpacity onPress={() => setModalBottom(false)}>
                <TopLine />
                <View style={styles.lineSpace} />
                <TopLine />
              </TouchableOpacity>
            </View>
            <View style={styles.contentModal}>
              <View style={styles.rowPromote}>
                <TouchableOpacity
                  onPress={() => {
                    setModalBottom(false);
                    setModalPromoteVisible(true);
                  }}>
                  <View style={styles.wrapPromote}>
                    <Promote />
                    <Text style={styles.textPromote}>Promote</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalBottom(false);
                    setModalJoinVisible(true);
                  }}>
                  <View style={styles.wrapPromote}>
                    <Join />
                    <Text style={styles.textPromote}>Join</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
      {/* end Modal */}
    </SafeAreaView>
  );
};

export default ExploreContent;
