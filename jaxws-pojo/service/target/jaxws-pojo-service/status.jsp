<html>
<head>
<% if (request.getParameter("electricstatus") != null) {
    com.redhat.bfarr.solarvillage.datamodel.Status status = com.redhat.bfarr.solarvillage.datamodel.Status.valueOf(request.getParameter("electricstatus") );
    com.redhat.bfarr.solarvillage.ws.ElectricBusinessService.statusToSet = status.value();
 }
 if (request.getParameter("structuralstatus") != null) {
    com.redhat.bfarr.solarvillage.datamodel.Status status = com.redhat.bfarr.solarvillage.datamodel.Status.valueOf(request.getParameter("structuralstatus") );
    com.redhat.bfarr.solarvillage.ws.StructuralBusinessService.statusToSet = status.value();
  }
 %>
</head>
<body>
  <h3>Adjust status returned for Electric and Structural Business Services</h3>
  <p>Electric Business Service default status : <%= com.redhat.bfarr.solarvillage.ws.ElectricBusinessService.statusToSet %></p>
  <form action="status.jsp" method="GET">
     <select name="electricstatus">
       <option value="APPROVED">Approved</option>
       <option value="DENIED">Denied</option>
     </select>
      <input type="submit" value="Update">
    </form>

  <p>Structural Business Service default status : <%= com.redhat.bfarr.solarvillage.ws.StructuralBusinessService.statusToSet %> </p>

   <form action="status.jsp" method="GET">
       <select name="structuralstatus">
         <option value="APPROVED">Approved</option>
         <option value="DENIED">Denied</option>
       </select>
        <input type="submit" value="Update">
      </form>

</body>
</html>