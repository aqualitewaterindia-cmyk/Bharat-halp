
import { NationalHelpline, StateData } from './types';

export const NATIONAL_HELPLINES: NationalHelpline[] = [
  { id: '1', name: 'National Emergency', number: '112', category: 'Police', description: 'Unified emergency number' },
  { id: '2', name: 'Police', number: '100', category: 'Police' },
  { id: '3', name: 'Fire Brigade', number: '101', category: 'Fire' },
  { id: '4', name: 'Ambulance', number: '108', category: 'Medical', description: 'Medical emergencies' },
  { id: '5', name: 'Women Helpline', number: '181', category: 'Social' },
  { id: '6', name: 'Child Helpline', number: '1098', category: 'Social' },
  { id: '7', name: 'Cyber Crime', number: '1930', category: 'Police', description: 'Financial cyber fraud' },
  { id: '8', name: 'Senior Citizen', number: '14567', category: 'Social' },
];

export const POLICE_DIRECTORY: StateData[] = [
  {
    name: 'Maharashtra',
    womenHelpline: '103',
    districts: [
      {
        name: 'Mumbai City',
        controlRoomNumber: '022-22621855',
        policeStations: [
          { name: 'Colaba Police Station', number: '022-22856030', address: 'Shahid Bhagat Singh Road' },
          { name: 'Marine Drive Police Station', number: '022-22812222', address: 'Dinshaw Vacha Road' },
          { name: 'Worli Police Station', number: '022-24301552', address: 'Dr Annie Besant Road' },
          { name: 'Bandra Police Station', number: '022-26421511', address: 'Hill Road' }
        ]
      },
      {
        name: 'Pune City',
        controlRoomNumber: '020-26126296',
        policeStations: [
          { name: 'Shivajinagar Police Station', number: '020-25536263' },
          { name: 'Deccan Gymkhana Station', number: '020-25535316' },
          { name: 'Kothrud Police Station', number: '020-25391300' }
        ]
      }
    ]
  },
  {
    name: 'Delhi (UT)',
    womenHelpline: '1091',
    districts: [
      {
        name: 'New Delhi',
        controlRoomNumber: '011-23010100',
        policeStations: [
          { name: 'Connaught Place PS', number: '011-23351100' },
          { name: 'Parliament Street PS', number: '011-23361100' },
          { name: 'Mandir Marg PS', number: '011-23341100' }
        ]
      },
      {
        name: 'South Delhi',
        controlRoomNumber: '011-26231100',
        policeStations: [
          { name: 'Saket Police Station', number: '011-29531100' },
          { name: 'Hauz Khas PS', number: '011-26511100' }
        ]
      }
    ]
  },
  {
    name: 'Uttar Pradesh',
    womenHelpline: '1090',
    districts: [
      {
        name: 'Lucknow',
        controlRoomNumber: '0522-2200000',
        policeStations: [
          { name: 'Hazratganj Police Station', number: '0522-2200001' },
          { name: 'Gomti Nagar PS', number: '0522-2200002' }
        ]
      }
    ]
  },
  {
    name: 'Karnataka',
    womenHelpline: '181',
    districts: [
      {
        name: 'Bengaluru Urban',
        controlRoomNumber: '080-22942222',
        policeStations: [
          { name: 'Koramangala Police Station', number: '080-22942548' },
          { name: 'Indiranagar Police Station', number: '080-22942542' }
        ]
      }
    ]
  }
];
