// Atividade 3:

// Desenvolva um formulário de cadastro de programadores para uma empresa de desenvolvimento de software. O formulário deve ter os seguintes campos:
// Nome completo
// Endereço de e-mail
// Telefone
// Estado de residência
// Cidade de residência
// Áreas de interesse (utilize um acervo de campos de check)
// Nível de experiência (utilize um campo de seleção -> 

// júnior, pleno, sênior)
// Portfólio (opção para incluir link)
// Habilidades técnicas (utilize um acervo de campos de check)
// Formação acadêmica (curso, instituição, ano de conclusão)
// Para uma melhor experiência de uso do formulário aplique validação nos campos sabendo que os campos de texto e seleção devem ser preenchidos e informações como e-mail devem ser validas e os campos não devem passar de 255 caracteres. Os campos inválidos devem mostrar abaixo um mensagem de feedback. Para tratamento dos dados e validação utilize os mecanismos do React Hook Form. Como retorno para o usuário mostre um modal com as informações de entrada do formulário. Para criação do campos, botões e modal utilize os recursos do React Bootstrap.
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form"

export function Programadores() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
    }

    return (
        <div className="programadores">
            <h1>Programadores</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control {...register("nome")} />
                    {errors.nome && <span className="invalid">Digite um nome válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control {...register("email")} />
                    {errors.email && <span className="invalid">Digite um email válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control {...register("telefone")} />
                    {errors.telefone && <span className="invalid">Digite um telefone válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control {...register("estado")} />
                    {errors.estado && <span className="invalid">Digite um estado válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control {...register("cidade")} />
                    {errors.cidade && <span className="invalid">Digite um cidade válido!</span>}
                </Form.Group>
                <Form.Label>Interesses</Form.Label>
                <Form.Group className="mb-3" controlId="back">
                    <Form.Check type="checkbox" label="Back-end" {...register("back")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="front">
                    <Form.Check type="checkbox" label="Front-end" {...register("front")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Check type="checkbox" label="Mobile-end" {...register("mobile")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nível de experiência</Form.Label>
                    <Form.Select {...register("nivel")}>
                        <option>Júnior</option>
                        <option>Pleno</option>
                        <option>Sênior</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Portfólio</Form.Label>
                    <Form.Control {...register("portfolio")} />
                    {errors.portfolio && <span className="invalid">Digite um portfolio válido!</span>}
                </Form.Group>
                    <Form.Label>Habilidades</Form.Label>
                <Form.Group className="mb-3" controlId="html">
                    <Form.Check type="checkbox" label="HTML" {...register("html")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="css">
                    <Form.Check type="checkbox" label="CSS" {...register("css")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="js">
                    <Form.Check type="checkbox" label="JavaScript" {...register("js")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Formação acadêmica</Form.Label>
                    <Form.Control {...register("academico")} />
                    {errors.academico && <span className="invalid">Digite uma formação academica válida!</span>}
                </Form.Group>
                <Button variant="dark">Enviar</Button>
            </form>
        </div>
    );
}