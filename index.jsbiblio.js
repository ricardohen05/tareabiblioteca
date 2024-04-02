class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next ?? null;
    }
}
class Contenido {
    constructor(titulo, autor, disponibilidad, codigo, prestado) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidad = false;
        this.codigo = codigo;
        this.prestado = prestado; 
    }
}
class LinkedList {
    head = null;
    size = 0;
    ret = false;
    add(value) {
        if (!this.size) {

            this.head = new Node(value);
        } else {
            this.head = new Node(value, this.head)
        }
        this.size++;
    }
    get(titulo) {
        let current = this.head;
        while (current) {
            if (current.value.titulo.startsWith(titulo)) {
                return {
                    contenido: current.value,
                    disponible: current.disponibilidad, 
                };
            }
            current = current.next;
        }
        return null;
    }
    change(titulo) {
        let current = this.head;
        while (current) {
            if (current.value.titulo.startsWith(titulo)) {
                current.value.disponibilidad = !current.value.disponibilidad;
            }
            current = current.next;
        }
    }
    getValue(){
    if(this.ret===false){
     this.ret = true;
    }else{
        this.ret = false;
    }
        return this.ret;
    }
    prestarLibro(titulo) {

       let contenido = this.get(titulo);
        if (!this.getValue()===true) {
            contenido.disponible = false;
            console.log(`Libro "${titulo}" prestado correctamente.`);
        } else {
            console.log(`No se encontró el libro "${titulo}".`);
        }
        contenido.disponible = this.getValue();
    }
    devolverLibro(titulo) {
        let contenido = this.get(titulo);
        contenido.disponible = this.getValue();
        if (this.getValue()===false) {
            
            console.log(`Libro "${titulo}" devuelto correctamente.`);
        } else {
            console.log(`No se encontró el libro "${titulo}".`);
        }
    }
}
let librerias = new LinkedList();
librerias.add(new Contenido("padre rico padre pobre", "kiyosaki", true, 12843));
librerias.add(new Contenido("Inferno", "Dan brown", true, 1293));
librerias.add(new Contenido("la guerra de los mundos", "wells", true, 2085));
librerias.add(new Contenido("la divina comedia", "", true, 10293));
console.log(librerias.get("padre rico padre pobre"));
librerias.change("padre rico padre pobre")
console.log(librerias.get("Inferno"));
console.log(librerias.get("padre rico padre pobre"));
console.log(librerias.get("la guerra de los mundos"));
console.log(librerias.get("la divina comedia"));
console.log(librerias);
librerias.add(new Contenido("padre rico padre pobre", "kiyosaki", true, 12843, false)); 
let libro = librerias.get("padre rico padre pobre");
console.log(`Título: ${libro.contenido.titulo}, Disponible: ${librerias.getValue()}`);
librerias.prestarLibro("padre rico padre pobre");
libro = librerias.get("padre rico padre pobre");
console.log(`Título: ${libro.contenido.titulo}, Disponible: ${librerias.getValue()}`);
librerias.devolverLibro("padre rico padre pobre");
libro = librerias.get("padre rico padre pobre");
console.log(`Título: ${libro.contenido.titulo}, Disponible: ${librerias.getValue()}`);