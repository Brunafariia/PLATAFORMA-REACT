// Atividade 1:

// Atividade: Desenvolva um formulário de cadastro de super-heróis. Criar um formulário de cadastro de super-heróis que permita ao usuário inserir informações sobre um super-herói fictício. Para isso crie uma nova página. O formulário deve conter campos para a entrada de nome, poder, fraqueza e história. Utilize os recursos do React Hook Form para obter os dados passados e as mostre em uma caixa de dialogo (alert). Não se preocupe com validação dos dados! Para isso crie uma nova página.
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function CadastroSuperHerois () {

    const { register, handleSubmit } = useForm();
    const [heroi, setHeroi] = useState();

    function onSubmitHeroi(heroi) {
        setHeroi(heroi)
    }

    return (
        <div className="herois">
            <h1>Cadastro de Super Heróis</h1>
            <form onSubmit={handleSubmit(onSubmitHeroi)}>
                <label htmlFor="nome">Nome</label> <br />
                <input type="text" id="nome" {...register("nome")} /> <br />

                <label htmlFor="poder">Poder</label> <br />
                <input type="text" id="poder" {...register("poder")} /> <br />

                <label htmlFor="fraqueza">Fraqueza</label> <br />
                <input type="text" id="fraqueza" {...register("fraqueza")} /> <br />

                <label htmlFor="historia">História</label> <br />
                <textarea cols="23" id="historia" {...register("historia")}></textarea> <br />

                <button type="submit">Cadastrar Heroi</button>
            </form>

            <br />

            {
                heroi &&
                <Alert variant="primary">
                    Nome: {heroi.nome} <br />
                    Poder: {heroi.poder} <br />
                    Fraqueza: {heroi.fraqueza} <br />
                    História: {heroi.historia} <br />
                </Alert>
            }
        </div>
    );
}