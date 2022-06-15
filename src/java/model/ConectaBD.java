/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

import static java.lang.System.out;
import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author a701e
 */
public class ConectaBD {

    public static Connection con = null;
    private static String bd = "colegio";
    public static String usuario = "root";
    public static String passw = "";
    public static String url = "jdbc:mysql://localhost/" + bd;

    public static Connection abrir() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url, usuario, passw);
            System.out.println("Conexión exitosa:" + con);

        } catch (Exception e) {
            System.out.println("Error en la conexion...");
            out.print("mal");
            e.printStackTrace();
            return null;
        }
        return con;
    }
  
    public static void cerrar() {
        try {
            if (con != null) {
                con.close();
            }
        } catch (Exception e) {
            System.out.println(
                    "Error: No se logro cerrar  la conexion:\n " + e);
        }
    }
}
