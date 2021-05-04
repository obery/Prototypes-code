import React, { Component } from 'react';
import { View, Text, StatusBar,ScrollView, Dimensions, Animated, FlatList, StyleSheet, Image, Platform,TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const SwipeData = [
	{
		i: 1,
		title: 'Welcome to Doki',
		desc: 'Your number one delivery app in town ',
	},
	{
		i: 2,
		title: 'Request for a delivery',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
	},
	{
		i: 3,
		title: 'Track Delivery Location',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
	},
	{
		i: 4,
		title: 'Make Payment to your wallet',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
	},
	{
		i: 5,
		title: 'Doki',
		desc: '',
	},
];

export default class Walkthrough extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollX: new Animated.Value(0),
		};
	}

	render() {
		const movephone = this.state.scrollX.interpolate({
			inputRange: [0, width,width*2,width*3],
			outputRange: [500, 20,-520,20],
			// extrapolate: 'clamp'
		});

		const movemoney = this.state.scrollX.interpolate({
			inputRange: [0, width,width*2,width*3],
			outputRange: [-500, -500,-500,0],
			// extrapolate: 'clamp'
		});

		const movemoto = this.state.scrollX.interpolate({
			inputRange: [0, width,width*2,width*3],
			outputRange: [500, 0,0,-500],
			extrapolate: 'clamp',
		});

		const zoommoto = this.state.scrollX.interpolate({
			inputRange: [0, width, width * 2],
			outputRange: [1, 1, 1.5],
			extrapolate: 'clamp',
		});

		const zoommap = this.state.scrollX.interpolate({
			inputRange: [0, width, width * 2,width * 3],
			outputRange: [0, 0, 1,0],
			extrapolate: 'clamp',
		});

		const droppackage = this.state.scrollX.interpolate({
			inputRange: [0, width, width * 2,width*3,width*4],
			outputRange: [-400, -400, 107,150,500],
			extrapolate: 'clamp',
		});

		const zoompackage = this.state.scrollX.interpolate({
			inputRange: [0, width, width * 2,width * 3],
			outputRange: [1, 1, 1,1.7],
			extrapolate: 'clamp',
		});









        const index1 = this.state.scrollX.interpolate({
            inputRange: [0,width,width*2,width * 3,width*4],
            outputRange: ['#d73833','#ccc','#ccc','#ccc','#ccc'],
            extrapolate: 'clamp'
          })
          const index2 = this.state.scrollX.interpolate({
            inputRange: [0,width,width*2,width * 3,width*4],
            outputRange: ['#ccc','#d73833','#ccc','#ccc','#ccc'],
            extrapolate: 'clamp'
          })
          const index3 = this.state.scrollX.interpolate({
            inputRange: [0,width,width*2,width * 3,width*4],
            outputRange: ['#ccc','#ccc','#d73833','#ccc','#ccc'],
            extrapolate: 'clamp'
          })
          const index4 = this.state.scrollX.interpolate({
            inputRange: [0,width,width*2,width * 3,width*4],
            outputRange: ['#ccc','#ccc','#ccc','#d73833','#ccc'],
            extrapolate: 'clamp'
          })

          const index5 = this.state.scrollX.interpolate({
            inputRange: [0,width,width*2,width * 3,width*4],
            outputRange: ['#ccc','#ccc','#ccc','#ccc','#d73833'],
            extrapolate: 'clamp'
          })
		return (
			<View>
				<StatusBar hidden />
				<View
					style={{
						// borderWidth: 1,
						width: 250,
						height: 250,
						alignSelf: 'center',
						marginTop: 100,
						position: 'absolute',
						overflow: 'hidden',
						borderRadius: 10,
					}}
				>
					{/* animation goes here ... */}

					{/* mobile */}
					<Animated.Image
						style={{
							height: 200,
							width: 100,
							alignSelf: 'center',
							transform: [{ translateY: movephone }],
						}}
						source={require('../assets/phonem.png')}
					/>

					{/* map */}
					<Animated.Image
						style={{
							height: '100%',
							width: '100%',
							alignSelf: 'center',
							transform: [{ scale: zoommap }],
							position: 'absolute',
						}}
						source={require('../assets/maps.png')}
					/>

					{/* package */}
					<Animated.Image
						style={{
							height: 40,
							width: 50,
							alignSelf: 'center',
							zIndex:3000,
							transform: [{ translateY: droppackage }, { translateX: width / 6.5 },{scale:zoompackage}],
							position: 'absolute',
						}}
						source={require('../assets/pack.png')}
					/>


					{/* money */}
					<Animated.Image
						style={{
							height: 90,
							width: 115,
							alignSelf: 'center',
							transform: [{ translateX: movemoney },{ translateY: 50 },{rotateZ:'-90deg'}],
							position: 'absolute',
						}}   
						source={require('../assets/money.png')}
					/>

					{/* moto */}
					<Animated.Image
						style={{
							height: 80,
							width: 80,
							alignSelf: 'center',
							transform: [{ translateX: movemoto }, { translateY: -100 }, { scale: zoommoto }],
						}}
						source={require('../assets/ryd.png')}
					/>
				</View>

				<FlatList
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
					horizontal
					data={SwipeData}
					keyExtractor={(item) => item.i.toString()}
					onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }], {
						useNativeDriver: false,
					})}
					renderItem={({ item, index }) => (
						<View style={{ width, height, zIndex: 500000 }} key={index}>
							
							
							<View style={styles.infoBar}>
								<Text style={styles.title}>{item.title}</Text>
								<Text style={styles.desc}>{item.desc}</Text>
							</View>
							{item.i === 5?
							<TouchableOpacity style={styles.cbutt}>
								<Text style={styles.ctext}>Continue</Text>
							</TouchableOpacity>
							:null}
						</View>
					)}
				/>

				<View
					style={{
						//  borderWidth: 1,
						position: 'absolute',
						width: 'auto',
						height: 50,
						bottom: 0,
						flexDirection: 'row',
						alignSelf: 'center',
					}}
				>
					<Animated.View
						style={{
							backgroundColor: index1,
							height: 15,
							width: 15,
							borderRadius: 10,
							margin: 10,
						}}
					></Animated.View>

					<Animated.View
						style={{
							backgroundColor: index2,
							height: 15,
							width: 15,
							borderRadius: 10,
							margin: 10,
						}}
					></Animated.View>

					<Animated.View
						style={{
							backgroundColor: index3,
							height: 15,
							width: 15,
							borderRadius: 10,
							margin: 10,
						}}
					></Animated.View>
					<Animated.View
						style={{
							backgroundColor: index4,
							height: 15,
							width: 15,
							borderRadius: 10,
							margin: 10,
						}}
					></Animated.View>
                    <Animated.View
						style={{
							backgroundColor: index5,
							height: 15,
							width: 15,
							borderRadius: 10,
							margin: 10,
						}}
					></Animated.View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cbutt:{
    //    borderWidth: 1,
	   width:'90%',
	   height:50,
	   backgroundColor:'#d73833',
	   alignSelf: 'center',
	   borderRadius: 5,
	   justifyContent:'center',
	   alignItems:'center',
	   marginTop:50
	},
    ctext:{
       color:'white',
	   fontWeight: 'bold',
	},
	title: {
		fontSize: Platform.OS === 'ios' ? 35 : 25,
		alignSelf: 'center',
		fontWeight: 'bold',
		padding: 5,
		textAlign: 'center',
		//  borderWidth:1,
		width: 320,
        color:'#00487c'

	},
	desc: {
		fontSize: Platform.OS === 'ios' ? 18 : 13,
		alignSelf: 'center',
		padding: 5,
		textAlign: 'center',
	},
	infoBar: {
		//  borderWidth:1,
		width: '80%',
		marginTop: '100%',
		padding: 10,
		alignSelf: 'center',
	},
});
