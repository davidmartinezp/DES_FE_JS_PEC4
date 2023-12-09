# Ejercicio 2 – Hola Mundo con Angular

1. ¿Qué comando debes utilizar para crear un nuevo proyecto Angular
    utilizando Angular CLI denominado ecommerce? 

    Para crear un nuevo proyecto Angular denominado "ecommerce" utilizando Angular CLI, se ejecuta el siguiente comando en tu terminal:

    ```
    ng new ecommerce
    ```

    ### Ficheros de Configuración en la Raíz del Proyecto:

    - `tsconfing.app.json`: Configuración TypeScript específica para la aplicación.

    - `angular.json`: Configuración principal de Angular CLI para el proyecto.

    - `package.json`: Archivo de configuración de npm con información sobre las dependencias y scripts del proyecto.

    - `.editorconfig`: Configuración del editor de código para mantener consistencia en el estilo de codificación.

    - `.gitignore`: Archivo que especifica qué archivos y carpetas deben ser ignorados por Git.

    - `tsconfig.spec.json`: Configuración TypeScript específica para las pruebas unitarias.

    - `tsconfig.json`: Configuración TypeScript para el proyecto en general.

    - `README.md`: Archivo de documentación del proyecto que proporciona información sobre cómo instalar, configurar y utilizar la aplicación.

    - `package-lock.json`: Archivo generado por npm que especifica la versión exacta de cada módulo instalado.

    ### Directorio `node_modules`:

    - Contiene las dependencias del proyecto, incluyendo bibliotecas y módulos de terceros.

    ### Directorio `src`:

    - `index.html`: Página HTML principal de la aplicación.

    - `main.ts`: Punto de entrada para la aplicación Angular.

    - `styles.css`: Archivo de estilos globales para la aplicación.

    - **Directorio `assets`**: Contiene archivos estáticos como imágenes, fuentes, etc.

    - **Directorio `app`**:

    - **Ficheros `app.component.*`**: Archivos relacionados con el componente principal de la aplicación.

    - **Fichero `app.module.ts`**: Archivo que define y configura el módulo principal de la aplicación.

    Esta estructura proporciona un marco organizativo estándar para proyectos Angular generados por Angular CLI, facilitando el desarrollo y mantenimiento del código.


2. Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:

