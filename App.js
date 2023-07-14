import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main2 from './Search';
import Starting from './Starting';
import Details from './Details';
import Homepage from './Homepage';
import { Button, View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';



// function Details(){
//   return(
//     <View>
//       <Text>
//         this is a details 
//       </Text>
//     </View>
//   )
// }
// function Search({navigation}) {
//   return(
//     <View>
//       <Text>
//         this is a search screen 
//       </Text>
//       <Button title='Press me i am a search' onPress={()=> navigation.navigate('Details')}/>
//     </View>
//   )
// }


// const SettingsStack = createNativeStackNavigator();
// function SearchScreenStack() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Search" component={Search} options={{headerShown: false}} />
//       <SettingsStack.Screen name="Details" component={Details} />
//     </SettingsStack.Navigator>
//   );
// }


const SettingsStack = createNativeStackNavigator();
const SearchScreenStack= () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Search" component={Main2} options={{headerShown: false}} />
      <SettingsStack.Screen name="Details" component={Details}  options={{  headerStyle: {
        backgroundColor: 'black',
        color: 'white'
         
      }}} />
    </SettingsStack.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();
const Homescreenstack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Homepage} options={{headerShown: false}}/>
      <HomeStack.Screen name="Details"  component={Details}  options={{  headerStyle: {
        backgroundColor: 'black',
        // color: 'black',
        color: 'yellow',
        
         
      }}}/>
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const App = () => {
  return (
  <NavigationContainer style={{outerWidth: 20,innerWidth:20,}}>
     <Tab.Navigator
     screenOptions={({route})=> ({
      tabBarIcon: ({focus,color,size})=>{
        let iconname;
        if(route.name == 'Homes'){
          iconname = focus ? "home":"home";
        }
        else if (route.name == 'Search'){
          iconname = focus ? "search":"search";
        }
        return <Icon name={iconname} size={24} color="white" />;;
      },
      tabBarStyle:{backgroundColor: 'black' }
     })}
     
     >

        <Tab.Screen name="Homes" component={Homescreenstack} 
        options={{headerShown: false }} 
        
        // tabBarIcon: ({ color, size }) => (
        //   // <Icon name={'home'} color={'black'} size={24} />
        //   ),}}
          />
        <Tab.Screen name="Search" component={SearchScreenStack} options={{headerShown: false}} />
      </Tab.Navigator>
  </NavigationContainer>
  );
};

export default App;

