// src/services/category.ts
import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/sort'
import type { GoodsResult } from '@/types/goods'

/**
 * 分类列表-小程序
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top'
  })
}

// 商品详情
export const getgoodsbidAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id }
  })
}
