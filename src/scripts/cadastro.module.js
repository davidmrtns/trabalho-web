$('#cpf').inputmask("999.999.999-99");
$('#telefone').inputmask("+99 (99) 99999-9999");

async function cadastrar(){
    var nome = $('[name="nome"]').val().trim();
    var sobrenome = $('[name="sobrenome"]').val().trim();
    var cpf = $('#cpf').inputmask('unmaskedvalue').trim();
    var telefone = $('#telefone').inputmask('unmaskedvalue').trim();
    var nacionalidade = $('[name="nacionalidade"]').val().trim();
    var nomeUsuario = $('[name="username"]').val().trim();
    var email = $('[name="email"]').val().trim();
    var senha = $('[name="senha"]').val().trim();

    if(nome && sobrenome && cpf && telefone && nacionalidade && nomeUsuario && email && senha){
        var resposta;
        try {
            await fetch('https://localhost:7088/api/adicionar-usuario', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: 0,
                    nome: nome + " " + sobrenome,
                    cpf: cpf,
                    telefone: telefone,
                    nacionalidade: nacionalidade,
                    nomeUsuario: nomeUsuario,
                    email: email,
                    senha: senha
                })
            }).then((response) => response.json()).then((data) => { resposta = data });
        } catch {
            resposta = null;
        }

        if(resposta){
            alert("Usuário cadastrado");
            window.location.replace("/");
        }
    }else{
        alert("Preencha corretamente os campos");
    }
}

$("#botao-cadastrar").click(cadastrar);