import 'react-native-gesture-handler';
import { Routes } from './routes/RouteContext';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@themes/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={ { flex: 1 } }>
        <StatusBar style="light" backgroundColor={ theme.colors.primary } />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
