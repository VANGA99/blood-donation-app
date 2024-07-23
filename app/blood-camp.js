import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { AntDesign } from '@expo/vector-icons';
 
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-shadow-cards'
function DonorBloodCamps() {
    return (
        <ScrollView style={styles.end}>
            <View style={styles.topNav}>
                <View style={styles.circle}>
                    <Image
                        source={require("../assets/photo1.jpg")}
                        style={styles.img}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.pad}>
                    <TextInput borderColor="red" placeholder='Search your blood Requests'
                        style={styles.search}
                    ></TextInput>
                </View>
                <View style={styles.design}>
                    <AntDesign name="message1" size={29} color="black" />
 
                </View>
            </View>
            <View style={styles.headingView}>
                <Text style={styles.headingStyle}>Blood Camps</Text>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camp-photo.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}> BV Camp</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Hospital: Nori</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={ {fontSize: 10, fontWeight: 'bold',}}>DonorName  : Surakshappppppppp</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>BloodGroup  : AB+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Gender          : male</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Contact         : 9848731900</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Date               : 01.02.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Address        : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Pincode        : 500072</Text>
                        </View>
                    </View>
 
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camps-1.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Teresa Blood Camp</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Hospital:Apollo </Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>DonorName  : Nani</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>BloodGroup  : O+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Gender          : male</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Contact         : 9912143999</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Date               : 01.02.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Address        : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Pincode        : 500072</Text>
                        </View>
                    </View>
 
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camps-photo-2.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Save Your Life Camp</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Hospital: Ramesh</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>DonorName  : Keerthi</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>BloodGroup  : A-</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Gender          : Female</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Contact         : 9878945612</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Date               : 03.03.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Address        : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Pincode        : 500072</Text>
                        </View>
                    </View>
 
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camps-pic-4.webp")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Seva Blood Camp</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Hospital: AIMS</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>DonorName  : Likhitha</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>BloodGroup  : A+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Gender          : Female</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Contact         : 9247777852</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Date               : 07.05.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Address        : Vijayawada</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Pincode        : 500072</Text>
                        </View>
                    </View>
 
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camp-photo.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>NTR Trustppppppppppppp</Text>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Hospital: KIMS</Text>
 
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>DonorName  : Sriram</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>BloodGroup  : AB-</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Gender          : male</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Contact         : 9848787458</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Date               : 01.02.2022</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Address        : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 10, fontWeight: 'bold',}}>Pincode        : 500072</Text>
                        </View>
                    </View>
 
                </Card>
            </View>
 
 
 
 
        </ScrollView>
    );
}
export default DonorBloodCamps
const styles = StyleSheet.create({
    topNav: {
        paddingStart: 35,
        paddingEnd: 35,
        marginTop:20,
        flexDirection: 'row'
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 0,
        borderColor: 'white',
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    pad: {
        paddingHorizontal: 15,
        paddingTop: 3,
        borderRadius: 10,
    },
    search: {
        width: 215,
        height: 35,
        paddingTop: 2.5,
        paddingBottom: 3,
        paddingStart: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
    },
    design: {
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    headingView: {
        paddingStart: 35,
        paddingTop: 20,
    },
    headingStyle: {
       // color: 'red',
       // fontWeight: 600,
       // fontSize: 18,
 
    },
    cardView: {
        paddingTop: 10,
        paddingStart: 35,
        paddingEnd: 35,
    },
    card: {
        height: 150,
        width: 320,
        paddingStart: 20,
        paddingEnd: 20,
        flexDirection: 'row'
    },
    imageView: {
        paddingTop: 10,
        height: 95,
        width: 105,
 
    },
    imageStyle: {
        height: 95,
        width: 105,
 
    },
    textView: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    textStyle: {
       // color: 'black',
       // fontSize: 10,
       // fontWeight: 'bold',
    },
    lines: {
        height: 130,
        width: 1,
        backgroundColor: 'gray',
        marginStart: 20,
    },
    lane: {
        paddingTop: 10,
    },
    size: {
        //fontSize: 10,
        //fontWeight: 'bold',
    },
    information: {
        width:175,
        paddingLeft: 24,
        paddingTop: 10,
        paddingBottom: 10,
 
 
    },
    otherInfo: {
        paddingTop: 5,
    },
    symbol: {
        paddingTop: 10,
        paddingStart: 40,
        flexDirection: 'row',
 
    },
    space: {
        paddingRight: 15,
    },
    end: {
        marginBottom: 10,
    }
 
})
 
 