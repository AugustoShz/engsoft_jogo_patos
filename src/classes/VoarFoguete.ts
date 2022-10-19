import PadraoVoaveis from "../interfaces/PadraoVoaveis";

class VoarFoguete implements PadraoVoaveis {
  private velocidade: number

  constructor() {
    this.velocidade = 1000
  }

  public voar(): string {
    return `Voando como um foguete. Velocidade: ${this.getVelocidade()}`
  }

  public getVelocidade(): number {
      return this.velocidade
  }
}

export default VoarFoguete