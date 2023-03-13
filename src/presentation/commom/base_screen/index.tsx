import React from "react";
import AppBar from "./components/app_bar";

interface BaseScreenProps {
    children: React.ReactNode;
}

export default function BaseScreen({children}: BaseScreenProps) {
  return (
    <>
        <AppBar></AppBar>
    </>
  );
}
