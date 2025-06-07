import {
  faUser,
  faBox,
  faChartBar,
  faCog,
  faTags,
  faComment,
  faImage,
} from "@/common/components/components";

import type { DashboardSection } from "../types/types";
import { AppRoute } from "../enums/enums";

export const dashboard: { sections: DashboardSection[] } = {
  sections: [
    {
      title: "Users",
      description: "Manage registered users, roles and permissions.",
      icon: faUser,
      navigateTo: AppRoute.USERS,
      disabled: false,
    },
    {
      title: "Items",
      description: "View and edit the items in your inventory or catalog.",
      icon: faBox,
      navigateTo: AppRoute.ANY,
      disabled: true,
    },
    {
      title: "Analytics",
      description: "Track traffic, usage, and performance metrics.",
      icon: faChartBar,
      navigateTo: AppRoute.ANY,
      disabled: true,
    },
    {
      title: "Media",
      description: "Upload and manage images, videos and files.",
      icon: faImage,
      navigateTo: AppRoute.ANY,
      disabled: true,
    },
    {
      title: "Tags",
      description: "Organize content with tags and categories.",
      icon: faTags,
      navigateTo: AppRoute.ANY,
      disabled: true,
    },
    {
      title: "Comments",
      description: "Moderate user comments and feedback.",
      icon: faComment,
      navigateTo: AppRoute.ANY,
      disabled: true,
    },
    {
      title: "Settings",
      description: "Update panel preferences and application settings.",
      icon: faCog,
      navigateTo: AppRoute.ANY,
      disabled: true,
    },
  ],
} as const;
