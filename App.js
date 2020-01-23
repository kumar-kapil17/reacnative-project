// import React, {Component} from 'react';
// import {View, Text} from 'react-native';

// export default class App extends Component {

//   render() {
//     return (
//      <View style ={{flex:1,justifyContent: 'center',alignItems:'center',}}>
//        <View style ={{width:300,height:100,justifyContent: 'center',alignItems:'center',
//        borderWidth:1,borderColor:'red',backgroundColor:'#EEE',borderRadius:50,shadowColor:'grey',elevation:10}}>
//        <Text>Kapil Kumar</Text>
//        </View>

//      </View>
//     );
//   }
// }

//Example of Button and Props//

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

// export default class ButtonBasics extends Component {
//     onPressButton() {
//         Alert.alert('You clicked the button!')
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this.onPressButton}
//                         title="Press Me"
//                     />
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <Button
//                         onPress={this.onPressButton}
//                         title="Press Me"
//                         color="#009933"
//                     />
//                 </View>
//                 <View style={styles.multiButtonContainer}>
//                     <Button
//                         onPress={this.onPressButton}
//                         title="A disabled button"
//                         disabled={true}
//                     />
//                     <Button
//                         onPress={this.onPressButton}
//                         title="OK!"
//                         color="#009933"
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     buttonContainer: {
//         margin: 20
//     },
//     multiButtonContainer: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between'
//     }
// })

//Login Form View//

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    };
  }
  // onClick = (login) => {
  //   Alert.alert("Alert", "please login" +login);
  // }
  render() {
    return (
      <View style={styles.container}>
       
          <ImageBackground
            source={require('./Image/first.jpeg')}
            style={{height: 250, width: "100%"}}>
            <Text style ={{margin:50,fontSize:50,color:'white'}}>kapil</Text>
          </ImageBackground>
        
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={email => this.setState({email})}
          />
          
         
       
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            onChangeText={password => this.setState({password})}
          />
        </View>
    
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClick('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    paddingLeft:15,
     borderBottomColor: '#ddd',
    borderRadius:20,
     //borderWidth: 0.5,
     borderBottomWidth:3,
    
 elevation:2,
   
      marginBottom:10,
      marginHorizontal:20,
      marginTop:50,
      
      
 
  },

  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#008CBA",
    marginLeft:50,
    marginTop:50,
    elevation:2
  },
  loginText: {
    color: 'white',
  }
  
});
