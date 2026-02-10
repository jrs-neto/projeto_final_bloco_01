import { Produto } from "../model/Produto";

export interface ProdutoRepository {

  // Métodos do CRUD
  listarProdutos(): void;
  listarProdutosId(number: number): Produto;
  cadastrarProduto(produto: Produto): boolean;
  atualizarProduto(produto: Produto): boolean;
  deletarProduto(produto: Produto): boolean;

}