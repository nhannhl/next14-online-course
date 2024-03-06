
import GlobalApi from '../../../_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanner() {
  const [sideBannerList, setSideBannerList] = useState([]);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then(res => setSideBannerList(res?.sideBanners));
  }

  useEffect(() => {
    getSideBanners();
  }, []);
  
  return (
    <div>
      {sideBannerList.map((item, index) => (
        <div key={index} className='p-5 bg-white rounded-xl mb-3'>
          <Image src={item?.banner?.url} width={500} height={300} className='rounded-xl cursor-pointer' onClick={() => window.open(item.url)}/>
        </div>
      ))}
    </div>
  )
}

export default SideBanner