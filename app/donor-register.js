import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'expo-router';
 
 
export default function RegisterScreen() {
    return (
 <ScrollView>
        <View style={styles.container}>
            <Image
                source={require("../assets/blood-savior-final-logo2.png")}
                style={styles.banner}
                resizeMode='contain'
            />
            <View style={styles.main}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.defaultText}>Donor</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>Registration</Text>
            </View>
            <View style={styles.phone}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your mobile number"
 
                    keyboardType="numeric"
                />
 
            </View>
            <View style={styles.box}>
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
                <Text> Terms & Conditions</Text>
            </View>
            <View style={styles.Generate}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonGenerate}
                >
                    <Text style={styles.generateText}>Generate OTP</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.enter}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
 
                    keyboardType="numeric"
                />
 
            </View>
            <View style={styles.Generate}>
                <Link href={'/profile-screen'} asChild>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonSubmit}
 
                >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
                 </Link>
            </View>
            <View style={styles.OTP}>
                <Text style={styles.time}>Time Remaining 01:50</Text>
                <TouchableOpacity><Text style={styles.time1}>Resend OTP</Text></TouchableOpacity>
            </View>
            <View style={styles.log}>
                <Text style={styles.register}>Already registered?</Text>
                <Link href={'/donor-login'} asChild>
                <TouchableOpacity>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                </Link>
            </View>
        </View>
        </ScrollView>
    )
}
 
 
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#ffffff', // Replace with your desired background color
    // },
    banner: {
        height: 280,
        width: 400,
    },
    main: {
        justifyContent:'flex-start',
       marginLeft:30,
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 165,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#3E3D3D',
    },
    defaultText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    text: {
        color: 'red',
        paddingTop: 20,
        paddingHorizontal: 35,
        fontSize: 18,
        fontWeight: '600',
    },
    phone: {
        paddingTop: 7,
        paddingHorizontal: 35,
        width: '100%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000000',
        height: 40,
        fontSize: 16,
        color: '#000000',
        marginBottom: 10,
    },
    box: {
        paddingTop: 25,
        paddingHorizontal: 30,
        flexDirection: 'row',
    },
    errorText: {
        fontSize: 12,
        color: '#FF0D10',
    },
    Generate: {
        paddingTop: 0,
        paddingHorizontal: 30,
    },
    buttonGenerate: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 330,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
    },
    generateText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
    },
    buttonSubmit: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 330,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#2795FB',
    },
    submitText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    enter: {
        paddingTop: 15,
        paddingHorizontal: 35,
        width: '100%',
        paddingBottom: 15,
    },
    OTP: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        paddingTop: 25,
        paddingHorizontal: 30,
    },
    time1: {
        paddingTop: 25,
        color: 'blue',
        paddingEnd: 25,
    },
    log: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    register: {
        paddingStart: 120,
    },
    login: {
        color: 'blue',
    },
});