import { AuthContext } from "@contexts/AuthContext";
import { useAuth } from "@hooks/useAuth";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { useContext } from "react";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { colors } = useTheme();
  const {user} = useAuth();


  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const contextData = useContext(AuthContext);

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
