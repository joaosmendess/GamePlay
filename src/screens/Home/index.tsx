import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Profile } from '../../components/Profile'

export function Home()   {
  
    return (
      <View>
        <View style={styles.header} >
<Profile/>
        </View>
      </View>
    )
  }
