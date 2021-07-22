import { ILockscreenState } from './state'
import { IS_LOCKSCREEN } from '@/store/mutation-types'
import { Storage } from '@/utils/Storage'

// 长时间不操作默认锁屏时间
const initTime = 60 * 60

export const mutations = {
  setLock: (state: ILockscreenState, payload) => {
    state.isLock = payload
    Storage.set(IS_LOCKSCREEN, state.isLock)
  },
  setLockTime: (state: ILockscreenState, payload = initTime) => {
    state.lockTime = payload
  }
}
