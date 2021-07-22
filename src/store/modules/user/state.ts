import { Storage } from '@/utils/Storage'
import { ACCESS_TOKEN, CURRENT_USER } from '@/store/mutation-types'

export type IUserState = {
  token: string
  name: string
  welcome: string
  avatar: string
  roles: any[]
  info: any
}

export const state: IUserState = {
  token: Storage.get(ACCESS_TOKEN, ''),
  name: '',
  welcome: '',
  avatar: '',
  roles: [],
  info: Storage.get(CURRENT_USER, {})
}
