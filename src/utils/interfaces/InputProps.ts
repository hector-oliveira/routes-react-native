import { TextInputProps } from 'react-native';

export type InputProps = TextInputProps & {
  placeholder?: string;
  secureTextEntry?: boolean;
};