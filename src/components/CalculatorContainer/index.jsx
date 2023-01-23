import { ContainerStyle } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculatorSchema } from "../../validators/calculator";
import postApi from "../../utils/postapi";
import { useState } from "react";

const CalculatorContainer = () => {
  const [valueToday, setValueToday] = useState(0);
  const [valueFifhteen, setValueFifhteen] = useState(0);
  const [valueThirty, setValueThirty] = useState(0);
  const [valueNinety, setValueNinety] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(calculatorSchema),
  });

  async function onSubmit(data) {
    let numberMdr = parseInt(data.mdr);
    let numberInstallments = parseInt(data.installments);
    let numberAmount = parseInt(data.amount);
    if (numberAmount < 10) {
      errors.amount.message = "A venda deve ser maior que 10 reais";
    }
    data = {
      mdr: numberMdr,
      installments: numberInstallments,
      amount: Math.floor(numberAmount * 100),
    };
    const values = await postApi(data);
    if (values) {
      setValueToday(values.data[1]);
      setValueFifhteen(values.data[15]);
      setValueThirty(values.data[30]);
      setValueNinety(values.data[90]);

      return data;
    }
    return data;
  }

  return (
    <ContainerStyle>
      <div className="content">
        <div className="calculator">
          <h1>Simule sua Antecipação</h1>
          <form className="form-calculator" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="amount">Venda:</label>
            <input
              id="amount"
              type="number"
              placeholder="Insira o valor da venda aqui"
              {...register("amount")}
            />
            <span>{errors.amount?.message}</span>

            <label htmlFor="installments">Parcelas:</label>
            <input
              id="installments"
              type="number"
              placeholder="Insira o número de parcelas aqui"
              {...register("installments")}
            />
            <span>{errors.installments?.message}</span>

            <label htmlFor="mdr">MDR:</label>
            <input
              id="mdr"
              type="number"
              placeholder="Insira o percentual MDR aqui"
              {...register("mdr")}
            />
            <span>{errors.mdr?.message}</span>

            <button type="submit">Consulte</button>
          </form>
        </div>
        <div className="result-calculator">
          <h2>Você receberá:</h2>

          <h3>
            Amanhã:{" "}
            {(valueToday / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>

          <h3>
            Em 15 dias:{" "}
            {(valueFifhteen / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>

          <h3>
            Em 30 dias:{" "}
            {(valueThirty / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>

          <h3>
            Em 90 dias:{" "}
            {(valueNinety / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </div>
      </div>
    </ContainerStyle>
  );
};

export default CalculatorContainer;
