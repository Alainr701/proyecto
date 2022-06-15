/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

public class Usuario {

    private String cuenta;
    private String nombre;
    private String clave;
    private String mail;
    private String tipo;

    public Usuario(String cuenta, String nombre,
            String clave, String mail,String tipo) {
        this.cuenta = cuenta;
        this.nombre = nombre;
        this.clave = clave;
        this.mail = mail;
        this.tipo = tipo;

    }
    public String getCuenta() {
        return cuenta;
    }

    public String getNombre() {
        return nombre;
    }

    public String getClave() {
        return clave;
    }

    public String getMail() {
        return mail;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
