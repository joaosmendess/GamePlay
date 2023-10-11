import { Text, View } from "react-native";
import React, {useState} from "react";
import { styles } from "./style";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";

export function Home() {
  const [category,setCategory] = useState('');

  function handleCategorySelect(categoryId:string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)

   
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
        
        />
      </View>
    </Background>
  );
}
