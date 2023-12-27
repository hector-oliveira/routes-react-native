import React from 'react';
import * as S from './Home.styled';
import { Button, Input } from '@components/all-components';
import { useNavigation } from '@react-navigation/native';
import { AppRootNavigation } from '@root_navigation/NavigatorStack';

export const Home = () => {
  
	const navigation = useNavigation<AppRootNavigation>();
	const goToProducts = () => navigation.navigate('products');

	return (
    <S.Container>
      <S.InputContainer>
        <S.Text>Criando Inputs {'\n'} com Composition</S.Text>
        <Input.Text placeholder='Nome' />
        <Input.Password placeholder='Senha'/>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button title='Ir para Produtos' onPress={goToProducts} />
      </S.ButtonContainer>
    </S.Container>
  );
};