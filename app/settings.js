import React from "react";
import { StyleSheet, View, ScrollView, Image, Text, Pressable } from "react-native";
import { Link } from 'expo-router';


function Settings({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.mainViewer}>
        <View style={styles.imageView}>
          <Image
            source={require("../assets/photo1.jpg")}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textView}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>
            Mahesh
          </Text>
        </View>
      </View>

      <View style={styles.lane}>
        <View style={styles.lines}></View>
      </View>

      <Link href={'/Edit-Profile'} asChild>
      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/edit-pic-profile.jpg")}
              style={styles.logoStyles}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>Edit Profile</Text>
          </View>
        </View>
      </Pressable>
      </Link>

      <Link href={'/About-Us'} asChild>

      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/about-us-pic.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>About Us</Text>
          </View>
        </View>
      </Pressable>
      </Link>

      <Link href={'/Rate-Us'} asChild>

      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/rating-pic.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>Rate Us</Text>
          </View>
        </View>
      </Pressable>
      </Link>

      <Link href={'/refer-a-friend'} asChild>
      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/refer-a-friend-pic.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>Refer a Friend</Text>
          </View>
        </View>
      </Pressable>
      </Link>

      <Link href={'/Privacy&Policy'} asChild>

      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/privacy-pic.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>Privacy & Policy</Text>
          </View>
        </View>
      </Pressable>
      </Link>

      <Link href={'/Notifications'} asChild>

      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/notification-pic.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>Notifications</Text>
          </View>
        </View>
      </Pressable>
      </Link>

      <Link href={'/Logout'} asChild>

      <Pressable >
        <View style={styles.mainView}>
          <View style={styles.logoAlign}>
            <Image
              source={require("../assets/logout-pic.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.iconTextView}>
            <Text style={styles.iconTextStyle}>Logout</Text>
          </View>
        </View>
      </Pressable>
      </Link>
    </ScrollView>
  );
}

export default Settings;

const styles = StyleSheet.create({
  backIcon: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingBottom: 10,
  },
  mainView: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 5,
  },
  mainViewer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  imageView: {
    paddingTop: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "black",
    paddingLeft: 18,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  textView: {
    paddingTop: 22,
    paddingStart: 30,
  },
  textStyle: {
    fontSize: 20,
    color: "red",
  },
  btnStyle: {
    paddingStart: 20,
    paddingEnd: 250,
    paddingTop: 30,
  },
  lane: {
    paddingTop: 10,
  },
  lines: {
    height: 1,
    width: 380,
    backgroundColor: "gray",
    margin: 10,
  },
  logoAlign: {
    paddingTop: 15,
    paddingLeft: 25,
    height: 25,
    width: 25,
  },
  logoStyles: {
    height: 25,
    width: 25,
    backgroundColor: "red",
  },
  logoStyle: {
    height: 25,
    width: 25,
  },
  iconTextView: {
    paddingLeft: 55,
    paddingTop: 16,
  },
  iconTextStyle: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
});
