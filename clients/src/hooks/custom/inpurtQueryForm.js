import { useEffect, useState } from "react";
import useAuth0GetData from "./auth0getinData";
import useWhatsapp from "./whatsappTemplate";

function useInputQuery() {
  const { controledUser } = useAuth0GetData();
  const [errors, setError] = useState({
    blocked: true,
  });
  const [input, setInput] = useState({
    name: "",
    email: "",
    consult: "",
    startDate: "",
    endDate: "",
    id: "",
  });
  function setId(id) {
    setInput({ ...input, id: id });
  }

  const { link } = useWhatsapp(input, errors);

  function validate(input) {
    const error = {
      blocked: false,
    };
    function handleError(errorName, message) {
      error[errorName] = { message };
    }

    if (!input.name) handleError("name", "expected a name");
    if (!input.email) handleError("email", "expected a email");
    if (!input.startDate) handleError("startDate", "expected a start date");
    if (!input.endDate) handleError("endDate", "expected a end date");
    if (!input.consult) handleError("consult", "expected a consult");
    setError(error);
  }

  useEffect(() => {
    setInput({
      ...input,
      name: controledUser.name,
      email: controledUser.email,
    });
  }, [controledUser]);

  function handleInput(e) {
    const event = e.target;
    validate({
      ...input,
      [event.name]: event.value,
    });

    setInput(
      (prev) =>
        (prev = {
          ...input,
          [event.name]: event.value,
        })
    );
  }

  function submitWap() {
    if (Object.keys(errors).length == 1 && !errors.blocked) {
      alert("sera redirigido a whats app");
      window.location.href = link;
    } else {
      alert("faltan campos");
    }
  }

  return {
    input,
    handleInput,
    errors,
    link,
    submitWap,
    setId,
  };
}

export default useInputQuery;
