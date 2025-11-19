use("chocolate")
db.negro.insertMany([
    {
        calorias:"598 kcal / 100g",
        saludable:"Sí, fuente de antioxidantes (consumo moderado)",
        marca:"Lindt Excellence 70%",
    },
    {
        calorias:"604 kcal / 100g",
        saludable:"Sí, muy alto en antioxidantes, pero denso en calorías",
        marca:"Valor 100% Cacao",
    },
    {
        calorias:"546 kcal / 100g",
        saludable:"Moderado (contiene más azúcar que los más puros)",
        marca:"Godiva Dark Chocolate",
    },
    {
        calorias:"481 kcal / 100g",
        saludable:"Sí, apto para dietas bajas en azúcar/diabéticos",
        marca:"Valor 70% Cacao Sin Azúcar",
    },
    {
        calorias:"580 kcal / 100g",
        saludable:"Sí, alto contenido de cacao y bajo en azúcar",
        marca:"Vivani Organic 85%",
    },
    {
        calorias:"560 kcal / 100g",
        saludable:"Moderado a alto, contiene buen cacao pero también azúcar",
        marca:"Nestlé Extrafino Negro 52%",
    },
    {
        calorias:"595 kcal / 100g",
        saludable:"Sí, opción orgánica y de alto porcentaje",
        marca:"Pacari Raw 75% (Orgánico)",
    },
    {
        calorias:"570 kcal / 100g",
        saludable:"Moderado (contiene aditivos y más leche que el negro estándar)",
        marca:"Milka Darkmilk",
    },
    {
        calorias:"585 kcal / 100g",
        saludable:"Sí, opción gourmet de alta calidad y alto porcentaje",
        marca:"Valrhona Guanaja 70%",
    },
    {
        calorias:"590 kcal / 100g",
        saludable:"Sí, buena opción accesible de alto porcentaje",
        marca:"Mercadona 85% Cacao",
    }
]);
db.blanco.insertMany([
    {
        calorias:"539 kcal / 100g",
        saludable:"No (Alto en azúcar y grasa, no contiene sólidos de cacao)",
        marca:"Nestlé Postres Blanco",
    },
    {
        calorias:"555 kcal / 100g",
        saludable:"No (Alto contenido de azúcar y manteca de cacao)",
        marca:"Lindt Swiss Classic White",
    },
    {
        calorias:"560 kcal / 100g",
        saludable:"No (Golpe calórico por la adición de galletas/aditivos)",
        marca:"Milka Oreo White",
    },
    {
        calorias:"530 kcal / 100g",
        saludable:"No (Opción básica con alta cantidad de azúcar)",
        marca:"Hacendado Chocolate Blanco",
    },
    {
        calorias:"570 kcal / 100g",
        saludable:"No (Opción de sabor intenso, pero alta en calorías)",
        marca:"Valrhona Ivoire 35%",
    },
    {
        calorias:"525 kcal / 100g",
        saludable:"No (Formato popular, pero alto en azúcares)",
        marca:"Kinder Maxi King (estimación barra)",
    },
    {
        calorias:"540 kcal / 100g",
        saludable:"No (Opción menos grasa que otros, pero muy dulce)",
        marca:"Chocolates Simón Coll Blanco",
    },
    {
        calorias:"550 kcal / 100g",
        saludable:"No (Versión con nueces que aumentan la grasa y calorías)",
        marca:"Ferrero Raffaello (estimación unidad)",
    },
    {
        calorias:"520 kcal / 100g",
        saludable:"No (Una de las opciones más dulces y menos nutritivas)",
        marca:"Hershey's Kisses White",
    },
    {
        calorias:"545 kcal / 100g",
        saludable:"No (Chocolate blanco estándar con aditivos)",
        marca:"Torras Chocolate Blanco",
    }
]);
db["con leche"].insertMany([
    {
        calorias:"530 kcal / 100g",
        saludable:"No (Alto en azúcar y grasa, bajo en cacao)",
        marca:"Milka Alpine Milk",
    },
    {
        calorias:"515 kcal / 100g",
        saludable:"Moderado (Famoso por su suavidad, pero azucarado)",
        marca:"Nestlé Classic con Leche",
    },
    {
        calorias:"500 kcal / 100g",
        saludable:"No (Contiene malta y es muy dulce)",
        marca:"Toblerone Milk",
    },
    {
        calorias:"545 kcal / 100g",
        saludable:"Moderado (Opción premium, mejor calidad de cacao, pero alto en grasa)",
        marca:"Lindt Milk (Gold Bar)",
    },
    {
        calorias:"550 kcal / 100g",
        saludable:"No (Relleno con caramelo que aumenta las calorías y azúcar)",
        marca:"Snickers (estimación barra)",
    },
    {
        calorias:"535 kcal / 100g",
        saludable:"Moderado (Chocolate con leche clásico)",
        marca:"Kinder Chocolate (estimación barra)",
    },
    {
        calorias:"520 kcal / 100g",
        saludable:"No (Alto en azúcares simples)",
        marca:"Mars Bar (estimación barra)",
    },
    {
        calorias:"510 kcal / 100g",
        saludable:"Moderado (Chocolate con leche de calidad)",
        marca:"Chocolat Frey Milk",
    },
    {
        calorias:"530 kcal / 100g",
        saludable:"No (Golpe calórico por adición de arroz inflado)",
        marca:"Crunch (Nestlé)",
    },
    {
        calorias:"525 kcal / 100g",
        saludable:"Moderado (Opción accesible, sabor familiar)",
        marca:"Cadbury Dairy Milk",
    }
]);
db.dulce.insertMany([
    {
        calorias:"490 kcal / 100g", // Más cerca de una golosina que una tableta
        saludable:"No (Alto contenido de azúcar y baja calidad de cacao)",
        marca:"M&M's Chocolate con Leche",
    },
    {
        calorias:"550 kcal / 100g",
        saludable:"No (Alto en azúcar, poco valor nutricional)",
        marca:"Kit Kat Chocolate",
    },
    {
        calorias:"540 kcal / 100g",
        saludable:"No (Relleno de crema y mucho azúcar)",
        marca:"Ferrero Rocher (estimación unidad)",
    },
    {
        calorias:"560 kcal / 100g",
        saludable:"No (Cobertura de chocolate con leche y más azúcar)",
        marca:"Bocadito Holanda",
    },
    {
        calorias:"480 kcal / 100g",
        saludable:"No (Golosina de chocolate con centro cremoso)",
        marca:"Twix (estimación barra)",
    },
    {
        calorias:"570 kcal / 100g",
        saludable:"No (Tableta muy azucarada)",
        marca:"Chocolatina Jet",
    },
    {
        calorias:"535 kcal / 100g",
        saludable:"No (Alto en grasa y azúcar)",
        marca:"Reese's Peanut Butter Cups",
    },
    {
        calorias:"520 kcal / 100g",
        saludable:"No (Golosina de chocolate con relleno de turrón)",
        marca:"Three Musketeers (estimación barra)",
    },
    {
        calorias:"580 kcal / 100g",
        saludable:"No (Muy alto en azúcar, sabor artificial)",
        marca:"Chocolate Relleno de Fruta",
    },
    {
        calorias:"510 kcal / 100g",
        saludable:"No (Opción dulce y popular)",
        marca:"Taza de Chocolate con Naranja",
    }
]);
db.rubi.insertMany([
    {
        calorias:"550 kcal / 100g",
        saludable:"No (Contiene azúcar añadido, color y sabor natural de cacao Ruby)",
        marca:"Kit Kat Ruby",
    },
    {
        calorias:"575 kcal / 100g",
        saludable:"No (Alternativa premium y dulce, misma base de azúcar)",
        marca:"Callebaut Ruby RB1",
    },
    {
        calorias:"560 kcal / 100g",
        saludable:"No (Opción con frutos rojos que complementan el sabor)",
        marca:"Ruby con Frutos Rojos (marca genérica)",
    },
    {
        calorias:"540 kcal / 100g",
        saludable:"No (Variante con sabor exótico, mantiene alto azúcar)",
        marca:"Ruby con Vainilla",
    },
    {
        calorias:"565 kcal / 100g",
        saludable:"No (Producto de especialidad, alto en calorías)",
        marca:"Valrhona Ruby (estimación)",
    },
    {
        calorias:"535 kcal / 100g",
        saludable:"No (Opción de sabor más ácido y afrutado, pero dulce)",
        marca:"Ruby Chocolate estándar",
    },
    {
        calorias:"550 kcal / 100g",
        saludable:"No (Formato de chocolatina, similar en calorías al blanco/con leche)",
        marca:"Chocolatina Ruby",
    },
    {
        calorias:"570 kcal / 100g",
        saludable:"No (Ruby con nueces que aumentan el aporte graso)",
        marca:"Ruby con Pistachos",
    },
    {
        calorias:"545 kcal / 100g",
        saludable:"No (Opción para repostería, base de azúcar y manteca de cacao)",
        marca:"Barry Callebaut Ruby",
    },
    {
        calorias:"560 kcal / 100g",
        saludable:"No (Tableta pequeña, alto en azúcar)",
        marca:"Bombón Ruby (estimación)",
    }
]);