import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import OberryImageSlider from 'react-native-image-slider-oberry';

const images = [
	{
		image:
			'https://i2.wp.com/getrooms.co/wp-content/uploads/2020/07/victory-towers-hostel.png',
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


const images2 = [
	{
		image:
			'https://blog.getrooms.co/wp-content/uploads/2018/01/IMG_1649-312.jpg',
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
			<ScrollView>
				<OberryImageSlider 
          images={images} 
          // descript ionStyle={{fontSize:30,fontWeight:'bold',padding:10,}}
         />

				<OberryImageSlider images={images2} />

        <OberryImageSlider images={images3} />

        <OberryImageSlider images={images4} />
			</ScrollView>
		);
	}
}
