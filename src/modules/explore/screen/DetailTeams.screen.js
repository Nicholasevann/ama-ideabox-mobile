import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CardDetailTeamDesc from '../../../components/CardDetailTeamsDesc';
import CardProfile from '../../../components/CardProfile';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDetailIdea} from '../../../config/GetData/GetDataIdea';
import styles from '../style/Explore.style';
const DetailTeams = ({route, navigation}) => {
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
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailStoryBehind', {data: data})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Story Behind</Text>
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
            <TouchableOpacity style={styles.wrap} onPress={() => {}}>
              <View style={styles.tabBarActive}>
                <Text style={styles.textActive}>Teams</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.titleContent}>
            <View style={styles.email}>
              <Text>No</Text>
            </View>
            <View style={styles.title}>
              <Text>Nama</Text>
            </View>
            <View style={styles.title}>
              <Text>NIP</Text>
            </View>
            <View style={styles.title}>
              <Text>CFU/FU</Text>
            </View>
          </View>
          <ScrollView>
            {data.approval.map((val, index) => {
              return (
                <CardDetailTeamDesc
                  number={index + 1}
                  name={val.approvalTo.name}
                  nip={val.approvalTo.id}
                  cfu={val.approvalTo.cfufuName}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailTeams;
