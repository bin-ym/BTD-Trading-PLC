export type EquipmentCategory =
  | "all"
  | "machinery"
  | "manual"
  | "chemicals"
  | "safety";

export interface EquipmentItem {
  id: string;
  name: string;
  purpose: string;
  category: EquipmentCategory;
  iconName: string;
  badge: string;
  applications: string;
  suitableFacilities: string[];
}
