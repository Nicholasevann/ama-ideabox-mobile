import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useState} from 'react/cjs/react.development';
import CardProfile from '../../../components/CardProfile';
import DetailLeanCanvasDesc from '../../../components/DetailLeanCanvasDesc';
import Header from '../../../components/Header';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDetailIdea} from '../../../config/GetData/GetDataIdea';
import styles from '../style/Explore.style';

const DetailLeanCanvas = ({route, navigation}) => {
  const data = route.params.data;
  const item = route.params.item;
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />

      {/* Profile */}
      {item.user.pictures === '' ? (
        <CardProfile
          onPress={() => navigation.goBack()}
          profile={() => navigation.navigate('ProfileUser', {data: item})}
          image={require('../../../assets/image/profilepicture2.jpg')}
          name={data.user[0].name}
          nik={data.user[0].nik}
        />
      ) : (
        <CardProfile
          onPress={() => navigation.goBack()}
          profile={() => navigation.navigate('ProfileUser', {data: item})}
          image={{uri: item.user.pictures}}
          name={data.user[0].name}
          nik={data.user[0].nik}
        />
      )}

      {/* content */}
      <View style={styles.contentContainer}>
        {/* Header navigation */}
        <View style={styles.headerContainer2}>
          <View style={styles.headerWrapDetail}>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailIdeaUser', {data: data, item: item})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Idea Description</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailStoryBehind', {
                  data: data,
                  item: item,
                })
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Story Behind</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrap} onPress={() => {}}>
              <View style={styles.tabBarActive}>
                <Text style={styles.textActive}>Lean Canvas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailTeams', {data: data, item: item})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Teams</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <DetailLeanCanvasDesc
            customer={data.lc[0].value}
            problem={data.lc[1].value}
            existing={data.lc[2].value}
            unique={data.lc[3].value}
            proposed={data.lc[4].value}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailLeanCanvas;
