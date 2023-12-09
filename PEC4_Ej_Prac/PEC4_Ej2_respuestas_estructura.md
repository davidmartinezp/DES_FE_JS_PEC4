## Ejercicio 2 – Hola Mundo con Angular

1. ### ¿Qué comando debes utilizar para crear un nuevo proyecto Angular
    utilizando Angular CLI denominado ecommerce? 

    Para crear un nuevo proyecto Angular denominado "ecommerce" utilizando Angular CLI, se ejecuta el siguiente comando en tu terminal:

    ```
    ng new ecommerce
    ```

    #### Ficheros de Configuración en la Raíz del Proyecto:

    - `tsconfing.app.json`: Configuración TypeScript específica para la aplicación.

    - `angular.json`: Configuración principal de Angular CLI para el proyecto.

    - `package.json`: Archivo de configuración de npm con información sobre las dependencias y scripts del proyecto.

    - `.editorconfig`: Configuración del editor de código para mantener consistencia en el estilo de codificación.

    - `.gitignore`: Archivo que especifica qué archivos y carpetas deben ser ignorados por Git.

    - `tsconfig.spec.json`: Configuración TypeScript específica para las pruebas unitarias.

    - `tsconfig.json`: Configuración TypeScript para el proyecto en general.

    - `README.md`: Archivo de documentación del proyecto que proporciona información sobre cómo instalar, configurar y utilizar la aplicación.

    - `package-lock.json`: Archivo generado por npm que especifica la versión exacta de cada módulo instalado.

    #### Directorio `node_modules`:

    - Contiene las dependencias del proyecto, incluyendo bibliotecas y módulos de terceros.

    #### Directorio `src`:

    - `index.html`: Página HTML principal de la aplicación.

    - `main.ts`: Punto de entrada para la aplicación Angular.

    - `styles.css`: Archivo de estilos globales para la aplicación.

    - **Directorio `assets`**: Contiene archivos estáticos como imágenes, fuentes, etc.

    - **Directorio `app`**:

    - **Ficheros `app.component.*`**: Archivos relacionados con el componente principal de la aplicación.

    - **Fichero `app.module.ts`**: Archivo que define y configura el módulo principal de la aplicación.

    Esta estructura proporciona un marco organizativo estándar para proyectos Angular generados por Angular CLI, facilitando el desarrollo y mantenimiento del código.


2. ### Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

    #### @NgModule en app.module.ts:

    El decorador @NgModule se utiliza para definir los metadatos de un módulo en Angular. Algunas de las propiedades más comunes son:

    - Declarations: Un array de componentes, directivas y pipes que pertenecen a este módulo. Estos son los elementos que este módulo va a utilizar.

    - Imports: Un array de otros módulos que son necesarios para el funcionamiento de este módulo. Pueden ser módulos de Angular o módulos creados por el desarrollador.

    - Providers: Un array de servicios que estarán disponibles para toda la aplicación. Los servicios proporcionan funcionalidades que pueden ser compartidas entre diferentes partes de la aplicación.

    - Bootstrap: Especifica el componente raíz que se utilizará al iniciar la aplicación. Este componente se encuentra en el array de declarations.

    Ejemplo:

    ```
    @NgModule({ 
        declarations: [
            AppComponent,
            // ... otros componentes, directivas y pipes
        ],
        imports: [
            BrowserModule,
            FormsModule,
            // ... otros módulos
        ],
        providers: [
            MiServicio,
            // ... otros servicios
        ],
        bootstrap: [AppComponent]
    })
    ``` 

    #### @Component en app.component.ts:

    El decorador @Component se utiliza para definir los metadatos de un componente en Angular. Algunas de las propiedades más importantes son:

    - Selector: Un selector CSS que identifica el componente en el HTML. Puedes utilizar este selector para insertar el componente en otras plantillas.

    - TemplateUrl: La URL del archivo HTML que contiene el template del componente.

    - StyleUrls: Un array de URLs de archivos CSS que contienen los estilos del componente.

    ```
    @Component({ 
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    ```

3. ### ¿Es posible inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?

    Sí, es posible inyectar el template y los estilos directamente en el decorador `@Component` utilizando las propiedades template y styles. Esto se llama "template inline" y "styles inline". 

    Ejemplo:

    ```
    @Component({
        selector: 'app-root',
        template: '<h1>Hola Mundo</h1>',
        styles: ['h1 { color: red; }']
    })
    ```

    Sin embargo, no es la práctica recomendada en la mayoría debido a:

    - Mantenimiento: Puede ser difícil de mantener, especialmente en aplicaciones más grandes, donde tener los templates y estilos en archivos separados facilita la gestión.
    - Reutilización: La separación de archivos facilita la reutilización de componentes en diferentes partes de la aplicación o incluso en otras aplicaciones.
    - Editor de código: Los editores de código modernos ofrecen un mejor soporte cuando trabajas con archivos externos, proporcionando resaltado de sintaxis y funciones de autocompletado.
