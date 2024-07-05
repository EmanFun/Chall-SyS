"use client";
import React from "react";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { FormData } from "@/@types/global";
import { resolver } from "@/utils/validationsForm";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className={styles.container_from} onSubmit={onSubmit}>
      <div className={styles.wrapper_input}>
        <label className={styles.input_label} htmlFor="">
          Full Name
        </label>
        <input
        placeholder="Full Name"
          {...register("fullName")}
          className={styles.contact_input}
          type="text"
        />
        {errors?.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
      </div>
      <div className={styles.wrapper_input}>
        <label className={styles.input_label} htmlFor="">
          Email
        </label>
        <input
        placeholder="Email"
          {...register("email")}
          className={styles.contact_input}
          type="text"
        />
        {errors?.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className={styles.wrapper_input}>
        <label className={styles.input_label} htmlFor="">
          Message
        </label>
        <textarea
        placeholder="Message"
          {...register("message")}
          className={styles.contact_text_input}
        ></textarea>
        {errors?.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>
      <div className={styles.wrapper_input}>
        <input type="submit" />
      </div>
    </form>
  );
}

export default ContactForm;
