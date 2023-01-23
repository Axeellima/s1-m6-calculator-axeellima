import * as yup from "yup";

export const calculatorSchema = yup.object().shape({
  amount: yup
    .string()
    .required("Este campo é obrigatório!")
    .test((value, err) => {
      if (value >= 10) {
        return true;
      }
      return err.createError({
        message: "A venda deve ser de ao menos 10 reais",
      });
    }),
  installments: yup.string().required("Este campo é obrigatório!"),
  mdr: yup.string().required("Este campo é obrigatório"),
});
