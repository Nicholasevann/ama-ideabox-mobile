import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import CardProfile from '../../../components/CardProfile';
import DetailIdeaDesc from '../../../components/DetailIdeaDesc';
import Header from '../../../components/Header';
import LoadingScreen from '../../../components/LoadingScreen';
import SearchHeader from '../../../components/SearchHeader';
import {GetDetailIdea} from '../../../config/GetData/GetDataIdea';
import styles from '../style/MyIdea.style';
const DetailIdeaUser = ({route, navigation}) => {
  const [detailIdea, setDetailIdea] = useState(null);
  const data = route.params.data;
  const item = route.params.item;
  useEffect(() => {
    if (detailIdea === null) {
      if (data === null) {
        return <LoadingScreen />;
      }
      GetDetailIdea(data.id).then(response => setDetailIdea(response));
    }
  });
  if (detailIdea === null) {
    return <LoadingScreen />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />

      {/* Profile */}
      {item.createdBy.pictures === '' ? (
        <CardProfile
          onPress={() => navigation.goBack()}
          profile={() => navigation.navigate('ProfileUser', {data: item})}
          image={require('../../../assets/image/profilepicture2.jpg')}
          name={detailIdea.user[0].name}
          nik={detailIdea.user[0].nik}
        />
      ) : (
        <CardProfile
          onPress={() => navigation.goBack()}
          profile={() => navigation.navigate('ProfileUser', {data: item})}
          image={{uri: item.createdBy.pictures}}
          name={detailIdea.user[0].name}
          nik={detailIdea.user[0].nik}
        />
      )}

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
                navigation.navigate('DetailStoryBehind', {
                  data: detailIdea,
                  item: item,
                })
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Story Behind</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailLeanCanvas', {
                  data: detailIdea,
                  item: item,
                })
              }>
              <View style={styles.tabBar}>
                <Text style={styles.textNonActive}>Lean Canvas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wrap}
              onPress={() =>
                navigation.navigate('DetailTeams', {
                  data: detailIdea,
                  item: item,
                })
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
