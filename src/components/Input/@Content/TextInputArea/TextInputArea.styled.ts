import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.light_200,
})`
  font-size: ${ theme.fontSize.default };
  color: ${ theme.colors.light };
  height: 100%;
  flex: 1;
  margin-left: 3px;
  padding: 0 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${ theme.colors.light_200 };
`;