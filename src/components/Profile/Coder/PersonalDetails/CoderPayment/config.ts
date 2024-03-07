interface IBank {
  id: string;
  name: string;
}

interface ITaxId {
  id: string;
  name: string;
}

interface ICountry {
  id: string;
  name: string;
}

interface IUniqueId {
  id: string;
  name: string;
}

export const banks: IBank[] = [
  { id: '1', name: 'Bank A' },
  { id: '2', name: 'Bank B' },
  { id: '3', name: 'Bank C' }
];
export const tax_id_options: ITaxId[] = [
  { id: '1', name: 'Pan Card' },
  { id: '2', name: 'ITIN' },
  { id: '3', name: 'EIN' }
];
export const countryOptions: ICountry[] = [
  { id: '1', name: 'USA' },
  { id: '2', name: 'ANYWHERE' }
];
export const unique_id_options: IUniqueId[] = [
  { id: '1', name: 'State identification (ID) card' },
  { id: '2', name: 'Driver license' },
  { id: '3', name: 'US passport or passport card' },
  { id: '4', name: 'US military card (front and back)' },
  { id: '5', name: `Military dependent's ID card (front and back)` },
  { id: '6', name: 'Permanent Resident Card' },
  { id: '7', name: 'Certificate of Citizenship' },
  { id: '8', name: 'Aadhaar' }
];
