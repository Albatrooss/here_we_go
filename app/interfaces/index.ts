// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface Message {
  message_id: number
  text: string
  created_at: string
  updated_at: string
}

export interface MyResponse {
  success: boolean
  msg: string
  data: any
}