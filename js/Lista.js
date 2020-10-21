var Carros2 = [{ "Marca": "Citroen", "Modelo": "C4", "Placa": "ABC1100", "VelocidadeMaxima": "200" },
    { "Marca": "Chevrolet", "Modelo": "Onix", "Placa": "OEH7382", "VelocidadeMaxima": "190" },
    { "Marca": "Hyundai", "Modelo": "HB20", "Placa": "KNF9362", "VelocidadeMaxima": "210" },
    { "Marca": "Ford", "Modelo": "KA", "Placa": "JFI9264", "VelocidadeMaxima": "160" },
    { "Marca": "Citroen", "Modelo": "C3", "Placa": "KFR9900", "VelocidadeMaxima": "190" },
];
document.write("<ul>");
for (var i = 0; i < Carros2.length; i++) {
    document.write("<li>");
    document.write("<label>Marca: </label>");
    document.write(Carros2[i].Marca);
    document.write("<label> _ Modelo: </label>");
    document.write(Carros2[i].Modelo);
    document.write("<label> _ Placa: </label>");
    document.write(Carros2[i].Placa);
    document.write("<label> _ Velocidade Maxima: </label>");
    document.write(Carros2[i].VelocidadeMaxima);
    document.write("</li>");
}
document.write("</ul>");
