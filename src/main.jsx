import React from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./TodoProvider";
import App from "./App";
import "./styles.css"

const root=createRoot(document.getElementById("root"));
root.render(
    <TodoProvider>
        <App />
    </TodoProvider>
)