// コンポーネントのバグを検知したり、予期せぬ処理などを警告してくれるツール
import { StrictMode } from "react";
// v18から追加された新機能で、並行処理の機能群にアクセス可能になる
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);