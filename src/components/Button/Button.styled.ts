import { borderRadius } from '@themes/@BorderRadius';
import { theme } from '@themes/theme';
import styled, { css } from 'styled-components/native';

interface Props {
  borderRad?: string;
}

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: ${ theme.colors.secondary };
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRad }:Props) => borderRad || theme.borderRadius.default };
`;

export const Title = styled.Text`
  font-size: ${ theme.fontSize.xl };
  color: ${ theme.colors.light };
`;