//async fun para esperar terminar a requisicao para obter o dado
async function displayAnimais() {
    //chamando a APO no localHost utilizando axios
    const response = await axios.get("http://localhost:8000/animais");
    const animais = response.data;

    const lista = document.getElementById("listaAnimais");

    //zerando a lista para que quando for chamada no metodo de cadastro pegar o valor salvo, adicionar o
    //cadastrado sem que tenha que repetir novamente os componetes anteriores dobrados
    lista.innerHTML = "";

    animais.forEach((subject) => {
        let item = document.createElement("li");
        const linha = `${subject.nome} - tipo: ${subject.tipo} - idade: ${subject.idade} `;
        item.innerText = linha;
        lista.appendChild(item);
    });
}




function cadastro() {
    const formAnimal = document.getElementById("formAnimal");

    const nome = document.getElementById("nomeID");
    formAnimal.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nomeID = nome.value;
        await axios.post("http://localhost:8000/animais", {
            nome: nomeID,
            tipo: "Cachorro",
            idade: 8,
            genero: "macho",
            cor: "preta",
        });

        displayAnimais();
        alert("animal cadastrado");
    });
}

function app() {
    console.log("app iniciado");
    displayAnimais();
    cadastro();
}

app();
