import React from 'react';
import * as S from './Text.styled';
import { InputProps } from '@interfaces/InputProps';
import { theme } from '@themes/theme';
import { useRenderIcon } from '@hooks/useRenderIcon';
import { TextInputArea } from '../@TextInputArea/TextInputArea';

export const Text = ({ placeholder, ...rest }: InputProps) => {
  const { icon } = useRenderIcon();
  return (
    <S.Container>
      <S.IconContainer>
        { icon({ name: 'user', size: 26, color: theme.colors.light }) }
      </S.IconContainer>
      <TextInputArea placeholder={placeholder} {...rest} />
    </S.Container>
  );
};