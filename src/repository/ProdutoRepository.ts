import { Produto } from "../model/Produto";

export interface ProdutoRepository {

  // Métodos do CRUD
  listarProdutos(): Array<Produto>;
  listarProdutosId(number: number): Produto;
  cadastrarProduto(produto: Produto): boolean;
  atualizarProduto(produto: Produto): Produto | null;
  deletarProduto(produto: Produto): boolean;

}