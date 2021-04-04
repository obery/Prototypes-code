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
    cpass: string,
    stage1: any,
    shift:number,
    step:number
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
type PrevStage = () => void

type AnimationStage = () => void

export default class Authentication extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telephone: '',
            password: '',
            cpass: '',
            stage1: new Animated.Value(0),
            shift:-width,
            step:0,
        };
    }




    HandleNext: NextStage = () => {
       
          


            this.setState({shift:this.state.shift - width,step:this.state.step + 1})

            Animated.spring(this.state.stage1, {
                toValue: this.state.shift,
                bounciness: 1,
                useNativeDriver: false
            }).start()    

           
            
      
    }

    HandlePrev: PrevStage = () => {
       
          


        this.setState({shift:this.state.shift + width,step:this.state.step - 1})

        Animated.spring(this.state.stage1, {
            toValue: this.state.shift,
            bounciness: 1,
            useNativeDriver: false
        }).start()    

       
        
  
}


    HandleAnimation: AnimationStage = () => {


       

     
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
                        width:1000,
                        transform: [{ translateX:this.state.stage1}],
                        borderWidth: 1,
                        // borderColor:'red',
                        height:height,
                        flexDirection:'row'
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
                <TouchableOpacity onPress={()=>this.HandleNext()} style={styles.next}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Next</Text>
                </TouchableOpacity>
                {this.state.step > 0?( 
                <TouchableOpacity onPress={()=>this.HandlePrev()} style={styles.back}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Previous</Text>
                </TouchableOpacity>
                ):null}
                
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
        bottom:90,
        position: 'absolute'
    },
    inpbox: {
        borderWidth: 1,
        marginTop: 50,
        padding: 10,
        height: 'auto',
        width: width,
        // position: 'absolute'
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