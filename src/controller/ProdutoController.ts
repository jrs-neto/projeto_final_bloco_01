import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Colors } from "../util/Colors";
import { formatarMoeda } from "../util/Currency";

export class ProdutoController implements ProdutoRepository {

  private listaProdutos = new Array<Produto>;

  listarProdutos(): Array<Produto> {
    for (let produto of this.listaProdutos) {
      produto.visualizar();
    }
    return this.listaProdutos;
  }

  listarProdutosId(codigo: number): Produto {
    const produto = this.buscarNoArray(codigo);
    if (produto !== null) return produto;
    console.log(`O código ${codigo} não foi encontrado.`);
  }

  cadastrarProduto(produto: Produto): boolean {
    this.listaProdutos.push(produto);
    console.log(Colors.fg.green,
      `\nA produto ${produto.nome} foi cadastrado com sucesso!`, Colors.reset);

    return true;
  }

  atualizarProduto(produto: Produto): Produto | null {

    const buscaProduto = this.buscarNoArray(produto.codigo);

    if (buscaProduto !== null) {
      this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
      console.log(Colors.fg.green,
        `\nO produto ${produto.codigo} foi atualizado com sucesso!`, Colors.reset);
    } else
      console.log(Colors.fg.red, `\nO produto ${produto.codigo} não foi encontrado!`, Colors.reset);

    const newProduto = this.buscarNoArray(produto.codigo);

    return newProduto;
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