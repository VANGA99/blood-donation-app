import React from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
function Rate() {
    const [defaultRating, setDefaultRating] = useState(0)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

    const starImgFilled = 'https://cdn-icons-png.flaticon.com/128/11019/11019327.png'
    const starImgCorner = 'https://cdn-icons-png.flaticon.com/128/10904/10904932.png'
    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setDefaultRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }

                                />
                            </TouchableOpacity>
                        )
                    })
                }

            </View>

        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.circle}>
                <Image
                    source={require("../assets/photo-3.jpg")}
                    style={styles.img}
                    resizeMode='contain'
                />
            </View>
            <View>
                <Text style={styles.demoText}>Mahesh</Text>
            </View>
            <View>
                <Text style={styles.demoTexts}>Rate Your Experience</Text>
            </View>
            <CustomRatingBar />
            <Text style={styles.textStyle}>
                {defaultRating + ' / ' + maxRating.length}
            </Text>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
            >
                <Text style={styles.defaultText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Rate;
const styles = StyleSheet.create({
    container: {
        margin: 55,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10
    },
    circle: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 0,
        borderColor: 'white',
        paddingTop: 10,
        marginBottom: 10,
        alignSelf:'center',
    },
    img: {
        height: 120,
        width: 120,
        borderRadius: 60,
        alignSelf:'center',
        
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        paddingRight: 5,
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'center',        
        height: 40,

        width: 100,
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
    demoText: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: '600',
        alignSelf:'center'
    },
    demoTexts: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 30,
        alignSelf:'center'

    }

})
