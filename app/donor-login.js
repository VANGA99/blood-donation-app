
import { View, Text, StyleSheet, Image, Input, TextInput, TouchableOpacity } from "react-native";

import React from "react";

import { Formik } from 'formik';

import * as Yup from 'yup';

import { Link, useNavigation, useRouter } from "expo-router";


const phoneRegExp = /^[0-9]{10}$/;

const pinValid = /^[0-9]{6}$/;

const SignupSchema = Yup.object().shape({

    phoneNumber: Yup.string()

        .matches(phoneRegExp, 'Phone number is not valid')

        .required('Phone number is required'),

    oneTimePassword: Yup.string()

        .matches(pinValid, 'oneTimePassword is not valid')

        .required('oneTimePassword  is required'),

});

export default function DonorLoginPage({ }) {

    // const router = useRouter();

    return (

        <Formik initialValues={{

            phoneNumber: '',

            oneTimePassword: '',

        }}

            validationSchema={SignupSchema}

        >

            {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (

                <View>

                    <Image source={require("../assets/blood-savior-final-logo2.png")}

                        style={styles.banner}

                        resizeMode='contain' />

                    <View>

                        <Text style={styles.text1}>Login</Text>

                    </View>

                    <View style={styles.phone}>

                        <TextInput

                            style={styles.phone2}

                            variant="underlined"

                            placeholder="Enter your mobile number"

                            color="black"

                            borderBottomColor="black"

                            keyboardType="numeric"

                            value={values.phoneNumber}

                            onChangeText={handleChange('phoneNumber')}

                        >

                        </TextInput>

                        {errors.phoneNumber && (

                            <Text style={styles.errorText}>{errors.phoneNumber}</Text>

                        )}

                    </View>


                    <View style={styles.Generate} >

                        <TouchableOpacity

                            activeOpacity={0.7}

                            style={styles.buttonGenerate}

                        >

                            <Text style={styles.generateText}>Generate OTP</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={styles.enter}>

                        <TextInput

                            style={styles.enter2}

                            variant="underlined"

                            placeholder="Enter OTP"

                            color="black"

                            borderBottomColor="black"

                            keyboardType="numeric"

                            value={values.oneTimePassword}

                            onChangeText={handleChange('oneTimePassword')}

                        >

                        </TextInput>

                        {errors.oneTimePassword && (

                            <Text style={styles.errorText}>{errors.oneTimePassword}</Text>

                        )}

                    </View>

                    <View style={styles.Generate}>
                        <Link href={'/donor-homescreen'} asChild>
                            <TouchableOpacity

                                activeOpacity={0.7}

                                style={styles.buttonSubmit}>

                                <Text style={styles.submitText}>Submit</Text>

                            </TouchableOpacity>
                        </Link>

                    </View>


                </View>

            )}

        </Formik>

    );

}

const styles = StyleSheet.create({

    banner: {

        height: 300,

        width: 400,

    },

    errorText: {

        fontSize: 12,

        color: '#FF0D10'

    },

    container: {

        flex: 1,

        width: '45%',

        paddingHorizontal: 37,

        flexDirection: 'row',

    },

    main: {

        paddingLeft: 35,

        paddingRight: 10,

        flexWrap: 'nowrap',

        flexDirection: 'row'

    },

    button: {

        width: "35%",

    },

    buttonSubmit: {

        justifyContent: 'center',

        alignItems: 'center',

        height: 45,

        width: 330,

        marginTop: 15,

        borderRadius: 5,

        backgroundColor: '#2795FB'

    },

    submitText: {

        color: 'white',

        fontSize: 18,

        fontWeight: "600",

    },

    text1: {

        color: 'red',

        paddingTop: 20,

        paddingHorizontal: 35,

        fontSize: 18,

        fontWeight: "900",

    },

    phone: {

        paddingTop: 10,

        paddingHorizontal: 35,

        width: "100%",

    },

    phone2: {

        borderBottomWidth: 2

    },

    box: {

        paddingTop: 25,

        paddingHorizontal: 30,

        flexDirection: 'row',

    },

    time: {

        paddingTop: 25,

        paddingHorizontal: 30,

    },

    OTP: {

        flexDirection: 'row',

        justifyContent: 'space-between',

    },

    time1: {

        paddingTop: 25,

        color: 'blue',

        paddingEnd: 25,

    },

    Generate: {

        paddingTop: 30,

        paddingHorizontal: 30,

        borderRadius: 10,

    },

    buttonGenerate: {

        justifyContent: 'center',

        alignItems: 'center',

        height: 45,

        width: 330,

        marginTop: 15,

        borderRadius: 5,

        backgroundColor: '#D9D9D9'

    },

    generateText: {

        color: 'black',

        fontSize: 18,

        fontWeight: "600",

    },

    enter: {

        paddingTop: 30,

        paddingHorizontal: 35,

        width: "100%",

    },

    enter2: {

        borderBottomWidth: 2

    },

    end: {

        paddingHorizontal: 100,

        paddingTop: 20,

    },

    Prime: {

        width: 50,

    }

})
