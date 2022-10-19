import NaoVoa from "./NaoVoa";
import Pato from "./Pato";

class PatoBorracha extends Pato {
  constructor () {
    super()
    this.setComportamento(new NaoVoa())
  }

  public mostrar(): string {
      return "Olá, eu sou de Boarracha."
  }
}

export default PatoBorracha