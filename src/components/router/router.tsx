import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components";
import { Home, ImagePage } from "@/containers";

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":image" element={<ImagePage />} />
      </Route>
    </Routes>
  );
};
