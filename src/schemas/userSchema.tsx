import * as yup from "yup";

export const UserSchema = yup.object({
    firstName: yup.string().required('O nome é obrigatório'),
    username: yup.string().required('username é obrigatório'),
    password: yup
    .string()
    .required('A senha é obrigatória')
    .matches(
      /^[A-Za-z0-9]*[@$!%*?&#][A-Za-z0-9]*$/i,
      'A senha deve conter letras, números e pelo menos um dos seguintes caracteres especiais: @$!%*?&#'
    ),
    confirmPassword: yup
    .string()
    .required('A senha é obrigatória')
    .matches(
      /^[A-Za-z0-9]*[@$!%*?&#][A-Za-z0-9]*$/i,
      'A senha deve conter letras, números e pelo menos um dos seguintes caracteres especiais: @$!%*?&#'
    ),
    email: yup.string().email('deve conter um email válido').required('o email é obrigatório'),
    photo: yup.string().url('deve conter um link válido').required('o link da foto é obrigatório')
}).required()