import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {BackBlue, Cross} from '../../../assets/icon';
import SearchHeader from '../../../components/SearchHeader';
import styles from '../style/Event.style';
import style from '../../../config/Style/style.cfg';
const DetailEventCategory = ({navigation, route}) => {
  const data = route.params.data;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalSubmitVisible, setModalSubmitVisible] = useState(false);
  // dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      {/* Awal Modal */}
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
                <Text style={styles.textEdit}>Join Event</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={style.h5}>
                  Untuk mengikuti event ini, kamu harus memilih ide kamu mana
                  yang akan kamu ikut sertakan:
                </Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.input}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(false);
                    setModalSubmitVisible(true);
                  }}>
                  <Text style={styles.save}>JOIN NOW</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* End Modal */}
      {/* Popup submit  */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalSubmitVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalSubmitVisible(!modalSubmitVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.centeredcontainer}>
            <View style={styles.modalView}>
              <View style={styles.titleContainer}>
                <Text style={styles.textEdit}>Delete User</Text>
                <TouchableOpacity onPress={() => setModalSubmitVisible(false)}>
                  <Cross />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={style.h5}>
                  Apakah kamu yakin ingin mengikut sertakan inovasimu di event
                  ini?
                </Text>
                <View style={styles.rowDelete}>
                  <TouchableOpacity
                    onPress={() => setModalSubmitVisible(false)}
                    style={styles.buttondelete}>
                    <Text style={styles.save}>Yakin</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttoncancel}
                    onPress={() => setModalSubmitVisible(false)}>
                    <Text style={styles.batal}>Batal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* EndPopup */}

      {/* Content */}
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />
      <View style={styles.content}>
        <ScrollView>
          <Image
            source={{
              uri: data.image,
            }}
            style={styles.imageContent}
          />
          <View style={styles.textWrap}>
            <View style={styles.titleWrap}>
              <Text style={style.h4}>{data.name}</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackBlue />
              </TouchableOpacity>
            </View>
            <Text style={styles.date}>Tanggal Acara : {data.date}</Text>
            <Text style={style.h5}>{data.description}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <View style={styles.buttonJoin}>
            <Text style={styles.save}>Join Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailEventCategory;
