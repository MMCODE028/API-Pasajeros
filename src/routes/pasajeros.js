const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const pasajeros = require('../routes/dbPasajeros.json')
router.get('/',(req, res) => {
    res.json(pasajeros);

});

router.post('/', (req, res) =>{
    const {Nombre, Apellido, Edad, Aerolinea, Celular } = req.body;
    if(Nombre && Apellido && Edad && Aerolinea && Celular ){
        const id = pasajeros.length + 1;
        const newPasajero = {...req.body,id};
        pasajeros.push(newPasajero);
        res.json(pasajeros);
    }else{
        res.send("Erroneo")
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(pasajeros, (pasajero, i) => {
        if(pasajero.id == id){
            pasajeros.splice(i, 1);
        }
    });
    res.send(pasajeros);
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {Nombre, Apellido, Edad, Aerolinea, Celular } = req.body;
    if(Nombre && Apellido && Edad && Aerolinea && Celular){
        _.each(pasajeros, (pasajero, i) => {
            if(pasajero.id == id){
                pasajero.Nombre = Nombre;
                pasajero.Apellido = Apellido;
                pasajero.Edad = Edad;
                pasajero.Aerolinea = Aerolinea;
                pasajero.Celular = Celular;
            }
        });
        res.json(pasajeros);
    } else{
        res.status(500).json({error: 'Tenemos un error'});
    }
});

    




module.exports = router;