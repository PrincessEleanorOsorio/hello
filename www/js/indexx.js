
        document.getElementById("show").addEventListener("click",function()
        {
        document.write("<h3>"+"NAME: "+localStorage.getItem("dataname")+"</h3>");
        document.write("<h3>"+"Nickname: "+localStorage.getItem("datanick")+"</h3>");
        document.write("<h3>"+"ADDRESS: "+localStorage.getItem("dataaddress")+"</h3>");
        document.write("<h3>"+"PHONE NUMBER: "+localStorage.getItem("dataphone")+"</h3>");
        document.write("<h3>"+"BIRTHDATE: "+localStorage.getItem("databday")+"</h3>");
        document.write("<h3>"+"AGE: "+localStorage.getItem("dataage")+"</h3>");
        document.write("<h3>"+"STATUS: "+localStorage.getItem("datastatus")+"</h3>");
        
        document.write("<h3>"+"FOOD: "+localStorage.getItem("datafood")+"</h3>");
        document.write("<h3>"+"DRINKS: "+localStorage.getItem("datadrinks")+"</h3>");
        document.write("<h3>"+"SONG: "+localStorage.getItem("datasong")+"</h3>");
        document.write("<h3>"+"BOOK: "+localStorage.getItem("databook")+"</h3>");
        document.write("<h3>"+"COLOR: "+localStorage.getItem("datacolor")+"</h3>");
        document.write("<h3>"+"MOVIE: "+localStorage.getItem("datamovies")+"</h3>");

        document.write("<h3>"+"COMMENT: "+localStorage.getItem("datacomment")+"</h3>");
    
     });
document.getElementById("save").addEventListener("click",function(){
    var a = document.getElementById("Name").value;
         localStorage.setItem("dataname",a);
    var b = document.getElementById("Nickname").value;
         localStorage.setItem("datanick",b);
    var c = document.getElementById("Address").value;
         localStorage.setItem("dataaddress",c);
    var d = document.getElementById("Phone").value;
         localStorage.setItem("dataphone",d);
    var e = document.getElementById("Birthdate").value;
         localStorage.setItem("databday",e);
    var f = document.getElementById("Age").value;
         localStorage.setItem("dataage",f);
    var g = document.getElementById("Status").value;
         localStorage.setItem("datastatus",g);

    var aa = document.getElementById("Food").value;
         localStorage.setItem("datafood",aa);
    var bb = document.getElementById("Drinks").value;
         localStorage.setItem("datadrinks",bb);
    var cc = document.getElementById("Song").value;
         localStorage.setItem("datasong",cc);
    var dd = document.getElementById("Book").value;
         localStorage.setItem("databook",dd);
    var ee = document.getElementById("Color").value;
         localStorage.setItem("datacolor",ee);
    var ff = document.getElementById("Movies").value;
         localStorage.setItem("datamovies",ff);    

    var h = document.getElementById("comment").value;
         localStorage.setItem("datacomment",h);
    
        
});