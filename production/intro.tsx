import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, Image,TouchableOpacity } from 'react-native';

export interface Props {
}

export interface State {
}


const newItem = [
    {
        id: 1,
        title:'Compare',
        desc: 'Compare unlimited hostels at a goal for sn affordable price  ',
        image: require('../assets/1.png')
    },
    {
        id: 2,
        title:'Roomie',
        desc: 'have you been searching for a roomate ? do not stress anymore',
        image: require('../assets/4.png')
    },
    {
        id: 3,
        title:'Market Place',
        desc: 'Start advertising your product if you have a business on campus ',
        image: require('../assets/2.png')
    },
    {
        id: 4,
        title:'Swapit (Freelance)',
        desc: 'Make quick money on campus by exhanging',
        image: require('../assets/3.png')
    },
]

export default class Intro extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <View>
                <StatusBar hidden />



                <Text style={{
                    // fontSize: 60,
                    // fontFamily:'',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 40,
                    position: 'absolute'
                }}> v1.0.0</Text>

                <Text style={{
                    fontSize: 60,
                    // fontFamily:'',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginTop: 70
                }}> What's New</Text>
               
                {newItem.map((item, index) => (
                    <View key={index} style={{
                        // borderWidth: 1,
                        height: 'auto',
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 20,
                        flexDirection: 'row',
                        padding: 10
    
                    }}>
                        <View style={{
                            // borderWidth: 1,
                            height: 50,
                            width: 50,
                        }}>
                            <Image style={{ height: null, width: null, flex: 1 }} source={item.image} />
                        </View>
                        <Text style={{
                            width: '85%',
                            //  borderWidth:1,
                            //  backgroundColor:'black',
                            padding: 10,
                            marginTop: -10,
                            marginLeft:20
                        }}>  
                            <Text style={{fontSize:18, fontWeight: 'bold'}}>{item.title}</Text>
                            {'\n'}{item.desc}
                        </Text>
                    </View>
                ))}
                


                <TouchableOpacity style={{
                    // borderWidth: 1,
                    width:'85%',
                    padding: 10,
                    height:50,
                    backgroundColor:'#2f77d6',
                    alignSelf: 'center',
                    marginTop:40,
                    borderRadius:10,
                    alignItems:'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{color: 'white', fontWeight: 'bold',fontSize:20}}>Next</Text>
                </TouchableOpacity>


            </View>
        );
    }
}
