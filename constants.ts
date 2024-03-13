// Front URL
export const FRONT_HOST = process.env.FRONT_HOST as string
export const FRONT_PORT = process.env.FRONT_PORT as string
export const FRONT_BASE_URL = `${FRONT_HOST}:${FRONT_PORT}/`

// Back URL
export const BACK_HOST = process.env.BACK_HOST as string
export const BACK_PORT = process.env.BACK_PORT as string
export const BACK_BASE_URL = `${BACK_HOST}:${BACK_PORT}/api/`

// Single quotations
export const OFFICIAL_DOLLAR_QUOTATION = Number(process.env.OFFICIAL_DOLLAR_QUOTATION)
export const BLUE_DOLLAR_QUOTATION = Number(process.env.BLUE_DOLLAR_QUOTATION)
export const MEP_DOLLAR_QUOTATION = Number(process.env.MEP_DOLLAR_QUOTATION)
export const CCL_DOLLAR_QUOTATION = Number(process.env.CCL_DOLLAR_QUOTATION)
export const LEDES_DOLLAR_QUOTATION = Number(process.env.LEDES_DOLLAR_QUOTATION)

// Multiple quotations
export const QUOTATIONS = [
  OFFICIAL_DOLLAR_QUOTATION,
  BLUE_DOLLAR_QUOTATION,
  MEP_DOLLAR_QUOTATION,
  CCL_DOLLAR_QUOTATION,
  LEDES_DOLLAR_QUOTATION
]
