import React from 'react';
import * as S from './Home.styled';
import { Button, Input } from '@components/all-components';

export const Home = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <S.Text>Criando Inputs {'\n'} com Composition</S.Text>
        <Input.Text placeholder='Nome' />
        <Input.Password placeholder='Senha'/>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button title='Entrar'/>
      </S.ButtonContainer>
    </S.Container>
  );
};