var dibujo, lienzo, t, b ;

function inicio()
{
    t = document.getElementById("usuario");
    b = document.getElementById("dibujalo");
    dibujo = document.getElementById("dib");
    lienzo = dibujo.getContext("2d");
    b.addEventListener("click", Dgrillas);
    
    
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100,(Math.PI * 2 ),false);
    lienzo.closePath();
    lienzo.stroke();
    
    
}



function Dgrillas(l)
{
    var lien = lienzo;
    var rayas = Number(t.value);
    var ancho = 300, alto = 300;
    var linea, p;
    var ancholinea = ancho / rayas;
    var limiteX = ancho / ancholinea;
    var limiteY = alto / ancholinea;
     
    l.strokeStyle = "#AAA";
    for(linea = 0;  linea <= limiteX; linea++ )
        {
            p = (linea * ancholinea) + 0.5;
            lien.beginPath();
            lien.moveTo(p, 0.5);
            lien.lineTo(p, ancho-0.5);
            lien.closePath();
            lien.stroke();
        }
    
   for(linea = 0; linea <=limiteY; linea++)
        {
            p = (linea * ancholinea) + 0.5;
            lien.beginPath();
            lien.moveTo(0.5, p);
            lien.lineTo(alto - 0.5, p);
            lien.closePath();
            lien.stroke();
        }
}