import React, { useState } from "react";
import { View, Text, Image, LayoutChangeEvent } from "react-native";

import { styles } from "./style";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { RootStackParamList } from '../../routes/types/types'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native'



type SigninScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Signin'
>;

export function Signin() {

  const navigation = useNavigation<SigninScreenNavigationProp>();


 
  return (
    <View style={styles.container} >
     
      <Image
        source={IlustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se e organize {`\n`}suas jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} onPress={() => navigation.navigate('Home')}/>
      </View>
    </View>
  );
}
