"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { FormData } from "@/@types/global";
import { resolver } from "@/utils/validationsForm";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers";

function ContactForm() {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const router = useRouter();
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    setTimeout(()=>{
      router.push("/success");
    },3000)
  });

  return (
    <form className={styles.container_form} onSubmit={onSubmit}>
      <label className={styles.input_label} htmlFor="">
        Full Name
      </label>
      <div className={styles.wrapper_input}>
        <input
          placeholder="Full Name"
          {...register("fullName")}
          className={styles.contact_input}
          type="text"
        />
        {errors?.fullName && (
          <div className={styles.error_container}>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <RiErrorWarningLine color="red" size={30} />
            </button>
            {showTooltip && (
              <span className={styles.tooltip}>{errors.fullName.message}</span>
            )}
          </div>
        )}
      </div>
      <label className={styles.input_label} htmlFor="">
        Email
      </label>
      <div className={styles.wrapper_input}>
        <input
          placeholder="Email"
          {...register("email")}
          className={styles.contact_input}
          type="text"
        />
        {errors?.email && (
          <div className={styles.error_container}>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <RiErrorWarningLine color="red" size={30} />
            </button>
            {showTooltip && (
              <span className={styles.tooltip}>{errors.email.message}</span>
            )}
          </div>
        )}
      </div>
      <label className={styles.input_label} htmlFor="">
        Message
      </label>
      <div className={styles.wrapper_input}>
        <textarea
          placeholder="Message"
          {...register("message")}
          className={styles.contact_text_input}
        ></textarea>
        {errors?.message && (
          <div className={styles.error_container}>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <RiErrorWarningLine color="red" size={30} />
            </button>
            {showTooltip && (
              <span className={styles.tooltip}>{errors.message.message}</span>
            )}
          </div>
        )}
      </div>
      <div className={styles.wrapper_input}>
        <input type="submit" value={"Send"} />
      </div>
    </form>
  );
}

export default ContactForm;
