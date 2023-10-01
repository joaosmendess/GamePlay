// Importando módulos e componentes necessários
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

import { Signin } from "./src/screens/Signin";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";

// Componente principal da aplicação
export default function App() {
  // Estado para verificar se a aplicação está pronta
  const [appIsReady, setAppIsReady] = useState(false);

  // Carregando as fontes e mantendo o controle de seu carregamento com a variável fontsLoaded
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  // Previne o ocultamento automático da splash screen até que tudo esteja carregado
 
  // Renderiza o componente Signin passando a função onLayout como prop
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
<Home/>
    </Background>
  );
}
