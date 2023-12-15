import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const IconButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${ theme.colors.light_200 };
`;