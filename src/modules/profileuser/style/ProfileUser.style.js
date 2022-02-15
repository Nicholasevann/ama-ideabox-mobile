import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '../../../components/WindowDimensions';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF', marginBottom: 62},
  head: {
    height: windowHeight / 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Button: {
    width: 24,
    height: 24,
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 25,
  },
  mainContent: {
    backgroundColor: '#FFFFFF',
    marginTop: 45,
  },
  h1: {
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  h2: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  h3: {
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#918F8F',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 3,
    top: 200,
    left: 25,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 100 / 2,
  },
  imageBackground: {
    width: '100%',
    height: 200,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  CardTrackRecord: {
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#EBEFF5',
    borderRadius: 5,
    marginBottom: 20,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  aboutTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 23,
    color: '#085D7A',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  textBox: {
    minHeight: 120,
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
  },
  tagContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  tag: {
    backgroundColor: '#68E1FD',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    marginRight: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#085D7A',
  },
  textInnovation: {
    minHeight: 300,
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  achievementContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingTop: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  // Modal View style
  centeredcontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EBEFF5',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '35%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#085D7A',
    alignSelf: 'flex-end',
  },
  buttondelete: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '35%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#DE1B1B',
    alignSelf: 'flex-end',
  },
  buttoncancel: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#085D7A',
    margin: 10,
    width: '35%',
    height: 35,
    borderRadius: 10,
    backgroundColor: '#085D7A',
    alignSelf: 'flex-end',
  },
  save: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    zIndex: 3,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#085D7A',
    marginBottom: 10,
    color: 'black',
    height: 35,
    fontSize: 12,
  },
  inputAbout: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#085D7A',
    marginBottom: 10,
    color: 'black',
    height: 100,
    fontSize: 12,
    width: '100%',
  },
  textInputAbout: {
    width: '100%',
  },
  textEdit: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#085D7A',
  },
  rowDelete: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

export default styles;
