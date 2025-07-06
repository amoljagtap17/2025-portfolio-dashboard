import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { useUserQuery } from "./app/hooks/useUserQuery.tsx";
import { theme } from "./app/theme";
import { AppLayout } from "./components/layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  },
});

function Main() {
  const userQuery = useUserQuery();

  if (userQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (userQuery.isError) {
    return <div>Error: {userQuery.error.message}</div>;
  }

  return (
    <AppLayout>
      <App />
    </AppLayout>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <Main />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
