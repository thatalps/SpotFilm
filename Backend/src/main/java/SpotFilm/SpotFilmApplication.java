package SpotFilm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpotFilmApplication {

	private static final Logger log = LoggerFactory.getLogger(SpotFilmApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpotFilmApplication.class);
	}



}
