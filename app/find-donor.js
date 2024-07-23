import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import { StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-shadow-cards';

function FindDonorScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topNav}>
                <View style={styles.circle}>
                    <Image
                        source={require("../assets/photo1.jpg")} // Replace with your actual image path
                        style={styles.img}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.pad}>
                    <TextInput
                        placeholder='Search your blood Requests'
                        style={styles.search}
                    />
                </View>
                <View style={styles.icon}>
                    <AntDesign name="message1" size={29} color="black" />
                </View>
            </View>

            <View style={styles.select}>
                <View style={styles.drop}>
                    <View style={styles.gap}>
                        <SelectList
                            style={styles.selectList}
                        // Add necessary props
                        />
                    </View>
                    <View style={styles.gap}>
                        <SelectList
                            style={styles.selectList}
                        // Add necessary props
                        />
                    </View>
                </View>
            </View>

            <View style={styles.headingView}>
                <Text style={styles.headingStyle}>List of Donors</Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonSubmit}
            // Add onPress handler
            >
                <Text style={styles.submitText}>Search</Text>
            </TouchableOpacity>

            {/* Card for Donor 1 */}
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")} // Replace with your actual image path
                        />
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Mahesh</Text>

                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.information}>
                        <Text style={styles.infoText}>Hospital: Sunrise Hospital</Text>
                        <Text style={styles.infoText}>Location: Hyderabad</Text>
                        <Text style={styles.infoText}>Units: 1</Text>
                        <Text style={styles.infoText}>Date: 01.02.2023</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Feather name="phone-call" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>

            {/* Card for Donor 2 */}
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")} // Replace with your actual image path
                        />
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Surya</Text>

                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.information}>
                        <Text style={styles.infoText}>Hospital: Nori Hospital</Text>
                        <Text style={styles.infoText}>Location: Vijayawada</Text>
                        <Text style={styles.infoText}>Units: 2</Text>
                        <Text style={styles.infoText}>Date: 01.02.2023</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Feather name="phone-call" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>

            {/* Card for Donor 3 */}
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")} // Replace with your actual image path
                        />
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>SurendraNath</Text>

                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.information}>
                        <Text style={styles.infoText}>Hospital: Ramesh Hospital</Text>
                        <Text style={styles.infoText}>Location: Vijayawada</Text>
                        <Text style={styles.infoText}>Units: 3</Text>
                        <Text style={styles.infoText}>Date: 14.02.2023</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Feather name="phone-call" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>

            {/* Card for Donor 4 */}
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")} // Replace with your actual image path
                        />
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>SatyaNarayana</Text>

                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.information}>
                        <Text style={styles.infoText}>Hospital: AIMS Hospitals</Text>
                        <Text style={styles.infoText}>Location: Hyderabad</Text>
                        <Text style={styles.infoText}>Units: 1</Text>
                        <Text style={styles.infoText}>Date: 19.03.2023</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Feather name="phone-call" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>

            {/* Card for Donor 5 */}
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.imageStyle}
                            source={require("../assets/photo1.jpg")} // Replace with your actual image path
                        />
                        <View style={styles.textView}>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyle}>Maheshhhhhhhhh</Text>

                        </View>
                    </View>

                    <View style={styles.divider}></View>

                    <View style={styles.information}>
                        <Text style={styles.infoText}>Hospital: KIMS Hospitals999999999999999999</Text>
                        <Text style={styles.infoText}>Location: Hyderabad</Text>
                        <Text style={styles.infoText}>Units: 3</Text>
                        <Text style={styles.infoText}>Date: 25.02.2023</Text>

                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Feather name="phone-call" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MaterialCommunityIcons name="message-processing-outline" size={16} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="handshake-o" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    topNav: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    img: {
        height: '100%',
        width: '100%',
    },
    pad: {
        flex: 1,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    search: {
        height: 40,
    },
    icon: {
        marginLeft: 10,
    },
    select: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    drop: {
        flex: 1,
    },
    gap: {
        marginRight: 10,
    },
    selectList: {
        // Adjust styles for SelectList component
    },
    headingView: {
        marginBottom: 10,
    },
    headingStyle: {
        // fontSize: 18,
        // fontWeight: 'bold',
        color: 'red',
    },
    buttonSubmit: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#F32441',
        borderRadius: 5,
        marginTop: 10,
    },
    submitText: {
        color: 'white',
        // fontSize: 16,
        // fontWeight: 'bold',
    },
    cardView: {
        marginBottom: 20,
    },
    card: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageView: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    textView: {
        alignItems: 'center',
        marginTop: 5,
    },
    textStyle: {
        // fontWeight: 'bold',
        // fontSize: 14,
    },
    divider: {
        width: 1,
        backgroundColor: 'gray',
        marginHorizontal: 15,
    },
    information: {
        flex: 1,
        paddingLeft: 15,
    },
    infoText: {
        marginBottom: 5,
    },
    actions: {
        flexDirection: 'row',
        marginTop: 10,
    },
    actionButton: {
        marginRight: 10,
    },
});

export default FindDonorScreen;
