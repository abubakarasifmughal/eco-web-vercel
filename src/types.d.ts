export interface IElement {
  ID: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  ElementType: string;
  ImagePage: string;
  TemplateName: string;
  PathAlias: string;
  // POPULATE THIS ONE
  PageElements: unknown[];
  ThemeID: number;
}

export interface ITheme {
  ID: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  Name: string;
  Elements: IElement[];
}

export interface PageElement {
  ID: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  SortIndex: number;
  PageID: number;
  ElementID: number;
  Element: IElement;
}

export interface IPage {
  ID: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  Name: string;
  Slug: string;
  Elements: PageElement[];
  StoreID: number;
}

export interface IStore {
  ID: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  Name: string;
  Category: string;
  Niche: string;
  Domain: string;
  UserID: number;
  Pages: IPage[];
}

export interface IUser {
  ID: number;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  DeletedAt?: Date;
  Email: string;
  Username: string;
  Password: string;
  FirstName: string;
  LastName?: string;
  Store: IStore;
}
