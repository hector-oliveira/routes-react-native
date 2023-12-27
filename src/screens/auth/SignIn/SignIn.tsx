import React from 'react';
import * as S from './SignIn.styled';
import { Button } from '@components/all-components';
import { theme } from '@themes/theme';
import { useNavigation } from '@react-navigation/native';
import { AuthRootNavigation } from '@root_navigation/NavigatorStack';

export const SignIn = () => {
  const navigation = useNavigation<AuthRootNavigation>();
  const handleNavigate = () => navigation.navigate('app');
  return (
    <S.Container>
      <S.Text>SignIn</S.Text>
      <S.ButtonContainer>
        <Button 
          title='Clique aqui!'
          borderRad={ theme.borderRadius.default }
          onPress={handleNavigate}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};