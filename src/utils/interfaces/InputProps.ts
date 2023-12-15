import { TouchableOpacityProps } from 'react-native';

export type InputProps = TouchableOpacityProps & {
  placeholder?: string;
  secureTextEntry?: boolean;
};