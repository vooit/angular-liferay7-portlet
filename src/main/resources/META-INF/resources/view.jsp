<%@ include file="./init.jsp" %>

<%
    boolean noConfig = Validator.isNull(favoriteColor);
%>

<c:choose>
    <c:when test="<%= noConfig %>">
        <p>Please select use the portlet configuration to select a favorite color.</p>
    </c:when>

    <c:otherwise>
        <p style="color: <%= favoriteColor %>">Favorite color: <span id="favoriteColor"><%= favoriteColor %></span>!</p>
    </c:otherwise>
</c:choose>

    <app>Loading2...</app>
    <script type="text/javascript" src="<%=request.getContextPath()%>/dist/js/vendor.bundle.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/dist/js/main.bundle.js"></script>
    <%--<script src="<%=request.getContextPath()%>/dist/app.js?<%= new java.util.Date().getTime()%>"></script>--%>