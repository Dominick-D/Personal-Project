import React from 'react';
import { Button as RNButton } from 'react-native-elements';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <RNButton title={title} onPress={onPress} />
  );
};

export default Button;
