import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import OberryImageSlider from './slider';

export interface Props {
}

export interface State {

}


const images = [
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

export default class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  public render() {
    return (
      <View>
         <OberryImageSlider  
         width={'100%'}
         images={images}
         BorderRadius={0}
         />
      </View>
    );
  }
}
