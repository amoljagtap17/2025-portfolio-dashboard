import { Button, ThemeProvider, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App.tsx";
import { theme } from "./app/theme";
import { AppLayout } from "./components/layout";
import { ClientView } from "./components/sections/dashboard/ClientView";

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
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <Typography variant="h6" color="error">
          There was an error!
          <Button variant="contained" onClick={() => resetErrorBoundary()}>
            Try again
          </Button>
        </Typography>
      )}
    >
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <AppLayout>
          <App />
        </AppLayout>
      </Suspense>
    </ErrorBoundary>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route
                index
                element={
                  <Typography variant="body1">
                    Select Client from left side to view the Dashboard
                  </Typography>
                }
              />
              <Route path=":clientId" element={<ClientView />}>
                <Route
                  index
                  element={
                    <Typography variant="body1">
                      Select Account from above to view the Dashboard
                    </Typography>
                  }
                />
                <Route path=":accountId" element={<div>account</div>} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
