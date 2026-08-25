import { Stack } from 'expo-router';
import { ThemeProvider } from '../theme/ThemeContext';
import { UserProvider } from '../context/UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </UserProvider>
  );
}