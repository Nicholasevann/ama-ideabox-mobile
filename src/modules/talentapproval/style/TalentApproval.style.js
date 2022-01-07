import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../components/WindowDimensions';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  head: {
    height: windowHeight / 17,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth / 16.92,
  },
  bottomWrap: {
    height: 70,
  },
  wrap: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    width: windowWidth,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrap: {
    backgroundColor: '#EBEFF5',
    width: '70%',
    height: '70%',
    borderRadius: 30,
    flexDirection: 'row',
  },
  tabBarActive: {
    flex: 1,
    margin: 5,
    backgroundColor: '#085D7A',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#EBEFF5',
    borderRadius: 10,
  },
  titleContent: {
    flexDirection: 'row',
  },
  title: {
    flex: 2,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    height: 100,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
    paddingVertical: 5,
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
  h2: {
    fontSize: 14,
    fontWeight: '200',
    fontFamily: 'Roboto',
  },
  rowDelete: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

export default styles;
