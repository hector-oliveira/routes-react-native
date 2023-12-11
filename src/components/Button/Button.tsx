import React from 'react';
import * as S from './Button.styled';
import { TouchableOpacityProps } from 'react-native';
import { borderRadius } from '@themes/@BorderRadius'

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  borderRad?: string;
};
export const Button = ({
  title,
  borderRad,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container
      {...rest}
      title
      borderRad={borderRad}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};