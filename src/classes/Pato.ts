import PadraoVoaveis from '../interfaces/PadraoVoaveis'

abstract class Pato {
	
	//@ts-expect-error
	protected _comportamento_pato: PadraoVoaveis

	abstract mostrar(): string;
	
	public nadar(): string
	{
		return "Pato Nadando.";		
	}	
	
	public setComportamento( padrao: PadraoVoaveis ): void
	{
		this._comportamento_pato = padrao;		
	}
	
	public comportamento_pato(): string
	{		
		return this._comportamento_pato.voar();		
	}
}

export default Pato