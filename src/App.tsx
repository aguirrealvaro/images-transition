import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "@/components";
import "@/styles/globals.css";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
