import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, FlatList, Animated, Dimensions, Image, Platform } from 'react-native';
import { move } from 'react-native-redash';


const { width, height } = Dimensions.get('window')

export interface Props {
}

export interface State {
    scrollX: any
}



const mainblue  = '#239cf2'

const screen = [{ i: 1 }, { i: 2 }, { i: 3 }, { i: 4 }, { i: 5 }, { i: 6 }, { i: 7 }, { i: 8 },]

export default class Story2 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scrollX: new Animated.Value(0)
        };
    }

    public render() {


        const show = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [0, 1, 1.2, 1, 0],
            extrapolate: 'clamp'
        })

        const showphone = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [-width, -width, -width, -width, 0],
            extrapolate: 'clamp'
        })

        const showphoneY = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5, width * 6],
            outputRange: [-width, -width, -width, -width, 0, 0, -500],
            extrapolate: 'clamp'
        })
        const showphonebusY = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5, width * 6],
            outputRange: [-400, -400, -400, -400, -400,-400, 200],
            extrapolate: 'clamp'
        })

        const msg1 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp'
        })
        const msg2 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3],
            outputRange: [0, 0, 1, 0],
            extrapolate: 'clamp'
        })

        const msg3 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [0, 0, 0, 1, 0],
            extrapolate: 'clamp'
        })

        const msg4 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5],
            outputRange: [0, 0, 0, 0, 1, 0],
            extrapolate: 'clamp'
        })
        const msg5 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5,width * 6],
            outputRange: [0, 0, 0, 0, 0, 1,0],
            extrapolate: 'clamp'
        })
        const msg6 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5,width * 6],
            outputRange: [0, 0, 0, 0, 0, 0,1],
            extrapolate: 'clamp' 
        })

        const moveup = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5],
            outputRange: [0, 0, 0, 0, 0, -100],
            extrapolate: 'clamp'
        })


        const background1 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [0, -width * 2, -width * 3, -width * 3, -width * 3],
            extrapolate: 'clamp'
        })
        const backgroundx = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [0, width * 2, -width * 2, -width * 2, width],
            extrapolate: 'clamp'
        })
        const background2 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [width, width, width, width, 0],
            extrapolate: 'clamp'
        })

        const fade = this.state.scrollX.interpolate({
            inputRange: [0, width],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        const zoom1 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4],
            outputRange: [0, 0, 0, 1, 0],
            extrapolate: 'clamp'
        })

        const zoom2 = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5, width * 6],
            outputRange: [0, 0, 0, 1, 1, 2, 1.5],
            extrapolate: 'clamp'
        })


        const compare = this.state.scrollX.interpolate({
            inputRange: [0, width, width * 2, width * 3, width * 4, width * 5],
            outputRange: ['#ccc', '#ccc', '#ccc', '#ccc', '#ccc', '#fb9b01'],
            extrapolate: 'clamp'
        })






        return (
            <View>
                <StatusBar hidden />

                <Animated.FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    horizontal
                    data={screen}
                    keyExtractor={(item) => item.i.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    renderItem={({ item, index }) => (
                        <View style={{ borderWidth: 1, width, height, zIndex: 500000 }} key={index}>
                            <Text>{item.i}</Text>
                        </View>
                    )}
                />
                <Animated.Image source={require('../assets/edw.png')}
                    style={{
                        position: 'absolute',
                        zIndex: 500,
                        height: 250,
                        width: 120,
                        marginTop: height / 2.5,
                        marginLeft: 50,
                        transform: [{ scale: show }]
                    }} />


                <Animated.Image source={require('../assets/b3.png')}
                    style={{
                        position: 'absolute',
                        // height: 350,
                        width: width,
                        marginTop: height / 2.5,
                        marginLeft: width * 2,
                        transform: [{ translateX: background1 }],
                        opacity: fade
                    }} />


                <Animated.Image source={require('../assets/b4.png')}
                    style={{
                        position: 'absolute',
                        // height: 350,
                        width: width,
                        marginTop: height / 2.5,
                        marginLeft: width * 2,
                        transform: [{ translateX: backgroundx }],
                        opacity: fade
                    }} />



                <Animated.Image source={require('../assets/ad.png')}
                    style={{
                        position: 'absolute', 
                        height: 150,
                        width: 150,
                        // marginTop: -400,
                        transform: [{ translateY: showphonebusY }],
                        alignSelf: 'center',
                    }} />


                {Platform.OS == 'ios' ? (
                    <Animated.Image source={require('../assets/phone.png')}
                        style={{
                            position: 'absolute',
                            height: 390,
                            width: width / 2,
                            marginTop: height / 4,
                            alignSelf: 'center',
                            transform: [{ translateX: background2 }, { scale: zoom2 }, { translateY: moveup }],

                        }} />
                ) : (
                    <Animated.Image source={require('../assets/phone2.png')}
                        style={{
                            position: 'absolute',
                            height: 390,
                            width: width / 2,
                            marginTop: height / 4,
                            alignSelf: 'center',
                            transform: [{ translateX: background2 }, { scale: zoom2 }, { translateY: moveup }],

                        }} />
                )}




                <Animated.Image source={require('../assets/hur.png')}
                    style={{
                        position: 'absolute',
                        width: width,
                        marginTop: height / 2.5,
                        transform: [{ scale: zoom1 }],
                    }} />

                <Animated.View style={{
                    position: 'absolute',
                    marginTop: 200, 
                    // borderWidth: 1,
                    padding: 20,
                    marginLeft: 50,
                    borderRadius: 20,
                    width: width / 1.5,
                    transform: [{ scale: msg1 }],
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                    elevation: 6,
                    backgroundColor: mainblue,
                
                }}>
                    
                    <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>
                        Hi there ! am Edwina
                   </Text>
                </Animated.View>



                <Animated.View style={{
                    position: 'absolute',
                    marginTop: 150, 
                    // borderWidth: 1,
                    padding: 20,
                    marginLeft: 50,
                    borderRadius: 20,
                    width: width / 1.3,
                    transform: [{ scale: msg2 }],
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    backgroundColor: mainblue

                }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>
                        Are you tired of searching for a hostels by foot ?
                   </Text>
                </Animated.View>

                <Animated.View style={{
                    position: 'absolute',
                    marginTop: 150,
                    // borderWidth: 1,
                    padding: 20,
                    marginLeft: 50,
                    borderRadius: 20,
                    width: width / 1.3,
                    transform: [{ scale: msg3 }],
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    backgroundColor: '#07be63'

                }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>
                        Hurray !! welcome to <Text style={{ fontSize: 40 }}> LiveInn </Text>
                    </Text>
                </Animated.View>

                <Animated.View style={{
                    position: 'absolute',
                    marginTop: 50,
                    // borderWidth: 1,
                    padding: 20,
                    marginLeft: 50,
                    borderRadius: 20,
                    width: '90%',
                    transform: [{ scale: msg4 }],
                    alignSelf: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    backgroundColor: mainblue

                }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>
                        Simply search by location , name or preferences
                    </Text>
                </Animated.View>

                <Animated.View style={{
                    position: 'absolute',
                    marginTop: 50,
                    // borderWidth: 1,
                    padding: 20,
                    marginLeft: 50,
                    borderRadius: 20,
                    width: '70%',
                    transform: [{ scale: msg5 }],
                    alignSelf: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    backgroundColor:mainblue

                }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>
                        Compare hostels to get affordable prices
                    </Text>
                </Animated.View>

                <Animated.View style={{
                    position: 'absolute',
                    marginTop: 50,
                    // borderWidth: 1,
                    padding: 20,
                    marginLeft: 50,
                    borderRadius: 20,
                    width: '70%',
                    transform: [{ scale: msg6 }],
                    alignSelf: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    backgroundColor: mainblue

                }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold',color:'white' }}>
                        Do you have a business on campus? advertise it to 
                        all hostels 
                    </Text>
                </Animated.View>




                {/* ============================phone start==================================== */}

                <Animated.View style={{
                    // borderWidth: 1,
                    width: 150,
                    height: 'auto',
                    position: 'absolute',
                    alignSelf: 'center',
                    marginTop: height / 2.8,
                    borderRadius:5,
                    padding: 10,
                    transform: [{ translateX: showphone }, { scale: zoom2 }, { translateY: showphoneY }],
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                    backgroundColor: 'white'
                }}>
                    <View style={{
                        padding: 5,
                        backgroundColor: '#ccc',
                        borderRadius: 50,
                    }}>
                        <Text>Search...</Text>
                    </View>
                    <View style={{
                        borderBottomWidth: 1,
                        width: '100%',
                        padding: 5,
                        flexDirection: 'row',
                        borderColor: '#ccc'

                    }}>
                        <Animated.View style={{
                            height: 20,
                            width: 20,
                            backgroundColor: compare
                        }}>

                        </Animated.View>
                        <Animated.View style={{
                            height: 10,
                            width: 50,
                            backgroundColor: compare,
                            marginLeft: 5
                        }}>

                        </Animated.View>
                    </View>

                    <View style={{
                        borderBottomWidth: 1,
                        width: '100%',
                        padding: 5,
                        flexDirection: 'row',
                        borderColor: '#ccc'

                    }}>
                        <View style={{
                            height: 20,
                            width: 20,
                            backgroundColor: '#ccc'
                        }}>

                        </View>
                        <View style={{
                            height: 10,
                            width: 50,
                            backgroundColor: '#ccc',
                            marginLeft: 5
                        }}>

                        </View>
                    </View>
                    <View style={{
                        borderBottomWidth: 1,
                        width: '100%',
                        padding: 5,
                        flexDirection: 'row',
                        borderColor: '#ccc'

                    }}>
                        <Animated.View style={{
                            height: 20,
                            width: 20,
                            backgroundColor: compare
                        }}>

                        </Animated.View>
                        <Animated.View style={{
                            height: 10,
                            width: 50,
                            backgroundColor: compare,
                            marginLeft: 5
                        }}>

                        </Animated.View>
                    </View>


                </Animated.View>
                {/* ============================phone ends==================================== */}


            </View>
        );
    }
}
