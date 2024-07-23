import React from 'react'

import { View } from 'react-native'

import { Text } from 'react-native'

import { StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native'
 
function AppDetailsScreen() {

    return (

        <View style={styles.Heading}>

            <View>

                <Text style={styles.insideHeading}>About Us</Text>

            </View>

            <View style={styles.Version}>

                <TouchableOpacity><Text style={styles.time1} >Version</Text></TouchableOpacity>

            </View>

            <View style={styles.Version}>

                <TouchableOpacity><Text style={styles.time1} >Terms and Conditions</Text></TouchableOpacity>

            </View>

        </View>

    )

}

export default AppDetailsScreen;

const styles = StyleSheet.create({

    Heading: {

        paddingTop: 40,

        paddingStart: 40,

    },

    insideHeading: {

        fontWeight: '600',

        color: 'red',

        fontSize: 24,
 
    },

    Version: {

        paddingTop: 30,

    },

    time1: {

        fontWeight: '600',

        fontSize: 18,

    },
 
})

 