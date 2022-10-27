import Comportamento from '../interfaces/Comportamento';
import PadraoCorredores from '../interfaces/PadraoCorredores';
import PadraoVoaveis from '../interfaces/PadraoVoaveis'

abstract class Pato {
	
	protected _comportamento_pato?: PadraoVoaveis
	
	protected _comportamento_pato_correr?: PadraoCorredores

	abstract mostrar(): string;
	
	public nadar(): string
	{
		return "Pato Nadando.";		
	}	

	public correr(): string {
		return "Não consigo correr...Que"
	}
	
	public disparar(): string {
		return "Se eu não corro, imagine disparar."
	}

	public setComportamento( padrao: PadraoVoaveis ): void
	{
		this._comportamento_pato = padrao;		
	}

	public setComportamentoCorrer(padrao: PadraoCorredores) : void {
		this._comportamento_pato_correr = padrao
	}
	
	public comportamento_pato(): string
	{
		return this._comportamento_pato?.voar() || "Sem comportamento de voar"
	}

	public comportamento_pato_correr(): string {
		return this._comportamento_pato_correr?.correr() ?? "Sem comportamento de correr"	
	}

	public comportamento_pato_disparar(): string {
		return this._comportamento_pato_correr?.disparar() ?? "Sem comportamento de dispato"
	}
}

export default Pato