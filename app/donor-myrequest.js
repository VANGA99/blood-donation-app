
 
import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { AntDesign } from '@expo/vector-icons';
 
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
 
import { TouchableOpacity } from 'react-native'
import { Card } from 'react-native-shadow-cards'
function DonorMyRequestsScreen({ navigation }) {
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
 
                <Text style={{ color: 'red',
        fontWeight: 600,
        fontSize: 18,
        paddingEnd: 15,
        paddingTop: 3,}}>My Requests</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonGenerate}
                    onPress={() => navigation.navigate("Post")}
                >
                    <Text style={{
                        color: '#D9D9D9',
                        fontSize: 14,
                        fontWeight: 600,
                    }}>Post Your Blood Request</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
 
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold',
                            }}>Arun</Text>
 
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital                :Nori Hospitals</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location                : Vijayawada</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units                      : 3</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Required Date      : 01.02.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Intrested People  : 2</Text>
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
 
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{color: 'black',
        fontSize: 10,
        fontWeight: 'bold',}}>Mahesh</Text>
 
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital                :Apollo Hospitals</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location                : Banglore</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units                      : 3</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Required Date      : 01.02.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Intrested People  : 2</Text>
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
 
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{color: 'black',
        fontSize: 10,
        fontWeight: 'bold',}}>Mahesh</Text>
 
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital                :Ramesh Hospital</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location                : Vijayawada</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units                      : 2</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Required Date      : 02.02.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Intrested People  : 7</Text>
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
 
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{color: 'black',
        fontSize: 10,
        fontWeight: 'bold',}}>Mahesh</Text>
 
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital                :AIMS Hospitals</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location                : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units                      : 1</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Required Date      : 01.04.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Intrested People  : 2</Text>
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
 
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{color: 'black',
        fontSize: 10,
        fontWeight: 'bold',}}>Abhilash Dattu Birudugadda</Text>
 
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Hospital                : KIMS Hospital9999999999999999</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Location                : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Units                      : 1</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Required Date      : 11.04.2023</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.size}>Intrested People  : 1</Text>
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
export default DonorMyRequestsScreen
const styles = StyleSheet.create({
    topNav: {
        paddingStart: 35,
        paddingEnd: 20,
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
    buttonGenerate: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 200,
        marginTop: 3,
        borderRadius: 5,
        backgroundColor: '#F32441'
    },
    // generateText: {
    //     // color: '#D9D9D9',
    //     // fontSize: 14,
    //     // fontWeight: 600,
    // },
    pad: {
        paddingHorizontal: 15,
        paddingTop: 5,
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
        flexDirection: 'row',
        paddingEnd: 35
    },
    // headingStyle: {
    //     color: 'red',
    //     fontWeight: 600,
    //     fontSize: 18,
    //     paddingEnd: 15,
    //     paddingTop: 3,
    // },
    cardView: {
        paddingTop: 10,
        paddingStart: 35,
        paddingEnd: 35,
    },
    card: {
        height: 150,
        width: 320,
        paddingStart: 17,
        paddingEnd: 34,
        flexDirection: 'row'
    },
    imageView: {
        paddingTop: 17,
        height: 85,
        width: 75,
        borderRadius: 42,
    },
    imageStyle: {
        height: 85,
        width: 75,
        borderRadius: 42,
    },
    textView: {
        paddingTop: 10,
        paddingBottom: 5,
    },
    // textStyle: {
    //     color: 'black',
    //     fontSize: 10,
    //     fontWeight: 'bold',
    // },
    lines: {
        height: 120,
        width: 1,
        backgroundColor: 'gray',
        marginLeft: 17,
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
        paddingLeft: 17,
        paddingTop: 15,
        paddingBottom: 30,
    },
    otherInfo: {
        paddingTop: 5,
    },
    symbol: {
        paddingTop: 7,
        paddingStart: 80,
        flexDirection: 'row',
        paddingEnd: 24,
 
    },
    space: {
        paddingRight: 15,
    },
    end: {
        marginBottom: 10,
    }
 
})
 
 
 