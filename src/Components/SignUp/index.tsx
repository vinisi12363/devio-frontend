import { useForm, } from "react-hook-form";
import { FormContainer, SubmitBtn } from "./SignUpStyle";
import { Title } from "../Title";
import { Subtitle } from "../Subtitle";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "../../schemas/userSchema";



export default function SignUpForm() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        resolver: yupResolver(UserSchema),
    })
    const watchPassword = watch('password');
    const watchConfirmPassword = watch('confirmPassword');
    const [disabled, setDisabled] = useState<boolean>(false);


    const onSubmit = (data: object) => {
        setDisabled(true);
        console.log(data)
        alert(data)
        setDisabled(false);
    }

    return (
        <FormContainer>
            <Title text="Cadastrar Administrador" textSize="45"></Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Subtitle text="Nome" textSize="20" ></Subtitle>
                <input
                    type="text"
                    {...register("firstName", { required: true, maxLength: 20 })}
                    aria-invalid={errors.firstName ? "true" : "false"} />
                {errors.firstName?.type === "required" && (
                    <p role="alert" style={{ color: "red" }}>{errors.firstName?.message}</p>
                )}
                <Subtitle text="Nome de Usuário" textSize="20" ></Subtitle>

                <input
                    type="text"
                    {...register("username", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.username ? "true" : "false"} />
                {errors.username?.type === "required" && (
                    <p role="alert" style={{ color: "red" }}>{errors.username?.message}</p>
                )}
                
                <Subtitle text="E-mail" textSize="20" ></Subtitle>
                <input
                    type="text"
                    {...register("email",)}
                    aria-invalid={errors.email ? "true" : "false"} />
                {errors.email && (
                    <p role="alert" style={{ color: "red" }}>{errors.email.message}</p>
                )}

                <Subtitle text="Foto" textSize="20" ></Subtitle>
                <input
                    type="text"
                    {...register("photo",)}
                    aria-invalid={errors.photo ? "true" : "false"} />
                {errors.photo && (
                    <p role="alert" style={{ color: "red" }}>{errors.photo.message}</p>
                )}
                <Subtitle text="senha" textSize="20" ></Subtitle>
                <input
                    placeholder="senha"
                    type="password"
                    {...register("password",
                        { required: true, min: 6, max: 99, pattern: /^[A-Za-z0-9]*[@$!%*?&#][A-Za-z0-9]*$/i })}
                    aria-invalid={errors.password ? "true" : "false"} />
                {errors.password && (
                    <p role="alert" style={{ color: "red" }}>{errors.password.message}</p>
                )}
                <Subtitle text="Repita a senha" textSize="20" ></Subtitle>
                <input
                    placeholder="confirmação de senha"
                    type="password"
                    {...register("confirmPassword", { required: true, pattern: /^[A-Za-z0-9]*[@$!%*?&#][A-Za-z0-9]*$/i })}
                    aria-invalid={errors.confirmPassword ? "true" : "false"} />
                {errors.confirmPassword && (
                    <p role="alert" style={{ color: "red" }}>
                        {errors.confirmPassword?.message}
                    </p>

                )}

                {watchPassword !== watchConfirmPassword ? (

                    <p role="alert" style={{ color: "red" }}>
                        As senhas não são iguais!
                    </p>
                ) : (<></>)}
                <SubmitBtn isDisabled={(watchPassword !== watchConfirmPassword) || disabled} type="submit" disabled={(watchPassword !== watchConfirmPassword) || disabled}>
                    <Subtitle text="Salvar" textSize="18" ></Subtitle>
                </SubmitBtn>
            </form>
        </FormContainer>
    );
}