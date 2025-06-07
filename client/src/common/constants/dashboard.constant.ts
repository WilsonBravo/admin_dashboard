import {
  faUser,
  faEnvelope,
  faGear,
  faInbox,
} from "@/common/components/components";

export const dashboard = {
  sections: [
    { title: "Users", description: "", icon: faUser, navigateTo: "/users" },
    {
      title: "Messages",
      description: "",
      icon: faEnvelope,
      navigateTo: "/messages",
    },
    {
      title: "Settings",
      description: "",
      icon: faGear,
      navigateTo: "/settings",
    },
    { title: "Inbox", description: "", icon: faInbox, navigateTo: "/inbox" },
  ],
} as const;
