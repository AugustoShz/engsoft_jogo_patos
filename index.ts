import Pato from './src/classes/Pato'
import PatoRuivo from './src/classes/PatoRuivo'
import VoarFoguete from './src/classes/VoarFoguete'

const pt: Pato = new PatoRuivo()
console.log(pt.mostrar())
console.log(pt.nadar())
console.log(pt.comportamento_pato())

pt.setComportamento(new VoarFoguete())

console.log(pt.comportamento_pato())