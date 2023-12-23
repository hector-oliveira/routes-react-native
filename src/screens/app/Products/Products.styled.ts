import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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