const info = function (p5) {
    let data;

    p5.preload = function () {
        data = p5.loadJSON("json/data.json");
    }  

    p5.setup = function() {
        p5.createCanvas(550, 600);
        console.log(data.negative)
    }
    
    p5.draw = function () { 
        p5.background(255)
        p5.textSize(28)
        p5.text("Información COVID-19", 10, 30);
        p5.textSize(24)
        p5.text("\n\nLos coronavirus son una familia de virus que \ncausan enfermedades (desde el resfriado común \nhasta enfermedades respiratorias más graves) y \ncirculan entre humanos y animales. En este caso, \nse trata del SARS-COV2. Apareció en China en \ndiciembre de 2019 y provoca una enfermedad \nllamada COVID-19, que se extendió por el mundo \ny fue declarada pandemia global por la \nOrganización Mundial de la Salud. \n\nDATOS EN MÉXICO. \n\nInfectados: " + p5.nfc(data.infected) + "\nNegativos: " + p5.nfc(data.negative) + "\nSospechosos: " + p5.nfc(data.suspected) + "\nDefunciones: " + p5.nfc(data.deceased), 10, 30);
        p5.noLoop();
    }
}

const information = new p5(info, 'info');