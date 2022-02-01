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
const InputProfile = ({navigation}) => {
  const [data, setData] = useState(defaultAuthState);
  const [success, setSuccess] = useState(false);
  const [successModal, setSuccessModal] = useState(null);
  const [failed, setFailed] = useState(false);
  const [update, setUpdate] = useState(defaulthAuthData);
  const [pickedDate, setPickedDate] = useState([]);
  const [imageUri, setImageUri] = useState(
    require('../../../assets/image/dummyPicture2.png'),
  );
  const [image, setImage] = useState(
    'https://reactnative.dev/img/tiny_logo.png',
  );
  const [dataProfile, setDataProfile] = useState(null);
  const takePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 640,
      height: 360,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
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
        console.log(response.status);
        if (response.status === 200) {
          console.log('berhasil');
          setSuccessModal(200);
          storeDataLdap();
        } else {
          setSuccessModal(-1);
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
  // console.log(dataProfile);
  return (
    <SafeAreaView style={styles.container}>
      {successModal === 200 ? (
        <SuccesModal
          desc={'Congrats your profile have been updated!'}
          getData={getDataSuccess}
        />
      ) : successModal === -1 ? (
        <FailedModal desc={'Your data failed to update!'} />
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
            <Image source={{uri: image}} style={styles.backgroundImage} />
            <TouchableOpacity
              style={styles.ButtonCamera}
              onPress={takePhotoFromLibrary}>
              <Camera />
            </TouchableOpacity>
          </View>
          <View style={styles.profilePicture}>
            <Image
              source={require('../../../assets/image/profilepicture.jpg')}
              style={styles.profileImage}
            />
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
            <TextInput
              style={styles.input}
              value={dataProfile.tglLahir}
              onChangeText={val =>
                setDataProfile({...dataProfile, tglLahir: val})
              }
            />
            {/* <DatePicker
              value={pickedDate}
              onDateChange={val => setPickedDate(val)}
              style={styles.input}
              title="Date Picker"
              text={pickedDate}
              isNullable={false}
              backdropAnimation={{opacity: 0}}
              maximumDate={new Date(Date.now())}
              iosMode="date"
              androidMode="countdown"
              androidDisplay="spinner"
              locale="fr"
            /> */}
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
            {/* <Text style={styles.h2}>Nama Atasan</Text>
            
            <Text style={styles.h2}>NIK Atasan</Text> */}

            <Text style={styles.h2}>
              Unit( Anak Perusahaan atau direktorat )
            </Text>
            <TextInput
              style={styles.input}
              value={dataProfile.anakPerusahaan}
              onChangeText={val =>
                setDataProfile({...dataProfile, anakPerusahaan: val})
              }
            />
            <Text style={styles.h2}>Lokasi Kerja</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.loker}
              onChangeText={val => setDataProfile({...dataProfile, loker: val})}
            />
            <Text style={styles.h2}>Area</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.regional}
              onChangeText={val =>
                setDataProfile({...dataProfile, regional: val})
              }
            />
            <Text style={styles.h2}>Struktur Tim</Text>
            <TextInput
              style={styles.input}
              value={dataProfile.teamStructure}
              onChangeText={val =>
                setDataProfile({...dataProfile, teamStructure: val})
              }
            />
            <TouchableOpacity
              onPress={() => {
                handlePost();
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
