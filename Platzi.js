// Simples

let courses = 150;  // Cantidad de cursos disponibles
let coursePrice = 49.99;  // Precio de un curso
let userName = "CodeMaster2024";
let isCoursePurchased = false;  // No ha comprado el curso
let courseCategory = null;  // No se ha seleccionado categoría
let featuredCourse = "React for Beginners";

console.log(courses);

// Compuestas

let cart = ["Web Development Bootcamp", 2, "JavaScript Mastery"];  //representa el carrito de compras

// ------------------------------------ 

// Strings

let passwordPlatzi = " 12345CodeMaster ";  //Contraseña para acceder a la plataforma

console.log(passwordPlatzi.length);

console.log(passwordPlatzi.trim());

console.log(passwordPlatzi.includes('5'));

console.log(passwordPlatzi.toUpperCase());

console.log(passwordPlatzi.toLocaleLowerCase());

// ES6 - características

// Template strings

console.log(`El password del usuario es: ${passwordPlatzi}`); 

// Casting - ES6
let coursePriceJS = "49.99";
let coursePriceHTML = 29.99;
console.log(+coursePriceJS + coursePriceHTML);

// ------------------Condicionales----------------------

let coinsUser1 = 100;  // Representa créditos en la plataforma
let coinsUser2 = 50;

// ES6 - operador ternario

coinsUser1 <= coinsUser2 ? console.log("User 2 tiene menos créditos") : console.log("User 1 tiene menos créditos");

let customerNickname;

!customerNickname ? console.log("Ingresa tu nombre de usuario: ") : console.log("Bienvenido a la Plataforma Platzi");

// Falsy and Truthy values

// Strict comparison

let availableCourses = "5";  // cursos disponibles

availableCourses === 5 ? console.log("5 cursos disponibles") : console.log("Regresa para más cursos");

// -------------------------------- LOOPS ----------------------------------

const wishlist = ["JavaScript Fundamentals", "CSS Advanced", "React Hooks"];  // Lista de cursos deseados

wishlist.forEach((item) => { console.log(item); });  // Modifica el original

let newWishlist = wishlist.map(item => item.toUpperCase());  // Crea una copia

console.log(newWishlist);
console.log(wishlist);

// ------------------------------- Funciones ----------------------------------

// Funciones Declaradas

// Obtener curso destacado
function getFeaturedCourse() {
    console.log("photo/featured_course.png");
}

getFeaturedCourse();

// Funciones Expresadas

// Preparar la compra del curso
const preparePurchase = function() {
    console.log("Preparándose para realizar la compra");
};

preparePurchase();

// Función autoejecutada

(function() {
    console.log("¡Nuevos cursos exclusivos en la plataforma Platzi!");
})();

// Argumentos

// vale de bonus en compras
const validatePurchaseToken = function(email, token) {
    console.log(`Token: ${token} aplicado a ${email}, otorga 100 créditos adicionales!`);
};

validatePurchaseToken("user@mail.com", "bonus100");

// Argumentos opcionales

const validateDiscountCode = function(code = "default_discount") {
    console.log(`Código de descuento ${code} aplicado a tu carrito`);
};
validateDiscountCode();

// Retorno

function upcomingCourses() {
    return function() {
        return "El siguiente curso será sobre Next.js!";
    };
}

console.log(upcomingCourses()());

// ES6

// Arrow Function
// preparando la validación
const prepareCheckout = () => {
    console.log("Procesando...");
};

const applyDiscount = (percentage) => console.log(`Descuento de ${percentage}% aplicado`);

// ------------------------ OBJETOS ------------------------

// OBJETO PARES CLAVE-VALOR
const courseItem = {
    name: "CSS Advanced",
    price: 39.99,
    details: {
        category: "Frontend",
        duration: "10 horas"
    },
    ratings: ['4.5/5', '5/5', '4.8/5'],
    inStock: true
};

courseItem.ratings.forEach(rating => console.log(rating));

// Destructuración

const { name, price, details, ratings, inStock: isAvailable } = courseItem;

console.log(isAvailable);

// MÉTODOS

const featuredCourseItem = {
    nameF: "JavaScript Bootcamp",
    priceF: 59.99,
    detailsF: {
        categoryF: "Backend",
        durationF: "15 horas"
    },
    ratingsF: ['5/5', '4.9/5', '4.7/5'],
    onSale: true,
    instructor: "Platzi Instructor"
};

// Añadir una nueva propiedad
featuredCourseItem.thumbnail = "javascript_bootcamp_thumbnail.png";

// Eliminar una propiedad
delete featuredCourseItem.onSale;

console.log(featuredCourseItem);

Object.keys(featuredCourseItem).includes("") ? console.log("Datos incompletos") : console.log("Curso listo para la venta");

// Mezclar objetos

const exclusiveContent = {
    name: "React Advanced",
    price: 49.99,
    details: {
        category: "Frontend",
        duration: "12 horas"
    }
};

const completeCourseItem = { ...featuredCourseItem, ...exclusiveContent };

console.log(completeCourseItem);


//---------------------- ARREGLOS ----------------------------------


const courses = [
    {
        name: "Frontend Development",
        instructor: "Ana",
        duration: "8 horas"
    },
    {
        name: "Backend Development",
        instructor: "Carlos",
        duration: "10 horas"
    }
];

const coursesBDD = courses.map((course) => {
    return {
        name: course.name.toUpperCase(),
        instructor: course.instructor.toUpperCase(),
        duration: course.duration
    };
});

console.log(coursesBDD);
