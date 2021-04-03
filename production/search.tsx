import React, { Component } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Alert
} from 'react-native';

interface Props {

}
interface State {
    loading: boolean,
    dataSource: string[],
    offset: number,
    isListEnd: boolean
}

export default class Search extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            loading: false,
            dataSource: [],
            offset: 10,
            isListEnd: false

        }
    }

    getData = () => {
        console.log(this.state.offset);
        const { loading, isListEnd, offset, dataSource } = this.state
        if (!loading && !isListEnd) {
            console.log('getData');
            this.setState({ loading: true });
            // Service to get the data from the server to render
            fetch('http://10.204.38.24:9090/offset='+offset)
                // Sending the currect offset with get request
                .then((response) => response.json())
                .then((responseJson) => {
                    // Successful response from the API Call
                    console.log(responseJson);
                    if (responseJson.length > 0) {   
                        this.setState({ offset: offset + 1 })
                        // After the response increasing the offset
                        this.setState({dataSource:responseJson})   
                        this.setState({ loading: true });   
                    } else {
                        this.setState({ isListEnd: true, loading: false })

                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };


    renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={styles.footer}>
                {this.state.loading ? (
                    <ActivityIndicator
                        color="black"
                        style={{ margin: 15 }} />
                ) : null}
            </View>
        );
    };



    ItemView = ({ item }) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => this.getItem(item)}>
                {item.product_name}
                {'.'}
                {item.product_price}
            </Text>
        );
    };





    ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };



    getItem = (item) => {
        // Function for click on an item
        Alert.alert('Id : ' + item.id + ' Title : ' + item.title);
    };


    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View style={{flex: 1}}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.ItemSeparatorView}
              renderItem={this.ItemView}
              ListFooterComponent={this.renderFooter}
              onEndReached={this.getData}
              onEndReachedThreshold={0.5}
            />
          </View>   
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
    itemStyle:{
     borderWidth:1,
     width:'100%',
     height:300
    }
  });
  