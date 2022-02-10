import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Comment, Like, More, Share} from '../assets/icon';
import style from '../config/Style/style.cfg';
import {windowHeight, windowWidth} from './WindowDimensions';

const CardContent = props => {
  const [liked, setLiked] = useState(false);

  const clicked = () => {
    if (liked === true) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapProfile}>
        <TouchableOpacity onPress={props.onProfile}>
          <View style={styles.profile}>
            <Image source={props.profileUser} style={styles.imageProfile} />
            <Text style={[styles.textProfile, style.h4medium]}>
              {props.name}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.morePromote}>
          <More />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Image
          key={props.keyIndex + 'Image'}
          source={props.cover}
          style={styles.imageContent}
        />
      </View>
      <View style={styles.rowIcon}>
        <View style={styles.iconContentContainer}>
          <TouchableOpacity
            onPress={props.clickLike}
            style={styles.iconContent}>
            <Image source={props.like} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.comment}>
            <View style={styles.iconContent}>
              <Image
                source={require('../assets/icon/comment.png')}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.share}>
            <View style={styles.iconContent}>
              <Image
                source={require('../assets/icon/share.png')}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={props.more} style={{paddingRight: 10}}>
          <Text style={[style.h4, styles.moreDescContent]}>More Detail</Text>
        </TouchableOpacity>
      </View>
      {props.likedBy === [] ? null : (
        <View style={styles.rowLike}>
          <Image
            source={require('../assets/icon/loveTrue.png')}
            style={{width: 15, height: 15}}
          />
          <Text style={[styles.textLike, style.h6]}>
            Liked by {props.likedBy} people
          </Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={style.h4} key={props.keyIndex + 'Title'}>
          {props.title}
        </Text>
        <Text
          style={style.h5}
          numberOfLines={2}
          ellipsizeMode="tail"
          key={props.keyIndex + 'Desc'}>
          {props.desc}
        </Text>
      </View>
    </View>
  );
};

export default CardContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D0CDE1',
  },
  wrapProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  imageProfile: {
    width: windowWidth / 11.5,
    height: windowHeight / 22.56,
    borderRadius: 25,
  },
  textProfile: {
    marginLeft: windowHeight / 84.6,
    color: 'black',
    textTransform: 'capitalize',
  },
  contentContainer: {
    flexDirection: 'row',
    marginVertical: windowHeight / 50,
    borderWidth: 1,
    borderColor: '#D0CDE1',
    borderRadius: 5,
    height: windowHeight / 2.85,
  },
  imageContent: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  content: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10,
  },
  titleContent: {
    fontWeight: '700',
    fontSize: windowHeight > 800 ? 17 : 16,
    fontFamily: 'Roboto-Regular',
  },
  textContent: {
    fontSize: windowHeight > 800 ? 14 : 12,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
  },
  moreDescContent: {
    color: '#085D7A',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#B9B9B9',
    marginTop: 20,
  },
  iconContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContent: {
    height: 26,
    width: 26,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLike: {
    marginLeft: 5,
  },
  buttonPromote: {
    width: 90,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#085D7A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  buttonJoin: {
    width: 90,
    height: 25,
    backgroundColor: '#085D7A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  row: {flexDirection: 'row'},
  rowLike: {flexDirection: 'row', marginTop: 10},
  rowIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textPromote: {
    color: '#085D7A',
    marginLeft: 5,
    fontWeight: '700',
  },
  textJoin: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontWeight: '700',
  },
  icon: {flex: 1, height: '100%', width: '100%', resizeMode: 'cover'},
});
