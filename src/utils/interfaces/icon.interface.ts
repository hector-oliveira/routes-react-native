import { Feather } from '@expo/vector-icons';
export type IconProps = {
  name: keyof typeof Feather.glyphMap;
  size: number;
  color: string;
}