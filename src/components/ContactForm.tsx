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
      <p className="mb-10 flex min-h-[15rem] flex-col items-center justify-center gap-4 rounded-lg border-[1px] bg-white p-10 text-center">
        {`${t("home.form-thank")}`}
      </p>
    );
  } else {
    return (
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="mb-10 flex flex-col items-center justify-center gap-4 rounded-lg border-[1px] bg-white p-10 text-center"
      >
        <h2 className="text-3xl font-bold">{t("home.contact-me")}</h2>
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder={t("home.form-name")}
              className="w-full rounded-lg bg-gray-100 px-5 py-3"
              {...register("name", {
                required: `${t("home.form-error-name")}`,
              })}
            />
            <input
              type="email"
              placeholder={t("home.form-email")}
              className="w-full rounded-lg bg-gray-100 px-5 py-3"
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
            className="rounded-lg bg-gray-100 px-5 py-1"
            {...register("message", {
              required: `${t("home.form-error-message")}`,
            })}
          />
        </div>

        <button className="w-full rounded-lg border-2 px-2 py-3 text-xl font-bold transition-all hover:bg-white hover:text-black">
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
