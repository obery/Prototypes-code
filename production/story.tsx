import * as React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions, StatusBar, Animated, Image, TouchableOpacity } from 'react-native';

interface Props {
}

interface State {
    scrollX: any
}



interface StoryData {
    text: string,
    desc: string,
    key: string
}


const { width, height } = Dimensions.get('window');

const MainColor: string = '#00A8E8';
const blue:string = '#011627'

const data: StoryData[] = [

    {
        key: '1',
        text: 'Hi there welcome to hostyle let me guide you throgh how i find hostels and connect friends',
        desc: 'Swipe To see a Story',

    },
    {
        key: '2',
        text: 'finding hostels on campus have become very easy with hostyle',
        desc: 'Find A Hostel',

    },
    {
        key: '3',
        text: 'Start searching for hostels with affordable prices and convinient location',
        desc: 'All on your Phone',

    },
    {
        key: '4',
        text: 'get locations of hostels closest to lecture halls and teather',
        desc: 'Convinient locations',

    },
    {
        key: '5',
        text: 'You dont just end at searching for a hostel connect and make business to all your friends and view some activities they perfom at thier hostels ',
        desc: 'Connecting All',

    },
    {
        key: '6',
        text: 'Giving you what matters',
        desc: 'Hostyle',

    },
];


export default class Story extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            scrollX: new Animated.Value(0)
        };
    }




    public render() {

        const move = this.state.scrollX.interpolate({
            inputRange: [0, 10, 900, 1000, 1500, 1800],
            outputRange: ['white', 'skyblue', '#00BBFF', '#00BBFF', '#00CF98', blue],
        })

        const moveDown = this.state.scrollX.interpolate({
            inputRange: [0, 600, 900],
            outputRange: [0, 150, 150],
        })

        const moveHouse = this.state.scrollX.interpolate({
            inputRange: [0, 600, 900, 1000, 1500],
            outputRange: [0, -300, -300, -300, 250],
        })

        const scale = this.state.scrollX.interpolate({
            inputRange: [0, 600, 900],
            outputRange: [1, 0.2, 0.2],
        })
        const border = this.state.scrollX.interpolate({
            inputRange: [0, 60, 900],
            outputRange: [4, 0, 0],
        })
        const MoonDescend = this.state.scrollX.interpolate({
            inputRange: [0, 200, 900],
            outputRange: [-50, 80, -100],
        })

        const ShowPhone = this.state.scrollX.interpolate({
            inputRange: [0, 200, 900],
            outputRange: [200, 300, -40],
        })  

        const h1 = this.state.scrollX.interpolate({
            inputRange: [0, 200, 900, 1000],
            outputRange: [-120, -150, -150, -70],
        })
        const h2 = this.state.scrollX.interpolate({
            inputRange: [0, 200, 900, 1000],
            outputRange: [-300, -350, -350, -250],
        })
        const mark = this.state.scrollX.interpolate({
            inputRange: [0, 200, 900, 1000],
            outputRange: [-150, -150, -150, -40],
        })
        const conn = this.state.scrollX.interpolate({
            inputRange: [0, 200, 900, 1000, 1500],
            outputRange: [-300, -350, -350, -350, 70],
        })

        const SwipeOpacity = this.state.scrollX.interpolate({
            inputRange: [0, 200, 350, 400, 500],
            outputRange: [1, 0, 1, 1, 1],
        })


        const final = this.state.scrollX.interpolate({
            inputRange: [0, 600, 900, 1000, 1500, 1800],
            outputRange: [-300, -300, -300, -300, -300, -20],
        })


        return (
            <View>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <StatusBar hidden />
                    <Animated.FlatList
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        horizontal
                        data={data}
                        keyExtractor={(item) => item.key}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
                            { useNativeDriver: false }
                        )}
                        renderItem={({ item, index }) => (
                            <View style={{ height: height, width: width, }}>
                                <Animated.Text style={{
                                    marginTop: 300,
                                    opacity: SwipeOpacity,
                                    fontSize: 35,
                                    fontWeight: 'bold',
                                    // borderWidth: 1,
                                    alignSelf: 'center',
                                    width: '80%',
                                    padding: 10,
                                    textAlign: 'center'
                                }}>{item.desc}</Animated.Text>

                                <Text style={{
                                    width: '70%',
                                    alignSelf: 'center',
                                    // borderWidth:1,
                                    padding: 10,
                                    fontSize: 20,
                                    color: 'gray',
                                    textAlign: 'center'
                                }}>{item.text}</Text>
                                {item.key == '6' ? (
                                    <TouchableOpacity style={{
                                        alignSelf:'center',
                                        padding:20,
                                        backgroundColor:blue,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        marginTop:100,
                                        width:300,
                                       
                                        borderRadius:10  
                                        }}>
                                        <Text style={{
                                            color:'white',
                                            fontWeight:'bold',
                                            fontSize:20,
                                            textAlign:'center',
                                            // height:30,
                                        }}>Continue</Text>
                                    </TouchableOpacity>
                                ) : null}
                            </View>
                        )}
                    />
                </View>
                <Animated.View style={{
                    height: 200,
                    width: 200,
                    backgroundColor: move,
                    // transform: [{ translateY: moveDown }] , 
                    position: 'absolute',
                    alignSelf: 'center',
                    marginTop: 30,
                    borderRadius: 20,
                    borderWidth: border,
                    overflow: 'hidden'
                }}>
                    <Animated.View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'yellow',
                        borderRadius: 25,
                        position: 'absolute',
                        marginTop: 0,
                        transform: [{ translateY: MoonDescend }],
                        marginLeft: 20
                    }}>

                    </Animated.View>
                    <Animated.Image style={{
                        height: null,
                        width: 300,
                        flex: 1,
                        transform: [{ scale: scale }, { translateY: moveDown }, { translateX: moveHouse }],
                        marginLeft: 50
                    }} source={require('../assets/des1.png')} />
                    <Animated.Image style={{
                        height: 110,
                        width: 105,
                        transform: [{ translateY: final }],
                        alignSelf: 'center',
                        position: 'absolute'
                    }} source={require('../assets/logo-white-outline.png')} />
                    <Animated.Image style={{
                        height: 70,
                        width: 100,
                        transform: [{ scale: 0.5 }, { translateY: 150 }, { translateX: h2 }],
                        marginLeft: 50,
                        position: 'absolute'
                    }} source={require('../assets/des2.png')} />
                    <Animated.Image style={{
                        height: 300,
                        width: 230,
                        transform: [{ scale: 0.5 }, { translateY: -100 }, { translateX: conn }],
                        marginLeft: -50,
                        position: 'absolute'
                    }} source={require('../assets/conn.png')} />
                    <Animated.Image style={{
                        height: 70,
                        width: 100,
                        transform: [{ scale: 0.5 }, { translateY: h1 }],
                        marginLeft: 50,
                        position: 'absolute'
                    }} source={require('../assets/des2.png')} />
                    <Animated.Image style={{
                        height: 100,
                        width: 100,
                        transform: [{ scale: 0.5 }, { translateY: mark }],
                        marginLeft: 50,
                        position: 'absolute'
                    }} source={require('../assets/mark.png')} />

                    {/* phone */}
                    <Animated.View style={{
                        height: 140,
                        width: 70,
                        backgroundColor: 'white',
                        position: 'absolute',
                        marginLeft: 10,
                        transform: [{ translateY: ShowPhone }],
                        borderRadius: 5

                    }}>
                        {/* screen */}
                        <View style={{
                            width: '90%',
                            backgroundColor: blue,
                            borderRadius: 5,
                            height: 110,
                            alignSelf: 'center',
                            marginTop: 5
                        }}></View>
                        {/* dot */}
                        <View style={{
                            height: 15,
                            width: 15,
                            backgroundColor: MainColor,
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginTop: 5

                        }}>

                        </View>
                    </Animated.View>
                </Animated.View>
            </View>
        );
    }
}
