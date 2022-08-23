let password;
let list = ["Tomate 2kg", "Zanahoria 3kg", "Pera 2kg", "Albahca", "Papa 3kg", "Vacio 1.5kg"];
let section = prompt("Ingrese el número de la sección que quiere visitar (compras 1; helados 2)")
let gustos = ["Chocolate", "Frambuesa", "Limon", "Dulce de Leche Granizado"]

if( section == 1){
    do{
    password = prompt("Para acceder a la lista de compras ingrese la contraseña");

    } while( password !== "letmein");

    for(let i= 0; i < list.length; i++){
    console.log(list[i]);
    }

} else if(section == 2){
    do{
        sabores = prompt("Para verficar el acceso ingrese su gusto favorito de Helado").toLocaleLowerCase()
    } while (sabores !=="chocolate");
    
    for( let i = 0; i < gustos.length; i++){
        console.log(gustos[i]);
    }
} else{ 
    alert("Ingrese una opción válida");
    
}


