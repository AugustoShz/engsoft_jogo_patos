import Pato from './Pato'
import PadraoGrasnar from '../interfaces/PadraoGrasnar'
import VoaveisAsa from './VoaveisAsa'

class PatoRuivo extends Pato implements PadraoGrasnar {
  constructor () {
    super()
    this.setComportamento(new VoaveisAsa())
  }

  public mostrar(): string {
    return "Eu sou o Pato Ruivo."
  }

  public grasnar(): string {
    return "Que-Que."
  }
}

export default PatoRuivo