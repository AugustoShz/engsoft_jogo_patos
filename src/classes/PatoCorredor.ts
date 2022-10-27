import PadraoCorredores from "../interfaces/PadraoCorredores";
import Corredores from "./Corredores";
import NaoVoa from "./NaoVoa";
import Pato from "./Pato";

class PatoCorredor extends Pato implements PadraoCorredores {
  private velocidade: number

  constructor() {
    super()
    this.velocidade = 2
    this.setComportamento(new NaoVoa())
    this.setComportamentoCorrer(new Corredores())
  }

  public correr(): string {
    return `Pato correndo.` 
  }

  public getVelocidade(): number {
    return this.velocidade
  }
  
  public mostrar(): string {
      return "Eu sou o Pato Corredor."
  }
}

export default PatoCorredor