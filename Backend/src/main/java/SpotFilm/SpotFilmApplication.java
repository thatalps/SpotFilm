package SpotFilm;
import SpotFilm.model.Comentario;
import SpotFilm.repository.ComentarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.time.LocalDateTime;
import java.util.Date;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SpotFilmApplication implements CommandLineRunner{

	@Autowired
	private ComentarioRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(SpotFilmApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		repository.deleteAll();

		// save a couple of customers
		repository.save(new Comentario(LocalDateTime.now(), "Comentário Daora muito legal", 1, 1));
		repository.save(new Comentario(LocalDateTime.now(), "Comentário Legal", 1, 2));

		// fetch all customers
		System.out.println("Comentários found with findAll():");
		System.out.println("-------------------------------");
		for (Comentario comentario : repository.findAll()) {
			System.out.println(comentario);
		}
		System.out.println();

	}

}
