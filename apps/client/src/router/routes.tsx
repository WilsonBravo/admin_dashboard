import type { RouteObject } from "react-router-dom";

import { App } from "../app/app";
import { AppRoute } from "@/common/enums/enums";
import { publicRoutes } from "./routes/public-routes";

const routes: RouteObject[] = [
  {
    path: AppRoute.ROOT,
    element: <App />,
    children: [...publicRoutes],
  },
];

export { routes };
