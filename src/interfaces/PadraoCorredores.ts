import Comportamento from "./Comportamento"

interface PadraoCorredores extends Comportamento {
  correr(): string
  disparar(): string
  getVelocidade(): number
}

export default PadraoCorredores