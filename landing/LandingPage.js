import DropDownPicker from "react-native-dropdown-picker";
import React from 'react'
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';
import { Card, ListItem, Icon, input } from 'react-native-elements'
{console.warn("login...")}
const login = (navigation) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    titleText: {
      fontSize: 50,
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
      backgroundColor:"#2196F3",
    },
    buttonText: {
      fontFamily: 'Baskerville',
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      fontFamily: 'Baskerville',
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginVertical: 10,
      backgroundColor: "#ffffff",
      borderRadius: 25,

    },
  })
  
 
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Card style={styles.container}>
        <Text style={styles.titleText}>Welcome!</Text>

        <TextInput
          keyboardType='email-address'
          placeholder='email'
          placeholderTextColor='black'
          style={styles.input}
        
          
        />
        <TextInput
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor='black'
          style={styles.input}
      
        />
      
        <TouchableOpacity
        >
          <Button style={styles.button}
            
            // disabled={false}
            type='submit'

            title="login"
          > </Button>
        </TouchableOpacity>
      </Card>
    </View>


  )

}

export default login;