import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppScreenParamsList } from "@params-list/AppScreenParamsList";
import { AuthScreenParamsList } from "@params-list/AuthScreenParamsList";

export type AppRootNavigation = NativeStackNavigationProp<AppScreenParamsList>;
export type AuthRootNavigation = NativeStackNavigationProp<AuthScreenParamsList>;
