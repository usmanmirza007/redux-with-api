import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import {add, sub} from './../redux/actions/CounterAction';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#237946',
            marginTop: 20,
            width: '100%',
            height: 50,
            alignItems: 'center',
          }}
          onPress={() => this.props.increment()}>
          <Text style={{alignSelf: 'center', color: '#fff'}}>INCREMENT</Text>
        </TouchableOpacity>
        <Text>{this.props.count}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#237946',
            marginTop: 20,
            width: '100%',
            height: 50,
            alignItems: 'center',
          }}
          onPress={() => this.props.decrement()}>
          <Text style={{alignSelf: 'center', color: '#fff'}}>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(add()),
  decrement: () => dispatch(sub()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
