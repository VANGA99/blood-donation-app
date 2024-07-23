import { Link } from "expo-router";
import React from "react";
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

export default function SplashScreen() {
    return (

        <View style={styles.dup}>
            <Pressable >
                <Image source={require("../assets/gradient.png")}
                    style={styles.banner}
                    resizeMode='contain'

                />
            </Pressable>
            <View style={styles.pad}>
                <Pressable>
                    <Image source={require("../assets/blood-savior-final-logo2.png")}
                        style={styles.lanner}
                        resizeMode='contain'

                    />
                </Pressable>

                <View style={styles.main}>
                    <Link href={'/donor-register'} asChild>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.buttonStyle}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 600,
                            }}>Continue</Text>
                        </TouchableOpacity>
                    </Link>

                </View>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    banner: {
        width: 400,
        height: 890,
    },
    lanner: {
        height: 300,
        width: 400,
    },
    pad: {
        position: 'absolute',
        marginTop: "50%",
        marginBottom: "50%",

    },
    main: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 165,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#3E3D3D'
    },
    buttonStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 165,
       marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#F32441'
    },
    defaultText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 600,
    },
})