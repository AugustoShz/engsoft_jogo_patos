import PadraoCorredores from "../interfaces/PadraoCorredores";

class CorrerMaratona implements PadraoCorredores {
  private velocidade: number

  constructor () {
    this.velocidade = 10
  }

  public correr(): string {
    return `Correndo. Velocidade ${this.getVelocidade()}`
  }

  public disparar(): string {
    this.velocidade = 20
    return `Disparando! Velocidade nova: ${this.getVelocidade()}`
  }

  public getVelocidade(): number {
      return this.velocidade
  }
}
export default CorrerMaratona