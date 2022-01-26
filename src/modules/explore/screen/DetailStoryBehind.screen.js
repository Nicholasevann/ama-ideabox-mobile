import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import CardProfile from '../../../components/CardProfile';
import DetailStoryBehindDesc from '../../../components/DetailStoryBehind';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDetailIdea} from '../../../config/GetData/GetDataIdea';
import styles from '../style/Explore.style';

const DetailStoryBehind = ({route, navigation}) => {
  const data = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />

      {/* Profile */}
      <CardProfile onPress={() => navigation.goBack()} />

      {/* content */}
      <View style={styles.contentContainer}>
        {/* Header navigation */}
        <View style={styles.headerContainer2}>
          <View style={styles.headerWrapDetail}>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailIdeaUser', {data: data})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Idea Description</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrap} onPress={() => {}}>
              <View style={styles.tabBarActive}>
                <Text style={styles.textActive}>Story Behind</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailLeanCanvas', {data: data})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Lean Canvas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() => navigation.navigate('DetailTeams', {data: data})}>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Teams</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <DetailStoryBehindDesc
            why={data.gc[0].value}
            how={data.gc[1].value}
            what={data.gc[2].value}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailStoryBehind;
