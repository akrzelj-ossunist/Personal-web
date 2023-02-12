import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import close from "@/public/close.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";

interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const ContactMeForm: React.FC<{ setShowContactMe: (val: boolean) => void }> = ({
  setShowContactMe,
}) => {
  const contactFormValues: IContactForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const contactFormSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Name is to short!")
      .max(20, "Name is to long!")
      .required("You must fill this field!"),
    lastName: yup
      .string()
      .min(2, "Last name is to short!")
      .max(20, "Last name is to long!")
      .required("You must fill this field!"),
    email: yup
      .string()
      .email("Invalid email!")
      .required("You must fill this field!"),
    phone: yup
      .string()
      .min(6, "Phone number is to short!")
      .max(15, "Phone number is to long!"),
    message: yup
      .string()
      .min(10, "Message is to short!")
      .max(200, "Message is to long!")
      .required("You must fill this field!"),
  });

  return (
    <>
      <Formik
        initialValues={contactFormValues}
        validationSchema={contactFormSchema}
        onSubmit={(values, actions) => {
          setShowContactMe(false);
          emailjs.send(
            "service_9v4xz0f",
            "template_h3d0fmh",
            {
              firstname: values.firstName,
              lastname: values.lastName,
              message: values.message,
              phone: values.phone,
              email: values.email,
            },
            "glpcVwatFmf_R2ebs"
          );
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="flex w-full justify-between items-center mb-10">
                <p className="text-3xl font-bold">Contact info</p>
                <Image
                  src={close}
                  alt="close"
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setShowContactMe(false)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-semibold text-gray-500">
                  First name
                </label>
                <Field
                  name="firstName"
                  className="my-1 border-[1px] border-gray-200 rounded-lg px-2 py-2 focus:outline-none"
                  placeholder="John"
                ></Field>
                {errors.firstName && touched.firstName && (
                  <label className="text-xs font-semibold text-red-500">
                    {errors.firstName}
                  </label>
                )}
              </div>
              <div className="flex flex-col w-full my-6">
                <label className="text-sm font-semibold text-gray-500">
                  Last name
                </label>
                <Field
                  name="lastName"
                  className="my-1 border-[1px] border-gray-200 rounded-lg px-2 py-2 focus:outline-none"
                  placeholder="Doe"
                ></Field>
                {errors.lastName && touched.lastName && (
                  <label className="text-xs font-semibold text-red-500">
                    {errors.lastName}
                  </label>
                )}
              </div>
              <div className="flex flex-col w-full mb-6">
                <label className="text-sm font-semibold text-gray-500">
                  E-mail
                </label>
                <Field
                  name="email"
                  type="email"
                  className="my-1 border-[1px] border-gray-200 rounded-lg px-2 py-2 focus:outline-none"
                  placeholder="john.doe@gmail.com"
                ></Field>
                {errors.email && touched.email && (
                  <label className="text-xs font-semibold text-red-500">
                    {errors.email}
                  </label>
                )}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center">
                  <label className="text-sm font-semibold text-gray-500">
                    Phone
                  </label>
                  <label className="text-xs font-medium ml-1 text-gray-400">
                    (optional)
                  </label>
                </div>
                <Field
                  name="phone"
                  className="my-1 border-[1px] border-gray-200 rounded-lg px-2 py-2 focus:outline-none"
                  placeholder="+385954325477"
                ></Field>
                {errors.phone && touched.phone && (
                  <label className="text-xs font-semibold text-red-500">
                    {errors.phone}
                  </label>
                )}
              </div>
              <div className="flex flex-col w-full my-6">
                <label className="text-sm font-semibold text-gray-500">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  className="my-1 border-[1px] border-gray-200 rounded-lg px-2 py-2 focus:outline-none"
                  placeholder="Write your message here"
                ></Field>
                {errors.message && touched.message && (
                  <label className="text-xs font-semibold text-red-500">
                    {errors.message}
                  </label>
                )}
              </div>
              <div>
                <button
                  className="px-6 py-2 rounded-lg bg-blue-500 text-white font-bold mr-4"
                  type="submit"
                >
                  Send
                </button>
                <button
                  type="button"
                  className="px-6 py-2 rounded-lg bg-gray-400 text-white font-bold mr-4"
                  onClick={() => setShowContactMe(false)}
                >
                  Cancel
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default ContactMeForm;
