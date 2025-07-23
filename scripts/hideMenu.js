// let menuVisible = false;
// //Función que oculta o muestra el menu
// function mostrarOcultarMenu(){
//     if(menuVisible){
//         document.getElementById("nav").classList ="";
//         menuVisible = false;
//     }else{
//         document.getElementById("nav").classList ="responsive";
//         menuVisible = true;
//     }
// }
// function seleccionar(){
//     //oculto el menu una vez que selecciono una opcion
//     document.getElementById("nav").classList = "";
//     menuVisible = false;
// }

let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que se ejecuta al seleccionar una opción del menú
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Exportarlas explícitamente
export { mostrarOcultarMenu, seleccionar };






