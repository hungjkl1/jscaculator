import { createStore, compose } from "redux";
import root from "./reducer/index";

const store = createStore(root, {});

export default store;
