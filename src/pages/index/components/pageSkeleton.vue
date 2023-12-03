
<template name="skeleton">
 
        <view is="components/XtxSwiper" class="data-v-83a5a03c">
          <view class="carousel XtxSwiper--carousel">
            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
              <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                  <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                </navigator>
              </swiper-item>
            </swiper>
            <view class="indicator XtxSwiper--indicator">
              <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
              <text class="dot XtxSwiper--dot"></text>
              <text class="dot XtxSwiper--dot"></text>
              <text class="dot XtxSwiper--dot"></text>
              <text class="dot XtxSwiper--dot"></text>
            </view>
          </view>
        </view>
        <view is="pages/index/components/CategoryPanel" class="data-v-83a5a03c">
          <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-369 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-369 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-835 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-461 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-991 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-149 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-585 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-824 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-684 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
              <image class="icon CategoryPanel--icon sk-image"></image>
              <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-66 sk-text">品牌</text>
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/HotPanel" class="data-v-83a5a03c">
          <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-830 sk-text">特惠推荐</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-497 sk-text">精选全攻略</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-767 sk-text">爆款推荐</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-120 sk-text">最受欢迎</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-401 sk-text">一站买全</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-784 sk-text">精心优选</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-915 sk-text">新鲜好物</text>
                <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-558 sk-text">生活加分项</text>
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
              </navigator>
            </view>
          </view>
        </view>
     

</template>