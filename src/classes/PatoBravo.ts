import PadraoGrasnar from "../interfaces/PadraoGrasnar";
import Pato from "./Pato";
import VoaveisAsa from "./VoaveisAsa";

class PatoBravo extends Pato implements PadraoGrasnar {
  constructor() {
    super()
    this.setComportamento(new VoaveisAsa())
  }
  
  public mostrar(): string {
      return "Eu sou o Pato Bravo."
  }

  public grasnar(): string {
    return "Que-Que. Grrrrrrrrr."
  }

}