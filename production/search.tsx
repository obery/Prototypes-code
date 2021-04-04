import React, { Component } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Alert,
    Image
} from 'react-native';

interface Props {

}
interface State {
    loading: boolean,
    dataSource: string[],
    page: number,
    isListEnd: boolean
}


const imageLocation:string = 'https://tuatuagye.com/admin/admin/pages/forms/products/'

export default class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loading: false,
            dataSource: [],
            page: 1,
            isListEnd: false

        }
    }

    getData = () => {

             this.setState({loading:true})
            fetch('http://10.204.41.117:9090/products?page=' + this.state.page)
                .then((response) => response.json())
                .then((responseJson) => {
                  this.setState(state=>({dataSource:[...state.dataSource,...responseJson.products]}))
                })
                .catch((error) => {
                    console.error(error);
                });
        
    };


    renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={styles.footer}>
                {this.state.loading ? (
                    <ActivityIndicator
                        color="black"
                        style={{ margin: 15 }} 
                        size={'large'}
                        />
                ) : null}
            </View>
        );
    };


    IncreaseData = ()=>{
        this.setState(state=>({page:state.page + 1}),()=>this.getData())
    }


    ItemView = ({ item }) => {
        return (
            // Flat List Item
           <View style={styles.itemStyle}>
             <View style={{height:200,width:'100%',}}>
                <Image style={{height:null,width:null,flex: 1}} source={{uri:imageLocation+item.image}}/>
             </View>
             <Text>{item.id}</Text>
           </View>
        );
    };




    componentDidMount() {
        this.getData();
    }

    render() {
        return (    
                <FlatList
                    style={{flex: 1,}}
                    data={this.state.dataSource}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={this.ItemView}
                    onEndReached={()=>this.IncreaseData()}
                    onEndReachedThreshold={0}
                    ListFooterComponent={this.renderFooter} 

                />
           
        )
    }
}


const styles = StyleSheet.create({
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemStyle: {
        borderWidth: 1,  
        // width: '100%',
        marginBottom:10
    }
});
