export const TABLE_PAINTING = 'Paintings';

export interface Small {
  url: string;
  width: number;
  height: number;
}

export interface Large {
  url: string;
  width: number;
  height: number;
}

export interface Full {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  small: Small;
  large: Large;
  full: Full;
}

export interface Picture {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

export interface Fields {
  ID: number;
  RecordID: string;
}

export interface AirtableRecord {
  id: string;
  fields: any;
  createdTime: Date;
}

export interface Paintings {
  records: AirtableRecord[];
}
