import React, { useState } from 'react';
// import DropDownPicker from "react-native-dropdown-picker";
import {
    StyleSheet
} from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Formik, useFormik, withFormik } from "formik";
import { loginValidation } from '../../utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import { loginrequest } from '../../actions/login';
import image from '../../images/bg.png'
import { ImageBackground } from 'react-native';
const DateRange = ({navigation}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        titleText: {
            fontSize: 40,
            fontFamily: 'Baskerville',
            alignItems: 'center',
            justifyContent: 'center',
             fontWeight: 'bold',
             fontStyle: 'italic',
        },
        inputContainer: {
            borderBottomWidth: 1,
            width:300,
            height:45,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'
        },
       
       
        inputs:{
            width:300,
            height:45,
        
        },
        buttonContainer: {
            height:45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:20,
            width:300,
            borderRadius:10,
          },
        error: {
            color: 'black',
        },
        button: {
            backgroundColor:"black",
            width:300,
            height:45,
            marginTop:20,
            flexDirection: 'row',
            color:'rgb(255, 195, 0 )',
            //  'rgb(252, 251, 250 )'
          textAlign:'center',
         paddingTop:5,
         fontFamily: 'Baskerville',
         fontSize: 20,
         borderRadius:5,
         fontWeight: 'bold',
        

        
        
        },
     
    })
    const dispatch = useDispatch();
    
    const outside = (values) => {
        console.warn('inside dispatch');

        dispatch(loginrequest({
            email: values.loginInputEmail,
            password: values.loginInputPassword
        }))

        

    }
    const username = useSelector(state => state.login.email);
    
    console.warn('checking',username);
    
          {(username !== null) ? navigation.navigate('home') : null }



  




    // const func = () =>{
    //    return (props.username!=='')?
    //     props.navigation.navigate('home'):
    //    props.navigation.navigate('login')
    // }

    return (
        <>
        <ImageBackground source={image} style={styles.container}>
            <Formik
                initialValues={{
                    loginInputEmail: '',
                    loginInputPassword: ''
                }}
                validate={loginValidation}
                onSubmit={(values) => {
                    outside(values)
                }}
            >

                {({ handleChange, handleBlur, values, touched, errors, handleSubmit }) => (

                    <View style={styles.container}>

                            <Text style={styles.titleText}>NexDo</Text>
                            <View>
                            <View style={styles.inputContainer} >

                            <TextInput 
                            style={styles.inputs}
                                name='loginInputEmail'
                                keyboardType='email-address'
                                placeholder='Email'
                                placeholderTextColor= {'rgb(127, 121, 120  )'}
                                onChangeText={handleChange('loginInputEmail')}
                                onBlur={handleBlur('loginInputEmail')}
                                value={values.loginInputEmail}

                            />
                            </View>
                            {errors.loginInputEmail ? (
                                <Text style={styles.error}>{errors.loginInputEmail}</Text>
                            ) : null}

                    <View style={styles.inputContainer} >
                            <TextInput  
                                style={styles.inputs}
                                placeholder={'Password'}
                                secureTextEntry={true}
                                placeholderTextColor= {'rgb(127, 121, 120  )'}
                                onChangeText={handleChange('loginInputPassword')}
                                onBlur={handleBlur('loginInputPassword')}
                                value={values.loginInputPassword}

                            />
                            </View>
                            {errors.loginInputPassword ? (
                                <Text style={styles.error}>{errors.loginInputPassword}</Text>
                            ) : null}
                            <View >

                            <TouchableOpacity onPress={handleSubmit}  >
                                
                                <Text style={styles.button}>Login</Text>

                               
                            </TouchableOpacity>
                            </View>
                            </View>
                    </View>
                )
                }


            </Formik >

            </ImageBackground>
        </>
    )

}




export default (DateRange);