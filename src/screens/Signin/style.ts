import { StyleSheet } from "react-native";

import { theme } from "../../Global/style/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    lineHeight:40,

    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
    fontFamily:theme.fonts.title700,
  },
  subtitle: {
    fontFamily:theme.fonts.title500,
    lineHeight:25,

    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
  },
});
