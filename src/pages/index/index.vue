<template>
  <div>
    <CustomNavbar></CustomNavbar>
    <!-- 轮播图 -->
    <XtxSwiper :bannerlist="bannerlist"></XtxSwiper>
  </div>
</template>

<script setup lang="ts">
import CustomNavbar from './components/customNavbar.vue'
import XtxSwiper from './components/XtxSwiper.vue'
import {  onLoad} from '@dcloudio/uni-app'
import { ref } from 'vue'
import {  getHomebannerAPI } from '@/services/home'
import type{ BannerItem } from '../types/home'

const bannerlist=ref<BannerItem[]>([])
const getbannerlist=async()=>{
  const res=await getHomebannerAPI()
  console.log(res);
  bannerlist.value=res.result
}

onLoad(()=> {
  getbannerlist()
})
</script>

<style scoped lang="scss"></style>
