import { Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { listItemStyles } from './styles'

const ListItem = ({ functions, title, id }) => {
  return (
    <View style={listItemStyles.shadowContainer}>
      <View style={listItemStyles.item}>
        <Text style={listItemStyles.title}>{title}</Text>
        <TouchableOpacity
          style={listItemStyles.deleteItemButton}
          onPress={() => {
            functions.deleteItem(id)
          }}
        >
          <Text style={listItemStyles.titleButton}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ListItem
