import React from 'react';
import * as S from './Password.styled';
import { InputContent } from '../@Content';
import { usePassword } from './hook/usePassword';
import { useRenderIcon } from '@hooks/useRenderIcon';
import { theme } from '@themes/theme';
import { InputProps } from '@interfaces/input.interface';

export const Password = ({ placeholder, ...rest }: InputProps) => {
  const { icon } = useRenderIcon();
  const { isPasswordVisible, handlePasswordVisibility } = usePassword();

  return (
    <InputContent.Container>
      <InputContent.IconContainer>
        { icon({ name: 'lock', size: 26, color: theme.colors.light_200 }) }
      </InputContent.IconContainer>

      <InputContent.TextInputArea 
        {...rest}
        placeholder={placeholder}
        autoCapitalize='none'
        secureTextEntry={isPasswordVisible}
      />

      <S.IconButton onPress={handlePasswordVisibility}>
        <InputContent.IconContainer>
          { isPasswordVisible 
            ? icon({ name: 'eye', size: 26, color: theme.colors.light_200 })
            : icon({ name: 'eye-off', size: 26, color: theme.colors.light_200 })
          }
        </InputContent.IconContainer>
      </S.IconButton>
    </InputContent.Container>
  );
};