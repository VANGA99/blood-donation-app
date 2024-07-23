
import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

function Notification() {
    return (
        <ScrollView>
            <View style={styles.private}>
                <Text style={styles.privateInside}>Notifications</Text>
            </View>
            <View style={styles.private}>
                <Text style={styles.rulesInsider}>Welcome to Blood Saviour</Text>
            </View>
            <View style={styles.privater}>
                <Text style={styles.rulesInsider}>Hi User !!</Text>
            </View>
        </ScrollView>
    )
}

export default Notification

const styles = StyleSheet.create({
    private: {
        paddingTop: 70,
        paddingLeft: 50,
        paddingRight: 20,
    },
    privater: {
        paddingTop: 5,
        paddingLeft: 50,
        paddingRight: 20,

    },
    privateInside: {
        fontWeight: '600',
        fontSize: 24,
        color: 'red',
        top: 55
    },
    rulesInsider: {
        fontWeight: '600',
        fontSize: 16,
    }
})

