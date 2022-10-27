package engsoft.jogo.patos;

// Classe abstrata, ou seja, que contém pelo menos um método abstrato
public abstract class Pato {
	
	// Compisição através do atributo do tipo interface Padrao_Voaveis 
	protected Padrao_Voaveis comportamento_pato;

	// Em uma classe abstrata deve ter pelo menos um método abstrato, nesse caso é o método mostrar()
	abstract String mostrar();
	
	public String nadar()
	{
		return "Pato Nadando.";		
	}	
	
	// Este método garante delegação ao projeto, modificando comportamentos sem a necessidade de executa-lo novamente (tempo de compilação)
	public void setComportamento(Padrao_Voaveis padrao)
	{
		comportamento_pato = padrao;
	}
	
	// Implementação do atributo comportamento_pato
	public String comportamento_pato()
	{		
		return comportamento_pato.voar();		
	}
}
