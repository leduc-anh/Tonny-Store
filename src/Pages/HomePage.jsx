import React from 'react'
import AppLayOut from '../components/DefaultLayout'
import AutoSlider from '../components/AutoSlider'
import InformationCard from '../components/InformationCard'
import { cn } from '../lib/utils'
import HomePageCard from '../components/HomePageCard'
function HomePage() {
  return (
    <AppLayOut>
      <section>
        <AutoSlider />
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 px-20 py-10")}>
          <InformationCard
            imageSrc="\images\icons_item_1_ic.webp"
              text="Miễn phí vận chuyển"
            text2="Miễn phí giao các đơn hàng từ 500,000đ"
            className={cn("flex items-center")}
          />
          
          <InformationCard
            imageSrc="\images\icons_item_2_ic.webp"
            text="Đổi trả trong 7 ngày"
            text2="Hỗ trợ đổi trả khi sản phẩm bị lỗi kỹ thuật"
            className={cn("flex  items-center")}
          />
          <InformationCard
            imageSrc="\images\icons_item_3_ic.webp"
            text="Tư vấn miễn phí"
            text2="Hỗ trợ khách hàng 24/7"
            className={cn("flex items-center")}
          />
        </div>
        <HomePageCard />
      </section>
    </AppLayOut>
  )
}

export default HomePage