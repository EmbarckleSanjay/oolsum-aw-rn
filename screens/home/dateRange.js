import React from 'react';
import DropDownPicker from "react-native-dropdown-picker";
import {
    StyleSheet
} from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { Formik, useFormik, withFormik } from "formik";
import { loginValidation } from '../../utils/validate';
import { useDispatch,useSelector } from 'react-redux';
import {  loginrequest } from '../../actions/login';
const DateRange = ({ navigation: { navigate } }) => {
   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },
        titleText: {
            fontSize: 30,
            alignItems: 'center',
            justifyContent: 'center',
        },
        button: {
            alignItems: 'center',
            width: 200,
            height: 44,
            padding: 10,
            borderWidth: 1,
            borderRadius: 25,
            marginBottom: 10,
            backgroundColor: "#2196F3",
        },
        buttonText: {
            fontFamily: 'Baskerville',
            fontSize: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            width: 300,
            fontFamily: 'Baskerville',
            fontSize: 20,
            height: 44,
            padding: 10,
            borderWidth: 1,
            borderColor: '#d3d3d3',
            marginVertical: 10,
            backgroundColor: "#ffffff",


        },
        error: {
            color: '#ff0000',
        },
        card: {
            shadowOpacity: 20,
            shadowRadius: 10,
            shadowColor: '#d3d3d3',

        }
    })

    const formik = useFormik({
        initialValues: {
            loginInputEmail: '',
            loginInputPassword: ''

        },
        validate: loginValidation,

        onSubmit: (values) => {

        },
    });
    
      const dispatch = useDispatch()
    //   const { userdata } = useSelector((state: any) => state.user)
     const wrapper =()=>{
         console.log("line 82...")
         dispatch(loginrequest())
         console.log("line 84...")
     }
   
    return (
        <Formik
            initialValues={{
                loginInputEmail: '',
                loginInputPassword: ''
            }}
            validate={loginValidation}
            onSubmit={values => console.log(values)}
        >

            {({ handleChange, handleBlur, values, touched, errors,handleSubmit ,handlelog=()=>{
                alert("action....")
                dispatch(loginrequest)
               
            } }) => (

                <View style={styles.container}>
                    <Card style={styles.card}>
                        <Text style={styles.titleText}>Welcome!</Text>

                        <TextInput
                            name='loginInputEmail'
                            keyboardType='email-address'
                            placeholder='Email'
                            placeholderTextColor="#d3d3d3"
                            style={styles.input}
                            onChangeText={handleChange('loginInputEmail')}
                            onBlur={handleBlur('loginInputEmail')}
                            value={values.loginInputEmail}

                        />
                        {errors.loginInputEmail ? (
                            <Text style={styles.error}>{errors.loginInputEmail}</Text>
                        ) : null}


                        {console.warn(values.loginInputEmail)}
                        <TextInput
                            placeholder={'Password'}
                            secureTextEntry={true}
                            placeholderTextColor='#d3d3d3'
                            style={styles.input}
                            onChangeText={handleChange('loginInputPassword')}
                            onBlur={handleBlur('loginInputPassword')}
                            value={values.loginInputPassword}

                        />
                        {errors.loginInputPassword ? (
                            <Text style={styles.error}>{errors.loginInputPassword}</Text>
                        ) : null}
                        {console.warn(values.loginInputPassword)}
                        <TouchableOpacity
                        >
                            <Button style={styles.button}
                            

                                // disabled={false}
                                onPress={handleSubmit}

                                title="login"
                            > </Button>
                              <Button style={styles.button}
                              
                                onPress={wrapper}
                                title="login"
                            > </Button>
                            
                        </TouchableOpacity>
                    </Card>
                </View>
            )
            }
        
           
        </Formik >
       


    )
}

export default DateRange;