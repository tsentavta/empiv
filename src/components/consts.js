
// copper
// tin
// brass
// steel
//
// медь
// олово
// латунь
// сталь

export const materialConsts = {

    copper: {
        name: "Медь",
        relative_magnetic_permeability: 0.999994,     //относительная магнитна проницаемость
        // relative_permeability: 1,       //диэлектрическая проницаемость
        electrical_conductance: 59594755,      //проводимость
        // electrical_resistance: 1,       //сопротивление
    },

    tin: {
        name: "Олово",
        relative_magnetic_permeability: 1.000004,     //относительная магнитна проницаемость
        // relative_permeability: 1,       //диэлектрическая проницаемость
        electrical_conductance: (1/1.13)*10000000,      //проводимость
        // electrical_resistance: 1,       //сопротивление
    },
    brass: {
        name: "Латунь",
        relative_magnetic_permeability: 1.000004,     //относительная магнитна проницаемость
        // relative_permeability: 1,       //диэлектрическая проницаемость
        electrical_conductance: (1/6.3)*100000000,      //проводимость
        // electrical_conductance: 80000,      //проводимость
        // electrical_resistance: 1,       //сопротивление
    },
    steel: {
        name: "Сталь",
        relative_magnetic_permeability: 100,     //относительная магнитна проницаемость
        // relative_permeability: 1,       //диэлектрическая проницаемость
        electrical_conductance: 7690000,      //проводимость
        // electrical_resistance: 1,       //сопротивление
    }
}