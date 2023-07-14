import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, ActivityIndicator ,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;

const Homepage = ({ navigation }) => {


    const [thedata, setthedata] = useState();
    const [ograndom, setograndom] = useState();
    const [nonveg, setnonveg] = useState();
    const [realsweet, setsweet] = useState();
    const [gandu, setgandu] = useState({});
    const fetching = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`;
        let response = await fetch(url);
        let realresponse = await response.json();
        setthedata(realresponse.meals);

    }



    // navigation to ditail screen throu item and realdatad

    const fetchbyid = async (item) => {
        let mealid = item.idMeal
        const fetchurl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        let resultof = await fetch(fetchurl);
        let realof = await resultof.json();
        let realdata = realof
        //     let ohkdata = realdata.meals
        //     let final = ohkdata.strYoutube
        //   setgandu(ohkdata.strYoutube)
        //   console.log(gandu)


        if (realdata) {
           
            navigation.navigate('Details', { item, realdata })
           
        }
        else {
            <ActivityIndicator />
        }
    }

    const getnonveg = async () => {
        const mmurl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken`
        let itemnonveg = await fetch(mmurl);
        let realnonveg = await itemnonveg.json();
        let mmnonveg = realnonveg.meals
        setnonveg(mmnonveg);
        // console.log(mmnonveg)

    }


    const gettingsweet = async () => {
        const sweeturl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter`
        let itemsweet = await fetch(sweeturl);
        let realsweet = await itemsweet.json();
        let nnsweet = realsweet.meals;
        setsweet(nnsweet);

    }
    // get random item for Selection
    // const geetrandom = async() => {
    //     const ggurl = `https://www.themealdb.com/api/json/v1/1/random.php`
    //     let getrandom = await fetch(ggurl);
    //     let realrandom = await getrandom.json();
    //     let random = realrandom.meals
    //     console.log(random);
    //     setograndom(random);

    // }

    useEffect(() => {
        fetching();
        //  geetrandom()
        getnonveg();
        gettingsweet();
    }, []);




    return (




        <ScrollView>

           


            <View style={{ flex: 1, backgroundColor: '#242424', color: 'white' }}>
                <View style={{ backgroundColor: 'black', borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: height*0.025, margin: 20, color: 'white', fontFamily: 'Raleway-Medium' }}>
                        Hellow
                    </Text>
                </View>
                <View style={{
                backgroundColor: 'black', height: 300, width: 300, position: 'absolute', borderRadius: 300,
                marginStart: -100, marginTop: -100,
                opacity: 0.3
            }}>

            </View>
            <View style={{
                backgroundColor: 'black', height: 400, width: 400, position: 'absolute', borderRadius: 400,
              marginStart: 200,
              marginTop: 300,
                opacity: 0.3
            }}>
            </View>
            <View style={{
                backgroundColor: 'black', height: 400, width: 400, position: 'absolute', borderRadius: 400,
              marginStart: -200,
              marginTop: 800,
                opacity: 0.3
            }}>

            </View>

                {/* slider title fot you */}
                <View>
                    <Text style={{
                        marginStart: 20,
                        // fontSize: 20,
                        fontSize: width*0.056,
                        color: 'white',
                        fontFamily: 'Raleway-Medium'
                    }}>
                        Especially For You
                    </Text>
                </View>



                {/* slider for in red */}
                <View style={{

                    height: 280,
                    width: '95%',
                    alignSelf: 'center',
                    marginTop: 10
                }}>



                    <FlatList
                        data={realsweet}
                        horizontal
                        bounces


                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => fetchbyid(item)}>
                                    <View style={{ height: 380, width: 390, margin: 20, alignSelf: 'center', borderRadius: 20 }}>
                                        <Image source={{ uri: item.strMealThumb }} style={{
                                            // height: 250,
                                            // width: '90%',
                                            height: height*0.3,
                                            width: width*0.9,
                                            resizeMode: 'cover',
                                            borderRadius: 30,
                                            position: 'absolute',
                                            // alignSelf: 'center',
                                            // marginTop: 50

                                            marginBottom: 30
                                        }} />

                                        {/* <View style={{
                        backgroundColor: 'black',
                        opacity: 0.5,
                        position: 'absolute',
                        width: 220,
                        height: 60,
                        marginTop: 190,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}>
                   
                    </View> */}


                                    </View>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>



                {/* harsh Recipe text */}
                <View>
                    <Text style={{
                        fontSize: width*0.04,
                        color: 'white',
                        marginStart: 20,
                        marginTop: 10,
                        fontWeight: '450',
                       
                        fontFamily: 'Raleway-Medium'
                    }}>
                        Harsh Recipes
                    </Text>
                </View>






                <View>
                    <Text style={{
                        fontSize: width*0.05,
                        marginStart: 20,
                        marginTop: height*0.02,
                        marginBottom: height*0.023,
                        color: 'white',
                        fontFamily: 'Raleway-Medium'
                    }}>
                        Vegetarian Recipes
                    </Text>
                </View>

                <FlatList
                    data={thedata}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={{
                        // flexWrap: 'wrap',
                        // flexDirection: 'row'
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => fetchbyid(item)}>
                                <View style={{
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    // elevation: 10,
                                    // backgroundColor: ''
                                }}>


        
                                    <View style={{
                                        // height: 255,
                                        // height: 220,
                                        // width: 170,
                                        width: width*0.4,
                                        height: height*0.25,
                                        margin: 20,
                                        // backgroundColor: 'white',
                                        // borderRadius: 30,
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        // elevation: 7
                                        // borderWidth: 2,
                                        // borderRadius: 30,
                                    }}>
                                        <Image source={{ uri: item.strMealThumb }}
                                            style={{
                                                // height: 180,
                                                // width: 165,
                                                width: width*0.4,
                                                height: height*0.2,
                                                borderRadius: 30,
                                                resizeMode: 'cover'
                                            }}
                                        />

                                        <Text numberOfLines={2} style={{
                                            fontSize: width*0.036,
                                            color: 'white',
                                            margin: 10,
                                            fontFamily: 'Raleway-Medium'
                                        }}>
                                            {item.strMeal}
                                        </Text>

                                    </View>


                                </View>
                            </TouchableOpacity>

                        )
                    }}
                />








                <View>
                    <Text style={{
                        fontSize: width*0.05,
                        marginStart: 20,
                        marginTop: height*0.01,
                        color: 'white',
                        fontFamily: 'Raleway-Medium'
                    }}>
                        Chicken Recipes
                    </Text>
                </View>


                <FlatList
                    style={{
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        alignSelf: 'center',
                        elevation: 10,
                        // margin: 20,
                       
                    }}
                    numColumns={2}
                    data={nonveg}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => fetchbyid(item)}>
                                <View style={{
                                    // backgroundColor: 'red',
                                    // height: 260,
                                    // width: 190,
                                    width: width*0.44,
                                    height: height*0.30,
                                    margin: width*0.02,
                                    marginStart: width*0.02,
                                    //    borderWidth: 2,
                                    //     borderRadius: 30,
                                    marginTop: height*0.03,
                                    marginBottom: 7,
                                    alignSelf: 'center',
                                }}>
                                    <Image source={{ uri: item.strMealThumb }} style={{
                                        // height: 200,
                                        // width: 190,
                                        width: width*0.43,
                                        height: height*0.23,
                                        resizeMode: 'cover',
                                        borderRadius: 13,

                                    }} />
                                    <Text numberOfLines={2} style={{
                                        flexWrap: 'wrap',
                                        color: 'white',
                                        fontSize: width*0.04,
                                        marginTop: 4,
                                        marginStart: 10,
                                        fontFamily: 'Raleway-Medium'
                                    }}>
                                        {item.strMeal}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />







            </View>
        </ScrollView>
    )
}

export default Homepage