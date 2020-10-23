import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Thumbnail from '../../components/Thumbnail';
import { Container } from './styles';
import 'swiper/swiper.scss';
import background from '../../assets/invitations/aniversarioastronauta/aniversarioastronauta.png'

function CategoryList() {
  return (
    <Container>
        <h2>Categoria</h2>

        <Swiper slidesPerView={6}>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
            <SwiperSlide><Thumbnail img={background} label="Astronauta"/></SwiperSlide>
        </Swiper>
    </Container>
  );
}

export default CategoryList;