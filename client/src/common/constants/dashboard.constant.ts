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

export const dashboard: { sections: DashboardSection[] } = {
  sections: [
    {
      title: "Users",
      description: "Manage registered users, roles and permissions.",
      icon: faUser,
      navigateTo: "/users",
      disabled: false,
    },
    {
      title: "Items",
      description: "View and edit the items in your inventory or catalog.",
      icon: faBox,
      navigateTo: "/items",
      disabled: true,
    },
    {
      title: "Analytics",
      description: "Track traffic, usage, and performance metrics.",
      icon: faChartBar,
      navigateTo: "/analytics",
      disabled: true,
    },
    {
      title: "Media",
      description: "Upload and manage images, videos and files.",
      icon: faImage,
      navigateTo: "/media",
      disabled: true,
    },
    {
      title: "Tags",
      description: "Organize content with tags and categories.",
      icon: faTags,
      navigateTo: "/tags",
      disabled: true,
    },
    {
      title: "Comments",
      description: "Moderate user comments and feedback.",
      icon: faComment,
      navigateTo: "/comments",
      disabled: true,
    },
    {
      title: "Settings",
      description: "Update panel preferences and application settings.",
      icon: faCog,
      navigateTo: "/settings",
      disabled: true,
    },
  ],
} as const;
