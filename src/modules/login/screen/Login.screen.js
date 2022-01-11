import React, {useState, useEffect, useCallback} from 'react';
import {
  NativeBaseProvider,
  Text,
  Heading,
  VStack,
  FormControl,
  Button,
} from 'native-base';
import {authorize, prefetchConfiguration} from 'react-native-app-auth';
import {View, Alert, Platform, TextInput} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {IconEmail, IconPassword} from '../../../assets/icon/Icon';
import {IconGit} from '../../../assets/icon';
import {FontTampilan} from '../../../assets/font/Font';
import styles from '../style/Login.style';
import {
  AuthConfig,
  defaultAuthState,
  defaultAuthStateLogin,
} from '../../../config/Auth.cfg';
import getData from '../../../components/GetData';
import CheckBox from '@react-native-community/checkbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LoadingScreen from '../../../components/LoadingScreen';

export default function App({navigation}) {
  const [authState, setAuthState] = useState(defaultAuthState);
  const [data, setData] = useState(defaultAuthState);
  const [ldap, setLdap] = useState(defaultAuthStateLogin);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const expiredCheck = () => {
    if (data.expireAt > moment().unix()) {
      navigation.navigate('DrawerNavigation');
    }
    //expired
    else {
      navigation.navigate('Login');
    }
  };

  const storeData = async () => {
    try {
      if (authState.name !== '') {
        const jsonValue = JSON.stringify(authState);
        await AsyncStorage.setItem('authState', jsonValue);
        setData(authState);
      }
    } catch (e) {
      console.log('failed to store data');
    }
  };

  const handleAuthorize = useCallback(async () => {
    try {
      const newAuthState = await authorize(AuthConfig);
      axios({
        crossDomain: true,
        method: 'post',
        url: 'http://user.desasembung.com/authorize/sso/mobile',
        data: {
          access_token: newAuthState.accessToken,
        },
        validateStatus: false,
      })
        .then(function ({status, data}) {
          if (status === 200) {
            setAuthState({
              hasLoggedInOnce: true,
              ...data.data,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          // need handling error
        });
    } catch (error) {
      Alert.alert('Failed to log in', error.message);
    }
  }, [storeData()]);

  useEffect(() => {
    let isSubscribed = true;
    getData().then(jsonValue => {
      if (isSubscribed) {
        setData(jsonValue);
      }
    });
    prefetchConfiguration({
      warmAndPrefetchChrome: Platform.OS === 'android',
      ...AuthConfig,
    });
    return () => (isSubscribed = false);
  }, []);

  useEffect(() => {
    expiredCheck();
  }, [data]);
  return (
    <NativeBaseProvider theme={FontTampilan}>
      <View style={styles.container}>
        <Heading style={styles.headLogin}>Login</Heading>
        <Heading style={styles.headWelcome} mt="3">
          Welcome, please login to your account
        </Heading>
        <VStack mt="30" width="80%">
          <FormControl>
            <IconEmail />
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#FFFFFF"
              onChangeText={value => setLdap({...ldap, email: value})}
              value={ldap.email}
            />
          </FormControl>
          <FormControl>
            <IconPassword />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#FFFFFF"
              onChangeText={value => setLdap({...ldap, password: value})}
              value={ldap.password}
            />
          </FormControl>
          {toggleCheckBox === true ? (
            <Button
              mt="20"
              style={styles.button}
              _text={{color: '#085D7A', fontWeight: '700'}}
              onPress={() => {}}>
              Login
            </Button>
          ) : (
            <Button
              mt="20"
              style={styles.buttonNonActive}
              _text={{color: '#085D7A', fontWeight: '700'}}>
              Login
            </Button>
          )}

          <View style={styles.center}>
            <Text style={styles.or}>-OR-</Text>
          </View>
          {toggleCheckBox === true ? (
            <Button
              style={styles.button}
              _text={{color: '#085D7A', fontWeight: '700'}}
              onPress={() => handleAuthorize()}
              leftIcon={<IconGit />}>
              Login with GIT
            </Button>
          ) : (
            <Button
              style={styles.buttonNonActive}
              _text={{color: '#085D7A', fontWeight: '700'}}
              leftIcon={<IconGit />}>
              Login with GIT
            </Button>
          )}

          <View style={styles.rowterm}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              onCheckColor="red"
            />

            <Text style={styles.term}>
              Please read the{' '}
              <Text style={{color: '#F9CC2C', textDecorationLine: 'underline'}}>
                Terms of Conditions
              </Text>{' '}
              and{' '}
              <Text
                onPress={() => {
                  navigation.navigate('PrivacyPolicy');
                }}
                style={{color: '#F9CC2C', textDecorationLine: 'underline'}}>
                Privacy Policy.
              </Text>
            </Text>
          </View>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}
