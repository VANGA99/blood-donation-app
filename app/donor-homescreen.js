import { useNavigation, useRouter } from "expo-router";
import React from "react";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-shadow-cards";
import { Link } from 'expo-router';

function DonorHomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.sample}>
        <TouchableOpacity>
          <Image
            source={require("../assets/blood-savior-final-logo2.png")}
            style={styles.banner}
            resizeMode="contain" />
        </TouchableOpacity>

      </View>
      <View style={styles.container}>
        <Link href={'/blood-request'} asChild>
          <Pressable >
            <Card style={styles.card}>

              <Image
                source={require("../assets/blood-requests.png")}
                style={styles.drip}
                resizeMode="contain"

              />
              <View style={styles.simple}>
                <Text
                  style={styles.Inner}
                >
                  Blood
                </Text>
              </View>
              <View style={styles.camp}>
                <Text
                  style={styles.Inner}
                >
                  Requests
                </Text>
              </View>
            </Card>
          </Pressable>
        </Link>
        <Link href={'/blood-camp'} asChild>

          <Pressable >

            <Card style={styles.card}>
              <Image
                source={require("../assets/blood-camps.png")}
                style={styles.drop}
                resizeMode="contain"
              />
              <View style={styles.simple}>
                <Text
                  style={styles.Inner}
                >
                  Blood
                </Text>
              </View>
              <View style={styles.tap}>
                <Text
                  style={styles.Inner}
                >
                  Camps
                </Text>
              </View>
            </Card>

          </Pressable>
        </Link>
        <Link href={'/donor-myrequest'} asChild>

          <Pressable >
            <Card style={styles.card}>
              <Image
                source={require("../assets/my-requests.png")}
                style={styles.drop}
                resizeMode="contain"
              />
              <View style={styles.my}>
                <Text
                  style={styles.Inner}
                >
                  My
                </Text>
              </View>
              <View style={styles.request}>
                <Text
                  style={styles.Inner}
                >
                  Requests
                </Text>
              </View>
            </Card>
          </Pressable>
        </Link>
        <Link href={'/find-donor'} asChild>

        <Pressable >
          <Card style={styles.card}>
            <Image
              source={require("../assets/find-a-blood-donor.png")}
              style={styles.drip}
              resizeMode="contain"
            />
            <View style={styles.simple}>
              <Text
                style={styles.Inner}
              >
                Find a
              </Text>
            </View>
            <View style={styles.find}>
              <Text
                style={styles.Inner}
              >
                Blood Donor
              </Text>
            </View>
          </Card>
        </Pressable>
        </Link>
        
        <Link href={'/my-donations'} asChild>

        <Pressable >
          <Card style={styles.card}>
            <Image
              source={require("../assets/my-donations.png")}
              style={styles.drop}
              resizeMode="contain"
            />
            <View style={styles.my}>
              <Text
                style={styles.Inner}
              >
                My
              </Text>
            </View>
            <View style={styles.My}>
              <Text
                style={styles.Inner}
              >
                Donations
              </Text>
            </View>
          </Card>
        </Pressable>
        </Link>
        <Link href={'/settings'} asChild>

        <Pressable >
          <Card style={styles.card}>
            <Image
              source={require("../assets/settings.png")}
              style={styles.drop}
              resizeMode="contain"
            />
            
            <View style={styles.Blood}>
              <Text
                style={{marginTop:15,fontWeight:600}}
              >
                Settings
              </Text>
            </View>
          </Card>
        </Pressable>
        </Link>
      </View>
    </View>
  );
}
export default DonorHomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingStart: 22,
    paddingEnd: 22,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",

  },
  banner: {
    height: 250,
    width: 300,
  },
  sample: {
    paddingTop: 40,
    paddingHorizontal: 55,
  },
  card: {
    width: 100,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 20
  },
  drop: {
    height: 40,
    width: 40,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "white",
  },
  drip: {
    height: 40,
    width: 40,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "white",
  },
  Inner: {
    fontWeight: "600",
    
  },
  simple: {
    paddingLeft: 0,
    paddingTop: 5,
  },
  camp: {
    paddingHorizontal: 0,
  },
  tap: {
    paddingHorizontal: 0,
  },
  find: {
    paddingHorizontal: 0,
  },
  my: {
    paddingHorizontal: 15,
    paddingTop: 5,
  },
  request: {
    paddingHorizontal: 0,
  },
  Host: {
    paddingHorizontal: 0,
    paddingTop: 5,
  },
  Blood: {
    paddingHorizontal: 3,
  },
  My: {
    paddingHorizontal: 0,
  },
  Inert: {
    paddingHorizontal: 0,
    fontWeight: 600,
  },
});