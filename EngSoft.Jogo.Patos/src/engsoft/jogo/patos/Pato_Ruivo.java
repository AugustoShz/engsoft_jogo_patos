package engsoft.jogo.patos;

// Herança da super-classe Pato.java
// Implementação da interface Padrao_Grasnar.java que contém um metodo abstrato
public class Pato_Ruivo extends Pato implements Padrao_Grasnar {


	public Pato_Ruivo()
	{
		setComportamento(new Voaveis_Asa());		
	}
	
	// Polimorfismo por sobreposição pela reutilização de um método abstrato da super-classe Pato.java
	public String mostrar() {
		return "Eu sou o Pato Ruivo." ;
	}

	public String grasnar() {
		// TODO Auto-generated method stub
		return 	"Que-Que.";
	
	}

}
