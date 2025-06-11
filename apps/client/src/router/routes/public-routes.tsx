// import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { AppRoute } from "@/common/enums/app-route.enum";
import { Admin } from "@/app/admin/admin";
import { Home } from "@/app/home/home";
import { RootLayout } from "@/app/home/layout";
import { Users } from "@/app/home/users/users";

const publicRoutes: RouteObject[] = [
  {
    path: AppRoute.ROOT,
    element: <RootLayout />,
    children: [
      {
        path: AppRoute.ROOT,
        element: <Home />,
      },
      {
        path: AppRoute.USERS,
        element: <Users />,
      },
    ],
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
