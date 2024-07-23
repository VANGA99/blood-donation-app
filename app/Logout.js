import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import { Link } from 'expo-router';


function LogoutScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.private}>
                <Card style={styles.card}>
                    <Text style={styles.rulesInsider}>Are You Want To Logout</Text>
                    <View style={styles.Generate}>
                        <View style={styles.gap}>

                            <Link href={'/donor-login'} asChild>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.buttonSubmits}
                                    
                                >
                                    <Text style={styles.submitTexts}>Yes</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.buttonSaves}
                                onPress={() => navigation.navigate("BottomNavigation")}
                            >
                                <Text style={styles.saveTexts}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>
        </ScrollView>
    )
}

export default LogoutScreen

const styles = StyleSheet.create({
    private: {
        paddingTop: 290,
        paddingLeft: 20,
        paddingRight: 20,
        left: 38
    },
    card: {
        width: 250,
        height: 140,
        paddingTop: 30,
        paddingStart: 35,
        paddingEnd: 35,
    },
    rulesInsider: {
        fontWeight: '600',
        fontSize: 16,
    },
    Generate: {
        paddingTop: 10,
        flexDirection: 'row',
        paddingStart: 0,
        justifyContent: 'space-between',
        marginEnd: 25
    },
    buttonSubmits: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 70,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#2795FB',
        marginStart: 20,
    },
    submitTexts: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    buttonSaves: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 70,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#F32441',
    },
    saveTexts: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    gap: {
        paddingEnd: 10,
    }
})

