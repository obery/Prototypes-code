import * as React from 'react';
import { View, StyleSheet,Image, Text,FlatList,Animated,Dimensions,StatusBar,TouchableOpacity, Alert } from 'react-native';



const { width, height } = Dimensions.get('window')
const heightRatio = 200;
const widthRatio =90;



export interface Props {
}   

export interface State {
  scrollX: any,
  arrayitem:any
}

const screen = [
  { 
    i: 1,
    name:'Find Hostels',
    desc:'find the affordable hostels closest to you',
    image:require('../assets/1.png') 
  }, 
  { 
    i: 2,
    name:'Sell on Campus',
    desc:'Start advertising if you have a business on campus',
    image:require('../assets/2.png') 

  },    
  { 
    i: 3,
    name:'Roomie',
    desc:'Find a roomate for your hostel with the same preferences',
    image:require('../assets/3.png') 

  },
  { 
    i: 4,
    name:'Swap It',
    desc:'Make money faster on campus with swapit',
    image:require('../assets/4.png') 

  }
]


export default class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
      arrayitem:[]
  };
  }


  



  handleClick = (i)=>{
       if(i == 1){
        
       }
  }




  shuffleDeck = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({arrayitem:array})
  };



  componentDidMount() {  
    this.shuffleDeck(screen)
  }



  public render() {



    const scale1 = this.state.scrollX.interpolate({
      inputRange: [0,width],
      outputRange: [1,1.5],
      // extrapolate: 'clamp'
    })
    const move1 = this.state.scrollX.interpolate({
      inputRange: [0,width],
      outputRange: [20,-width],
      // extrapolate: 'clamp'
    })
    const fade1 = this.state.scrollX.interpolate({
      inputRange: [0,width],
      outputRange: [1,0.5],
      // extrapolate: 'clamp'
    })




    const scale2 = this.state.scrollX.interpolate({
      inputRange: [0,width,width * 2],
      outputRange: [0.9,1.05,1.5],
      // extrapolate: 'clamp'
    })
    const move2 = this.state.scrollX.interpolate({
      inputRange: [0,width,width * 2],
      outputRange: [70,20,-width],
      // extrapolate: 'clamp'
    })
    const fade2 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2],
      outputRange: [1,1,0.5],
      // extrapolate: 'clamp'
    })


    const scale3 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width*3],
      outputRange: [0.8,0.9,1.1,1.5],
      // extrapolate: 'clamp'
    })
    const move3 = this.state.scrollX.interpolate({
      inputRange: [0,width,width * 2, width * 3],
      outputRange: [120,70,20,-width],
      // extrapolate: 'clamp'
    })
    const fade3 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width * 3],
      outputRange: [1,1,1,0.5],
      // extrapolate: 'clamp'
    })


    const scale4 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width*3],
      outputRange: [0.7,0.8,1.0,1.1],
      // extrapolate: 'clamp'
    })
    const move4 = this.state.scrollX.interpolate({
      inputRange: [0,width,width * 2, width * 3],
      outputRange: [180,120,70,20],
      // extrapolate: 'clamp'
    })
    const fade4 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width * 3],
      outputRange: [1,1,1,1],   
      // extrapolate: 'clamp'
    })

    const index1 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width * 3],
      outputRange: ['#2f77d6','#ccc','#ccc','#ccc'],
      extrapolate: 'clamp'
    })
    const index2 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width * 3],
      outputRange: ['#ccc','#2f77d6','#ccc','#ccc'],
      extrapolate: 'clamp'
    })
    const index3 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width * 3],
      outputRange: ['#ccc','#ccc','#2f77d6','#ccc'],
      extrapolate: 'clamp'
    })
    const index4 = this.state.scrollX.interpolate({
      inputRange: [0,width,width*2,width * 3],
      outputRange: ['#ccc','#ccc','#ccc','#2f77d6'],
      extrapolate: 'clamp'
    })



    return (
      <View>
                <StatusBar hidden />

            <Animated.View style={{
                // borderWidth: 1,
                height:height-heightRatio,
                width:width-widthRatio,
                position: 'absolute',
                marginTop:120,
                transform: [{ scale:scale4 },{ translateX:move4}],
                backgroundColor:'#234',
                opacity:fade4,
                borderRadius:10
             }}>

             </Animated.View>

              <Animated.View style={{
                // borderWidth: 1,
                height:height-heightRatio,
                width:width-widthRatio,
                position: 'absolute',
                marginTop:120,
                transform: [{ scale:scale3 },{ translateX:move3}],
                backgroundColor:'#044',
                opacity:fade3,
                borderRadius:10
             }}>

             </Animated.View>

            <Animated.View style={{
                // borderWidth: 1,
                height:height-heightRatio,
                width:width-widthRatio,
                position: 'absolute',
                // marginLeft:70,
                marginTop:120,
                transform: [{ scale:scale2 },{ translateX:move2}],
                backgroundColor:'#c55445',
                opacity:fade2,
                borderRadius:10


                
             }}>

             </Animated.View>

          
            <Animated.View style={{
                // borderWidth: 1,
                height:height-heightRatio,
                width:width-widthRatio,
                position: 'absolute',
                marginTop:120,
                transform: [{ scale:scale1 },{ translateX:move1}],
                backgroundColor:'#2f77d6',
                opacity:fade1,
                borderRadius:10



             }}>

             </Animated.View>


             <View style={{
              //  borderWidth: 1,
               position: 'absolute',
               width:'auto',
               height:50,
               bottom:0,
               flexDirection:'row',
               alignSelf: 'center',
             }}>
               <Animated.View style={{
                 backgroundColor:index1,
                 height:15,
                 width:15,
                 borderRadius:10,
                 margin:10

               }}>
               </Animated.View>

               <Animated.View style={{
                 backgroundColor:index2,
                 height:15,
                 width:15,
                 borderRadius:10,
                 margin:10

               }}>
               </Animated.View>

               <Animated.View style={{
                 backgroundColor:index3,
                 height:15,
                 width:15,
                 borderRadius:10,
                 margin:10

               }}>
               </Animated.View>
               <Animated.View style={{
                 backgroundColor:index4,
                 height:15,
                 width:15,
                 borderRadius:10,
                 margin:10

               }}>
               </Animated.View>  
             </View>            
        
           
    
           



                   <Animated.FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    horizontal
                    data={this.state.arrayitem}
                    keyExtractor={(item) => item.i.toString()}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={()=>this.handleClick(item.i)}style={{ width, height, zIndex: 500000 }} key={index}>
                            {/* <Text>{item.i}</Text>   */}
                            <Text style={{
                               fontSize:35, 
                               fontWeight: 'bold',
                               marginTop:25,
                               marginLeft:25
                            }}>{item.name}</Text> 
                            <Text style={{
                               marginLeft:25,
                               fontSize:20,
                              //  borderWidth: 1,
                               width:320 
                            }}>{item.desc}</Text> 

                            <View style={{
                              // borderWidth: 1,
                              height:300,
                              width:300,
                              alignSelf: 'center',
                              marginTop:100,
                              marginLeft:-50,
                              padding:50
                            }}>
                             <Image style={{ height: null, width: null, flex: 1 }} source={item.image}/>
                            </View>

                        </TouchableOpacity>   
                    )}
                />

           

      </View>
    );
  }
}
