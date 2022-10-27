import PadraoCorredores from "../interfaces/PadraoCorredores";
import CorrerMaratona from "./CorrerMaratona";
import NaoVoa from "./NaoVoa";
import Pato from "./Pato";

class PatoMaratonista extends Pato implements PadraoCorredores {
  private velocidade: number = 10

  constructor() {
    super()
    this.setComportamento(new NaoVoa())
    this.setComportamentoCorrer(new CorrerMaratona())
  }

  public getVelocidade(): number {
    return this.velocidade
  }
  
  public mostrar(): string {
      return "Eu sou o Pato Maratonista."
  }
}

export default PatoMaratonista