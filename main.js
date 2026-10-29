const produtos = [
    { nome: "Hidratante",
      categoria: "Corpo",
      quantidade: 25,
      preco: 45.00
    },
    {
        nome: "Protetor Solar",
      categoria: "Proteção",
      quantidade: 20,
      preco: 65.00
    },
    {
        nome: "Shampoo",
      categoria: "Cabelo",
      quantidade: 35,
      preco: 28.00
    },
    {
        nome: "Sabonete",
      categoria: "Higiene",
      quantidade: 60,
      preco: 6.00
    },
    {
        nome: "Condicionador",
      categoria: "Cabelo",
      quantidade: 30,
      preco: 32.00
    },
    {
        nome: "Perfume",
      categoria: "Fragrância",
      quantidade: 15,
      preco: 120.00
    },
    {
        nome: "Creme facial",
      categoria: "Rosto",
      quantidade: 22,
      preco: 55.90
    },
    {
        nome: "Òleo corporal",
      categoria: "Corpo",
      quantidade: 18,
      preco: 38.00
    },
    {  nome: "Máscara capilar",
      categoria: "Cabelo",
      quantidade: 12,
      preco: 42.00

    },
    { nome: "Àgua micelar",
      categoria: "Rosto",
      quantidade: 27,
      preco: 38.00

    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }