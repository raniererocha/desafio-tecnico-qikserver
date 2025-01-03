
export interface VenueResponse {
    id: number;
    name: string;
    internalName: string;
    description: string | null;
    liveFlag: number;
    demoFlag: number;
    address1: string;
    address2: string;
    address3: string | null;
    city: string;
    county: string;
    postcode: string;
    country: string;
    timezoneOffset: string;
    locale: string;
    timeZone: string;
    webSettings: WebSettings;
    ccy: string;
    ccySymbol: string;
    currency: string;
  }
  
  export interface WebSettings {
    id: number;
    venueId: number;
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
  }

  export interface MenuInterface {
    id: number;
    name: string;
    type: string;
    collapse: number;
    sections: Section[];
  }
  
  export interface Section {
    id: number;
    name: string;
    description: string | null;
    position: number;
    visible: number;
    images: Image[];
    items: MenuItem[];
  }
  
  export interface Image {
    id: number;
    image: string;
  }
  
  export interface MenuItem {
    id: number;
    name: string;
    description: string;
    alcoholic: number;
    price: number;
    position: number;
    visible: number;
    availabilityType: string;
    sku: string;
    images: Image[];
    modifiers?: Modifier[];
    available: boolean;
  }
  
  export interface Modifier {
    id: number;
    name: string;
    minChoices: number;
    maxChoices: number;
    items: ModifierItem[];
  }
  
  export interface ModifierItem {
    id: number;
    name: string;
    price: number;
    maxChoices: number;
    position: number;
    visible: number;
    availabilityType: string;
    qty?: number;
    available: boolean;
  }