
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native';
import { Button } from 'react-native';

import { Image } from 'react-native';
import { useState } from 'react';
import { Platform } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ScrollView } from 'react-native';

import { TouchableOpacity } from 'react-native';
import { Link, useNavigation } from 'expo-router';
 
const handleFileUpload = async () => {
  try {
    const file = await DocumentPicker.getDocumentAsync({});
 
    // Use the selected file
    console.log('File URI:', file.uri);
    console.log('File name:', file.name);
    console.log('File size:', file.size);
    console.log('File type:', file.type);
  } catch (err) {
    if (err.code === 'CANCELLED') {
      // User canceled the file picker
      console.log('User canceled the file picker');
    } else {
      // Error occurred while picking the file
      console.log('Error occurred while picking the file', err);
    }
  }
};
 
const phoneRegExp = /^[0-9]{10}$/;
const pinValid = /^[0-9]{6}$/;
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please Enter your firstName'),
  lastName: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please Enter your lastName'),
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
    .required(' Please Enter your Gender'),
  city: Yup.string()
    .min(3, 'Too Short!')
    .max(60, 'Too Long!')
    .required(' Please Enter your City'),
  state: Yup.string()
    .min(3, 'Too Short!')
    .max(60, 'Too Long!')
    .required(' Please Enter your State'),
  country: Yup.string()
    .min(3, 'Too Short!')
    .max(60, 'Too Long!')
    .required(' Please Enter your Country'),
  pinCode: Yup.string()
    .matches(pinValid, 'PinCode is not valid')
    .required('PinCode  is required'),
 
  mailId: Yup.string().email('Invalid email').required('Please enter your mailId'),
});
 
function ProfileInformation() {
  const [selectedGender, setSelectedGender] = useState('');
 
  const onGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  const navigation = useNavigation();
  return (
    <Formik initialValues={{
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
    >
      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (
        <ScrollView>
          <View style={styles.topNav}>
            <Pressable onPress={handleFileUpload}>
              <View style={styles.circle}>
                <Image
                  source={require("../assets/profile-picture-empty2-download.png")}
                  style={styles.img}
                  resizeMode='contain'
                />
              </View>
            </Pressable>
            <View style={styles.name}>
              <Text style={styles.text}>Profile Information</Text>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="First Name"
                color={"#000000"}
                width="85%"
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={() => setFieldTouched('firstName')}
              >
              </TextInput>
              {errors.firstName && touched.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}
            
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Last Name"
                color={"#000000"}
                width="85%"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => setFieldTouched('lastName')}
              >
              </TextInput>
              {touched.lastName && errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
           
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Mobile Number"
                color={"#000000"}
                width="85%"
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={() => setFieldTouched('phoneNumber')}
              >
              </TextInput>
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
            
          </View>
 
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Age"
                color={"#000000"}
                width="85%"
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={() => setFieldTouched('age')}
              >
              </TextInput>
              {touched.age && errors.age && (
                <Text style={styles.errorText}>{errors.age}</Text>
              )}
            
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Blood Group"
                color={"#000000"}
                width="85%"
                value={values.bloodGroup}
                onChangeText={handleChange('bloodGroup')}
                onBlur={() => setFieldTouched('bloodGroup')}
              >
              </TextInput>
              {touched.bloodGroup && errors.bloodGroup && (
                <Text style={styles.errorText}>{errors.bloodGroup}</Text>
              )}
            
          </View>
 
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Gender"
                color={"#000000"}
                width="85%"
                value={values.gender}
                onChangeText={handleChange('gender')}
                onBlur={() => setFieldTouched('gender')}
              >
              </TextInput>
              {touched.gender && errors.gender && (
                <Text style={styles.errorText}>{errors.gender}</Text>
              )}
            
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="City"
                color={"#000000"}
                width="85%"
                value={values.city}
                onChangeText={handleChange('city')}
                onBlur={() => setFieldTouched('city')}
              >
              </TextInput>
              {touched.city && errors.city && (
                <Text style={styles.errorText}>{errors.city}</Text>
              )}
           
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="State"
                color={"#000000"}
                width="85%"
                value={values.state}
                onChangeText={handleChange('state')}
                onBlur={() => setFieldTouched('state')}
              >
              </TextInput>
              {touched.state && errors.state && (
                <Text style={styles.errorText}>{errors.state}</Text>
              )}
            
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Country"
                color={"#000000"}
                width="85%"
                value={values.country}
                onChangeText={handleChange('country')}
                onBlur={() => setFieldTouched('country')}
              >
              </TextInput>
              {touched.country && errors.country && (
                <Text style={styles.errorText}>{errors.country}</Text>
              )}
            
          </View>
          <View style={styles.inputWrapper}>
            
              <TextInput style={{ borderBottomWidth: 1 }}
                placeholder="Pincode"
                color={"#000000"}
                width="85%"
                value={values.pinCode}
                onChangeText={handleChange('pinCode')}
                onBlur={() => setFieldTouched('pinCode')}
              ></TextInput>
              {touched.pinCode && errors.pinCode && (
                <Text style={styles.errorText}>{errors.pinCode}</Text>
              )}
            
          </View>
          <View style={styles.Generate}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonSubmit}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={styles.submitText}>Reset</Text>
            </TouchableOpacity>
            <Link href={'/donor-homescreen'} asChild>
            <TouchableOpacity 
              activeOpacity={0.7}
              style={styles.buttonSave}
             >
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      )}
    </Formik>
 
 
  )
}
export default ProfileInformation;
const styles = StyleSheet.create({
  topNav: {
    paddingStart: 35,
    paddingEnd: 20,
    paddingTop: 55,
    flexDirection: 'row'
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 0,
   
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  name: {
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
  },
  sun: {
    fontWeight: '600',
  },
 
 
  errorText: {
    fontSize: 12,
    color: '#FF0D10'
  },
  mail: {
    paddingTop: 0,
    paddingHorizontal: 40,
  },
  age: {
    flexDirection: 'column',
  },
  inputStyle: {
    borderColor: '#16213E ',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    border: 10,
  },
  inputWrapper: {
    marginBottom: 3,
    paddingStart: 10,
    paddingTop: 5,
    paddingEnd: 25,
  },
  pick: {
    marginBottom: 3,
    paddingStart: 50,
    paddingTop: 10,
    paddingEnd: 30,
  },
  dimensions: {
    width: 55,
    height: 10,
  },
  Generate: {
    paddingTop: 20,
    flexDirection: 'row',
    paddingStart:35,
    justifyContent:'space-between',
    marginEnd:50
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 130,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#2795FB',
   
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSave: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 130,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#F32441'
  },
  saveText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
 
})
 
 