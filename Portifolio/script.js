document.querySelector(".hamburguer");addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#sabor").addEventListener("selection", atualizarPreco)

function atualizarPreco(){
    const sabor = document.querySelector("#sabor").value
    document.querySelector("#preco").innerHTML = preco
}

