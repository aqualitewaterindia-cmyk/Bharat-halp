
export type Category = 'Emergency' | 'Social' | 'Utility' | 'City';

export interface Helpline {
  id: string;
  name: string;
  number: string;
  category: Category;
  city?: string;
  description?: string;
}

export interface CityData {
  name: string;
  state: string;
  numbers: { [key: string]: string };
}

export interface StateData {
  region: string;
  states: {
    name: string;
    womenHelpline: string;
    districts?: string[];
  }[];
}
