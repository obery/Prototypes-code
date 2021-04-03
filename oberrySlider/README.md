# react-native-image-slider-oberry
## A minimalistic Animated Image Slider

Build under the inspiration of product desgning



- ![workflow Logo](http://pos.tuatuagye.com/flow-oberry-slider.png)

- ![workflow Logo](http://pos.tuatuagye.com/c2.png)


- ![workflow Logo](http://pos.tuatuagye.com/c3.png)


- ![workflow Logo](http://pos.tuatuagye.com/c4.png)



## Features

- Animated Description
- Simple Up and Down Swiping 
- Customizable
 # Demo : [click to view sample display](https://youtu.be/DtNcWM3M5UU)
## Installation


```sh
npm i react-native-image-card-slider-oberry
npm i
yarn add react-native-image-card-slider-oberry
```
```javascript

import OberryImageSlider from 'react-native-image-card-slider-oberry';

const images = [
	{
	image:'https://i2.wp.com/getrooms.co/wp-content/uploads/2020/07/victory-towers-hostel.png',
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



	return (
	<View>
     
        <OberryImageSlider images={images} 
        // descriptionStyle={{}} 
        />

	</View>
		);
```

| Prop | datatype | keys |
| ------ | ------ | ------ |
| images | array-of-objects| image , desc|
| descriptionStyle | objects | css styles |
| width |string or number | default = '95%' |
| BorderRadius |number |  default = 10 |


## Development

Want to contribute? Great!

The Aim is to make a minimalistic way of viewing images 


## License

MIT

**Free Software, Hell Yeah!**

