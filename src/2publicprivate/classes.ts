export class Empresa {
  public readonly nome: string;
  private readonly colabs: Colabs[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColabs(colabs: Colabs): void {
    this.colabs.push(colabs);
  }

  mostrarColabs(): void {
    for (const colabs of this.colabs) {
      console.log(colabs);
    }
  }
}

export class Colabs {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Mebow', '12.132.111/0001-12');
const colabs1 = new Colabs('Jorge', 'Mebow');
const colabs2 = new Colabs('Debora', 'Maria');
const colabs3 = new Colabs('JR', 'Paulo');
empresa1.addColabs(colabs1);
empresa1.addColabs(colabs2);
empresa1.addColabs(colabs3);

console.log(empresa1);
empresa1.mostrarColabs();
