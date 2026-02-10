import { formatarMoeda } from "../util/Currency";

export abstract class Produto {

  private _nome: string;
  private _codigo: number;
  private _cor: string;
  private _marca: string;
  private _valor: number;

  // Método Construtor
  constructor(nome: string, codigo: number, cor: string, marca: string, valor: number) {
    this._nome = nome;
    this._codigo = codigo;
    this._cor = cor;
    this._marca = marca;
    this._valor = valor;
  }

  // Métodos Get e Set
  public get nome(): string {
    return this._nome;
  }

  public get codigo(): number {
    return this._codigo;
  }

  public get cor(): string {
    return this._cor;
  }

  public get marca(): string {
    return this._marca;
  }

  public get valor(): number {
    return this._valor;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set codigo(value: number) {
    this._codigo = value;
  }

  public set cor(value: string) {
    this._cor = value;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public set valor(value: number) {
    this._valor = value;
  }


  public function visualizar(): any {

    let tipo: string;

    console.log("\n************************************");
    console.log("        DADOS DO PRODUTO              ");
    console.log("************************************");
    console.log(`Número do produto: ${this._nome}`);
    console.log(`Código do produto: ${this._codigo}`);
    console.log(`Cor do produto: ${this._cor}`);
    console.log(`Marca do produto: ${this._marca}`);
    console.log(`Valor do produto: ${formatarMoeda(this._valor)}`);
  }

}