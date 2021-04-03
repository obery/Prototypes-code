import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



interface ImageProps {
    image:string,
    desc:string
}


interface Props {
    images:ImageProps[],
    descriptionStyle?: any,
    containerStyle?: any,
    width?:string|number|undefined,
    BorderRadius?:number|undefined
}


interface State {
    animi: any,
    animi2: any,
    mv: number,
    end: number,
    upDismis: boolean,
    downDismis: boolean,
    closeDescription: boolean,
    goTodetail: boolean
}


const windowHeight: number = Dimensions.get('window').height;


const Responsiveheight = windowHeight / 1.5;


type SwipeUpButton = () => void
type SwipeDownButton = () => void
type ShowDescriptionButton = () => void
type CloseDescriptionButton = () => void
type checkEndModule = () => void
type ShowImagesModule = () => any



export default class OberryImageSlider extends Component<Props> {
    state: State = {
        animi: new Animated.Value(0),
        animi2: new Animated.Value(0),
        mv: 0,
        end: 1,
        upDismis: false,
        downDismis: true,
        closeDescription: false,
        goTodetail: false
    };
    constructor(props: Props) {
        super(props);

    }



    SwipeUp: SwipeUpButton = () => {
        this.setState({ mv: this.state.mv += Responsiveheight, end: this.state.end += 1 })
        this.checkEnd()
        Animated.spring(this.state.animi, {
            toValue: -this.state.mv,
            bounciness: 1,
            useNativeDriver: true
        }).start()
    }

    SwipeDown: SwipeDownButton = () => {
        this.setState({ mv: 0 })
        this.setState({ mv: this.state.mv -= Responsiveheight, end: this.state.end -= 1 })
        this.checkEnd()
        Animated.spring(this.state.animi, {
            toValue: -this.state.mv,
            bounciness: 1,
            useNativeDriver: true
        }).start()
    }


    ShowDiscription: ShowDescriptionButton = () => {
        this.setState({ closeDescription: true, goTodetail: true })
        Animated.spring(this.state.animi2, {
            toValue: windowHeight / 2.5,
            bounciness: 1,
            useNativeDriver: false
        }).start()
    }
    CloseDiscription: CloseDescriptionButton = () => {

        this.setState({ closeDescription: false, goTodetail: false })

        Animated.spring(this.state.animi2, {
            toValue: 0,
            bounciness:0,  
            useNativeDriver: false
        }).start()
    }

    checkEnd: checkEndModule = () => {

        let lenOfImage = this.props.images.length
        let endofImage = this.state.end

        if (lenOfImage === endofImage) {
            this.setState({ upDismis: true, downDismis: false })
        } else {
            this.setState({ upDismis: false, downDismis: true })
        }
        if (endofImage > 1) {
            this.setState({ downDismis: false, })
        }


    }

    ShowImages: ShowImagesModule = () => {

        return this.props.images.map((item: any, index: number) => (
            <Animated.View key={index} style={{
                height: Responsiveheight,
                width: '100%',
                transform: [{ translateY: this.state.animi }]
            }}>
                <Image style={styles.img} source={{ uri: item.image }} />
                <Animated.View style={{
                    height: this.state.animi2,
                    width: '100%',
                }}>
                    <Text style={this.props.descriptionStyle != undefined ? this.props.descriptionStyle : { fontSize: 30, padding: 10, color: 'black', fontWeight: 'bold' }}>
                        {item.desc}
                    </Text>
                </Animated.View>
            </Animated.View>
        ))
    }



    render() {
        return (
            <View>
                <View style={this.props.containerStyle != undefined ? this.props.containerStyle : { marginTop: 50, alignSelf: 'center', width: this.props.width == undefined ?'95%':this.props.width, borderRadius: this.props.BorderRadius == undefined? 10:this.props.BorderRadius, height: Responsiveheight, overflow: 'hidden', }}>

                    {this.ShowImages()}



                    {!this.state.closeDescription ? (
                        <TouchableOpacity
                            onPress={() => this.ShowDiscription()}
                            style={{
                                height: 50,
                                width: 50,
                                backgroundColor: 'black',
                                position: 'absolute',
                                bottom: 10,
                                left: '4%',
                                borderRadius: 100,
                                opacity:1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Entypo name="dots-three-vertical" size={24} color="white" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={() => this.CloseDiscription()}
                            style={{
                                height: 50,
                                width: 50,
                                backgroundColor: '#E71D36',
                                position: 'absolute',
                                bottom: 10,
                                left: '4%',
                                borderRadius: 100,
                                opacity: 0.7,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <MaterialIcons name="cancel" size={24} color="white" />
                        </TouchableOpacity>
                    )}

                    {this.state.goTodetail ?
                        <TouchableOpacity  style={styles.rightbutt}>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </TouchableOpacity>
                        : null}

                    { !this.state.upDismis ? (
                        <TouchableOpacity onPress={() => this.SwipeUp()} style={styles.upbutt}>
                            <AntDesign name="arrowup" size={24} color="white" />
                        </TouchableOpacity>
                    ) : null}

                    {!this.state.downDismis ? (
                        <TouchableOpacity onPress={() => this.SwipeDown()} style={{
                            height: 50,
                            width: 50,
                            backgroundColor: 'black',
                            position: 'absolute',
                            bottom: 10,
                            right: this.props.images.length === this.state.end ? '4%' : '25%',
                            borderRadius: 100,
                            opacity: 0.7,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <AntDesign name="arrowdown" size={24} color="white" />
                        </TouchableOpacity>
                    ) : null}

                </View>

            </View>
        );
    }
}



const styles = StyleSheet.create({

    upbutt: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 10,
        right: '4%',
        borderRadius: 100,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },


    
    rightbutt: {
        height: 50,
        width: '35%',
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 10,  
        left: '22%',
        borderRadius: 100,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },




    img: {
        height: null,
        width: null,
        flex: 1
    }
})



