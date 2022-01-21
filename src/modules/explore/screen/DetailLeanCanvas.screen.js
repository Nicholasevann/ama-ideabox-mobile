import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import CardProfile from '../../../components/CardProfile';
import DetailLeanCanvasDesc from '../../../components/DetailLeanCanvasDesc';
import SearchHeader from '../../../components/SearchHeader';
import styles from '../style/Explore.style';

const DetailLeanCanvas = ({route, navigation}) => {
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
            <TouchableOpacity style={styles.wrap} onPress={() => {}}>
              <View style={styles.tabBarActive}>
                <Text style={styles.textActive}>Lean Canvas</Text>
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
