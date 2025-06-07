import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type DashboardSection = {
  title: string;
  description: string;
  icon: IconDefinition;
  navigateTo: string;
  disabled: boolean;
};

export { type DashboardSection };
