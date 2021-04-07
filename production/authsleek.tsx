import * as React from 'react';
import {
    View, StyleSheet, Text, FlatList,
    StatusBar, Dimensions, Alert,
    Animated, Image, TextInput, KeyboardAvoidingView, Platform,
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

interface Props {
}

interface State extends UserDetails {
    scrollX: any
    cpass: string,
    moveUp: any,
    down: boolean
}

interface UserDetails {
    name: string,
    email: string,
    telephone: string,
    password: string
}

interface Institution {
    Insname: string,
    motto: string,
    image: string
}

const emptydata = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }]
const maxobjects = emptydata.length

type MoveEvent = () => void

export default class SleekAuth extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            scrollX: new Animated.Value(0),
            name: '',
            email: '',
            telephone: '',
            password: '',
            cpass: '',
            moveUp: new Animated.Value(0),
            down: true
        };
    }




    MoveKeyUp: MoveEvent = () => {
        this.setState({ down: false })
        Animated.timing(this.state.moveUp, {
            toValue: -height / 3,
            // bounciness: 0,
            useNativeDriver: false
        }).start()
    }

    MoveKeyDown: MoveEvent = () => {
        this.setState({ down: true })
        Animated.timing(this.state.moveUp, {
            toValue: 10,
            // bounciness: 0,
            useNativeDriver: false
        }).start()
    }



    public render() {




        const move = this.state.scrollX.interpolate({
            inputRange: [0, width * maxobjects],
            outputRange: [0, -width * 2]
        })
        const moveImage = this.state.scrollX.interpolate({
            inputRange: [0, width * maxobjects],
            outputRange: [0, width * 2.5]
        })
        const sizeImage = this.state.scrollX.interpolate({
            inputRange: [0, width],
            outputRange: [200, 80]
        })

        const opacity = this.state.scrollX.interpolate({
            inputRange: [0, width + 30],
            outputRange: [0, 1]
        })

        const opacity2 = this.state.scrollX.interpolate({
            inputRange: [0, width],
            outputRange: [1, 0]
        })
        const opacity3 = this.state.scrollX.interpolate({
            inputRange: [0, width, ((width * 3) / 2) - 100],
            outputRange: [0, 0, 1]
        })



        const background = this.state.scrollX.interpolate({
            inputRange: [0, width * maxobjects],
            outputRange: ['#001E42', '#001E42']
        })

 

        return (

            <View style={{
                backgroundColor: '#11CDF3'
            }}>

                <StatusBar hidden />

                <FlatList
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    data={emptydata}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <View style={{
                            width,
                            height,
                            borderWidth: 1
                        }}>
                            <Text>{item.key}</Text>

                        </View>
                    )}
                />
                {/* tv box */}
                <Animated.View style={{
                    borderWidth: 1,
                    width,
                    height: height / 1.2,
                    position: 'absolute',
                    overflow: 'hidden',
                    flexDirection: 'row',
                    backgroundColor: background,
                    borderBottomEndRadius: sizeImage,
                    borderBottomLeftRadius: sizeImage,
                }}>


                    <Animated.Image style={{
                        height: 150,
                        width: 200,
                        position: 'absolute',
                        alignSelf: 'center',
                        top: 10,
                        transform: [{ translateX: move }],
                        marginLeft: ((width * 3) / 2) - 100,
                        opacity: opacity3,

                    }}
                        source={require('../assets/inst.png')}
                    />


                    <Animated.Text style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        transform: [{ translateX: move }],
                        marginLeft:((width * 3) / 2) - 150,
                        color: 'white',
                        opacity: opacity3,
                        width: 300,
                        position: 'absolute',
                        marginTop:160
                    }}>
                        Choose Institution
                    </Animated.Text>

                    <Animated.View
                        style={{
                            height: 'auto',
                            width: 320,
                            position: 'absolute',
                            alignSelf: 'center',
                            top: 10,
                            transform: [{ translateX: move }],
                            marginLeft: ((width * 3) / 2) - 160,
                            opacity: opacity3,
                            backgroundColor: 'white',
                            marginTop: 220,
                            overflow: 'scroll',
                            padding: 10,
                            borderRadius: 10
                        }}
                    >
                    </Animated.View>


                   


                    <Animated.View style={{
                        // borderWidth: 1,
                        height: '100%',
                        width,
                        transform: [{ translateX: move }],
                        left: move
                    }}>
                        <Animated.Image style={{
                            height: sizeImage,
                            width: sizeImage,
                            position: 'absolute',
                            alignSelf: 'center',
                            marginTop: 10,
                            transform: [{ translateX: moveImage }],
                        }}
                            source={require('../assets/logo3.png')}
                        />

                        <Animated.Text style={{
                            width: '90%',
                            // borderWidth: 1,
                            alignSelf: 'center',
                            marginTop: height / 2,
                            fontSize: 26,
                            textAlign: 'center',
                            color: 'white',
                            opacity: opacity2
                        }}>
                            LiveInn will need to know a
                            little more
                            about you
                            in order to have an
                            amazing experience you have been waiting for
                        </Animated.Text>

                        

                    </Animated.View>


                    <Animated.View style={{
                        // borderWidth: 1,
                        height: '100%',
                        width,
                        transform: [{ translateX: move }],
                        left: move
                    }}>

                        <Animated.View style={{
                            // borderWidth: 1,
                            marginTop: 100,
                              padding: 10,
                            height: 'auto',
                            width: width,
                            // position: 'absolute'
                            transform: [{ translateX: move }, { translateY: this.state.moveUp }],
                            marginLeft: width / 2,
                            opacity: opacity,


                        }}>


                            <Animated.Text style={{
                                fontSize: 50,
                                fontWeight: 'bold',
                                transform: [{ translateX: move }],
                                marginLeft: width / 1.8,
                                color: 'white',
                                opacity: opacity,
                                width: 300
                            }}>
                                About you
                                </Animated.Text>
                            <TextInput
                                style={styles.inp}
                                placeholder="User name..."
                                //    placeholderTextColor="black"
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ name: value })}
                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="email..."
                                keyboardType='email-address'
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ email: value })}
                                //    selectionColor="red"
                                onFocus={() => this.MoveKeyDown()}

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="Telephone..."
                                keyboardType='numeric'
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ telephone: value })}
                                onFocus={() => this.MoveKeyUp()}
                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="Password"
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ password: value })}
                                onFocus={() => this.MoveKeyUp()}

                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="Verify Password"
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ cpass: value })}
                                onFocus={() => this.MoveKeyUp()}
                                onBlur={() => this.MoveKeyDown()}
                            />

                        </Animated.View>

                    </Animated.View>

                    {!this.state.down ? (
                        <TouchableOpacity
                            onPress={() => this.MoveKeyDown()}
                            style={{
                                height: 50,
                                width: 50,
                                backgroundColor: 'white',
                                position: 'absolute',
                                borderRadius: 100,
                                marginLeft: width - 60,
                                marginTop: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'red',
                                borderWidth: 2
                            }}>
                            <AntDesign name="arrowup" size={44} color="red" />
                        </TouchableOpacity>
                    ) : null}



                </Animated.View>

                <Image style={{
                    height: 90,
                    width: 90,
                    bottom: 30,
                    position: 'absolute',
                    alignSelf: 'center',
                }}
                    source={require('../assets/swipe-helper.gif')}
                />
                <Text
                    style={{
                        bottom: 20,
                        position: 'absolute',
                        alignSelf: 'center',
                        fontSize: 15
                    }}
                >Swipe Here for next</Text>

            </View>
        );
    }
}



const styles = StyleSheet.create({

    next: {
        borderRadius: 5,
        height: 'auto',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: 'black',
        bottom: 25,
        position: 'absolute'
    },
    back: {
        borderRadius: 5,
        height: 'auto',
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: 'black',
        bottom: 90,
        position: 'absolute'
    },

    inp: {
        borderWidth: 1,
        padding: 10,
        height: 50,
        width: '90%',
        marginTop: 20,
        fontSize: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        fontWeight: 'bold',
        color: '#001E42',
        alignSelf: 'center',

    }

})