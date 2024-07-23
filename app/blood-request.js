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
function DonorBloodRequestsScreen() {
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
                <Text style={{ color: 'red', fontWeight: 600, fontSize: 18, }}>BloodRequests</Text>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Arun</Text>

                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital        : Ramesh Hospitalp</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location       : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>BloodGroup : AB+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units             : 1</Text>
                        </View>
                        <View style={styles.symbol}>
                            <View style={styles.space}>
                                <Feather name="phone-call" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </View>

                        </View>

                    </View>
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/passport-photo.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Mahesh</Text>

                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital        : Ramesh Hospital</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location       : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>BloodGroup : AB+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units             : 1</Text>
                        </View>
                        <View style={styles.symbol}>
                            <View style={styles.space}>
                                <Feather name="phone-call" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </View>

                        </View>

                    </View>
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/photo-2.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Shiva</Text>

                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital        : Ramesh Hospital</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location       : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>BloodGroup : AB+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units             : 1</Text>
                        </View>
                        <View style={styles.symbol}>
                            <View style={styles.space}>
                                <Feather name="phone-call" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </View>

                        </View>

                    </View>
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/photo-3.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Ram Satyanarayana </Text>

                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital        : Ramesh Hospital</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location       : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>BloodGroup : AB+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units             : 1</Text>
                        </View>
                        <View style={styles.symbol}>
                            <View style={styles.space}>
                                <Feather name="phone-call" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/photo-4.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Shyam</Text>


                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital        : Ramesh Hospital</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location       : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>BloodGroup : AB+</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units             : 1</Text>
                        </View>
                        <View style={styles.symbol}>
                            <View style={styles.space}>
                                <Feather name="phone-call" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </View>
                            <View style={styles.space}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </View>

                        </View>

                    </View>
                </Card>
            </View>


        </ScrollView>
    );
}
export default DonorBloodRequestsScreen
const styles = StyleSheet.create({
    topNav: {
        paddingStart: 35,
        paddingEnd: 35,
        marginTop: 20,
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
    // headingStyle: {
    //     color: 'red',
    //     fontWeight: 600,
    //     fontSize: 18,

    // },
    cardView: {
        paddingTop: 10,
        paddingStart: 35,
        paddingEnd: 35,
    },
    card: {
        height: 130,
        width: 320,
        paddingStart: 16,
        flexDirection: 'row'
    },
    imageView: {
        paddingTop: 10,
        height: 85,
        width: 75,
        borderRadius: 42,

    },
    imageStyle: {
        height: 89,
        width: 75,
        borderRadius: 47,
    },
    textView: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    // textStyle: {
    //     color: 'black',
    //     fontSize: 10,
    //     fontWeight:'bold',

    // },
    lines: {
        height: 110,
        width: 1,
        backgroundColor: 'gray',
        marginLeft: 16,
    },
    lane: {
        paddingTop: 10,
    },
    size: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    information: {
        width: 195,
        paddingLeft: 16,
        paddingTop: 7,
        paddingBottom: 30,


    },
    otherInfo: {
        paddingTop: 10,
    },
    symbol: {
        paddingTop: 10,
        paddingStart: 56,
        flexDirection: 'row',
        paddingEnd: 14,

    },
    space: {
        paddingRight: 20,
    }, end: {
        marginBottom: 10,
    }
})
