import { useParams } from "react-router-dom";
import useGetAnApartment from "../../hooks/custom/getAnApartment";
import { useEffect, useState } from "react";
import Transition from "../complements/transition";
import TransitionPage from "../transitionPage/transitionPage";
import Header from "../header/header";
import Property from "./property";
import Error404 from "./error404";
import Footer from "../footer/footer";

function CardDetail() {
  const { id } = useParams();
  const { apartment } = useGetAnApartment(id);

  return (
    <>
      <TransitionPage />
      <Header />
      <Transition>
        {apartment.hasOwnProperty("data") ? (
          <Property apartment={apartment} />
        ) : (
          <Error404 />
        )}
        <Footer />
      </Transition>
    </>
  );
}

export default CardDetail;
