import { Box, Flex, Grid } from '@chakra-ui/react'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';

// import '../../assets/css/swiperstyle.css';

// import required modules
// import { EffectCube, Pagination } from 'swiper/modules';

const MarketPlace = () => {

    return (
        <>
            <Grid templateColumns='repeat(3, 1fr)' display={{ base: 'block', xl: 'grid' }} gap={6}>
                <Flex>
                    {/* <Box w='100%' h='10' bg='blue.500'>
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                            }}
                            pagination={true}
                            modules={[EffectCube, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </Box> */}
                    <Box w='100%' h='10' bg='blue.500'></Box>
                    <Box w='100%' h='10' bg='blue.500'></Box>
                </Flex>
                <Flex>
                    <Box w='100%' h='10' bg='blue.500' /> 
                    <Box w='100%' h='10' bg='blue.500' /> 
                </Flex>
            </Grid>
        </>
    )
}

export default MarketPlace
