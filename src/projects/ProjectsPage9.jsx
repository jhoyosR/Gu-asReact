const videojuegos = [
    { titulo: "GTA V", disponibleConsola: true, id: 1},
    { titulo: "LoL", disponibleConsola: false, id: 2},
    { titulo: "Valorant", disponibleConsola: false, id: 3},
]

export default function ListaCompra() {
    const listaObjetos = videojuegos.map(videojuego =>
    <li
        key={videojuego.id}
        style={{
            color: videojuego.disponibleConsola ? "Blue" : "Green"
        }}    
        >
            {videojuego.titulo}
        </li>
        );

        return (
            <ul>{listaObjetos}</ul>
        )
}