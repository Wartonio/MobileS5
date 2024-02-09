<%-- 
    Document   : Resultat
    Created on : 19 déc. 2023, 13:32:35
    Author     : Asus
--%>
<%@page import="model.*" %>
<%@page import="java.util.Vector" %>
<%
    Matiere[] s=(Matiere[]) request.getAttribute("matiere");
    Resultat[] rs =(Resultat[]) request.getAttribute("result");
%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <form action="action" method="post">
          <div class="col-md-12 text-center">
		<label for="" class="form-label"> Matiere </label>
                    <%	}
			%>
		</select><select name="style" id="" class="form-select" style="width: 400px; margin-left:  350px">
			<%
                            for(Matiere style : s) { %>
                            <option value="<%= style.getIdMatiere() %>"> <%= style.getNomMatiere() %> </option>
			<%	}
			%>
		</select>
	</div>
         <div class="col-md-12 text-center">

         <div class="col-md-12 text-center" style="padding-top: 20px">
                    <input type="submit" value="valider" class="btn btn-primary btn-block" style="background-color:buttonshadow ; color:black">

		</div>
                
        </form>
    </body>
</html>
