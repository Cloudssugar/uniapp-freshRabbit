import type { BannerItem } from '@/pages/types/home'
import { http } from '@/utils/http'

// 轮播图 1我首页的默认值
export const getHomebannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}
