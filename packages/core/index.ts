import { makeInstaller } from "@toy-element/utils";

import components from "./components";

const installer = makeInstaller(components);

import "@toy-element/theme/index.css";

export * from "@toy-element/components";
export default installer;
