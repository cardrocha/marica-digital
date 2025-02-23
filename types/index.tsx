export interface HeaderLink {
  id: number;
  title: string;
  href: string;
  text: string;
}

export type Property = {
  id: number;
  titulo: string;
  descricao: string;
  endereco: string;
  preco: number;
  tipo: string;
  quartos: number;
  banheiros: number;
  garagem: number;
  disponibilidade: string;
  imagem: string;
};
