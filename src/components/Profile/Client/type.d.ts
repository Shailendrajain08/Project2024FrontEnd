import React from 'react';
import { UseFormRegister, UseFormSetValue, Control } from 'react-hook-form';
export interface IBasicInfo {
  firstName: string;
  lastName: string;
  username: string;
  company_email: string;
  phone: string | number;
  edit: EditI;
  handleEdit: (name: string) => void;
}

interface EditI {
  isEdit?: boolean;
}
export interface ICompanyDetail {
  company_name: string;
  company_website: string;
  linkedin_url?: string;
  logo?: string;
  edit: EditI;
  handleEdit: (name: string) => void;
}

export interface ICardContent {
  name: string | number;
  value: React.ReactNode;
  isBorder?: boolean;
  textAlign?: 'start' | 'center' | 'end';
}

export interface IAddress {
  title: string;
  address: AddressI;
  edit?: EditI;
  handleEdit?: (name: string) => void;
  isHide?: boolean;
  isGridEdit?: boolean;
  register: UseFormRegister<>;
}

export interface IDigitalPresence {
  linkedin: string;
  github: string;
  stackoverflow: string;
  edit: EditI;
  handleEdit: (name: string) => void;
}

export interface IMenuContent {
  [key: number]: React.ReactNode;
}

export interface IWalletBalance {
  wallet_balance: string | number;
}

export interface IBillingDetail {
  card_type: string;
  card_number: string | number;
  expiry_date: string | number;
  first_name: string;
  last_name: string;
  address: AddressI;
  documents: DocumentsI;
}

interface AddressI {
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  country?: string;
  zipcode?: string | number;
}

interface DocumentsI {
  unique_id_name: string;
  unique_id_file: any;
  tax_id: TaxIdI[];
}

interface TaxIdI {
  [key: string]: string;
}

export interface IPassword {
  setIsOpen: (value: boolean) => void;
}

export interface IChangePassword {
  setIsOpen?: (value: boolean) => void;
  register: UseFormRegister<>;
  control: Control;
  setValue: UseFormSetValue<>;
}
