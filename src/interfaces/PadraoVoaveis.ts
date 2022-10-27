import Comportamento from "./Comportamento"

interface PadraoVoaveis extends Comportamento {
  voar(): string
  getVelocidade(): number
}

export default PadraoVoaveis