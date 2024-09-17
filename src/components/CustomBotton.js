import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Mixins } from '../assets/styles';

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: Mixins.scaleSize(14),
    paddingHorizontal: Mixins.scaleSize(20),
    borderRadius: Mixins.scaleSize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
