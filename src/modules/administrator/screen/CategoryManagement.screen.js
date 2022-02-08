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
import {SwipeListView} from 'react-native-swipe-list-view';
import {Cross, EditCategory, Eye, Trash} from '../../../assets/icon';
import CardCategoryManagement from '../../../components/CardCategoryManagement';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import SuccesModal from '../../../components/SuccesModal';
import DeleteCategoryManagement from '../../../config/DeleteData/DeleteCategoryManagement';
import {GetDataCategoryManagement} from '../../../config/GetData/GetDataAdministrator';
import UpdateCategory from '../../../config/PostData/UpdateCategory';
import style from '../../../config/Style/style.cfg';
import styles from '../style/Administrator.style';
const CategoryManagement = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [dataCategoryManagement, setDataCategoryManagement] = useState(null);
  const [deleteSelected, setDeleteSelected] = useState(null);
  const [editSelected, setEditSelected] = useState(null);
  const [success, setSuccess] = useState(null);
  const [update, setUpdate] = useState(null);
  const data = require('../data/dataCategoryManagement.json');

  // search
  const [filterData, setFilterData] = useState([]);
  const getDataIdea = dataSearch => {
    searchFilter(dataSearch);
  };

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
    if (dataCategoryManagement === null) {
      GetDataCategoryManagement().then(response => {
        setDataCategoryManagement(response);
        setFilterData(response);
      });
    }
  }, []);
  useEffect(() => {
    GetDataCategoryManagement().then(response => {
      setDataCategoryManagement(response);
      setFilterData(response);
    });
  }, [success]);
  if (dataCategoryManagement === null) {
    return <LoadingScreen />;
  }
  const handleDelete = () => {
    DeleteCategoryManagement(deleteSelected).then(val => setSuccess(val));
  };
  const handleUpdate = () => {
    UpdateCategory().then(val => setUpdate(val));
  };
  const getDataSuccess = data => {
    setSuccess(data);
  };
  const getDataUpdate = data => {
    setUpdate(data);
  };
  // const getDataIdea = dataSearch => {
  //   searchFilter(dataSearch);
  // };
  const searchFilter = text => {
    if (text) {
      const newData = dataCategoryManagement.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    } else {
      setFilterData(dataCategoryManagement);
    }
  };
  console.log(update);
  console.log(editSelected);
  return (
    <SafeAreaView style={styles.container}>
      {success === 200 ? (
        <SuccesModal
          desc={'Your data idea management have been deleted!'}
          getData={getDataSuccess}
        />
      ) : update === 200 ? (
        <SuccesModal
          desc={'Your data idea management have been updated!'}
          getData={getDataUpdate}
        />
      ) : null}
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
        getData={getDataIdea}
        placeholder={'Search a Category ...'}
      />
      {/* <TextInput
        style={styles.textInputStyle}
        value={search}
        placeholder="Search Item"
        underlineColorAndroid="transparent"
        onChangeText={text => searchFilter(text)}
      /> */}
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
        {/* <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setModalAddVisible(true)}>
            <View style={styles.icon}>
              <Image
                source={require('../../../assets/icon/plusAdmin.png')}
                style={styles.imageAdmin}
              />
            </View>
          </TouchableOpacity>
        </View> */}

        {/* Popup Add category */}
        {/* <Modal
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
        </Modal> */}
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
                    placeholder={'Select a parent category'}
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
                    placeholder={'Select a type category'}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      handleUpdate();
                      setModalVisible(false);
                    }}>
                    <Text style={styles.save}>SAVE</Text>
                  </TouchableOpacity>
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
                    <TouchableOpacity
                      style={styles.buttondelete}
                      onPress={() => {
                        handleDelete();
                        setModalDeleteVisible(false);
                      }}>
                      <Text style={styles.save}>Hapus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.buttoncancel}
                      onPress={() => setModalDeleteVisible(false)}>
                      <Text style={styles.save}>Batal</Text>
                    </TouchableOpacity>
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
          <SwipeListView
            data={filterData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <View>
                  {item.activeFlag === '1' ? (
                    <CardCategoryManagement
                      id={index + 1}
                      title={item.name}
                      status={item.activeFlag}
                    />
                  ) : null}
                </View>
              );
            }}
            renderHiddenItem={({item}) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DetailCategory', {data: item})
                  }
                  style={[styles.backRightBtn, styles.backRightBtnRight3]}>
                  <Eye />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                    setEditSelected(item.id);
                  }}
                  style={[styles.backRightBtn, styles.backRightBtnRight2]}>
                  <EditCategory />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setDeleteSelected(item.id);
                    setModalDeleteVisible(true);
                  }}
                  style={[styles.backRightBtn, styles.backRightBtnRight]}>
                  <Trash />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-225}
            leftOpenValue={0}
          />
          {/* <FlatList
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
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoryManagement;
