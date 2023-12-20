import { IconProps } from "@interfaces/icon.interface"
import { Feather } from '@expo/vector-icons';

export const useRenderIcon = () => {
  const icon = ({ name, size, color }: IconProps) => <Feather name={name} size={size} color={color} />;
  
  return { icon };
}