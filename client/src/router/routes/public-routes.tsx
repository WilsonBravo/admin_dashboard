// import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { AppRoute } from "@/common/enums/app-route.enum";
import { Admin } from "@/app/admin/admin";
import { Home } from "@/app/home/home";

const publicRoutes: RouteObject[] = [
  {
    path: AppRoute.ROOT,
    element: <Home />,
  },
  {
    path: AppRoute.ADMIN,
    element: <Admin />,
  },
  //   {
  //     path: AppRoute.ANY,
  //     element: <Navigate to={AppRoute.ROOT} />,
  //   },
];

export { publicRoutes };
