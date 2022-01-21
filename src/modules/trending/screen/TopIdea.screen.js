import React, {useState, useEffect, useRef} from 'react';
import styles from '../style/TopIdea.style';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import {
  CardProductiveTrending,
  CardTopTrending,
} from '../../../components/CardTrending';
import SearchHeader from '../../../components/SearchHeader';
import CardFilterTrending from '../../../components/CardFilterTrending';
import {useScrollToTop} from '@react-navigation/native';
import {
  GetDataTopComment,
  GetDataTopLike,
} from '../../../config/GetData/GetDataTrending';
import LoadingScreen from '../../../components/LoadingScreen';

const TopIdea = ({navigation}) => {
  const dataTop = require('../data/Top.json');
  const dataFilter = require('../data/DataFilter.json');
  const dataProductive = require('../data/Most.json');
  const [selectedId, setSelectedId] = useState(1);
  const [hasil, setHasil] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const getData = dataSearch => {
    setHasil(dataSearch);
  };
  const [dataTopComment, setDataTopComment] = useState();
  const [dataTopLike, setDataTopLike] = useState();
  useEffect(() => {
    GetDataTopComment().then(response => setDataTopComment(response));
    GetDataTopLike().then(response => setDataTopLike(response));
  }, []);
  useEffect(() => {
    if (selectedId === 1) {
      setPlaceholder('Search an Idea ... ');
    } else if (selectedId === 2) {
      setPlaceholder('Search a Profile ... ');
    } else if (selectedId === 3) {
      setPlaceholder('Search an Idea ... ');
    } else if (selectedId === 4) {
      setPlaceholder('Search a Profile ... ');
    }
  }, [selectedId]);
  const ref = useRef(null);
  useScrollToTop(ref);
  if (dataTopComment === null || dataTopLike === null) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <SearchHeader
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
        getData={getData}
        placeholder={placeholder}
      />

      {/* Top Bar */}
      <View style={{paddingHorizontal: 5}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={ref}>
          {dataFilter.map((val, key) => {
            const backgroundColor =
              val.id === selectedId ? '#095E7B' : '#FFFFFF';
            const fontColor = val.id === selectedId ? '#FFFFFF' : '#095E7B';
            return (
              <View key={key}>
                <CardFilterTrending
                  title={val.title}
                  getId={() => setSelectedId(val.id)}
                  backgroundColor={backgroundColor}
                  fontColor={fontColor}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView ref={ref}>
        {selectedId === 1
          ? dataTop
              .filter(top => {
                if (hasil === '') {
                  return top;
                } else if (
                  top.title.toLowerCase().includes(hasil.toLowerCase())
                ) {
                  return top;
                }
              })
              .map((top, key) => {
                // console.log(top.title);
                return (
                  <View key={key}>
                    <CardTopTrending
                      title={top.title}
                      name={top.name}
                      image={top.image}
                    />
                  </View>
                );
              })
          : selectedId === 2
          ? dataProductive
              .filter(productive => {
                if (hasil === '') {
                  return productive;
                } else if (
                  productive.name.toLowerCase().includes(hasil.toLowerCase())
                ) {
                  return productive;
                }
              })
              .map((productive, key) => {
                return (
                  <View key={key}>
                    <CardProductiveTrending
                      totalIdea={productive.totalidea}
                      name={productive.name}
                      image={productive.image}
                    />
                  </View>
                );
              })
          : selectedId === 3
          ? dataTopLike.map((top, key) => {
              // console.log(top.title);
              return (
                <View key={key}>
                  <CardTopTrending
                    title={top.ideas.desc[2].value}
                    name={top.ideas.desc[0].value}
                    image={top.image}
                  />
                </View>
              );
            })
          : dataTop.map((top, key) => {
              // console.log(top.title);
              return (
                <View key={key}>
                  <CardTopTrending
                    title={top.title}
                    name={top.name}
                    image={top.image}
                  />
                </View>
              );
            })}
      </ScrollView>

      {/* CARD */}
      <View style={{height: 70}}></View>
    </SafeAreaView>
  );
};

export default TopIdea;
