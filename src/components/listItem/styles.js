import { StyleSheet } from 'react-native'

export const listItemStyles = StyleSheet.create({
  item: {
    height: 80,
    width: '92%',
    backgroundColor: 'lightblue',
    marginVertical: '3%',
    marginHorizontal: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { height: 1, width: 1 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 20,
    paddingVertical: '2%',
    paddingLeft: 10,
    color: 'black',
  },
  titleButton: {
    fontSize: 16,
    color: 'black',
  },
  deleteItemButton: {
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'red',
    height: '100%',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
