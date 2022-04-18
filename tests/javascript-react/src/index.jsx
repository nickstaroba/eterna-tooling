import React from "react";
import { createRoot } from "react-dom/client";

import { Button } from "./button/Button";

const root = createRoot(document.getElementById("root"));
root.render(<Button label={"Hello!~"} />);
