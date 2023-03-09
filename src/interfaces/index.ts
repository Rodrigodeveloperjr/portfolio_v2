import { IconType } from "react-icons/lib";

export interface ITitle {
  title: string;
}

export interface IStack {
  icon: IconType;
  title: string;
}

export interface IProject {
  src: string;
  alt: string;
  title: string;
  linkGitHub: string;
  linkSite: string;
}

export interface IJob {
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
}

export interface IDescription {
  description: string;
}

export interface IContactLink {
  icon: string;
  title: string;
  href: string;
}

export interface ICompletionDate {
  date: string;
}

export interface ICompanysImage {
  icon: string;
  srcCompany: string;
  altCompany: string;
}

export interface ICertification {
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface ICardService {
  title: string;
  description: string;
}

export interface IButtonLink {
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  size: "default" | "small";
  color: "black" | "purple";
}

export interface IButtonCopy {
  link: string;
}
