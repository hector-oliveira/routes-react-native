import { NavigationContainer } from "@react-navigation/native";
import { AuthStackRoutes } from "./auth/authStack.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStackRoutes />
    </NavigationContainer>
  );
}