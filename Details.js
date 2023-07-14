import { View, Text, ScrollView, Image,Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import Main2 from './Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WebView from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
// import YouTube from 'react-native-youtube';




var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
const Details = ({ route ,navigation}) => {


  const [isdata, setisdata] = useState();
  const [newdata, setnewdata] = useState([]);

  const [urlgg, seturlgg] = useState();
  
  const [newvideo,setnewvideo] = useState([])
  const [playing, setPlaying] = useState(false);

  const selected = route.params.item
  const another = route.params.realdata;
  const ohkdata = another.meals
  let ggwa = ohkdata[0].strYoutube;

function extractVideoId(url) {
    // Regular expression pattern to extract video ID
    var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})(?:\S+)?$/;

    // Extract video ID using the pattern
    var match = url.match(regExp);

    if (match && match[1]) {
      // Return the extracted video ID
    
      return match[1];
    } else {
      // Return null if video ID is not found
      return null;
    }
  }

    var url = ggwa;
    var hj = extractVideoId(url);
     
    // if(navigator){
    //   null
    //   console.log(error)
    // }
    // else{
    //   hj
    //   console.log(hj)
    
 

  let newurl = ohkdata.idMeal
  return (
    <ScrollView>
      <View style={{ margin: 0, backgroundColor: '#242424', width: '100%', height: '100%' }}>


        
         
<YoutubePlayer
      webViewStyle={{opacity: 0.97}}
        height={height*0.3}
        videoId={hj}
        play={playing}       
      />
    
     
    

        <View style={{}}>
          <Text style={{ fontSize: width*0.06, margin: 20, fontFamily: 'Raleway-Medium',color: 'white', }}>
            {selected.strMeal}
           
          
          </Text>
          <Text>
          
          </Text>
        </View>
       
      
        <View style={{ width: '99%', borderRadius: 30 }}>
          <Text style={{ fontSize: width*0.05, fontFamily: 'Raleway-Medium',color: 'white', marginTop: height*0.01, marginStart: 20 }}>
            Origin
          </Text>
          <View style={{
            width: width*0.23, height: height*0.034,
            borderRadius: 20,
            borderColor: 'green', elevation: 5,
            backgroundColor: 'white',
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginStart: 20,
            borderWidth: 2
          }}>
            <Text style={{ alignSelf: 'center',fontFamily: 'Raleway-Medium', color: 'black',textAlign:'center' }}>
              {ohkdata[0].strArea}

            </Text>

          </View>
          <Text style={{ fontSize: width*0.06, color: 'black', marginBottom: 10, marginStart: 20, color: 'white', fontFamily: 'Raleway-Medium',marginTop: 30 }}>Instructions</Text>
          <Text style={{ fontSize: 18, marginStart: 20, marginTop: 20, marginBottom: 30, fontFamily: 'Raleway-Medium',color: 'white' }}>
            {/* {selected?.strInstructions} */}
            {ohkdata[0].strInstructions}
          </Text>
        </View>
        <View>
     
      
     
    </View>

      </View>
    </ScrollView>
  )
}

export default Details