import React, { useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import Contacllogs from "../component/Contacllogs";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";

export default function Contact() {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const FormError = {};

    if (!formData.fullName.trim() && !formData.fullName.trim() < 3) {
      FormError.fullName = "Please name must have atleast 4 character";
    }

    if (!formData.email.includes("@") && !formData.email.includes(".com")) {
      FormError.email = "incorrect Email address";
    }

    if (!formData.subject.trim < 10) {
      FormError.subject = "Subject must have atleast 10 characters";
    }

    if (!formData.message.trim < 20) {
      FormError.message = "message must be long please";
    }

    if (Object.keys(FormError).length > 0) {
      setError(FormError);
    } else {
      alert("message sent successfully");

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }

    console.log(formData);
  };

  return (
    <div className="flex gap-[130px] ml-[10%] mt-[100px] mb-[200px] max-sm:mb-[30px] max-sm:flex-col max-sm:gap-[70px] ">
      <div>
        <h2 className="text-primary-color-500 font-bold text-xl mb-7 ">
          Contact Us
        </h2>
        <h1 className="text-4xl text-black font-bold mb-9 max-sm:text-2xl max-md:text-xl">
          Say Hello
        </h1>
        <Contacllogs
          title={"Address"}
          location={"Location KG 9 Ave, Kigali"}
          icon={<ImLocation2 />}
        />
        <Contacllogs
          title={"Email"}
          location={"businesscafe@info.com"}
          icon={<MdOutlineMail />}
        />
        <Contacllogs
          title={"Phone"}
          location={"+250788183828"}
          icon={<MdOutlineWifiCalling3 />}
        />
      </div>

      <div className="">
        <h2 className="text-primary-color-500 font-bold text-xl mb-5">
          Have Question ?
        </h2>
        <h1 className="text-4xl text-black font-bold mb-9 max-md:text-xl">
          Send a Message
        </h1>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder={"full name"}
            value={formData.fullName}
            name={"fullName"}
            onChange={handleChange}
            variant={error.fullName ? "danger" : "default"}
          />
          {error.fullName && (
            <span className="text-red-400">{error.fullName}</span>
          )}
          <Input
            placeholder={"Email"}
            value={formData.email}
            name={"email"}
            onChange={handleChange}
            variant={error.email ? "danger" : "default"}
          />

          {error.email && <span className="text-red-400">{error.email}</span>}
          <Input
            placeholder={"subject"}
            value={formData.subject}
            name={"subject"}
            onChange={handleChange}
            variant={error.subject ? "danger" : "default"}
          />
          {error.subject && (
            <span className="text-red-400">{error.subject}</span>
          )}
          <Input
            placeholder={"Your Message"}
            className={`h-[130px] pt-2`}
            value={formData.message}
            name={"message"}
            onChange={handleChange}
            variant={error.subject ? "danger" : "default"}
          />
          {error.subject && (
            <span className="text-red-400 block">{error.message}</span>
          )}

          <Button label={"Send Message"} type="submit" />
        </form>
      </div>
    </div>
  );
}
