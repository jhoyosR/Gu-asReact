const usuario = {
    nombre: "John",
    isLoggedIn: True
}

function AdminPanel() {
    return (
        <>
        <h2>Bienvenido {usuario.nombre}</h2>
        <p>¿Qué deseas hacer hoy? <br /> -Noticias <br /> -Manejo de cuenta <br /> -Ajustes</p>
        
        </>
    )
}

function LoginForm() {
    return (
        <h2>Por favor, inicia sesión para seguir usando nuestra app</h2>
    )
}

let content;
if (usuario.isLoggedIn) {
    return content = <AdminPanel/>
}
return content = <LoginForm/>
