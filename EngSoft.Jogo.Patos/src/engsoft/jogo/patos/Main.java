package engsoft.jogo.patos;

public class Main {

	public static void main(String[] args) {
		// Herança de Pato para Pato_Ruivo
		Pato pt = new Pato_Ruivo();	
		
		System.out.println(pt.mostrar());
		System.out.println(pt.nadar());
		System.out.println(pt.comportamento_pato());
		
		// Delegação do comportamento de voar
		pt.setComportamento(new Voar_Foguete());
		
		System.out.println(pt.comportamento_pato());
	}

}
