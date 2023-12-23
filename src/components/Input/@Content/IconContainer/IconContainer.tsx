import React from 'react';
import * as S from './IconContainer.styled';
import { ParentContainerProps } from '@interfaces/ParentContainer.interface';

export const IconContainer = ({ children }: ParentContainerProps) => {
  return (
    <S.Container>
      { children }
    </S.Container>
  );
};