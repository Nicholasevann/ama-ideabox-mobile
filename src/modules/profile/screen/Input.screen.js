import React, {useEffect, useState} from 'react';
import {prefetchConfiguration} from 'react-native-app-auth';
import styles from '../style/Input.style';
import getData from '../../../components/GetData';
import {
  AuthConfig,
  defaultAuthState,
  defaulthAuthData,
} from '../../../config/Auth.cfg';
import {Camera, Cross, Notif} from '../../../assets/icon';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import axios from 'axios';
import {DatePicker} from 'react-native-woodpicker';
import ImagePicker from 'react-native-image-crop-picker';
import LoadingScreen from '../../../components/LoadingScreen';
import GetDataProfile from '../../../config/GetData/GetDataProfile';
import SuccesModal from '../../../components/SuccesModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FailedModal from '../../../components/FailedModal';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
const InputProfile = ({navigation}) => {
  const [data, setData] = useState(defaultAuthState);
  const [success, setSuccess] = useState(false);
  const [successModal, setSuccessModal] = useState(null);
  const [update, setUpdate] = useState(defaulthAuthData);
  const [pickedDate, setPickedDate] = useState(null);
  const [imageUri, setImageUri] = useState(
    require('../../../assets/image/dummyPicture2.png'),
  );
  const [profile, setProfile] = useState(null);
  const [imageCover, setImageCover] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);
  const [dataProfile, setDataProfile] = useState(null);

  // dropdown1
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [array, setArray] = useState(false);
  // dropdown1
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([]);
  // dropdown1
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([]);
  // dropdown1
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);
  const [items4, setItems4] = useState([
    {label: 'Hustler', value: 'Hustler'},
    {label: 'Hipster', value: 'Hipster'},
    {label: 'Hacker', value: 'Hacker'},
  ]);

  useEffect(() => {
    if (dataProfile === null) {
      getData().then(jsonValue => setData(jsonValue));
      prefetchConfiguration({
        warmAndPrefetchChrome: Platform.OS === 'android',
        ...AuthConfig,
      });
      if (data === defaultAuthState) {
        return <LoadingScreen />;
      }
      GetDataProfile(data.id).then(jsonValue => setDataProfile(jsonValue));
    }
  });

  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 640,
      height: 360,
      cropping: true,
    }).then(image => {
      setImageCover(image.path);
    });
  };
  const takePhotoFromLibraryProfile = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(image => {
      setImageProfile(image.path);
    });
  };

  const storeDataLdap = async () => {
    try {
      if (dataProfile.name !== '') {
        const jsonValue = JSON.stringify(dataProfile);
        await AsyncStorage.setItem('authState', jsonValue);
      }
    } catch (e) {
      console.log('failed to store data');
    }
  };

  const handlePostCover = () => {
    var formData = new FormData();
    var img = {
      uri: imageCover,
      name: 'photo.jpeg',
      type: 'image/jpeg',
    };
    formData.append('userId', dataProfile.id);
    formData.append('background', img);
    axios({
      crossDomain: true,
      method: 'post',
      url: 'https://dev-users.digitalamoeba.id/trackrecord/editbackground',
      data: formData,
      validateStatus: false,
    })
      .then((response, status) => {
        console.log('image background status', response.status);
        // setSuccessModal(response.status);
      })
      .catch(function (error) {
        console.log(error);
        // need handling error
      });
  };
  const handlePostProfile = () => {
    var formData = new FormData();
    var img = {
      uri: imageProfile,
      name: 'photo.jpeg',
      type: 'image/jpeg',
    };
    formData.append('userId', dataProfile.id);
    formData.append('pictures', img);
    axios({
      crossDomain: true,
      method: 'post',
      url: 'https://dev-users.digitalamoeba.id/trackrecord/editpicture',
      data: formData,
      validateStatus: false,
    })
      .then((response, status) => {
        console.log('foto Profile status :', response.status);
        // setSuccessModal(response.status);
      })
      .catch(function (error) {
        console.log(error);
        // need handling error
      });
  };
  const handlePost = () => {
    axios({
      crossDomain: true,
      method: 'post',
      url: 'https://dev-users.digitalamoeba.id/profile/update/',
      data: {
        id: dataProfile.id,
        name: dataProfile.name,
        nik: dataProfile.nik,
        email: dataProfile.email,
        noTelp: dataProfile.noTelp,
        tglLahir: dataProfile.tglLahir,
        namaAtasan: dataProfile.namaAtasan,
        nikAtasan: dataProfile.nikAtasan,
        anakPerusahaan: dataProfile.anakPerusahaan,
        loker: dataProfile.loker,
        regional: dataProfile.regional,
        teamStructure: dataProfile.teamStructure,
      },
      validateStatus: false,
    })
      .then((response, status) => {
        if (response.status === 200) {
          console.log('berhasil upload');
          setSuccessModal(200);
          storeDataLdap();
        }
      })
      .catch(function (error) {
        console.log(error);
        // need handling error
      });
  };
  if (dataProfile === null) {
    return <LoadingScreen />;
  }
  const getDataSuccess = data => {
    setSuccessModal(data);
  };

  //calender
  const handleText = () =>
    pickedDate ? moment(pickedDate).format('YYYY-MM-DD') : dataProfile.tglLahir;
  // pickedDate.toDateString()

  if (imageCover === null || imageProfile === null) {
    setImageCover(dataProfile.background);
    setImageProfile(dataProfile.pictures);
  }
  //name image
  // if (imageProfile !== null && profile === null) {
  //   setProfile(imageProfile.substring(imageProfile.lastIndexOf('/') + 1));
  // }

  return (
    <SafeAreaView style={styles.container}>
      {successModal === 200 ? (
        <SuccesModal
          desc={'Congrats your profile have been updated!'}
          getData={getDataSuccess}
        />
      ) : successModal !== null ? (
        <FailedModal
          desc={'Your data failed to update!'}
          getData={getDataSuccess}
        />
      ) : null}
      <ScrollView>
        {/* header */}
        <View style={styles.head}>
          <View style={styles.Button}>
            <TouchableOpacity onPress={() => navigation.replace('Profile')}>
              <Cross />
            </TouchableOpacity>
          </View>
          <View style={styles.Button}>
            <Notif />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.imageBackground}>
            <Image source={{uri: imageCover}} style={styles.backgroundImage} />
            <TouchableOpacity
              style={styles.ButtonCamera}
              onPress={() => {
                takePhotoFromLibrary();
              }}>
              <Camera />
            </TouchableOpacity>
          </View>
          <View style={styles.profilePicture}>
            <TouchableOpacity
              onPress={() => {
                takePhotoFromLibraryProfile();
              }}
              style={{position: 'absolute', bottom: 0, zIndex: 3, right: 0}}>
              <Image
                source={require('../../../assets/icon/iconcameraprofile.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </TouchableOpacity>
            <Image source={{uri: imageProfile}} style={styles.profileImage} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.h1}>PROFILE DATA</Text>
            <Text style={styles.h2}>Name</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.name}
              onChangeText={val => setDataProfile({...dataProfile, name: val})}
              // need handle ASYNCSTORAGE
            />
            <Text style={styles.h2}>NIK</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.nik}
              onChangeText={val => setDataProfile({...dataProfile, nik: val})}
            />
            <Text style={styles.h2}>Email</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.email}
              onChangeText={val => setDataProfile({...dataProfile, email: val})}
            />
            <Text style={styles.h2}>No. HP</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.noTelp}
              onChangeText={val =>
                setDataProfile({...dataProfile, noTelp: val})
              }
            />
            <Text style={styles.h2}>Date of Birth</Text>
            <DatePicker
              style={styles.input}
              value={pickedDate}
              onDateChange={val => {
                setDataProfile({
                  ...dataProfile,
                  tglLahir: moment(val).format('YYYY-MM-DD'),
                });

                setPickedDate(val);
              }}
              title="Date Picker"
              text={handleText()}
              isNullable={false}
              iosDisplay="inline"
            />
            <Text style={styles.h2}>Work Location :</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.loker}
              onChangeText={val =>
                setDataProfile({...dataProfile, tglLahir: val})
              }
            />
            <Text style={styles.h2}>Name Office Supervisor :</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.namaAtasan}
              onChangeText={val =>
                setDataProfile({...dataProfile, namaAtasan: val})
              }
            />
            <Text style={styles.h2}>NIK Supervisor :</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.nikAtasan}
              onChangeText={val =>
                setDataProfile({...dataProfile, nikAtasan: val})
              }
            />
            <Text style={styles.h1}>DETAIL</Text>
            <Text style={styles.h2}>Directorate</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.teamStructure}
              onChangeText={val =>
                setDataProfile({...dataProfile, teamStructure: val})
              }
            />
            <Text style={styles.h2}>Team Structure</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.teamStructure}
              onChangeText={val =>
                setDataProfile({...dataProfile, teamStructure: val})
              }
            />
            <Text style={styles.h2}>Skill</Text>
            <View key={'Skill'}>
              <DropDownPicker
                key={'Skill'}
                itemKey={'itemSkill'}
                open={open4}
                value={value4}
                items={items4}
                setOpen={setOpen4}
                setValue={setValue4}
                setItems={setItems4}
                style={styles.input}
                placeholder="Choose Skill"
                maxHeight={100}
                containerStyle={{zIndex: 6000}}
                listItemContainerStyle={{height: 40}}
              />
            </View>
            <Text style={[styles.h2, {marginBottom: 5}]}>CFU / FU</Text>
            <View>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.input}
                placeholder="Choose CFU/FU"
                maxHeight={100}
                listItemContainerStyle={{height: 35}}
              />
            </View>
            <Text style={styles.h2}>Category Unit</Text>
            <View>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                style={styles.input}
                placeholder="Choose Category Unit"
                maxHeight={100}
                listItemContainerStyle={{height: 35}}
              />
            </View>
            <Text style={styles.h2}>Unit</Text>
            <View>
              <DropDownPicker
                open={open3}
                value={value3}
                items={items3}
                setOpen={setOpen3}
                setValue={setValue3}
                setItems={setItems3}
                style={styles.input}
                placeholder="Choose Unit"
                maxHeight={100}
                listItemContainerStyle={{height: 35}}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                handlePost();
                handlePostProfile();
                handlePostCover();
              }}
              style={styles.button}>
              <Text style={styles.save}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InputProfile;
