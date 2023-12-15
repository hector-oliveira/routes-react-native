import React from 'react';
import * as S from './Container.styled';
import { ParentContainerProps } from '@interfaces/ParentContainer';

export const Container = ({ children }: ParentContainerProps) => {
  return (
    <S.ContainerArea>
      { children }
    </S.ContainerArea>
  );
};