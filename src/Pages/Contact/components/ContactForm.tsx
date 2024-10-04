import { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { contactForm } from "../../../types/contactForm";

const ContactForm: FC = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const formValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleAddForm = async (
    values: contactForm,
    formikHelpers: FormikHelpers<contactForm>
  ) => {
    const { status } = await axios.post(
      "http://localhost:3000/contacts-form-data",
      values
    );

    if (status !== 201) {
      console.error("Error in adding data");
    }

    if (status === 201) {
      formikHelpers.resetForm();
    }
  };

  return (
    <div>
      <Formik
        validationSchema={formValidationSchema}
        initialValues={initialValues}
        onSubmit={handleAddForm}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-8 pb-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold">
                Name
              </label>
              <Field name="name" type="name" placeholder="James Robert"></Field>
              {touched.name && errors.name && (
                <span className="text-sm text-red-700">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="ayush.barnwal@brightscout.com"
              ></Field>
              {touched.email && errors.email && (
                <span className="text-sm text-red-700">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="font-bold">
                Subject
              </label>
              <Field
                name="subject"
                placeholder="For web design work Enquire"
              ></Field>
              {touched.subject && errors.subject && (
                <span className="text-sm text-red-700">{errors.subject}</span>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-bold">
                Message
              </label>
              <Field
                name="message"
                as="textarea"
                placeholder="Type your Message"
              ></Field>
              {touched.message && errors.message && (
                <span className="text-sm text-red-700">{errors.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="px-16 py-6 bg-black rounded-full text-[#F4F7FA] font-medium text-lg"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
