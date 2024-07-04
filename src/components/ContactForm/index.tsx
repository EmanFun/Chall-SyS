"use client";
import React from "react";
import styles from "./styles.module.css";
import { useForm, Resolver } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

const resolver: Resolver<FormData> = () => {};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  return (
    <form className={styles.container_from} action="">
      <div className={styles.wrapper_input}>
        <label className={styles.input_label} htmlFor="">
          Full Name
        </label>
        <input
          {...register("fullName")}
          className={styles.contact_input}
          type="text"
        />
        {errors?.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div className={styles.wrapper_input}>
        <label className={styles.input_label} htmlFor="">
          Email
        </label>
        <input
          {...register("email")}
          className={styles.contact_input}
          type="text"
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <div className={styles.wrapper_input}>
        <label className={styles.input_label} htmlFor="">
          Message
        </label>
        <textarea
          {...register("message")}
          className={styles.contact_text_input}
          name=""
          id=""
        ></textarea>
        {errors?.message && <p>{errors.message.message}</p>}
      </div>
    </form>
  );
}

export default ContactForm;
