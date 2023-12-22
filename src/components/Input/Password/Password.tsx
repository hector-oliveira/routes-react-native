import React from 'react';
import * as S from './Password.styled';
import { InputContent } from '../@Content';
import { theme } from '@themes/theme';
import { InputProps } from '@interfaces/input.interface';
import { renderIcon } from '@layouts/renderIcon';
import { useToggle } from '@hooks/useToggle';

export const Password = ({ placeholder, ...rest }: InputProps) => {
  
	const { icon } = renderIcon();
  
	const { value, toggleValue } = useToggle(true);

  return (
    <InputContent.Container>
      
			<InputContent.IconContainer>
        { icon({ name: 'lock', size: 26, color: theme.colors.light_200 }) }
      </InputContent.IconContainer>

      <InputContent.TextInputArea 
        {...rest}
        placeholder={placeholder}
        autoCapitalize='none'
        secureTextEntry={value}
      />

      <S.IconButton onPress={toggleValue}>
				<InputContent.IconContainer>
          { value 
            ? icon({ name: 'eye', size: 26, color: theme.colors.light_200 })
            : icon({ name: 'eye-off', size: 26, color: theme.colors.light_200 })
          }
        </InputContent.IconContainer>
      </S.IconButton>
    </InputContent.Container>
  );
};