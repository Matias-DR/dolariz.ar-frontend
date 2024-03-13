export enum Quotation {
  OFFICIAL = 1,
  BLUE = 2,
  MEP = 3,
  CCL = 4,
  LEDES = 5
}

export interface Dollar extends Record<string, number> {
  buying_price: number
  selling_price: number
  variation_buying_price: number
  variation_selling_price: number
}

export type Dollars = Record<Quotation, Dollar>

export type Historic = Dollar[]