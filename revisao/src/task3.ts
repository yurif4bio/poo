enum Escolaridade {
    EnsinoBasico = "ensino básico",
    EnsinoMedio = "ensino médio",
    CursoSuperior = "curso superior",
    Especializacao = "especialização",
    Mestrado = "mestrado",
    Doutorado = "doutorado"
  }
  
  class Funcionario {
    public nome: string;
    public matricula: string;
    public escolaridade: Escolaridade;
    public readonly remuneracaoBase: number = 3000.00;
  
    constructor(nome: string, matricula: string, escolaridade: Escolaridade) {
      this.nome = nome;
      this.matricula = matricula;
      this.escolaridade = escolaridade;
    }
  
    private calcularAdicional(): number {
      const percentuais: Record<Escolaridade, number> = {
        [Escolaridade.EnsinoBasico]: 0.05,
        [Escolaridade.EnsinoMedio]: 0.10,
        [Escolaridade.CursoSuperior]: 0.20,
        [Escolaridade.Especializacao]: 0.25,
        [Escolaridade.Mestrado]: 0.35,
        [Escolaridade.Doutorado]: 0.45,
      };
  
      return this.remuneracaoBase * percentuais[this.escolaridade];
    }
  
    public get remuneracaoTotal(): number {
      return this.remuneracaoBase + this.calcularAdicional();
    }
  
    public exibirResumo(): void {
      console.log(`--- Ficha do Funcionário ---`);
      console.log(`Nome: ${this.nome}`);
      console.log(`Matrícula: ${this.matricula}`);
      console.log(`Escolaridade: ${this.escolaridade}`);
      console.log(`Salário Total: R$ ${this.remuneracaoTotal.toFixed(2)}`);
      console.log('----------------------------');
    }
  }
  
  
  const f1 = new Funcionario("Ana Silva", "MT-001", Escolaridade.EnsinoMedio);
  const f2 = new Funcionario("Bruno Costa", "MT-002", Escolaridade.Mestrado);
  const f3 = new Funcionario("Carla Souza", "MT-003", Escolaridade.Doutorado);
  
  f1.exibirResumo();
  f2.exibirResumo();
  f3.exibirResumo();