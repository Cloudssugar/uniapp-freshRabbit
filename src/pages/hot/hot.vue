// /src/pages/hot/hot.vue
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

import { getHotRecommendAPI } from '../../services/hot'
import type { SubTypeItem } from '../types/hot'

// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' }
]

// uniapp获取页面参数
const query = defineProps<{
  type: string
}>()
console.log(query)

const curUrlMap = hotMap.find((v) => v.type === query.type)

// 封面图
const bannerPicture = ref('')
// 推荐选项列表
const subTypes = ref<(SubTypeItem & { finish?: boolean })[]>([])
// 高亮
const acindex = ref(0)

// 获取热门推荐数据
const githotlist = async () => {
  let res = await getHotRecommendAPI(curUrlMap!.url, {
    // 技巧：环境变量，开发环境，修改初始页面方便测试分页结束
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10
  })
  console.log(res.result)
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes
}

// 动态设置标题
uni.setNavigationBarTitle({ title: curUrlMap!.title })

const tab = (index: number) => {
  console.log(index)
  acindex.value = index
}

// 滚动触底
const onscrolltolower = async () => {
  console.log('滚动到底啦')
  // 获取当前选项
  const currsubTypes = subTypes.value[acindex.value]
  // 分页条件
  if (currsubTypes.goodsItems.page < currsubTypes.goodsItems.page) {
    // 页码累加
    currsubTypes.goodsItems.page++
  } else {
    //
    currsubTypes.finish = true
    // 列表到底提示
    return uni.showToast({ icon: 'none', title: '没有跟多啦' })
  }

  //
  let res = await getHotRecommendAPI(curUrlMap!.url, {
    subType: currsubTypes.id,
    page: currsubTypes.goodsItems.page,
    pageSize: currsubTypes.goodsItems.pageSize
  })
  console.log(res)

  // 新的列表选项
  const newsubTypes = res.result.subTypes[acindex.value]
  //  数组追加
  currsubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items)
}

onLoad(() => {
  githotlist()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text v-for="(item, index) in subTypes" :key="item.id" :class="{ active: index === acindex }" @tap="tab(index)">{{ item.title }}</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view @scrolltolower="onscrolltolower" scroll-y class="scroll-view" v-for="(item, index) in subTypes" :key="item.id" v-show="acindex == index">
      <view class="goods">
        <navigator hover-class="none" class="navigator" v-for="goods in item.goodsItems.items" :key="goods.id" :url="`/pages/goods/goods?id=${goods.id}`">
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '没有更多数据了' : '正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
  height: 100%;
  display: flex;
  flex-direction: column;
}

scroll-view {
  width: 100%;
  flex: 1;
  height: calc(100vh - var(--window-top));
  // height: 100%;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 100%;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  image {
    width: 100%;
    height: 225rpx;
  }
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 315rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
