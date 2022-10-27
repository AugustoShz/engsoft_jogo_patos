package engsoft.jogo.patos;

// Herança da super-classe Pato.java
// Implementação da interface Padrao_Grasnar.java que contém um metodo abstrato
public class Pato_Bravo extends Pato implements  Padrao_Grasnar{

	// A delegação trouxe o comportamento de voar com asas à sub-classe
	public Pato_Bravo()	
	{
		setComportamento(new Voaveis_Asa());		
	}
	
	// Polimorfismo por sobreposição pela reutilização de um método abstrato da super-classe Pato.java
	public String mostrar() {		
		return "Eu sou o Pato Bravo.";
	}

	// Implementação do método abstrato da interface Padrao_Grasnar.java
	public String grasnar() {
		return "Que-Que. Grrrrrrrrr.";
	}

}
