import Pato from './src/classes/Pato'
import PatoCorredor from './src/classes/PatoCorredor'
import PatoMaratonista from './src/classes/PatoMaratonista'
import PatoRuivo from './src/classes/PatoRuivo'
import VoarFoguete from './src/classes/VoarFoguete'

const pt: Pato = new PatoRuivo()
console.log(pt.mostrar())
console.log(pt.nadar())
console.log(pt.comportamento_pato())

pt.setComportamento(new VoarFoguete())

console.log(pt.comportamento_pato())

const ptc: Pato = new PatoCorredor()
console.log(ptc.mostrar())
console.log(ptc.comportamento_pato_correr())

const ptm: Pato = new PatoMaratonista()
console.log(ptm.mostrar())
console.log(ptm.comportamento_pato_correr())
console.log(ptm.comportamento_pato_disparar())