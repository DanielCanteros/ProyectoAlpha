import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity 
    style={{
      padding: 15,
      backgroundColor: '#007AFF',
      borderRadius: 5,
      margin: 10,
    }}
    onPress={onPress}
  >
    <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
  </TouchableOpacity>
);

export default Button;