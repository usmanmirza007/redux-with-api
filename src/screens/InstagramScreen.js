import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';

import {connect} from 'react-redux';

import colors from './../constants/colors';
import {getData, postData} from './../redux/actions/InstagramAction';
import SpinnerSceen from './../components/SpinnerSceen';

class InstagramScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      body: '',
    };
  }
  check = () => {
    if (
      this.props.products &&
      this.state.username == this.props.products.username
    ) {
    } else {
      this.props.get(this.state.username);
      console.log('state', this.state.username);
      console.log('api', this.props.products.username);
    }
  };

  render() {
    // console.log('user', this.state.username);
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
            marginTop: 25,
          }}>
          <View
            style={{
              backgroundColor: colors.grey,
              height: 55,
              width: 200,
              borderRadius: 5,
            }}>
            <TextInput
              style={{paddingLeft: 10}}
              placeholder="Enter username"
              placeholderTextColor="#000"
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.check();
            }}
            style={{
              backgroundColor: colors.green,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 55,
            }}>
            <Text style={{color: colors.white, fontSize: 14}}>Search</Text>
          </TouchableOpacity>
        </View>
        {this.props.loading ? (
          <SpinnerSceen />
        ) : (
          <View>
            <Text>{this.props.products.full_name}</Text>
            <Text>{this.props.products.username}</Text>
            {/* <Text>{this.props.products.edge_followed_by.count}</Text> */}
            <Image
              source={{uri: this.props.products.profile_pic_url}}
              style={{width: 100, height: 100, borderRadius: 100}}
            />
            {/* <Text>{this.props.error}</Text> */}
          </View>
        )}
        <View
          style={{
            backgroundColor: colors.grey,
            height: 55,
            // width: 200,
            marginTop: 10,
            marginHorizontal: 25,
            borderRadius: 5,
          }}>
          <TextInput
            style={{paddingLeft: 10}}
            placeholder="Enter email"
            placeholderTextColor="#000"
            value={this.state.title}
            onChangeText={(title) => this.setState({title})}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.grey,
            height: 55,
            // width: 200,
            marginTop: 10,
            marginHorizontal: 25,
            borderRadius: 5,
          }}>
          <TextInput
            style={{paddingLeft: 10}}
            placeholder="Enter password"
            placeholderTextColor="#000"
            value={this.state.body}
            onChangeText={(body) => this.setState({body})}
          />
        </View>
        <TouchableOpacity
            onPress={() => {
              this.props.post(this.state.title, this.state.body, () => {
                this.props.navigation.navigate('HomeScreen')
              });
            }}
            style={{
              backgroundColor: colors.green,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 25,
              marginTop: 10,
              height: 55,
            }}>
            <Text style={{color: colors.white, fontSize: 14}}>Submit</Text>
          </TouchableOpacity>
          <Text>{this.props.error}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.instagram.instagramData,
  loading: state.instagram.loading,
  error: state.instagram.error,
});

const mapDispatchToProps = (dispatch) => ({
  get: (user) => getData(dispatch, user),
  post: (title, body, onSuccess) => postData(dispatch, title, body, onSuccess),
});

export default connect(mapStateToProps, mapDispatchToProps)(InstagramScreen);
