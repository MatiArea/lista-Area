import { StyleSheet } from 'react-native'

export const listStyle = StyleSheet.create({
  headerContainerStyle: {
    height: '35%',
    borderWidth: 1.5,
    borderRadius: 20,
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    borderWidth: 1,
    width: '70%',
    padding: '2%',
    borderRadius: 15,
    marginHorizontal: '2%',
  },
  buttonStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    marginHorizontal: '5%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontSize: 30,
    color: 'white',
  },
  textHeaderStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
})
