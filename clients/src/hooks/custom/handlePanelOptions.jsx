import { useState } from "react";
import CreateApartSect from "../../components/admin/createApartment/createApartmentSection";
import ListApartmentSection from "../../components/admin/listtApartmentSection/listApartmentSection";

const optionTypes = {
  CREATE_SECTION: "CREATE_SECTION",
  GET_APARTMENTS_SECTION: "GET_APARTMENTS_SECTION",
  GET_USERS_SECTION: "GET_USERS_SECTION",
};

function useHandlePanelOptions() {
  const [section, setSection] = useState(<CreateApartSect />);

  function handleOptions(option) {
    switch (option) {
      case optionTypes.CREATE_SECTION:
        setSection(<CreateApartSect />);
        break;
      case optionTypes.GET_APARTMENTS_SECTION:
        setSection(<ListApartmentSection />);
        break;
      case optionTypes.GET_USERS_SECTION:
        setSection(<CreateApartSect />);
        break;
      default:
        break;
    }
  }
  return {
    section,
    handleOptions,
  };
}

export default useHandlePanelOptions;
