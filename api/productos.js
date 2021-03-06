class Productos {

    constructor() {
        // incializar variables
        this.productos = [];
    }

    Agregar(title, price, thumbnail) {
        let maxId = 1;

        try {
            if (this.productos.length > 0) {
                maxId = this.productos.length + 1;
            }

            this.productos.push({ id: maxId, title: title, price: price, thumbnail: thumbnail });
            return { id: maxId, title: title, price: price, thumbnail: thumbnail };

        } catch (error) {
            throw new Error(error);
        }
    }

    Listar(id) {
        try {

            if (id == undefined) {

                if (this.productos.length == 0) {
                    return { error: 'no hay productos cargados' };
                } else {
                    return this.productos;
                }

            } else {
                let respuesta = [];

                if (productos.length == 0) {
                    respuesta = { error: 'producto no encontrado' };
                    return respuesta;

                } else {
                    for (var i = 0; i < this.productos.length; i++) {
                        if (this.productos[i].id == id) {
                            respuesta = this.productos[i];
                        }
                    }
                    if (respuesta.length == 0) {
                        respuesta = { error: 'producto no encontrado' };
                    }

                    return respuesta;
                }

            }

        } catch (error) {

            throw new Error(error);
        }
    }

}

// exporto una instancia de la clase
module.exports = new Productos();