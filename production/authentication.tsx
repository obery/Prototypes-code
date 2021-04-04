import * as React from 'react';
import {
    View, StyleSheet, Text,
    TextInput, TouchableOpacity,
    KeyboardAvoidingView, Platform,
    Dimensions, Animated,Alert
} from 'react-native';

import data from './InstitutionData'



const { width, height } = Dimensions.get('window')



interface Props {
}

interface State extends UserDetails {
    step: number,
    cpass: string,
    stage1: any,
    shift:number
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


type NextStage = () => void
type AnimationStage = () => void

export default class Authentication extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telephone: '',
            password: '',
            step: 0,
            cpass: '',
            stage1: new Animated.Value(0),
            shift:0
        };
    }




    HandleNext: NextStage = () => {

        if (this.state.password != this.state.cpass) {
              Alert.alert('hey','Your passwords do not match')
        } else {
            this.setState({ step: this.state.step + 1 })
        }
    }


    HandleAnimation: AnimationStage = () => {


        if(this.state.step === 1){

            this.setState({shift:this.state.shift - width})

            Animated.spring(this.state.stage1, {
                toValue: this.state.shift,
                bounciness: 1,
                useNativeDriver: true
            })

        }

     
    }



    componentDidMount() {
     this.HandleAnimation()
    }


    public render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "height" : "height"}
                style={{ flex: 1 }}
            >

                <View style={{ borderWidth: 1,width,height,}}>
                    <Animated.View style={{
                        width:700,
                        transform: [{ translateX:this.state.stage1}]
                    }}>
                        <View style={styles.inpbox}>
                            <Text style={{ fontSize: 55, fontWeight: 'bold', color: 'black' }}>SignUp</Text>
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
                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="Telephone..."
                                keyboardType='numeric'
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ telephone: value })}
                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="Password"
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ password: value })}
                            />
                            <TextInput
                                style={styles.inp}
                                placeholder="Verify Password"
                                returnKeyType="done"
                                onChangeText={(value) => this.setState({ cpass: value })}

                            />
                          
                        </View>
                       
                    </Animated.View>
                    <TouchableOpacity style={styles.next}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Next</Text>
                    </TouchableOpacity>
                </View>



            </KeyboardAvoidingView>
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
        bottom:25,
        position: 'absolute'
    },
    inpbox: {
        borderWidth: 1,
        marginTop: 50,
        padding: 10,
        height: 'auto',
        width: width,
        position: 'absolute'
    },
    inp: {
        borderWidth: 1,
        padding: 10,
        height: 50,
        width: '100%',
        marginTop: 10,
        fontSize: 20
    }
})