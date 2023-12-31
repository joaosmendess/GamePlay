import { View, Text, Image } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import React from "react";
import { styles } from "./style";
import { theme } from "../../Global/style/theme";

type Props = {
urlImage: string;
 }

export function Avatar({urlImage}: Props) {
    const {secondary50, secondary70} = theme.colors;

  return (
    <LinearGradient style ={styles.container} colors={[secondary50, secondary70]} >
       <Image 
       source={{uri:urlImage }}
       style={styles.avatar}
       />
      </LinearGradient>
  );
}
