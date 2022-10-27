import PadraoCorredores from "../interfaces/PadraoCorredores";

class Corredores implements PadraoCorredores {
  private velocidade: number

  constructor () {
    this.velocidade = 2
  }

  public correr(): string {
    return `Correndo. Velocidade ${this.getVelocidade()}`
  }

  public disparar(): string {
    this.velocidade = 4
    return `Vou correr mais rápido! Velocidade nova ${this.getVelocidade()}`
  }

  public getVelocidade(): number {
      return this.velocidade
  }
}
export default Corredores