import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
// import OberryImageSlider from 'react-native-image-card-slider-oberry';
import Story from './production/story'
import Story2 from './production/story2'

import OberryImageSlider from './production/slider';
import Search from './production/search'
import Authentication from './production/authentication'
import SleekAuth from './production/authsleek'
import  Minimal from "./production/minimalauth";
import Menu from './production/menu'
import Intro from './production/intro'






const images = [
	{
		image:
			'https://i.pinimg.com/originals/41/61/9a/41619aa280a9deac3e97e115eecef634.png',
		desc: 'Stones of harnest winds',
	},
	{
		image: 'https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://blog.getrooms.co/wp-content/uploads/2018/02/IMG_1419-49.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://storyv.com/wp-content/uploads/2020/07/lsrdn9p2ctbrxkpo4tfa.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
];


const images2 = [
	{
		image:
			'https://cdn.wallpapersafari.com/8/55/wZobKJ.jpg',
		desc: 'Silent Waters in the mountains in midst of Himilayas',
	},
	{
		image: 'https://storyv.com/wp-content/uploads/2020/07/lsrdn9p2ctbrxkpo4tfa.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},   
	{
		image: 'https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/4/4916/42.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://blog.getrooms.co/wp-content/uploads/2018/02/IMG_1419-49.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://storyv.com/wp-content/uploads/2020/07/lsrdn9p2ctbrxkpo4tfa.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
];

const images3 = [     

	{
		image: 'https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/4/4916/42.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://blog.getrooms.co/wp-content/uploads/2018/02/IMG_1419-49.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://storyv.com/wp-content/uploads/2020/07/lsrdn9p2ctbrxkpo4tfa.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
];

const images4 = [

	{
		image: 'https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/4/4916/42.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://blog.getrooms.co/wp-content/uploads/2018/02/IMG_1419-49.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
	{
		image: 'https://storyv.com/wp-content/uploads/2020/07/lsrdn9p2ctbrxkpo4tfa.jpg',
		desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
	},
];



export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View>
				<Menu/> 
				<Intro/>      

		{/* <Story/>  */}

        {/* <OberryImageSlider images={images}   width='100%' BorderRadius={0}/>

		<OberryImageSlider images={images2}  width={'100%'} BorderRadius={0}/>

        <OberryImageSlider images={images3}  width={'100%'} BorderRadius={0}/>

        <OberryImageSlider images={images4}  width={'100%'} BorderRadius={0}/> */}


		     {/* <Fluid/> */}
			</View>
		);
	}
}
