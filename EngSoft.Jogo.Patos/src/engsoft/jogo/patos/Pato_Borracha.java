package engsoft.jogo.patos;

// Herança da super-classe Pato.java
public class Pato_Borracha extends Pato {

	// A delegação trouxe o comportamento de não voar
	public Pato_Borracha()
	{
		setComportamento(new Nao_Voa());		
	}
	
	// Polimorfismo por sobreposição pela reutilização de um método abstrato da super-classe Pato.java
	public String mostrar() {
		return "Ol�, eu sou de Boarracha.";
	}
	
}
