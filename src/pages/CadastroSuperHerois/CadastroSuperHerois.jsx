// Atividade 1:

// Atividade: Desenvolva um formulário de cadastro de super-heróis. Criar um formulário de cadastro de super-heróis que permita ao usuário inserir informações sobre um super-herói fictício. Para isso crie uma nova página. O formulário deve conter campos para a entrada de nome, poder, fraqueza e história. Utilize os recursos do React Hook Form para obter os dados passados e as mostre em uma caixa de dialogo (alert). Não se preocupe com validação dos dados! Para isso crie uma nova página.

import { useForm } from "react-hook-form";

export function CadastroSuperHerois () {

    const { register, handleSubmit } = useForm();

    function onSubmitSuperHerois(data) {
        alert(`
        nome: ${data.nome}
        poder: ${data.poder}
        fraqueza: ${data.fraqueza}
        historia: ${data.historia}
        companhia:  ${data.companhia}`  
        );
    }

    return (
        <div className="superherois">
            <h1>Cadastro de Super Heróis</h1>
            <form onSubmit={handleSubmit(onSubmitSuperHerois)} noValidate>
                <label htmlFor="nome">Nome do Super Herói</label><br />
                <input type="text" id="nome" {...register("nome")} /><br />
                
                <label htmlFor="poder">Poder</label><br />
                <input type="text" id="poder" {...register("poder")} /><br />
                
                <label htmlFor="fraqueza">Fraqueza</label><br />
                <input type="text" id="fraqueza" {...register("fraqueza")} /><br />
                
                <label htmlFor="historia">História</label><br />
                <input type="text" id="historia" {...register("historia")} /><br />
                
                <label htmlFor="companhia">Companhia</label><br />
                <input type="text" id="companhia" {...register("companhia")} /><br />
                
                <hr />
                <button type="submit">Cadastrar Herói</button>
            </form>
        </div>
    );
}
