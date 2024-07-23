import React from 'react'
import { Image, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'

import { Card } from 'react-native-shadow-cards'

import { TouchableOpacity } from 'react-native'

function Refer() {
    return (
        <View>

            <View style={styles.Heading}>
                <Text style={styles.insideHeading}>Refer A Friend</Text>
            </View>

            <View style={styles.pics}>
                <Image
                    source={require("../assets/refer.png")}
                    style={styles.img}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.quote}>
                <Text style={styles.insideQuote}>Excuse Never Saves life But Blood Donation saves</Text>
                <Text style={styles.insideQuote}>Invite them to be a part of Blood Saviour and help them in saving Lives</Text>
            </View>
            <View style={styles.referral}>
            <Text style={styles.refer}>YOUR REFERRAL CODE</Text>

            </View>
            <View style={styles.code}>
             
                    <Card style={styles.load}>
                        <Text style={styles.insideLoad}>MEGA7465</Text>
                    </Card>
               

            </View>
         
           
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.defaultText}>Submit</Text>
                </TouchableOpacity>
              
        </View>
    )
}

export default Refer
const styles = StyleSheet.create({
    pics: {
        paddingTop: 50,
        paddingLeft: 0,
    },
    Generate: {
        paddingTop: 30,
        paddingStart:90,
        paddingEnd:90,
        borderRadius: 10,
    },
    Heading: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },
    insideHeading: {
        fontWeight: '600',
        color: 'red',
        fontSize: 24,
        

    },
    img: {
        height: 250,
        width: 390,
    },
    quote: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    insideQuote: {
        fontWeight: '600',
        fontSize: 14,
    },
    referral: {
        paddingTop: 25,
        left:80
    },
    refer: {
        fontWeight: '600',
        fontSize: 20,
        color: 'red'
    },
    code: {
        paddingTop: 10,
    },
    load: {
        width: 150,
        height:60,
        margin: 8,
        paddingLeft: 25,
        paddingTop: 15,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:15,
        left:100
    },
    insideLoad:{
        fontWeight:'600',
        color:'red',
        fontSize:20,
    },
   buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        left:110,

        width: 150,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: 'red'
    },
    card: {
        height: 170,
        width: 280,
    },
    defaultText: {
        color: 'white'
    },
    
})
