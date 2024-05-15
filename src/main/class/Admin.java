public abstract class Admin
{

    protected int Admin;

    //retorna se usuário é ou não administrador
    public boolean getAdmin() {
        return Admin==1;
    }
    //o usuario pode modificar se é admin de acordo com os dados do banco
    protected void setAdmin(int admin) {
        Admin = admin;
    }
}