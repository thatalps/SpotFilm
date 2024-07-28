package SpotFilm;

import SpotFilm.model.Usuario;
import SpotFilm.repository.UsuarioRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class SpotFilmApplication {

	private static final Logger log = LoggerFactory.getLogger(SpotFilmApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpotFilmApplication.class);
	}

	@Bean
	public CommandLineRunner demo(UsuarioRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new Usuario(1, "Jack", "Jack_email@hotmail.com", "123456", LocalDate.now(), 1, 2));
			repository.save(new Usuario(0, "Chloe", "Chloe_email@hotmail.com", "654321", LocalDate.now(), 1, 2));

			// fetch all customers
			log.info("Users found with findAll():");
			log.info("-------------------------------");
			repository.findAll().forEach(customer -> {
				log.info(customer.toString());
			});
			log.info("");

			// fetch an individual customer by ID
			Usuario customer = repository.findById(1L);
			log.info("Usuario found with findById(1L):");
			log.info("--------------------------------");
			log.info(customer.toString());
			log.info("");

		};
	}

}
