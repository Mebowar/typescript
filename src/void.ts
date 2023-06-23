function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
const pessoa = {
  nome: 'jorge',
  sobrenome: 'Mebow',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Jorge', 'mebow');
pessoa.exibirNome();
export { pessoa };
