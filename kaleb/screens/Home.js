import * as React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={{ uri: "https://res.cloudinary.com/techceed/image/upload/v1584988471/Caleb/logo_stl8gc.jpg" }}
            style={styles.welcomeImage}
          />
          <Text style={styles.myText}>React Native Showcase</Text>
        </View>
      </ScrollView>
    </View>
  );
}

Home.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 120
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  myText: {
    fontSize: 20,
    color: "#111",
    marginTop: 30,
    lineHeight: 24,
    fontFamily: "comfortaa",
    textAlign: "center"
  },
  welcomeImage: {
    width: 200,
    height: 180,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  }
});
