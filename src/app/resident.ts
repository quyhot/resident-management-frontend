export interface Resident {
  avatar?: string
  name?: string
  dob?: number
  gender?: number
  identityNumber?: string
  email?: string
  address?: string
  phone?: string
}

export interface responseGet {
  perPage?: number,
  skip?: number,
  sort?: object,
  total?: number,
  page?: number,
  data?: Resident[],
}
