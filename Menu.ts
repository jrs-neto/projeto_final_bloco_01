import { Colors } from "./src/util/Colors";
import { Input } from "./src/util/Input";

export function main() {

  let opcao: number;

  while (true) {

    console.log(Colors.bg.black, Colors.fg.yellow,
      "*****************************************************");
    console.log("                                                     ");
    console.log("                LOJA GENERATION                      ");
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
      console.log(Colors.fg.greenstrong, "\nLOJA GENERATION - Onde você encontra os melhores produtos de informática!");
      sobre();
      console.log(Colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(Colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", Colors.reset);
        break;
      case 2:
        console.log(Colors.fg.whitestrong, "\n\nListar Produto pelo ID\n\n", Colors.reset);
        break;
      case 3:
        console.log(Colors.fg.whitestrong, "\n\nCadastrar Produto\n\n", Colors.reset);
        break;
      case 4:
        console.log(Colors.fg.whitestrong, "\n\nAtualizar Produto\n\n", Colors.reset);
        break;
      case 5:
        console.log(Colors.fg.whitestrong, "\n\nDeletar Produto\n\n", Colors.reset);
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


main();