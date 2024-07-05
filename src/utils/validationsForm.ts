import { Resolver } from "react-hook-form";
import { emailRegex } from './regexPatterns';
import { FormData, ErrorObject } from "@/@types/global";

export const resolver: Resolver<FormData> = async (values) => {
    const errors: Partial<Record<keyof FormData, ErrorObject>> = {};
  
    if (!values.fullName) {
      errors.fullName = {
        type: "required",
        message: "this field is required",
      };
    }
  
    if (!values.email) {
      errors.email = {
        type: "required",
        message: "this field is required",
      };
    }
    if (!values.message) {
      errors.message = {
        type: "required",
        message: "this field is required",
      };
    }

    //email validation
    if (values.email && !emailRegex.test(values.email)) {
      errors.email = {
        type: "pattern",
        message: "Please enter a valid email address",
      };
    }
  
    return { values, errors: errors as Record<keyof FormData, ErrorObject> };
  };