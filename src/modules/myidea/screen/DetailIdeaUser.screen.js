import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import CardProfile from '../../../components/CardProfile';
import DetailIdeaDesc from '../../../components/DetailIdeaDesc';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDetailIdea} from '../../../config/GetData/GetDataIdea';
import styles from '../style/MyIdea.style';
const DetailIdeaUser = ({route, navigation}) => {
  const [detailIdea, setDetailIdea] = useState(null);
  const data = route.params.data;
  useEffect(() => {
    if (data === null) {
      return <LoadingScreen />;
    }
    GetDetailIdea(data.id).then(response => setDetailIdea(response));
  }, [data]);
  if (detailIdea === null) {
    return <LoadingScreen />;
  }
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
            <TouchableOpacity style={styles.wrap} onPress={() => {}}>
              <View style={styles.tabBarActive}>
                <Text style={styles.textActive}>Idea Description</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailStoryBehind', {data: detailIdea})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Story Behind</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailLeanCanvas', {data: detailIdea})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Lean Canvas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailTeams', {data: detailIdea})
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Teams</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <DetailIdeaDesc
            title={detailIdea.desc[0].value}
            perusahaan={detailIdea.CFUFU[0].name}
            desc={detailIdea.desc[2].value}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailIdeaUser;
