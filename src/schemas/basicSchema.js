import * as yup from "yup";

const basicSchema = yup.object().shape({
  userName: yup
    .string("This field accept only letters")
    .required("This field is required")
    .min(2, "Username too short")
    .max(15, "Username too long"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password too short")
    .matches(/[a-z]+/, "Must have one lowercase character")
    .matches(/[A-Z]+/, "Must have one uppercase character")
    .matches(/[@$!%*#?&]+/, "Must have one special character")
    .matches(/\d+/, "Must have one number"),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default basicSchema;
