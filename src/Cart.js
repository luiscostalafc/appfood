import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

var {width} = Dimensions.get('window');

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('cart')
      .then((cart) => {
        if (cart !== null) {
          const cartfood = JSON.parse(cart);
          this.setState({dataCart: cartfood});
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 20}} />
        <Text style={{fontSize: 32, color: '#33c37d', fontWeight: 'bold'}}>
          Cart food
        </Text>
        <View style={{height: 10}} />

        <View style={{flex: 1}}>
          <ScrollView>
            {this.state.dataCart.map((item) => {
              return (
                <View
                  style={{
                    width: width - 20,
                    margin: 10,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: '#cccccc',
                    paddingBottom: 1,
                  }}>
                  <Image
                    resizeMode={'contain'}
                    style={{width: width / 3, height: width / 3}}
                    source={{
                      uri: 'http://tutofox.com/foodapp/food/pizza/pizza-1.png',
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        sss
                      </Text>
                      <Text>Lorem ipsum food</Text>
                    </View>

                    <View
                      style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#33c37d',
                          fontSize: 20,
                        }}>
                        ${item.price * item.quantity}
                      </Text>

                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon
                          name="ios-remove-circle"
                          size={30}
                          color={'#33c37d'}
                        />
                        <Text
                          style={{fontWeight: 'bold', paddingHorizontal: 8}}>
                          {item.quantity}
                        </Text>
                        <Icon
                          name="ios-add-circle"
                          size={30}
                          color={'#33c37d'}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}

            <View style={{height: 20}} />
            <TouchableOpacity
              style={{
                backgroundColor: '#33c37d',
                width: width - 40,
                alignItems: 'center',
                padding: 10,
                borderRadius: 5,
                margin: 20,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                CHECKOUT
              </Text>
            </TouchableOpacity>
            <View style={{height: 20}} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
