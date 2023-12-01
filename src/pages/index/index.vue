<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <!-- 轮播图 -->
    <XtxSwiper :bannerlist="bannerlist"></XtxSwiper>
    <!-- 分类 -->
    <CategoryPanel :categorylist="categorylist"></CategoryPanel>
    <!-- 热门推荐 -->
    <HotPanel :hotlist="hotlist" ></HotPanel>

    <!-- 滚动容器 -->
    <scroll-view scroll-y @scrolltolower="onScrolltolower">
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" :GuessLikelist="GuessLikelist"/>
    </scroll-view>
  </div>
</template>

<script setup lang="ts">
import CustomNavbar from './components/customNavbar.vue'
import XtxSwiper from '../../components/XtxSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '../../components/XtxGuess.vue'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getHomebannerAPI, getHomeCategoryAPI, getHomeHotAPI, getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem,GuessItem } from '../types/home'

// 轮播图
const bannerlist = ref<BannerItem[]>([])
const getbannerlist = async () => {
  const res = await getHomebannerAPI()
  console.log(res)
  bannerlist.value = res.result
}

// 分类
const categorylist = ref<CategoryItem[]>([])
const getCategorylist = async () => {
  const res = await getHomeCategoryAPI()
  console.log(res)
  categorylist.value = res.result
}

// 热门推荐
const hotlist = ref<HotItem[]>([])
const gethotlist = async () => {
  const res = await getHomeHotAPI()
  console.log(res)
  hotlist.value = res.result
}

// 猜你喜欢
const GuessLikelist = ref<GuessItem[]>([])
const getGuessLikelist = async () => {
  const res = await getHomeGoodsGuessLikeAPI()
  console.log(res)
  GuessLikelist.value = res.result.items
}

// // 滚动触底事件
// const onScrolltolower = () => {
//   guessRef.value?.getMore()
// }

onLoad(() => {
  getbannerlist()
  getCategorylist()
  gethotlist()
  getGuessLikelist()
})
</script>

<style scoped lang="scss"></style>
