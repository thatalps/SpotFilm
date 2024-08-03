package SpotFilm.model;

import jakarta.persistence.*;

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
    private Long id;

    private String nome = "";

    private String email = "";

    private String senha = "";

    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    @Column(name = "genero_preferido1")
    private Integer generoPreferido1;

    @Column(name = "genero_preferido2")
    private Integer generoPreferido2;

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

    public String getNome() {
        return nome;
    }

    public String getSenha() {
        return senha;
    }

    public String getEmail() {
        return email;
    }

    public Integer getGeneroFavorito1() {
        return generoPreferido1;
    }

    public Integer getGeneroFavorito2() {
        return generoPreferido2;
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

}