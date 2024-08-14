package SpotFilm.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Criptografo {
    private BCryptPasswordEncoder criptografo;

    public Criptografo(){}

    public String criptografar(String senha)
    {
        return criptografo.encode(senha);
    }
}
