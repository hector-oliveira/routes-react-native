import React from 'react';
import * as S from './TextInputArea.styled';
import { InputProps } from '@interfaces/input.interface';

export const TextInputArea = ({ ...rest }: InputProps) => {
  return (
    <S.Container {...rest} />
  );
};