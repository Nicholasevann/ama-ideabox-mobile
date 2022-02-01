import React, {useState, useEffect, useRef, useCallback} from 'react';
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
  Share,
  Image,
  RefreshControl,
} from 'react-native';
import CardContent from '../../../components/CardContent';
import SearchHeader from '../../../components/SearchHeader';
import LoadingScreen from '../../../components/LoadingScreen';
import CardComment from '../../../components/CardComment';
import {Cross, Join, Promote, TopLine} from '../../../assets/icon';
import GestureRecognizer from 'react-native-swipe-gestures';
import {useScrollToTop} from '@react-navigation/native';
import {MentionInput} from 'react-native-controlled-mentions';
import style from '../../../config/Style/style.cfg';
import {windowWidth} from '../../../components/WindowDimensions';
import axios from 'axios';
import {defaultAuthDataUser, defaultAuthState} from '../../../config/Auth.cfg';
import {GetDataIdea} from '../../../config/GetData/GetDataIdea';
import CardReplyComment from '../../../components/CardReplyComment';
import LikeIdea from '../../../config/PostData/Like';
import CommentIdea from '../../../config/PostData/Comment';
import SuccesModal from '../../../components/SuccesModal';
import getData from '../../../components/GetData';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const ExploreContent = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [idLike, setIdLike] = useState(null);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [modalComment, setModalComment] = useState(false);
  const [modalJoinVisible, setModalJoinVisible] = useState(false);
  const [modalPromoteVisible, setModalPromoteVisible] = useState(false);
  const [modalBottom, setModalBottom] = useState(false);
  const [hasil, setHasil] = useState('');
  const [value, setValue] = useState('');
  const [idIdea, setIdIdea] = useState(0);
  const [idComment, setIdComment] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [like, setLike] = useState(null);
  const [success, setSuccess] = useState(null);
  const [dataAsync, setDataAsync] = useState(defaultAuthState);
  const [imageLike, setImageLike] = useState(
    require('../../../assets/icon/loveFalse.png'),
  );
  const [refreshing, setRefreshing] = useState(false);
  const [comment, setComment] = useState('');
  const getDataIdea = dataSearch => {
    setHasil(dataSearch);
  };

  useEffect(() => {
    // setData(getDataIdea());
    if (data === null) {
      getData().then(jsonValue => setDataAsync(jsonValue));
      GetDataIdea().then(response => setData(response));
    }
  });
  const ref = useRef(null);
  useScrollToTop(ref);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const suggestions = [
    {id: '1', name: 'David Tabaka'},
    {id: '2', name: 'Mary'},
    {id: '3', name: 'Tony'},
    {id: '4', name: 'Mike'},
    {id: '5', name: 'Grey'},
  ];
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const handleLike = id => {
    LikeIdea(id, dataAsync.id).then(val => setLike(val));
  };
  const handleComment = text => {
    CommentIdea(idComment, text, dataAsync.id).then(val => setSuccess(val));
  };
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
  if (data === null) {
    return <LoadingScreen />;
  }
  const getDataSuccess = data => {
    setSuccess(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      {success === 200 ? (
        <SuccesModal
          desc={'Your comment have been added!'}
          getData={getDataSuccess}
        />
      ) : null}
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
        getData={getDataIdea}
        placeholder={'Search an Idea ...'}
      />
      <ScrollView
        ref={ref}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
          .map((val, index) => {
            if (like === 'Like Idea sucessfully') {
              if (imageLike !== require('../../../assets/icon/loveTrue.png')) {
                setImageLike(require('../../../assets/icon/loveTrue.png'));
              }
            } else if (like === 'Unlike Idea sucessfully') {
              if (imageLike !== require('../../../assets/icon/loveFalse.png')) {
                setImageLike(require('../../../assets/icon/loveFalse.png'));
              }
            }

            return (
              <View key={index}>
                <CardContent
                  clickLike={() => {
                    handleLike(val.id);
                  }}
                  name={val.user.name}
                  title={val.desc[0].value}
                  desc={val.desc[2].value}
                  like={imageLike}
                  likedBy={val.totalLike}
                  cover={val.desc[1].value}
                  more={() =>
                    navigation.navigate('DetailIdeaUser', {data: val})
                  }
                  comment={() => {
                    setModalComment(true);
                    setIdIdea(index);
                    setIdComment(val.id);
                    setIdUser(data.id);
                  }}
                  share={() => onShare()}
                  join={() => setModalJoinVisible(true)}
                  promote={() => setModalPromoteVisible(true)}
                  morePromote={() => setModalBottom(true)}
                  onProfile={() =>
                    navigation.navigate('ProfileUser', {data: val})
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
              <Text style={styles.totalComment}>
                Total Comment ({data[idIdea].totalComment})
              </Text>
              <TouchableOpacity onPress={() => setModalComment(false)}>
                <Cross />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.contentModal}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              {data[idIdea].comment.map(val => {
                return (
                  <View>
                    <CardComment desc={val.comment} name={val.createdBy.name} />
                    {val.replyComment.map(val => {
                      return (
                        <CardReplyComment
                          desc={val.comment}
                          name={val.createdBy.name}
                        />
                      );
                    })}
                    <View
                      style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: '#E5E5E5',
                        marginVertical: 10,
                      }}
                    />
                  </View>
                );
              })}
            </ScrollView>
            <View style={{height: 100}} />
          </View>

          <View style={styles.textInputContainer}>
            <View style={styles.textInputWrap}>
              <View style={styles.textInputRow}>
                <View style={{flex: 7}}>
                  <MentionInput
                    value={comment}
                    onChange={setComment}
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

                <TouchableOpacity
                  onPress={() => handleComment(comment)}
                  style={styles.buttonSend}>
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
              <View style={{flex: 1}}>
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
                    Sebelum kamu memutuskan untuk mempromosikan inovasi kamu
                    harus melengkapi beberapa informasi dibawah agar komunikasi
                    diluar website ideabox berjalan dengan lancar, good luck !
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
          <ScrollView>
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
          </ScrollView>
        </Modal>
      </GestureRecognizer>
      {/* end Modal */}
    </SafeAreaView>
  );
};

export default ExploreContent;
