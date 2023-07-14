import { View, Text,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Starting = ({navigation}) => {
  return (
    
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
    <View>
      <Text style={{
        fontSize: 40,
        marginTop: 50,
        marginStart: 30,
        color: 'white',
        fontWeight: '700'
      }}>
        Cookbook
      </Text>
      <Text style={{
        fontSize: 20,
        color: 'white',
        marginStart: 30
      }}>
        Companion
      </Text>

      {/* chef image for app */}
      <Image source={require('./assets/chef3.png')}
      style={{
        height: 330,
        width: 330,
        marginStart: 120,
        marginTop: 60,
        position: 'absolute',
        marginRight: 3000
      }}/>
    </View>





    {/* white circale for text */}
    <View style={{
      height: 630,
      width: 500,
      backgroundColor: 'orange',
      position: 'absolute',
      marginTop: '97%',
      borderRadius: 200,
      alignSelf: 'center',
      backgroundColor: 'white'
    }}>


      {/* this is for TastyTrails title  */}
      <View style={{

        height: 90,
        width: 400,
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 60
      }}>
        <Text style={{
          fontSize: 40,
          textAlign: 'center',
          fontWeight: '500',
          color: 'black'
        }}>
          TastyTrails
        </Text>
      </View>


      {/* this is for description for app */}
      <View style={{
        height: 100,
        width: 330,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
       
      }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 20,

        }}>
          Unleash your inner chef with our Food Recipe App. Discover, cook, and indulge
        </Text>
      </View>


      {/* this is for get start button  */}
      <View style={{
        alignItems: 'center',
        backgroundColor: 'orange',
        height: 80,
        width: 300,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
         borderRadius: 50,
      }}>
        <View style={{
          backgroundColor: 'white',
          height: 65,
          width: 65,
         position: 'absolute',
         alignSelf: 'flex-start',
         borderRadius: 200,
         marginStart: 10,
         justifyContent: 'center'
        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '800'
          }}>
            〉
          </Text>

        </View>
        <TouchableOpacity onPress={()=> alert('hellow')}>
          <Text style={{
            fontSize: 25,
            color: 'white',
            fontWeight: '500'
          }}>a
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>


  </View>
  );
}


export default Starting