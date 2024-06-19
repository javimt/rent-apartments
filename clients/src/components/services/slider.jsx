import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useGetApartments from '../../hooks/custom/GetApartments';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Slider() {
  const { getapartmentsToSlider } = useGetApartments();
  const [slider, setSlider] = useState([])

  useEffect(() => {
    getapartmentsToSlider()
      .then((response) => setSlider(response))
  }, [])
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={20}
      freeMode={true}
      navigation
      pagination={{ clickable: true }}

      autoplay={{ delay: 2000 }} // Ajusta el valor de delay según tus necesidades
      modules={[Navigation, Scrollbar, Autoplay]} // Agregar Autoplay al array de módulos
      className="h-[240px] md:h-[380px] w-[380px] md:w-[700px] "
      grabCursor
    >
      {slider &&
        slider.map(({ images, id }) => (
          <SwiperSlide className='w-100' key={id}>
            <Link to={`/apartment/${id}`} >
              <img src={`${images && images[0]}`} className="w-[100%] h-[90%] rounded-xl bg- bg-center object-cover" alt="furnished, amoblados, apartments, apartamentos, alquiler, rent" />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Slider;