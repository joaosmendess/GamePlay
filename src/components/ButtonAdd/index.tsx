
import {RectButton, RectButtonProps,GestureHandlerRootView} from 'react-native-gesture-handler';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './style';
import { theme } from '../../Global/style/theme';


export function ButtonAdd({...rest}: RectButtonProps) {
    return (

        <GestureHandlerRootView>

    
      <RectButton 
        style={styles.container}
        {...rest}
      >
        <MaterialCommunityIcons 
          name="plus"
          color={theme.colors.heading}
          size={24}
        />
      </RectButton>
      </GestureHandlerRootView>

    )
  }