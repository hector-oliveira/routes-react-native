import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppScreenParamsList } from "@params_list/AppScreenParamsList";
import { AuthScreenParamsList } from "@params_list/AuthScreenParamsList";

export type AppRootNavigation = NativeStackNavigationProp<AppScreenParamsList>;
export type AuthRootNavigation = NativeStackNavigationProp<AuthScreenParamsList>;
