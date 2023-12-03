<template>
  <div>
    <CustomNavbar></CustomNavbar>

    <!-- 滚动容器 -->
    <scroll-view scroll-y refresher-enabled="istig" @refresherrefresh="onrefresherrefresh" @scrolltolower="onScrolltolower">
      <pageSkeleton v-if="isloading"> </pageSkeleton>

      <template v-else>
        <!-- 轮播图 -->
        <XtxSwiper :bannerlist="bannerlist"></XtxSwiper>
        <!-- 分类 -->
        <CategoryPanel :categorylist="categorylist"></CategoryPanel>
        <!-- 热门推荐 -->
        <HotPanel :hotlist="hotlist"></HotPanel>
        <!-- 猜你喜欢 -->
        <XtxGuess ref="guessRef" />
      </template>
    </scroll-view>
  </div>
</template>

<script setup lang="ts">
import CustomNavbar from './components/customNavbar.vue'
import XtxSwiper from '../../components/XtxSwiper.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '../../components/XtxGuess.vue'
import pageSkeleton from './components/pageSkeleton.vue'

import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getHomebannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '../types/home'
import type { XtxGuessInstance } from '../types/components.d.ts'

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

// // 滚动触底事件
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  console.log('滚动到底啦')

  guessRef.value?.getGuessLikelist()
}

// 下拉刷新
const istig = ref(false)
const onrefresherrefresh = async () => {
  console.log('下拉了')
  // 开启动画
  istig.value = true
  // 重置猜你喜欢的数据
  guessRef.value?.resetdata()
  // 等待三个请求同时加载数据
  await Promise.all([getbannerlist(), getCategorylist(), gethotlist(), guessRef.value?.getGuessLikelist()])
  // 关闭动画
  istig.value = false
}

// 页面加载中
const isloading=ref(false)

onLoad(async() => {
  isloading.value= true
  await Promise.all([ getbannerlist(), getCategorylist(),  gethotlist()])
  isloading.value=false
})
</script>

<style scoped lang="scss">
page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}
scroll-view {
  width: 100%;
  flex: 1;
  height: calc(100vh - var(--window-top));
  // height: 100%;
}
</style>
