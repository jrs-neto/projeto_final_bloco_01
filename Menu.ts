import { ProdutoController } from "./src/controller/ProdutoController";
import { Produto } from "./src/model/Produto";
import { Colors } from "./src/util/Colors";
import { formatarMoeda } from "./src/util/Currency";
import { Input } from "./src/util/Input";

const produtos = new ProdutoController();

export function main() {

  produtoParaTeste();

  let opcao: number;

  while (true) {

    console.log(Colors.bg.black, Colors.fg.yellow,
      "*****************************************************");
    console.log("                                                     ");
    console.log("                   INFO TECH                         ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Listar todos os Produtos             ");
    console.log("            2 - Listar Produto pelo ID               ");
    console.log("            3 - Cadastrar Produto                    ");
    console.log("            4 - Atualizar Produto                    ");
    console.log("            5 - Deletar Produto                      ");
    console.log("            0 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ",
      Colors.reset);

    console.log("Entre com a opção desejada:");
    opcao = Input.questionInt("");

    if (opcao === 0) {
      console.log(Colors.fg.greenstrong, "\nINFO TECH - Onde você encontra os melhores produtos de informática!");
      sobre();
      console.log(Colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(Colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", Colors.reset);
        produtos.listarProdutos();
        keyPress();
        break;

      case 2:
        console.log(Colors.fg.whitestrong, "\n\nListar Produto pelo ID\n\n", Colors.reset);
        console.log("Digite o número do produto: ");
        const numero = Input.questionInt("");
        console.log(produtos.listarProdutosId(numero));
        keyPress();

        break;

      case 3:
        console.log(Colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", Colors.reset);
        console.log("Digite o nome do produto: ");
        const nomeProduto = Input.question("");

        console.log("Digite o código do produto: ");
        const codigoProduto = Input.questionInt("");

        console.log("Digite a cor do produto: ");
        const corProduto = Input.question("");

        console.log("Digite a marca do produto: ");
        const marcaProduto = Input.question("");

        console.log("Digite o valor do produto: ");
        const valorProduto = Input.questionFloat("");

        produtos.cadastrarProduto({
          nome: nomeProduto,
          codigo: codigoProduto,
          cor: corProduto,
          marca: marcaProduto,
          valor: valorProduto
        } as Produto);
        keyPress();
        break;

      case 4:
        console.log(Colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", Colors.reset);
        atualizarProduto();
        keyPress();
        break;
      case 5:
        console.log(Colors.fg.whitestrong, "\n\nDeletar Produto\n\n", Colors.reset);
        console.log("Digite o código do produto: ");
        const numeroDeletar = Input.questionInt("");

        const produto = produtos.buscarNoArray(numeroDeletar);
        produtos.deletarProduto(produto as Produto);
        keyPress();
        break;
      default:
        console.log(Colors.fg.whitestrong, "\nOpção Inválida!\n", Colors.reset);
    }
  }

}

/**
 * Dados da pessoa desenvolvedora
 */
function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: ");
  console.log("José Rodrigues - jrd.santosneto@gmail.com");
  console.log("https://www.linkedin.com/in/jrodrigues-neto/");
  console.log("https://github.com/jrs-neto");
  console.log("*****************************************************");
}



/* Atualizar Produto */
function atualizarProduto(): void {

  console.log("Digite o código do produto: ");
  const numero = Input.questionInt("");

  const produto = produtos.buscarNoArray(numero);

  if (produto !== null) {

    let nome: string = produto.nome;
    let cor: string = produto.cor;
    let marca: string = produto.marca;
    let valor: number = produto.valor;


    console.log(`\nNome atual: ${nome}`);
    console.log("Digite o novo nome do produto: ");
    console.log("(Pressione ENTER para manter o valor atual)");
    nome = Input.question("", { defaultInput: nome });

    console.log(`\n Digite a cor atual: ${cor}`);
    console.log("Digite o nome da nova cor: ");
    console.log("(Pressione ENTER para manter o valor atual)");
    cor = Input.question("", { defaultInput: cor });

    console.log(`\n Digite a marca atual: ${marca}`);
    console.log("Digite o nome da nova marca: ");
    console.log("(Pressione ENTER para manter o valor atual)");
    marca = Input.question("", { defaultInput: marca });

    console.log(`\nValor atual: ${formatarMoeda(valor)}`);
    console.log("Digite o valor do novo saldo: ");
    console.log("(Pressione ENTER para manter o valor atual)");
    valor = Input.questionFloat("", { defaultInput: valor });

    produtos.atualizarProduto({
      codigo: numero,
      nome: nome,
      cor: cor,
      marca: marca,
      valor: valor,
    } as Produto);
  }
}

function keyPress(): void {
  console.log(Colors.reset, "\nPressione enter para continuar...");
  Input.prompt();
}

function produtoParaTeste(): void {

  produtos.cadastrarProduto({
    nome: "Notebook Gamer",
    codigo: 1001,
    cor: "Preto",
    marca: "Dell",
    valor: 7500.00
  } as Produto);

  produtos.cadastrarProduto({
    nome: "Smartphone",
    codigo: 1002,
    cor: "Azul",
    marca: "Samsung",
    valor: 3200.00
  } as Produto);

  produtos.cadastrarProduto({
    nome: "Fone de Ouvido Bluetooth",
    codigo: 1003,
    cor: "Branco",
    marca: "JBL",
    valor: 450.00
  } as Produto);

}


main();