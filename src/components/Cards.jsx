import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Cards() {

    const reviews = [{
        "id": 1,
        "username": "WildExplorer123",
        "rating": 5,
        "comment": "Absolutely loved my visit! The zoo is well-maintained, and the animals seem happy and healthy. The staff were also very knowledgeable and friendly. Will definitely be coming back!",
        "date": "2022-05-15"
    },
    {
        "id": 2,
        "username": "NatureLover456",
        "rating": 4,
        "comment": "Had a great time exploring the zoo with my family. The variety of animals and exhibits was impressive. However, some areas were a bit crowded during peak hours.",
        "date": "2022-06-10"
    },
    {
        "id": 3,
        "username": "AnimalFanatic789",
        "rating": 3,
        "comment": "The zoo has potential, but it felt a bit outdated compared to others I've visited. Some enclosures could use improvements for the animals' well-being. Nonetheless, it was an enjoyable experience overall.",
        "date": "2022-07-20"
    },
    {
        "id": 4,
        "username": "ZooEnthusiast101",
        "rating": 5,
        "comment": "The zoo exceeded my expectations! The animal exhibits were fascinating, and I appreciated the conservation efforts highlighted throughout the park. The guided tours were informative, and I learned a lot about the wildlife. Highly recommended!",
        "date": "2022-08-05"
    },
    {
        "id": 5,
        "username": "FamilyAdventures",
        "rating": 4,
        "comment": "Visited the zoo with my kids, and they had a blast! The interactive exhibits and animal feedings were a hit. The zoo staff were attentive and ensured a safe and enjoyable experience for all visitors. Will definitely return for more family fun!",
        "date": "2022-09-12"
    }]

    return (
        <div className='bg-zinc-900 p-20'>
                <div className='border-t-[1px] border-t-zinc-600 p-10'></div>
                <div className='text-7xl font-mono text-white tracking-tighter mb-10'>Reviews</div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true , dynamicBullets: true}}
                    loop={true}
                >
                    {reviews.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className='w-full h-80 bg-zinc-400 text-black flex flex-col p-4 gap-2 rounded-2xl shadow-black shadow-lg'>
                                <div className='relative flex justify-between'>
                                    <div className='text-3xl font-bold'>{item.username}</div>
                                    <div className="font-semibold">{item.date}</div>
                                </div>
                                <div className='text-xl'>
                                    {item.comment}
                                </div>
                                <div className='bottom-0 absolute m-4 font-semibold'>{item.rating} Star</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    )
}

export default Cards