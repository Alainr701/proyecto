<%-- 
    Document   : index
    Created on : Jun 15, 2022, 12:29:57 PM
    Author     : a701e
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%@ page import="controller.login" %>
        <%
            String nombre = (String) request.getAttribute("nombre");
        %>
        <h1>Hello World! Administrador <%=nombre%></h1>
    </body>
</html>
