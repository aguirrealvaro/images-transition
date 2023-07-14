import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components";
import { Home } from "@/containers";

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<div>Login!</div>} />
      </Route>
    </Routes>
  );
};
