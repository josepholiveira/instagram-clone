import React, { Component } from "react";
import { View } from "react-native";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);
import Routes from "./routes";

export default function App() {
  return <Routes />;
}
