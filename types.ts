
export type Category = 'Police' | 'Medical' | 'Fire' | 'Social' | 'Utility';

export interface PoliceStation {
  name: string;
  number: string;
  address?: string;
}

export interface District {
  name: string;
  policeStations: PoliceStation[];
  controlRoomNumber: string;
}

export interface StateData {
  name: string;
  districts: District[];
  womenHelpline: string;
}

export interface NationalHelpline {
  id: string;
  name: string;
  number: string;
  category: Category;
  description?: string;
}

// Added missing export to fix error in components/HelplineCard.tsx
export type Helpline = NationalHelpline;

// Added missing export to fix error in components/CitySelector.tsx
export interface CityData {
  name: string;
  state: string;
  numbers: Record<string, string | unknown>;
}
