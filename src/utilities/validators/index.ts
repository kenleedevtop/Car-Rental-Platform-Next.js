import { object, string } from 'yup';

export const emailSchema = object().shape({
  email: string().email(),
});

export const passwordSchema = object().shape({
  password: string()
    .min(8)
    .matches(/[0-9]/)
    .matches(/[a-z]/)
    .matches(/[A-Z]/)
    .matches(/[^\w]/),
});

export const nameSchema = object().shape({
  length: string().min(2).max(15),
  pattern: string().matches(/^[a-zA-Z]+$/),
});

export const usernameSchema = object().shape({
  username: string()
    .min(6)
    .matches(/[a-z0-9.]/)
    .matches(/^\S*$/),
});
