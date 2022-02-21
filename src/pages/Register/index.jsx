import LogoImg from "../../assets/logo.svg";
import { ContainerForm, Container } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Register({ isAuth, apearPass, setApearPass }) {
  const [isfaded] = useState(true);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email Inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const handleRegister = ({ name, email, password, course_module }) => {
    const userData = {
      name,
      email,
      password,
      course_module,
      bio: "not found",
      contact: "not found",
    };
    api
      .post("users", userData)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Tente outro email ou senha!");
      });
  };
  const toastFieldErrors = () => {
    toast.error("Preencha todos os campos");
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  console.log(ContainerForm);
  return (
    <Container>
      <div className="cabecalhoRegister">
        <img alt="teste " src={`${LogoImg}`} />
        <Button
          width={27.5}
          height={25.58}
          color={"--gray-3"}
          fontSize={9.59}
          historyEndPoint="/login"
        >
          Voltar
        </Button>
      </div>

      <ContainerForm onSubmit={handleSubmit(handleRegister, toastFieldErrors)}>
        <h2> Crie sua conta </h2>
        <p> Rapido e grátis, vamos nessa </p>

        <Input
          error={errors.name?.message}
          register={register}
          placeholder="Digite aqui seu nome"
          name="name"
          label="name"
        />

        <Input
          error={errors.email?.message}
          register={register}
          placeholder="Digite aqui seu email"
          type="text"
          name="email"
          label="Email"
        />

        <Input
          error={errors.password?.message}
          register={register}
          placeholder="Digite aqui sua senha"
          name="password"
          label="Senha"
          icon={apearPass ? FiEyeOff : FiEye}
          type={apearPass ? "text" : "password"}
          setApearPass={setApearPass}
          apearPass={apearPass}
        />

        <Input
          error={errors.passwordConfirm?.message}
          register={register}
          placeholder="Confirme sua senha"
          name="passwordConfirm"
          label="Confirmar senha"
          icon={apearPass ? FiEyeOff : FiEye}
          type={apearPass ? "text" : "password"}
          setApearPass={setApearPass}
          apearPass={apearPass}
        />
        <label>
          Selecionar módulo
          {!!errors.course_module?.message && (
            <span> - {errors.course_module?.message}</span>
          )}
        </label>

        <select {...register("course_module")} name="course_module">
          <option value="Primeiro módulo (Frontend iniciante)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend intermediário)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Frontend avançado)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (BackEnd iniciante)">
            Quarto módulo
          </option>
          <option value="Quinto módulo (BackEnd intermediário)">
            Quinto módulo
          </option>
          <option value="Sexto módulo (BackEnd avançado)">Sexto módulo</option>
        </select>
        <Button
          width={90}
          height={38.5}
          color={isfaded ? "--primaryNegativePink" : "--primaryPink"}
          type="submit"
        >
          Cadastrar
        </Button>
      </ContainerForm>
    </Container>
  );
}
