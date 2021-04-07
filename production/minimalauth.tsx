import React from 'react';
import {
    View, StyleSheet, Text,
    StatusBar, Image, FlatList,
    Animated, Dimensions, TextInput, TouchableOpacity,
    Alert, KeyboardAvoidingView,Platform
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';   
import { MaterialIcons } from '@expo/vector-icons';
import data from './InstitutionData'
import { TagSelect } from 'react-native-tag-select';

interface Props {
}

interface State extends UserDetails {
    scrollY: any,
    scrollX?: any
    cpass: string,
    university: any,
    select: any
}

interface UserDetails {
    name: string,
    email: string,
    telephone: string,
    password: string
}

interface Institution {
    Iname: string,
    motto: string,
    image: string
}
interface SwingOBJ {
    key: string
}


interface TagsData {
    id: number,
    label: string
}

const Tags: TagsData[] = [
    { id: 1, label: 'Food and drinks' },
    { id: 2, label: 'Pharmarcy' },
    { id: 3, label: 'Banks' },
    { id: 4, label: 'Car Station' },
    { id: 5, label: 'Silent Environment' },
    { id: 6, label: 'Noicy Environment' },
    { id: 7, label: 'Storey Buildings' },
    { id: 8, label: 'Girls hostels only' },
    { id: 9, label: 'only one in a room' },
];


const { width, height } = Dimensions.get('window')

type HandleSelect = (index: number, data: Institution) => void
type WordsLimit = (textToLimit: string, wordLimit: number) => string


const list: SwingOBJ[] = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }]
const Maincolor: string = '#001E42'

export default class Minimal extends React.Component<Props, State> {
    tag: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            name: '',
            email: '',
            telephone: '',
            password: '',
            cpass: '',
            university: {},
            select: ''
        };
    }


    limitWords: WordsLimit = (textToLimit, wordLimit) => {
        let finalText = "";
        let text2 = textToLimit.replace(/\s+/g, " ");

        let text3 = text2.split(" ");

        let numberOfWords = text3.length;

        let i = 0;
        if (numberOfWords > wordLimit) {
            for (i = 0; i < wordLimit; i++)
                finalText = finalText + " " + text3[i] + " ";

            return finalText + "...";
        }
        else return textToLimit;
    }


    handleSelect: HandleSelect = (index, data) => {

        this.setState({ university: data, select: index })

    }


    handleForm = ():void=>{

        const MainData = { 

                userDetails:{
                    name:this.state.name,
                    email:this.state.email,
                    telephone:this.state.telephone,
                    password:this.state.password
                },
                institution: this.state.university,
                preference:this.tag.itemsSelected

            }
        

        console.log(MainData);

    }


    componentDidMount() {

    }


    public render() {


        const shrinklogo = this.state.scrollY.interpolate({
            inputRange: [0, height],
            outputRange: [200, 0]
        })

        const text_opacity = this.state.scrollY.interpolate({
            inputRange: [0, height / 4, height / 1.5, height],
            outputRange: [0, 0, 0, 1]
        })

        const text_opacity3 = this.state.scrollY.interpolate({
            inputRange: [height * 1.5, height * 2],
            outputRange: [0, 1]
        })

        const text_opacity4 = this.state.scrollY.interpolate({
            inputRange: [height * 2.5, height * 3],
            outputRange: [0, 1]
        })
        const boxscale2 = this.state.scrollY.interpolate({
            inputRange: [height * 1.5, height * 2, height * 3],
            outputRange: [2, 1, 0]
        })
        const boxscale3 = this.state.scrollY.interpolate({
            inputRange: [height * 1.5, height * 2, height * 3],
            outputRange: [0, 2, 1]
        })
        const text_opacity2 = this.state.scrollY.interpolate({
            inputRange: [0, height / 4, height / 1.5],
            outputRange: [1, 0, 0]
        })
        const boxscale = this.state.scrollY.interpolate({
            inputRange: [height, height * 3],
            outputRange: [1, 0]
        })



        // tas
        return (
            <View style={{ backgroundColor: Maincolor }}>
                <StatusBar hidden />

                <KeyboardAvoidingView
    {...(Platform.OS === "ios" ? { behavior: "padding" } : {})}
     // you might need sometimes👇
    contentContainerStyle={{flex: 1}}
>
                <FlatList
                    pagingEnabled
                    keyExtractor={(item) => item.key}
                    data={list}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    renderItem={({ item }) => (
                        <View style={{
                            width,
                            height,
                            // borderWidth: 1,
                        }}>
                            <Text>{item.key}</Text>
                            {item.key === '1' ? (
                                <View>

                                    <Animated.View style={{
                                        height: shrinklogo,
                                        width: shrinklogo,
                                        alignSelf: 'center',
                                        // transform: [{ translateY: movelogo }]
                                        marginTop: 200
                                    }}>   
                                        <Image style={{ height: null, width: null, flex: 1 }} source={require('../assets/logoz.png')} />
                                    </Animated.View>

                                     <Animated.View
                                       style={{opacity:text_opacity2}}
                                     >
                                     <Entypo name="light-up"
                                        style={{ alignSelf: 'center', padding: 10 }}
                                        size={44} color="white" />
                                     </Animated.View>
                                   

                                    <Animated.Text style={{
                                        width: '80%',
                                        alignSelf: 'center',
                                        textAlign: 'center',
                                        color: 'white',
                                        // marginTop: height / 2,
                                        fontSize: 20,
                                        opacity: text_opacity2
                                    }}>
                                        LiveInn will need to know a
                                        little more
                                        about you
                                        in order to have the
                                        amazing experience you have been waiting for
                                    </Animated.Text>
                                </View>

                            ) : null}

                            {item.key === '2' ? (
                                <View>
                                    <Animated.View
                                     style={{ alignSelf: 'center', padding: 10,opacity: text_opacity }}>
                                        <Feather name="user"
                                            style={{ alignSelf: 'center', padding: 10 }}
                                            size={44} color="white" />
                                    </Animated.View>
                                    <Animated.Text
                                        style={{
                                            fontSize: 40,
                                            padding: 10,
                                            fontWeight: 'bold', color: 'white',
                                            alignSelf: 'center',
                                            marginTop: 10, 
                                            opacity: text_opacity
                                        }}
                                    >

                                        Who are you ?
                                    </Animated.Text>


                                    <Animated.View style={{
                                        width: '90%',
                                        // borderWidth: 1,
                                        // borderColor: '#ccc',
                                        borderRadius: 10,
                                        padding: 10,
                                        alignSelf: 'center',
                                        opacity: text_opacity,
                                        transform: [{ scale: boxscale }],
                                        backgroundColor: 'white',
                                        marginTop: 30,
                                        height: 'auto'
                                    }}>

                                        <TextInput
                                            style={styles.inp}
                                            placeholder="User name..."
                                            placeholderTextColor={Maincolor}
                                            returnKeyType="done"
                                            onChangeText={(value) => this.setState({ name: value })}
                                        />
                                        <TextInput
                                            style={styles.inp}
                                            placeholder="email..."
                                            keyboardType='email-address'
                                            returnKeyType="done"
                                            placeholderTextColor={Maincolor}

                                            onChangeText={(value) => this.setState({ email: value })}
                                        //    selectionColor="red"

                                        />
                                        <TextInput
                                            style={styles.inp}
                                            placeholder="Telephone..."
                                            keyboardType='numeric'
                                            returnKeyType="done"
                                            placeholderTextColor={Maincolor}

                                            onChangeText={(value) => this.setState({ telephone: value })}
                                        />
                                        <TextInput
                                            style={styles.inp}
                                            placeholder="Password"
                                            returnKeyType="done"
                                            placeholderTextColor={Maincolor}

                                            onChangeText={(value) => this.setState({ password: value })}

                                        />
                                        <TextInput
                                            style={styles.inp}
                                            placeholder="Verify Password"
                                            returnKeyType="done"
                                            placeholderTextColor={Maincolor}
                                            onChangeText={(value) => this.setState({ cpass: value })}

                                        />

                                        <Text>{'\n'}</Text>
                                    </Animated.View>
                                </View>
                            ) : null}
                            {item.key === '3' ? (
                                <View>

                                    <View style={{
                                        // borderWidth: 1,
                                        height: 80,
                                        width: '90%',
                                        alignSelf: 'center',
                                        flexDirection: 'row',
                                    }}>
                                        <View style={{
                                            height: 80,
                                            width: 80,
                                            // borderWidth: 1,
                                        }}>
                                            {!!this.state.university &&
                                                this.state.university &&
                                                <Image style={{ height: null, width: null, flex: 1 }}
                                                    source={this.state.university.image} />}
                                        </View>
                                        <View
                                            style={{
                                                alignItems: 'center',
                                                width: 200
                                            }}
                                        >
                                            {!!this.state.university &&
                                                this.state.university &&
                                                <Text
                                                    style={{
                                                        margin: 10,
                                                        fontSize: 25,
                                                        padding: 10,
                                                        width: 'auto',
                                                        color: 'white'
                                                    }}
                                                >{this.state.university.Iname}</Text>}
                                        </View>
                                    </View>


                                    <Animated.Text
                                        style={{
                                            fontSize: 40,
                                            padding: 10,
                                            fontWeight: 'bold',
                                            color: 'white',
                                            alignSelf: 'center',
                                            marginTop: 0,
                                            opacity: text_opacity3
                                        }}
                                    >Your Institution</Animated.Text>
                                    <Animated.View style={{
                                        width: '90%',
                                        // borderWidth: 1,
                                        // borderColor: '#ccc',
                                        borderRadius: 10,
                                        padding: 10,
                                        alignSelf: 'center',
                                        opacity: text_opacity3,
                                        transform: [{ scale: boxscale2 }],
                                        backgroundColor: 'white',
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        marginTop: 40
                                    }}>

                                        {data.map((item, index) => (
                                            <TouchableOpacity
                                                onPress={() => this.handleSelect(item.key, item)}
                                                key={index}
                                                style={{
                                                    height: 100,
                                                    width: width / 4,
                                                    borderRadius: 5,
                                                    margin: 5,
                                                    overflow: 'hidden',
                                                    padding: 10,
                                                    // borderColor: item.key === this.state.select ? Maincolor : '#ccc',
                                                    backgroundColor: item.key === this.state.select ? Maincolor : '#f1f1f1',
                                                }}
                                            >
                                                <Image
                                                    source={item.image}
                                                    style={{
                                                        height: null,
                                                        width: null, flex: 1
                                                    }}
                                                />
                                            </TouchableOpacity>
                                        ))}

                                    </Animated.View>
                                    <View>
                                        {this.state.select != '' ?
                                            <Text style={{
                                                width: '80%',
                                                alignSelf: 'center',
                                                textAlign: 'center',
                                                color: 'white',
                                                marginTop: 80,
                                                fontSize: 20,

                                            }}>
                                                By Choosing {this.state.university.Iname} implies that you will mostly recieve accomodation related infomation
                                              from this institution

                                           </Text>
                                            : null}
                                    </View>
                                    <Text style={{
                                        alignSelf: 'center',
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: 25
                                    }}>{this.state.university.motto}</Text>
                                </View>
                            ) : null}

                            {item.key === '4' ? (
                                    <View>
                                    <Animated.View
                                     style={{ alignSelf: 'center', padding: 10,opacity: text_opacity4 }}>
                                        <MaterialIcons name="room-preferences"
                                            style={{ alignSelf: 'center', padding: 10 }}
                                            size={44} color="white" />
                                    </Animated.View>
                                    <Animated.Text
                                        style={{
                                            fontSize: 40,
                                            padding: 10,
                                            fontWeight: 'bold',
                                            color: 'white',
                                            alignSelf: 'center',
                                            marginTop: 0,
                                            opacity: text_opacity4
                                        }}
                                    >Preferences</Animated.Text>
                                    <Animated.Text style={{
                                        color: 'white',
                                        alignSelf: 'center',
                                        fontSize: 20,
                                        width: '90%',
                                        textAlign: 'center',
                                        opacity: text_opacity4
                                    }}>What would you want to have around your hostel
                                    or place of accomodation</Animated.Text>
                                    <Animated.View style={{
                                        width: '90%',
                                        // borderWidth: 1,
                                        // borderColor: '#ccc',
                                        borderRadius: 10,
                                        padding: 10,
                                        alignSelf: 'center',
                                        opacity: text_opacity4,
                                        transform: [{ scale: boxscale3 }],
                                        backgroundColor: 'white',
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        marginTop: 40
                                    }}>


                                        <TagSelect
                                        itemStyleSelected={{backgroundColor:Maincolor,borderWidth:0}}
                                            data={Tags}
                                            // max={3}
                                            ref={(tag: any) => {    
                                                this.tag = tag;
                                            }}
                                            onMaxError={() => {
                                                Alert.alert('Ops', 'Max reached');
                                            }}
                                        />
                                        <TouchableOpacity
                                            style={{
                                                width:'100%',
                                                backgroundColor:Maincolor,
                                                padding: 10,
                                                borderRadius:5,
                                                alignItems: 'center' ,
                                                marginTop:50, alignSelf: 'center',
                                                height:50  ,
                                                justifyContent: 'center',
                                            }}
                                            
                                            onPress={() => {
                                                this.handleForm();
                                            }}
                                        >
                                         <Text style={{color:'white',fontWeight: 'bold'}}>Get started</Text>
                                        </TouchableOpacity>
                                    </Animated.View>
                                </View>
                            ) : null}
                        </View>
                    )}
                />
               
               </KeyboardAvoidingView>
                {/* ----end */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inp: {
        // borderWidth: 1,
        padding: 10,
        height: 50,
        width: '90%',
        marginTop: 20,
        fontSize: 20,
        borderRadius: 100,
        backgroundColor: '#f1f1f1',
        fontWeight: 'bold',
        color: '#001E42',
        alignSelf: 'center',

    }
})