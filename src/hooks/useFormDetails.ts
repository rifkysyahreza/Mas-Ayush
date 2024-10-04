import { useEffect, useState } from "react";
import axios from "axios";
import { contactForm } from "../types/contactForm";

const useFormDetails = () => {
  const [message, setMessage] = useState<contactForm[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/contacts-form-data"
        );

        setMessage(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [message]);

  return { message };
};

export default useFormDetails;
