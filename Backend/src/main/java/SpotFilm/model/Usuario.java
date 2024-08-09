package SpotFilm.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.*;

@Entity
@Table(name = "usuario")
@Inheritance(strategy = InheritanceType.JOINED)
public class Usuario extends SpotFilm.model.Admin //implements UsuarioInterface
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private String nome = "";

    @Getter
    @Setter
    private String email = "";

    @Getter
    @Setter
    private String senha = "";

    @Getter
    @Setter
    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    @Getter
    @Setter
    @Column(name = "genero_preferido1")
    private Integer generoPreferido1;

    @Getter
    @Setter
    @Column(name = "genero_preferido2")
    private Integer generoPreferido2;

    @Getter
    @Setter
    @OneToMany(mappedBy = "usuario")
    private List<Avaliacao> avaliacoes;

    protected Usuario(){
        super(0);
    }

    public Usuario( int eAdmin, String nome, String email, String senha, LocalDate dataNascimento, Integer generoPreferido1, Integer generoPreferido2){
        super(eAdmin);
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.generoPreferido1 = generoPreferido1;
        this.generoPreferido2 = generoPreferido2;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", dataNascimento=" + dataNascimento +
                ", generoPreferido1=" + generoPreferido1 +
                ", generoPreferido2=" + generoPreferido2 +
                ", Admin=" + getAdmin() +
                '}';
    }

    public static boolean autenticarUsuario(String email, String senha, Usuario usuario){
        BCryptPasswordEncoder criptografar = new BCryptPasswordEncoder();
        String senhaCriptografada = criptografar.encode(senha);
        return usuario.email.equals(email) && usuario.senha.equals(senha);
    }

}