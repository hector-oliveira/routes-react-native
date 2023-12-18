import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: true,
  behavior: 'height',
})`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${ theme.colors.primary };
`;

export const Text = styled.Text`
  font-size: ${ theme.fontSize.xl };
  color: ${ theme.colors.light };
  text-align: center;
`;

export const InputContainer = styled.SafeAreaView`
  flex: 0.9;
  width: 100%;
  align-self: center;
  justify-content: space-around;
`;

export const ButtonContainer = styled.SafeAreaView`
  width: 100%;
  padding: 0 20px;
  align-self: center;
  justify-content: flex-end;
`;