package engsoft.jogo.patos;

public class Main {

	public static void main(String[] args) {
		Pato pt = new Pato_Ruivo();		
		
		System.out.println(pt.mostrar());
		System.out.println(pt.nadar());
		System.out.println(pt.comportamento_pato());
		
		pt.setComportamento(new Voar_Foguete());
		
		System.out.println(pt.comportamento_pato());
	}

}
