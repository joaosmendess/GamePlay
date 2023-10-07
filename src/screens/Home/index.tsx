import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Background } from '../../components/Background'

export function Home()   {
  
    return (
      <Background>
        <View style={styles.header} >
<Profile/>
<ButtonAdd/>

        </View>
      </Background>
    )
  }
