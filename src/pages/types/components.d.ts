// src/types/components.d.ts
// 全局组件类型
import XtxSwiper from './XtxSwiper.vue'
import XtxGuess from './XtxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess:typeof XtxGuess
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>
