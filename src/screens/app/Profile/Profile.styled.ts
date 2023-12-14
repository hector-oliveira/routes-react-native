import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${ theme.colors.primary };
`;

export const Text = styled.Text`
  font-size: ${ theme.fontSize.xl };
  color: ${ theme.colors.light };
`;