import React from "react";
import AlbumSingle from "./AlbumSingle";
import Home from "./Home";

const routes = {
  "/": () => <Home />,
  "/album/:albumId": () => <AlbumSingle />
};
export default routes;
