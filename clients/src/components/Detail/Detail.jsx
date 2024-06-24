import { useParams } from "react-router-dom";
import useGetAnApartment from "../../hooks/custom/getAnApartment";
import { useEffect, useState } from "react";
import Transition from "../complements/transition";
import TransitionPage from "../transitionPage/transitionPage";
import Header from "../header/header";
import Property from "./property";
import Error404 from "./error404";
import Footer from "../footer/footer";
import { scrollTop } from "../../utils/scrollTop";

function CardDetail() {
  const { id } = useParams();
  const { getApartment } = useGetAnApartment();
  const [apartment, setApartment] = useState(null)

 
  console.log("🚀 ~ CardDetail ~ apartment:", apartment)

  useEffect(() => {
    scrollTop()
    getApartment(id)
      .then(apart => setApartment(apart))
      .then(()=> console.log(apartment))
  }, [])

  return (
    <>
      <TransitionPage />
      <Header main={false} />
      <Transition>
        {
          apartment &&
          <Property apartment={apartment} />
        }

        <Footer />
      </Transition>
    </>
  );
}

export default CardDetail;
