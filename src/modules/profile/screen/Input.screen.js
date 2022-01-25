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
const InputProfile = ({navigation}) => {
  const [data, setData] = useState(defaultAuthState);
  const [update, setUpdate] = useState(defaulthAuthData);
  const [pickedDate, setPickedDate] = useState([]);
  const [imageUri, setImageUri] = useState(
    require('../../../assets/image/dummyPicture2.png'),
  );
  const [image, setImage] = useState(
    'https://reactnative.dev/img/tiny_logo.png',
  );
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
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData().then(jsonValue => setData(jsonValue));
      prefetchConfiguration({
        warmAndPrefetchChrome: Platform.OS === 'android',
        ...AuthConfig,
      });
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:8080/profile/?id=3')
      .then(response => {
        setUpdate(response.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handlePost = () => {
    axios({
      crossDomain: true,
      method: 'post',
      url: 'http://10.0.2.2:8080/profile/update/',
      data: {
        id: 3,
        name: update.name,
        email: update.email,
        noTelp: update.noTelp,
        tglLahir: update.tglLahir,
        namaAtasan: update.namaAtasan,
        nikAtasan: update.nikAtasan,
        anakPerusahaan: update.anakPerusahaan,
        loker: update.loker,
        regional: update.regional,
        teamStructure: update.teamStructure,
      },
      validateStatus: false,
    })
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        // need handling error
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* header */}
        <View style={styles.head}>
          <View style={styles.Button}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
            <Text style={styles.h1}>PROFILE DATA DIRI</Text>
            <Text style={styles.h2}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              value={update.name}
              onChangeText={val => setUpdate({...update, name: val})}
              // need handle ASYNCSTORAGE
            />
            <Text style={styles.h2}>NIK</Text>
            <TextInput
              style={styles.input}
              value={update.nik}
              onChangeText={val => setUpdate({...update, nik: val})}
            />
            <Text style={styles.h2}>Email</Text>
            <TextInput
              style={styles.input}
              value={update.email}
              onChangeText={val => setUpdate({...update, email: val})}
            />
            <Text style={styles.h2}>Nomor HP</Text>
            <TextInput
              style={styles.input}
              value={update.noTelp}
              onChangeText={val => setUpdate({...update, noTelp: val})}
            />
            <Text style={styles.h2}>Tanggal Lahir</Text>
            {/* <TextInput
              style={styles.input}
              value={update.tglLahir}
              onChangeText={val => setUpdate({ ...update, tglLahir: val })}
            /> */}
            <DatePicker
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
            />
            <Text style={styles.h1}>DETAIL</Text>
            <Text style={styles.h2}>Nama Atasan</Text>
            <TextInput
              style={styles.input}
              value={update.namaAtasan}
              onChangeText={val => setUpdate({...update, namaAtasan: val})}
            />
            <Text style={styles.h2}>NIK Atasan</Text>
            <TextInput
              style={styles.input}
              value={update.nikAtasan}
              onChangeText={val => setUpdate({...update, nikAtasan: val})}
            />
            <Text style={styles.h2}>
              Unit( Anak Perusahaan atau direktorat )
            </Text>
            <TextInput
              style={styles.input}
              value={update.anakPerusahaan}
              onChangeText={val => setUpdate({...update, anakPerusahaan: val})}
            />
            <Text style={styles.h2}>Lokasi Kerja</Text>
            <TextInput
              style={styles.input}
              value={update.loker}
              onChangeText={val => setUpdate({...update, loker: val})}
            />
            <Text style={styles.h2}>Area</Text>
            <TextInput
              style={styles.input}
              value={update.regional}
              onChangeText={val => setUpdate({...update, regional: val})}
            />
            <Text style={styles.h2}>Struktur Tim</Text>
            <TextInput
              style={styles.input}
              value={update.teamStructure}
              onChangeText={val => setUpdate({...update, teamStructure: val})}
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
