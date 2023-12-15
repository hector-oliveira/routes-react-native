import React from 'react';
import * as S from './Home.styled';
import { Input } from '@components/all-components';

export const Home = () => {
  return (
    <S.Container>
      <S.Text>Criando Inputs {'\n'} com Composition</S.Text>
      <Input.Text placeholder='Nome'/>
      
    </S.Container>
  );
};