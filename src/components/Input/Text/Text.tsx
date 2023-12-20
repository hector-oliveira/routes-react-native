import React from 'react';
import { InputProps } from '@interfaces/input.interface';
import { theme } from '@themes/theme';
import { InputContent } from '../@Content/index';
import { renderIcon } from '@layouts/renderIcon';

export const Text = ({ placeholder, ...rest }: InputProps) => {
  
	const { icon } = renderIcon();
  
	return (
    <InputContent.Container>
      <InputContent.IconContainer>
        { icon({ name: 'user', size: 26, color: theme.colors.light }) }
      </InputContent.IconContainer>
      <InputContent.TextInputArea placeholder={placeholder} {...rest} />
    </InputContent.Container>
  );
};