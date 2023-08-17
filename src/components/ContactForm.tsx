import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as emailjs from "@emailjs/browser";

// Add your emailjs configuration
const EMAILJS_PUBLIC_KEY = "jOdtogFBAAzKkhV3O";
const EMAILJS_SERVICE_ID = "portfolio_contact_1";
const EMAILJS_TEMPLATE_ID = "portfolio_message";

export default function ContactForm() {
  const [t] = useTranslation("global");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = async () => {
    if (isValid) {
      try {
        const form = document.getElementById("contact-form");
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form as HTMLFormElement,
          EMAILJS_PUBLIC_KEY
        );
        setSubscribed(true);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  if (subscribed) {
    return (
      <p className="mb-10 min-h-[15rem] flex flex-col justify-center items-center text-center gap-4 py-10 px-10 border-[1px] rounded-lg bg-white">
        {`${t("home.form-thank")}`}
      </p>
    );
  } else {
    return (
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 flex flex-col justify-center items-center text-center gap-4 py-10 px-10 border-[1px] rounded-lg bg-white"
      >
        <h2 className="text-3xl font-bold">{t("home.contact-me")}</h2>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder={t("home.form-name")}
              className="bg-gray-100 rounded-lg px-5 py-3 w-full"
              {...register("name", {
                required: `${t("home.form-error-name")}`,
              })}
            />
            <input
              type="email"
              placeholder={t("home.form-email")}
              className="bg-gray-100 rounded-lg px-5 py-3 w-full"
              {...register("email", {
                required: `${t("home.form-error-email-required")}`,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: `${t("home.form-error-email-invalid")}`,
                },
              })}
            />
          </div>

          <textarea
            rows={4}
            placeholder={t("home.form-message")}
            className="bg-gray-100 rounded-lg px-5 py-1"
            {...register("message", {
              required: `${t("home.form-error-message")}`,
            })}
          />
        </div>

        <button className="text-xl border-2 px-2 py-3 w-full font-bold rounded-lg hover:text-black hover:bg-white transition-all">
          {t("home.form-submit")}
        </button>

        {/* Render error messages */}

        {errors.name && (
          <p className="text-red-600">{errors.name.message?.toString()}</p>
        )}
        {errors.email && (
          <p className="text-red-600">{errors.email.message?.toString()}</p>
        )}
        {errors.message && (
          <p className="text-red-600">{errors.message.message?.toString()}</p>
        )}
      </form>
    );
  }
}
