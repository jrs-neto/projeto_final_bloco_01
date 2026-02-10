import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";

export class ProdutoController implements ProdutoRepository {

  private listaProdutos = new Array<Produto>;

  listarProdutos(): Array<Produto> {
    for (let produto of this.listaProdutos) {
      console.log("\n************************************");
      console.log("        DADOS DO PRODUTO              ");
      console.log("************************************");
      console.log(`Nome do produto: ${produto.nome}`);
      console.log(`Código do produto: ${produto.codigo}`);
      console.log(`Cor do produto: ${produto.cor}`);
      console.log(`Marca do produto: ${produto.marca}`);
      console.log(`Valor do produto: ${formatarMoeda(produto.valor)}`);
    }
    return this.listaProdutos;
  }

  listarProdutosId(codigo: number): void {
    const produto = this.buscarNoArray(codigo);
    if (produto !== null) {
      console.log("\n************************************");
      console.log("        DADOS DO PRODUTO              ");
      console.log("************************************");
      console.log(`Nome do produto: ${produto.nome}`);
      console.log(`Código do produto: ${produto.codigo}`);
      console.log(`Cor do produto: ${produto.cor}`);
      console.log(`Marca do produto: ${produto.marca}`);
      console.log(`Valor do produto: ${formatarMoeda(produto.valor)}`);
    } else {
      console.log(`O código ${codigo} não foi encontrado.`);
    }
  }

  // Método Auxiliar para Validação
  private validarProduto(produto: Produto): boolean {
    if (produto.nome === "") {
      console.log(Colors.fg.red, `\nO nome do produto não pode ser vazio!`, Colors.reset);
      return false;
    }

    if (produto.valor < 0) {
      console.log(Colors.fg.red, `\nO valor do produto não pode ser negativo!`, Colors.reset);
      return false;
    }

    return true;
  }

  cadastrarProduto(produto: Produto): boolean {
    if (!this.validarProduto(produto)) return false;

    const buscaProduto = this.buscarNoArray(produto.codigo);

    if (buscaProduto !== null) {
      console.log(Colors.fg.red,
        `\nO Produto ${produto.codigo} já foi cadastrado!`, Colors.reset);
      return false;
    }

    this.listaProdutos.push(produto);
    console.log(Colors.fg.green,
      `\nA produto ${produto.nome} foi cadastrado com sucesso!`, Colors.reset);

    return true;
  }

  atualizarProduto(produto: Produto): Produto | null {
    if (!this.validarProduto(produto)) return null;

    const buscaProduto = this.buscarNoArray(produto.codigo);

    if (buscaProduto !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
      console.log(Colors.fg.green,
        `\nO produto ${produto.codigo} foi atualizado com sucesso!`, Colors.reset);
      return produto;
    }

    console.log(Colors.fg.red, `\nO produto ${produto.codigo} não foi encontrado!`, Colors.reset);
    return null;
  }

  deletarProduto(produto: Produto): boolean {

    const buscaProduto = this.buscarNoArray(produto.codigo);

    if (buscaProduto !== null) {
      this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
      console.log(Colors.fg.green,
        `\nO Produto ${produto.nome} foi deletado com sucesso!`, Colors.reset);
      return true;
    } else
      console.log(Colors.fg.red, `\nO Produto ${produto.nome} não foi encontrado!`, Colors.reset);
    return false;

  }

  // Método Auxiliar

  public buscarNoArray(numero: number): Produto | null {

    for (let produto of this.listaProdutos) {
      if (produto.codigo === numero)
        return produto
    }

    return null;
  }

}