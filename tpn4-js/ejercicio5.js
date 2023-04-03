




class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, anio_nacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.anio_nacimiento = anio_nacimiento;
    }
  
    mostrarGeneracion() {
      const generaciones = {
        "Silent Generation": {inicio: 1930, fin: 1948, circunshistorica: "conflictos belicos", rasgos: "austeridad"},
        "Baby Boomer": { inicio: 1949, fin: 1968, circunshistorica: "Paz y explocion demografica", rasgos: "ambicion" },
        "Generación X": { inicio: 1969, fin: 1980, circunshistorica: "crisis del 73 y transicion española", rasgos: "obsesion por el exito" },
        "Generación Y (Millennials)": { inicio: 1981, fin: 1993, circunshistorica: "inicio de la digilitacion", rasgos: "frustracion" },
        "Generación Z": { inicio: 1994, fin: 2010, circunshistorica: "expancion masiva de internet", rasgos: "irreverencia" },
      };
  
      let generacion = "";
      for (let gen in generaciones) {
        if (
          this.anio_nacimiento >= generaciones[gen].inicio &&
          this.anio_nacimiento <= generaciones[gen].fin
        ) {
          generacion = gen;
          break;
        }
      }
  
      console.log(
        `La persona pertenece a la generación ${generacion}. Rasgo característico: ${generaciones[generacion].rasgo}`
      );
    }
  }

const persona1 = new Persona("Hernán", 25, "40965324", "H", 65, 1.78, 1995);
persona1.mostrarGeneracion(); // La persona pertenece a la generación Generación Y (Millennials). Rasgo característico: Adaptativos y tecnológicos.

  