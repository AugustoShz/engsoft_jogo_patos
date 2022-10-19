import PadraoVoaveis from "../interfaces/PadraoVoaveis";

class NaoVoa implements PadraoVoaveis {
  constructor(){}

  voar(): string {
    return `Esse pato não voa. Velocidade: ${this.getVelocidade()}`
  }

  getVelocidade(): number {
    return 0
  }
}

export default NaoVoa