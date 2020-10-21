let Carros = [{"Marca":"Citroen", "Modelo": "C4", "Placa": "ABC1100", "VelocidadeMaxima":"200"},
            {"Marca":"Chevrolet", "Modelo": "Onix", "Placa": "OEH7382", "VelocidadeMaxima":"190"},
            {"Marca":"Hyundai", "Modelo": "HB20", "Placa": "KNF9362", "VelocidadeMaxima":"210"},
            {"Marca":"Ford", "Modelo": "KA", "Placa": "JFI9264", "VelocidadeMaxima":"160"},
            {"Marca":"Citroen", "Modelo": "C3", "Placa": "KFR9900", "VelocidadeMaxima":"180"},
]

document.write("<table border='1'>");
document.write("<tr>");
document.write("<th>Marca</th>");
document.write("<th>Modelo</th>");
document.write("<th>Placa</th>");
document.write("<th>Velocidade Máxima</th>");
document.write("</tr>");

for(let i = 0; i < Carros.length; i++){
    document.write("<tr><td>");
    document.write(Carros[i].Marca);
    document.write("</td><td>");
    document.write(Carros[i].Modelo);
    document.write("</td><td>");
    document.write(Carros[i].Placa);
    document.write("</td><td>");
    document.write(Carros[i].VelocidadeMaxima);
    document.write("</td></tr>");
}

document.write("</table>")