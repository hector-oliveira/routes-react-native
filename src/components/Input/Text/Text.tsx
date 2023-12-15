import React from 'react';
import { InputProps } from '@interfaces/InputProps';
import { theme } from '@themes/theme';
import { useRenderIcon } from '@hooks/useRenderIcon';
import { InputContent } from '../@Content/index';

export const Text = ({ placeholder, ...rest }: InputProps) => {
  const { icon } = useRenderIcon();
  return (
    <InputContent.Container>
      <InputContent.IconContainer>
        { icon({ name: 'user', size: 26, color: theme.colors.light }) }
      </InputContent.IconContainer>
      <InputContent.TextInputArea placeholder={placeholder} {...rest} />
    </InputContent.Container>
  );
};