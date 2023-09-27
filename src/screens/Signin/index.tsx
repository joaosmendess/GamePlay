import React, {useState} from 'react'
import { View,
   Text, 
   Image,
   StatusBar
   
  } from 'react-native'

import { styles } from './style';

import IlustrationImg from '../../assets/illustration.png'

export  function Signin() {
    const [text, setText] = useState('');

  return (
<View style={styles.container}>
  <StatusBar 
  barStyle= 'light-content'
  backgroundColor='transparatent'
  translucent
  />
   <Image
   source={IlustrationImg} 
   style={styles.image} 
   resizeMode='stretch'
   /> 

    <View style={styles.content} >
      <Text style={styles.title} >
     Organize {`\n`}suas jogatinas {`\n`}facilmente

   </Text>

   <Text style={styles.subtitle} >
   Crie grupos para jogar seus games {`\n`}
favoritos com seus amigos
   </Text>

    </View>
</View>
    
  );
}
