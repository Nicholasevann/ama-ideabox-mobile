import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 15,
  },
  contentChart: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flex: 1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    backgroundColor: '#EBEFF5',
    width: '40%',
  },
  dropdown: {
    color: 'red',
    fontSize: 10,
    height: 35,
  },
  titleChart: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerWrap: {
    justifyContent: 'center',
    backgroundColor: '#EBEFF5',
    marginVertical: 15,
    width: '80%',
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
  },
  wrap: {
    flex: 1,
  },
  tabBarActive: {
    flex: 1,
    marginHorizontal: 2,
    marginVertical: 5,
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
  textNonActive: {
    color: '#085D7A',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  tabBar: {
    flex: 1,
    marginVertical: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEFF5',
  },
});

export default styles;
