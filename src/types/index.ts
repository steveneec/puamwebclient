import { ReactElement } from "react";

export type userType = {
  _id?: string;
  firstname: string;
  secondname: string;
  firstlastname: string;
  secondlastname: string;
  dni: string;
  email: string;
  phone: string;
  type: string;
};

export type navOptionType = {
  label: string;
  action?: Function;
  icon?: ReactElement;
  path?: string;
};

export type selectOption = {
  text: string;
  value: string;
};
