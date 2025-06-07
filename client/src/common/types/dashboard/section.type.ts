import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type DashboardSection = {
  title: string;
  description: string;
  icon: IconDefinition;
  navigateTo: string;
  enabled: boolean;
};

export { type DashboardSection };
