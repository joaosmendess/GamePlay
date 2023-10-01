import React, { useState } from "react";
import { View, Text, Image, LayoutChangeEvent } from "react-native";

import { styles } from "./style";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

interface SigninProps {
  onLayout?: (event: LayoutChangeEvent) => void;
}

export function Signin({ onLayout }: SigninProps) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container} onLayout={onLayout}>
     
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

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
