import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import SearchHeader from '../../../components/SearchHeader';
import style from '../../../config/Style/style.cfg';
import styles from '../style/Home.style';
import Swiper from 'react-native-swiper';
import InovatorSay from '../../../components/InovatorSay';
import CardCategoryHome from '../../../components/CardCategoryHome';
import { Logo } from '../../../assets/image';
import Header from '../../../components/Header';
import Carousel from 'react-native-snap-carousel';
import { WhiteDotHome } from '../../../assets/icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeContent = ({ navigation }) => {
  const image = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    'https://cdn1-production-images-kly.akamaized.net/d6Feui5j5wCSj1C6uq2bC_js-i0=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3170497/original/064866700_1593932946-Telkom_1.jpg',
    'https://p16-hera-va.ibyteimg.com/tos-useast2a-i-hn4qzgxq2n/f0e9d7a074db4f2db68f6b821fca82b6~tplv-hn4qzgxq2n-image:0:0.image',
  ];
  // const renderItem = ({item, index}) => {
  //   return (
  //     <Image
  //       source={{uri: image[0]}}
  //       style={{
  //         borderRadius: 10,
  //         height: 225,
  //         width: 300,
  //         padding: 50,
  //         margin: 15,
  //       }}
  //     />
  //   );
  // };
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header
        onPress={() => navigation.openDrawer()}
        notification={() => navigation.navigate('Notification')}
      />
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={'default'}
            ref={() => { }}
            data={image}
            sliderWidth={300}
            itemWidth={300}
            renderItem={({ item, key }) => {
              return (
                <View key={key}>
                  <Image
                    source={{ uri: item }}
                    style={{
                      borderRadius: 5,
                      height: 200,
                      width: 300,
                      padding: 50,
                      margin: 10,
                    }}
                  />
                </View>
              );
            }}
            loop={true}
            autoplay={true}
          />
        </View>
        <View style={styles.desc}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={[style.h4medium, styles.title]}>
                Welcome back, Nicholas Evan
              </Text>
              <Text style={[style.h5, styles.title]}>
                Lets Create your idea
              </Text>
            </View>
            <Image
              source={require('../../../assets/icon/whitedothome.png')}
              style={{ width: 55, height: 55 }}
            />
            <Image
              source={require('../../../assets/icon/whitedothome.png')}
              style={{ width: 55, height: 55 }}
            />
          </View>

          <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Image
              source={require('../../../assets/icon/icon1home.png')}
              style={{ position: 'absolute', left: 0 }}
            />
            <Image
              source={require('../../../assets/icon/icon2home.png')}
              style={{ position: 'absolute', left: 15, width: 60 }}
            />
            <Image
              source={require('../../../assets/icon/icon3home.png')}
              style={{ position: 'absolute', left: 0, top: 20 }}
            />
            <Image
              source={require('../../../assets/icon/icon4home.png')}
              style={{ position: 'absolute', left: 20, top: 100 }}
            />
            <Image
              source={require('../../../assets/icon/icon1home.png')}
              style={{ position: 'absolute', top: 150, right: 0 }}
            />
            <Image
              source={require('../../../assets/icon/icon2home.png')}
              style={{ position: 'absolute', top: 150, right: 15, width: 60 }}
            />
            <Image
              source={require('../../../assets/icon/icon5home.png')}
              style={{ position: 'absolute', width: 175, height: 175 }}
            />
            <Image
              source={require('../../../assets/image/imageHome.png')}
              style={styles.imageDesc}
            />
          </View>
          <View style={styles.wrap}>
            <Text style={[style.h3, styles.title, { marginTop: 10, }]}>Apa Itu IDEABOX?</Text>
            <Text style={[style.h4normal, styles.descContent]}>
              merupakan single platform yang berperan sebagai wadah untuk
              menampung ide-ide inovasi karyawan Telkom Group agar dapat
              memudahkan dalam berkolaborasi dan mengembangkannya serta sebagai
              bentuk komitmen Telkom Indonesia dalam menjawab tantangan industri
              digital dan akselerasi ekosistem digital indonesia.
            </Text>
            <Text style={[style.h4, styles.quote]}>
              “ Lets Transform to be The Extraordinary You and Become the
              AMAzing Innovator!!! ”
            </Text>
            <Image
              source={require('../../../assets/icon/linehome.png')}
              style={{ width: '100%', marginTop: 10, marginBottom: 20 }}
            />
          </View>
        </View>
        {/* <View style={styles.containerCategory}>
          <Text style={[style.h2medium, styles.titleCategory]}>Category</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 200,
            }}>
            <View style={styles.row}>
              <CardCategoryHome
                image={require('../../../assets/image/dummyPicture1.png')}
              />
              <CardCategoryHome
                image={require('../../../assets/image/dummyPicture2.png')}
              />
              <CardCategoryHome
                image={require('../../../assets/image/dummyPicture3.png')}
              />
            </View>
          </View>
        </View> */}
        <View style={styles.horizontalCard}>

          <TouchableOpacity style={[styles.cardContainer, { backgroundColor: '#F9CC2C' }]}>
            <View style={styles.tittleCardContainer}>
              <Text style={[style.h6, styles.titleCard]}>The Hipster Guy</Text></View>
            <View style={styles.imageCardContainer}>
              <Image
                source={require('../../../assets/image/carddummy1.png')}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardContainer, { backgroundColor: '#E15C30' }]}>
            <View style={styles.tittleCardContainer}>
              <Text style={[style.h6, styles.titleCard]}>The Hustler Guy</Text></View>
            <View style={styles.imageCardContainer}>
              <Image
                source={require('../../../assets/image/carddummy2.png')}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cardContainer, { backgroundColor: '#A9E34B' }]}>
            <View style={styles.tittleCardContainer}>
              <Text style={[style.h6, styles.titleCard]}>The Hacker Guy</Text></View>
            <View style={styles.imageCardContainer}>
              <Image
                source={require('../../../assets/image/carddummy3.png')}
                style={styles.cardImage}
              />
            </View>
          </TouchableOpacity>
        </View>

        <Text style={[style.h4, styles.titleInovator]}>
          WHAT THE INNOVATORS SAY
        </Text>
        <Swiper
          height={250}
          showsButtons={true}
          autoplayTimeout={5}
          loop
          autoplay
          activeDotColor="#085D7A"
          dot={<View style={styles.dotColor} />}>
          <InovatorSay
            image={require('../../../assets/image/profilepicture.jpg')}
            desc={
              '“ Lets Transform to be The Extraordinary You and Become the AMAzing Innovator!!! Lets Transform to be The Extraordinary You and Become the AMAzing Innovator!!! ”'
            }
          />
          <InovatorSay
            image={require('../../../assets/image/profilepicture2.jpg')}
            desc={
              '“ Lets Transform to be The Extraordinary You and Become the AMAzing Innovator!!! Lets Transform to be The Extraordinary You and Become the AMAzing Innovator!!!  ”'
            }
          />
          <InovatorSay
            image={require('../../../assets/image/profilepicture2.jpg')}
            desc={
              '“ Lets Transform to be The Extraordinary You and Become the AMAzing Innovator!!! Lets Transform to be The Extraordinary You and Become the AMAzing Innovator!!! ”'
            }
          />
        </Swiper>
        <View style={styles.descBottom}>
          <View style={styles.row}>
            <Image
              source={require('../../../assets/icon/Logo.png')}
              style={{ width: 125, resizeMode: 'cover', height: 30 }}
            />
            <View>
              <Text style={[style.h6, styles.descContentBottom]}>
                Jl. Gegerkalong Hilir, Sukarasa, Kec.
              </Text>
              <Text style={[style.h6, styles.descContentBottom]}>
                Sukasari, Kota Bandung, Jawa Barat
              </Text>
              <Text style={[style.h6, styles.descContentBottom]}> 40152</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../../assets/icon/copyright.png')} />
            <Text style={[style.h6, styles.descCopyright]}>
              2021 by AMA CORPU
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContent;
