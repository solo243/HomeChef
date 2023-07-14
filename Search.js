import {
  View, Text, FlatList, TextInput, Image, TouchableOpacity, Button, ActivityIndicator, ScrollView,
  Dimensions
} from 'react-native'
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewDetails from './Details';

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

// function Details(){
//   return(
//     <View>
//       <Text style={{fontSize: 30,textAlign: 'center',alignSelf: 'center',justifyContent: 'center'}}>
//         this is a details 
//       </Text>
//     </View>
//   )
// }

const hnadletouch = (item) => {
  // console.warn(item.idMeal)
}



const Main2 = ({ navigation }) => {


  const [data, setdata] = useState();
  // const[searchqury,setsearch] =useState();


  const [foodid, setfoodid] = useState();

  const apicontect = async (text) => {
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
    // const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    let newre = await fetch(url);
    let newresult = await newre.json();
    setdata(newresult.meals);

  }


  const hnadletouch = async (item) => {
    let mealid = item.idMeal
    const fetchurl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    let resultof = await fetch(fetchurl);
    let realof = await resultof.json();
    let realdata = realof
    if (realdata) {
      navigation.navigate('Details', { item, realdata })
    }
    else {
      <ActivityIndicator />
    }
  }





  return (

    <View style={{ backgroundColor: '#242424', height: '100%' }} >
      <View style={{
        backgroundColor: 'black',
        height: 300,
        width: 300,
        position: 'absolute',
        borderRadius: 300,
        marginLeft: -100,
        marginTop: -100,
        opacity: 0.2
      }}>
      </View>
      <View style={{
        backgroundColor: 'black',
        height: 400,
        width: 400,
        position: 'absolute',
        borderRadius: 400,
        marginLeft: 200,
        marginTop: 250,
        opacity: 0.2
      }}>
      </View>

      <TextInput
        placeholder='Search'
        placeholderTextColor={'black'}

        // value={searchqury}
        // onChangeText={(text)=>setsearch(text)}
        onChangeText={(text) => apicontect(text)}
        onSubmitEditing={() => useEffect}
        style={{
          backgroundColor: 'white',
          margin: 25,
          // height: 60,
          height: height*0.071,
          borderRadius: 30,
          color: 'black',
          padding: 20,
          marginTop: 35,
          elevation: 20,
          fontSize: width*0.03
        }} />
      {/* {console.log(searchqury)} */}


      <FlatList data={data}
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignSelf: 'center'

        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item, index }) => {

          return (
            <ScrollView showsHorizontalScrollIndicator={false} 
             showsVerticalScrollIndicator={false}>
              <TouchableOpacity onPress={() => hnadletouch(item)}>
                <View style={{
                  // height: 280,
                  // width: 190,
                  width: width*0.41,
                  height: height*0.31,
                  backgroundColor: 'black',
                  margin: width*0.03,
                  borderRadius: 10
                }}>
                  <View style={{ backgroundColor: 'black', height: height*0.22, borderRadius: 10 }}>
                    <Image source={{ uri: item.strMealThumb }} style={{
                      // height: 180,
                      // width: 160,
                      width: width*0.35,
                      height: height*0.2,
                      alignSelf: 'center',
                      marginTop: height*0.01,
                      resizeMode: 'cover',
                      borderRadius: 15,
                   
                    }} />
                  </View>
                  <Text numberOfLines={2} style={{
                    marginTop:height*0.001, fontSize: width*0.04,
                    fontFamily: 'Raleway-Medium', color: 'white', marginStart: 15
                  }}>
                    {item.strMeal}
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          )
        }} />
    </View>
  )
}


// const onclickevent = (item) =>{
//   console.warn(item.idMeal)
//   return(

//   )
//  }


export default Main2