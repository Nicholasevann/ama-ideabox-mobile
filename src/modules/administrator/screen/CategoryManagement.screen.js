import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Cross} from '../../../assets/icon';
import CardCategoryManagement from '../../../components/CardCategoryManagement';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDataCategoryManagement} from '../../../config/GetData/GetDataAdministrator';
import style from '../../../config/Style/style.cfg';
import styles from '../style/Administrator.style';
const CategoryManagement = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [dataCategoryManagement, setDataCategoryManagement] = useState(null);
  const data = require('../data/dataCategoryManagement.json');

  // dropdown1
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Area Inovasi', value: 'area'},
    {label: 'Category Idea', value: 'category'},
  ]);
  // dropdown2
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'CHILD', value: 'child'},
    {label: 'PARENT', value: 'parent'},
  ]);

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
          <TouchableOpacity style={styles.wrap} onPress={() => {}}>
            <View style={styles.tabBarActive}>
              <Text style={styles.textActive}>Category Management</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrap}
            onPress={() => navigation.navigate('IdeaManagement')}>
            <View style={styles.tabBar}>
              <Text style={styles.textNonActive}>Idea Management</Text>
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
          <TouchableOpacity onPress={() => setModalAddVisible(true)}>
            <View style={styles.icon}>
              <Image
                source={require('../../../assets/icon/plusAdmin.png')}
                style={styles.imageAdmin}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Popup Add category */}
        <Modal
          animationType="none"
          transparent={true}
          visible={modalAddVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalAddVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.centeredcontainer}>
              <View style={styles.modalView}>
                <View style={styles.titleContainer}>
                  <Text style={styles.textEdit}>Add Category</Text>
                  <TouchableOpacity onPress={() => setModalAddVisible(false)}>
                    <Cross />
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.h2}>Category Name :</Text>
                  <TextInput
                    style={styles.input}
                    // value={''}
                    // onChangeText={() => { }}
                  />
                  <Text style={styles.h2}>Parent Category :</Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.input}
                  />
                  <Text style={styles.h2}>Type Category :</Text>
                  <DropDownPicker
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    style={styles.input}
                  />
                  <TouchableOpacity
                    onPress={() => setModalAddVisible(false)}
                    style={styles.button}>
                    <Text style={styles.save}>SAVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* EndPopup */}

        {/* Popup Edit category */}
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
                  <Text style={styles.textEdit}>Edit Category</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Cross />
                  </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.h2}>Category Name :</Text>
                  <TextInput
                    style={styles.input}
                    // value={''}
                    // onChangeText={() => { }}
                  />
                  <Text style={styles.h2}>Parent Category :</Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.input}
                  />
                  <Text style={styles.h2}>Type Category :</Text>
                  <DropDownPicker
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    style={styles.input}
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

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                No.
              </Text>
            </View>
            <View style={styles.email}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Category Name
              </Text>
            </View>
            <View style={styles.title}>
              <Text
                style={[style.h5, {textAlign: 'center', fontWeight: 'bold'}]}>
                Status
              </Text>
            </View>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={dataCategoryManagement}
            renderItem={({item, index}) => {
              return (
                <ScrollView>
                  <CardCategoryManagement
                    onPress={() =>
                      navigation.navigate('DetailCategory', {data: item})
                    }
                    edit={() => setModalVisible(true)}
                    delete={() => setModalDeleteVisible(true)}
                    id={item.id}
                    title={item.name}
                    status={item.activeFlag}
                  />
                </ScrollView>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryManagement;
