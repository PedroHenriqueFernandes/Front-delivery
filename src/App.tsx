import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { TaskProvider } from "./context/TasksContext";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter >
                <TaskProvider>
                    <Router />
                </TaskProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>

    )
}