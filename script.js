let ulExperiencias = document.querySelector('.experiencias__ul')
let divCursos = document.querySelector('.formacao__container')

console.log(ulExperiencias , divCursos)

let arrExp = [
    {
        cargo: "Web Designer Jr",
        empresa: "Agencia V4 - Company/ Cruz e Souza ",
        descricao: "Entregas de landing pages sob demanda, taggeamento das mesmas com as ferramentas de trafego. Utilizando de ferramentas como html, css wordpress e elementor"


    },

    {
        cargo: "Gerente de UAN",
        empresa: "Premium essential Kitchen",
        descricao: "Gerenciamento de unidades de alimentação e nutricao, responsável por todo o processo produtivo, rh, qualidade, logística e rastreabilidade do restaurante"


    }
]

let arrCursos = [
    {
        curso: "DevWeb - Front End: JavaScript (SENAC/JUNDIAI)",
        escola: "Senac/Jundiai",
        termino: "2023",
        descricao: "Curso profissionalizante focado em JavaScript e JQuery",

    },

    {
        curso: "DevInHouse",
        escola: "Senai/Florianopolis",
        termino: "2023",
        descricao: "Curso profissionalizante focado em full stack",

    },

    {
        curso: "Diversas formações de Front - End",
        escola: "Alura",
        termino: "2023",
        descricao: "Manipulação de DOM, Orientação a Objetos, Metodos de array, Introdução ao React",

    },

    {
        curso: "Bacharelado em Nutrição",
        escola: "Faculdade Unianchieta/ Jundiai",
        termino: "2019",
        descricao: "Bacharel em Nutrição ",

    },

 

]


function criarLiExperiencias(cargo, empresa, descricao, ) {

    const liExperiencias = document.createElement("li");
    liExperiencias.classList.add("experiencias__ul__li");

    const divBlocoTexto = document.createElement("div");
    divBlocoTexto.classList.add("experiencias__div");

// Criação dos elementos <h2> e <p> com suas respectivas classes e conteúdo
    const h2Cargo = document.createElement("h2");
    h2Cargo.classList.add("experiencias__cargo");
    h2Cargo.textContent = `Cargo: ${cargo}`;

    const h2Empresa = document.createElement("h2");
    h2Empresa.classList.add("experiencias__empresa");
    h2Empresa.textContent = `Cargo: ${empresa}`;

    const pDescricao = document.createElement("p");
    pDescricao.classList.add("experiencias__descricao");
    pDescricao.textContent = `Cargo: ${descricao}`;

// Criação do elemento <div> com a classe "experiencias__btn__bloco"
    const divBtnBloco = document.createElement("div");
    divBtnBloco.classList.add("experiencias__btn__bloco");

// Criação dos botões <button> com suas respectivas classes e texto
    const btnEditar = document.createElement("button");
    btnEditar.setAttribute("id", "btn-editar__exp");
    btnEditar.classList.add("btn-main");
    btnEditar.textContent = "Editar";

    const btnRemover = document.createElement("button");
    btnRemover.setAttribute("id", "btn-remover__exp");
    btnRemover.classList.add("btn-main");
    btnRemover.textContent = "Remover";

// Adicionando os elementos criados à estrutura DOM
    divBtnBloco.appendChild(btnEditar);
    divBtnBloco.appendChild(btnRemover);

    divBlocoTexto.appendChild(h2Cargo);
    divBlocoTexto.appendChild(h2Empresa);
    divBlocoTexto.appendChild(pDescricao);
    divBlocoTexto.appendChild(divBtnBloco);

    liExperiencias.appendChild(divBlocoTexto);

// Adicionando a estrutura criada ao elemento desejado no DOM (por exemplo, a lista <ul>)
    ulExperiencias.appendChild(liExperiencias);


    
}

arrExp.forEach(exp => {
    criarLiExperiencias(exp.cargo, exp.empresa, exp.descricao);
});

function criarLiCursos(curso, escola, termino, descricao) {

    const liCurso = document.createElement("li");
    liCurso.classList.add("formacao__li");

// Criar elementos h2 e p com suas respectivas classes e conteúdo
    const h2Curso = document.createElement("h2");
    h2Curso.textContent = `Curso: ${curso}`;

    const h2Escola = document.createElement("h2");  
    h2Escola.textContent = `Curso: ${escola}`;

    const h2DataTermino = document.createElement("h2"); 
    h2DataTermino.textContent = `Curso: ${termino}`;

    const pDescricao = document.createElement("p");
    pDescricao.textContent = `Curso: ${descricao}`;

// Adicionando os elementos criados à estrutura DOM
    liCurso.appendChild(h2Curso);
    liCurso.appendChild(h2Escola);
    liCurso.appendChild(h2DataTermino);
    liCurso.appendChild(pDescricao);

// Adicionando a estrutura criada à divCursos
    divCursos.appendChild(liCurso);
    
}

arrCursos.forEach(curso => {
    criarLiCursos(curso.curso, curso.escola, curso.termino, curso.descricao);
});


