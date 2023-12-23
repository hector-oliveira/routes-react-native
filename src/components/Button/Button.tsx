import React from 'react';
import * as S from './Button.styled';
import { ButtonProps } from '@interfaces/Button.interface';

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