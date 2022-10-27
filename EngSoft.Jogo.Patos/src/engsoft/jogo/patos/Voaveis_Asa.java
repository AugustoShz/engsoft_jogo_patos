package engsoft.jogo.patos;

// Classe que implementa o método voar e getVelocidade a partir da interface Padrao_Voaveis.java
public class Voaveis_Asa implements Padrao_Voaveis {

	private double velocidade;

	public Voaveis_Asa() {
		velocidade = 10;
	}

	public String voar() {
		return "Voando como um p�ssaro que voa. Velocidade: "
				+ getVelocidade();
	}

	public double getVelocidade() {
		return velocidade;
	}

}
