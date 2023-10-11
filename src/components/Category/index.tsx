import React from "react";
import { View ,Text} from "react-native";

import { SvgProps } from "react-native-svg";

import { styles } from "./style";
import { RectButton, RectButtonProps, GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../Global/style/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({ title, icon: Icon, checked, ...rest }: Props) {
  const { secondary50, secondary70 } = theme.colors;
  return (
<GestureHandlerRootView >


    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.container, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check}/>
         
         
          <Icon width={48} height={48} />
          <Text style= {styles.title} >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </RectButton>
</GestureHandlerRootView>

  );
}
