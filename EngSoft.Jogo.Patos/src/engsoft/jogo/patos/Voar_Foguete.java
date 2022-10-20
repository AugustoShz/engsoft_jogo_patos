package engsoft.jogo.patos;

// Classe que implementa o método voar e getVelocidade a partir da interface Padrao_Voaveis.java
public class Voar_Foguete implements Padrao_Voaveis{
	
	private double velocidade;
	
	public Voar_Foguete()
	{
		velocidade = 1000;	
	}
	
	public String voar() {
		return "Voando como um foguete. Velocidade: " + getVelocidade();		
	}

	public double getVelocidade() {
		return velocidade;
	}	
}
