export interface ApiResponse {
  cca2: string;
  area: number;
  continents: Continent[];
  flags: Flags;
  independent?: boolean;
  name: Name;
  population: number;
  region: Region;
  subregion?: string;
  unMember: boolean;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Flags {
  alt?: string;
  png: string;
  svg: string;
}
export interface Name {
  common: string;
  official: string;
}
export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}
