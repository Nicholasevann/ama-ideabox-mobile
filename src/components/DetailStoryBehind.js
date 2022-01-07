import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const DetailStoryBehindDesc = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.h2}>Why</Text>
        <View style={styles.box}>
          <ScrollView>
            <Text style={styles.text}>
              Sistem keuangan ini menjadi jantung dari korporasi tersebut,
              sehingga apabila sistem keuangan ini tidak mampu dibangun dengan
              basis integritas yang memadai, maka risiko korporasi tersebut
              tidak hanya berkaitan dengan kejahatan pencucian dan kejahatan
              asalnya saja, tetapi juga kerentanan alas segala bentuk
              penyalahgunaan sistem keuangan (abuse of financial system) yang
              dapat berujung pada kerugian dan kegagalan korporasi tersebut.
              Penerapan strategi-strategi tersebut, tidak boleh diartikan hanya
              sebatas beban kepatuhan (compliance rule), tetapi harus diletakkan
              pada satu pemahaman bahwa penerapan strategi ini justru memberikan
              perlindungan hukum dengan dampak ekonomis siginifikan bagi
              korporasi itu sendiri. Sebab, dampak negatif yang ditimbulkan dari
              penyalahgunaan sistem keuangan korporasi tidak hanya sebatas
              kerugian korporasi itu saja, namun mengakibatkan stabilitas makro
              ekonomi akan terganggu karena merupakan bagian dari ekosistem
              keuangan yang ada.
            </Text>
          </ScrollView>
        </View>
        <Text style={styles.h2}>How</Text>
        <View style={styles.box}>
          <ScrollView>
            <Text style={styles.text}>
              Sistem keuangan ini menjadi jantung dari korporasi tersebut,
              sehingga apabila sistem keuangan ini tidak mampu dibangun dengan
              basis integritas yang memadai, maka risiko korporasi tersebut
              tidak hanya berkaitan dengan kejahatan pencucian dan kejahatan
              asalnya saja, tetapi juga kerentanan alas segala bentuk
              penyalahgunaan sistem keuangan (abuse of financial system) yang
              dapat berujung pada kerugian dan kegagalan korporasi tersebut.
              Penerapan strategi-strategi tersebut, tidak boleh diartikan hanya
              sebatas beban kepatuhan (compliance rule), tetapi harus diletakkan
              pada satu pemahaman bahwa penerapan strategi ini justru memberikan
              perlindungan hukum dengan dampak ekonomis siginifikan bagi
              korporasi itu sendiri. Sebab, dampak negatif yang ditimbulkan dari
              penyalahgunaan sistem keuangan korporasi tidak hanya sebatas
              kerugian korporasi itu saja, namun mengakibatkan stabilitas makro
              ekonomi akan terganggu karena merupakan bagian dari ekosistem
              keuangan yang ada.
            </Text>
          </ScrollView>
        </View>
        <Text style={styles.h2}>What</Text>
        <View style={styles.box}>
          <ScrollView>
            <Text style={styles.text}>
              Sistem keuangan ini menjadi jantung dari korporasi tersebut,
              sehingga apabila sistem keuangan ini tidak mampu dibangun dengan
              basis integritas yang memadai, maka risiko korporasi tersebut
              tidak hanya berkaitan dengan kejahatan pencucian dan kejahatan
              asalnya saja, tetapi juga kerentanan alas segala bentuk
              penyalahgunaan sistem keuangan (abuse of financial system) yang
              dapat berujung pada kerugian dan kegagalan korporasi tersebut.
              Penerapan strategi-strategi tersebut, tidak boleh diartikan hanya
              sebatas beban kepatuhan (compliance rule), tetapi harus diletakkan
              pada satu pemahaman bahwa penerapan strategi ini justru memberikan
              perlindungan hukum dengan dampak ekonomis siginifikan bagi
              korporasi itu sendiri. Sebab, dampak negatif yang ditimbulkan dari
              penyalahgunaan sistem keuangan korporasi tidak hanya sebatas
              kerugian korporasi itu saja, namun mengakibatkan stabilitas makro
              ekonomi akan terganggu karena merupakan bagian dari ekosistem
              keuangan yang ada.{' '}
            </Text>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailStoryBehindDesc;
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'justify',
  },
  textnoedit: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#DBDBDB',
    borderColor: '#085D7A',
    marginBottom: 10,
    color: 'black',
    height: 20,
    fontSize: 12,
    paddingLeft: 7,
    paddingTop: 2,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#085D7A',
  },
  box: {
    height: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
});
