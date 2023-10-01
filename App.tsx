// Importando módulos e componentes necessários
import React, { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import  {Routes} from './src/routes'

import { Signin } from "./src/screens/Signin";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";

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
 // SplashScreen.preventAutoHideAsync();

  // Usando useEffect para executar funções de inicialização
  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        // Imprime um aviso no console se houver um erro
        console.warn(e);
      } finally {
        // Define appIsReady como true independentemente de erros
        setAppIsReady(true);

        if (appIsReady && fontsLoaded) {
          await onLayoutRootView();
        }
      }
    }

    // Chama a função prepare
    prepare();
  }, []);

  // Função que é chamada quando o layout da raiz é montado, esconde a splash screen
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      // Adicione um atraso
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Hiding splash screen");
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  // Renderiza null (nada) se a aplicação não está pronta ou as fontes não estão carregadas
  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  // Renderiza o componente Signin passando a função onLayout como prop
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    <Routes />
    </>
    
  );
}
