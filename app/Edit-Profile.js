
import React, { useState } from 'react';
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
 
const handleFileUpload = async () => {
    try {
        const file = await DocumentPicker.getDocumentAsync({});
        console.log('File URI:', file.uri);
        console.log('File name:', file.name);
        console.log('File size:', file.size);
        console.log('File type:', file.type);
    } catch (err) {
        if (err.code === 'CANCELLED') {
            console.log('User canceled the file picker');
        } else {
            console.log('Error occurred while picking the file', err);
        }
    }
};
 
const phoneRegExp = /^[0-9]{10}$/;
const pinValid = /^[0-9]{6}$/;
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please Enter your first name'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please Enter your last name'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone number is required'),
    alternateNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone number is required'),
    age: Yup.number()
        .typeError('Age must be a number')
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .min(18, 'Age must be at least 18 years old'),
    bloodGroup: Yup.string()
        .required('Blood Group is required')
        .matches(/^(A|B|AB|O)[+-]$/, 'Invalid Blood Group'),
    gender: Yup.string()
        .min(4, 'Too Short!')
        .max(11, 'Too Long!')
        .required('Please Enter your Gender'),
    city: Yup.string()
        .min(3, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Please Enter your City'),
    state: Yup.string()
        .min(3, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Please Enter your State'),
    country: Yup.string()
        .min(3, 'Too Short!')
        .max(60, 'Too Long!')
        .required('Please Enter your Country'),
    pinCode: Yup.string()
        .matches(pinValid, 'PinCode is not valid')
        .required('PinCode is required'),
    mailId: Yup.string().email('Invalid email').required('Please enter your email'),
});
 
function EditProfile({ navigation }) {
    const [selectedGender, setSelectedGender] = useState('');
 
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNumber: '',
                alternateNumber: '',
                mailId: '',
                age: '',
                bloodGroup: '',
                gender: '',
                city: '',
                state: '',
                country: '',
                pinCode: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => console.log(values)}
        >
            {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
                <ScrollView>
                    <View style={styles.back}>
                        <View style={styles.circle}>
                            <TouchableOpacity onPress={handleFileUpload}>
                                <Image
                                    source={{ uri: 'https://via.placeholder.com/150' }}
                                    style={styles.img}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.font}>Mahesh</Text>
                        </View>
                    </View>
 
                    <View style={styles.inputWrap}>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="First Name"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                                onBlur={() => setFieldTouched('firstName')}
                            />
                            {errors.firstName && touched.firstName && (
                                <Text style={styles.errorText}>{errors.firstName}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Last Name"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                                onBlur={() => setFieldTouched('lastName')}
                            />
                            {touched.lastName && errors.lastName && (
                                <Text style={styles.errorText}>{errors.lastName}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Mobile Number"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.phoneNumber}
                                onChangeText={handleChange('phoneNumber')}
                                onBlur={() => setFieldTouched('phoneNumber')}
                            />
                            {touched.phoneNumber && errors.phoneNumber && (
                                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Alternate Number"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.alternateNumber}
                                onChangeText={handleChange('alternateNumber')}
                                onBlur={() => setFieldTouched('alternateNumber')}
                            />
                            {touched.alternateNumber && errors.alternateNumber && (
                                <Text style={styles.errorText}>{errors.alternateNumber}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Age"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.age}
                                onChangeText={handleChange('age')}
                                onBlur={() => setFieldTouched('age')}
                            />
                            {touched.age && errors.age && (
                                <Text style={styles.errorText}>{errors.age}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Blood Group"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.bloodGroup}
                                onChangeText={handleChange('bloodGroup')}
                                onBlur={() => setFieldTouched('bloodGroup')}
                            />
                            {touched.bloodGroup && errors.bloodGroup && (
                                <Text style={styles.errorText}>{errors.bloodGroup}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Gender"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.gender}
                                onChangeText={handleChange('gender')}
                                onBlur={() => setFieldTouched('gender')}
                            />
                            {touched.gender && errors.gender && (
                                <Text style={styles.errorText}>{errors.gender}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="City"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.city}
                                onChangeText={handleChange('city')}
                                onBlur={() => setFieldTouched('city')}
                            />
                            {touched.city && errors.city && (
                                <Text style={styles.errorText}>{errors.city}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="State"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.state}
                                onChangeText={handleChange('state')}
                                onBlur={() => setFieldTouched('state')}
                            />
                            {touched.state && errors.state && (
                                <Text style={styles.errorText}>{errors.state}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Country"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.country}
                                onChangeText={handleChange('country')}
                                onBlur={() => setFieldTouched('country')}
                            />
                            {touched.country && errors.country && (
                                <Text style={styles.errorText}>{errors.country}</Text>
                            )}
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Pincode"
                                color={"#000000"}
                                style={styles.textInput}
                                value={values.pinCode}
                                onChangeText={handleChange('pinCode')}
                                onBlur={() => setFieldTouched('pinCode')}
                            />
                            {touched.pinCode && errors.pinCode && (
                                <Text style={styles.errorText}>{errors.pinCode}</Text>
                            )}
                        </View>
                        <View style={styles.Generate}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.buttonSubmits}
                                onPress={() => handleSubmit()}
                            >
                                <Text style={styles.submitTexts}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.buttonSaves}
                                onPress={() => navigation.navigate("Settings")}
                            >
                                <Text style={styles.saveTexts}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )}
        </Formik>
    );
}
 
export default EditProfile;
 
const styles = StyleSheet.create({
    font: {
        fontSize: 18,
        paddingTop: 15,
        color: 'white'
    },
    back: {
        height: 135,
        backgroundColor: "#B3DAFE",
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 20,
    },
    inputWrap: {
        paddingTop: 10,
    },
    circle: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderWidth: 0,
        borderColor: 'white',
        paddingTop: 10,
        alignSelf: 'center'
    },
    img: {
        height: 90,
        width: 90,
        borderRadius: 45,
    },
    errorText: {
        fontSize: 12,
        color: '#FF0D10'
    },
    inputWrapper: {
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    textInput: {
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        color: "#000000",
        paddingVertical: 5,
    },
    Generate: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25
    },
    buttonSubmits: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 100,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#2795FB',
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
        width: 100,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#F32441',
    },
    saveTexts: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});
 
 