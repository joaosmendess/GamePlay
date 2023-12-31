import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { Avatar } from "../Avatar";
import { ButtonAdd } from "../ButtonAdd";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/joaosmendess.png/"/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>João</Text>
        </View>
          <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
