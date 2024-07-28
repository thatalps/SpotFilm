package SpotFilm.model;
import jakarta.persistence.*;


@MappedSuperclass
public abstract class Admin
{
    protected int admin;

    protected Admin(int admin){
        this.admin = admin;
    }

    //retorna se usuário é ou não administrador
    public boolean getAdmin() {
        return admin==1;
    }
    //o usuario pode modificar se é admin de acordo com os dados do banco
    protected void setAdmin(int admin) {
        admin = admin;
    }
}