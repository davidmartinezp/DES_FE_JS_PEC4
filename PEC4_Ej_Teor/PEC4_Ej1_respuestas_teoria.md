# Angular CLI - Descripción de Comandos

## ng new
El comando `ng new` se utiliza para crear un nuevo proyecto de Angular. Se puede ejecutar este comando seguido del nombre del proyecto para generar la estructura base de un nuevo proyecto Angular.

Ejemplo:
```
ng new mi-proyecto-angular
```

## ng generate
El comando `ng generate` (o simplemente ng g) se utiliza para generar diferentes artefactos en el proyecto. Se puede utilizar este comando seguido del tipo de artefacto que se desea generar y su nombre.


- ### ng generate component
    El comando `ng generate component` se utiliza para crear un nuevo componente en la aplicación Angular. Los componentes son bloques fundamentales de la interfaz de usuario en Angular y encapsulan la lógica y la presentación de una parte específica de la interfaz.

    Ejemplo:
    ```
    ng generate component nombre-componente
    ```

- ### ng generate directive
    El comando `ng generate directive` se utiliza para generar una nueva directiva en la aplicación Angular. Las directivas son instrucciones que modifican la apariencia o el comportamiento de un elemento DOM.

    Ejemplo:
    ```
    ng generate directive nombre-directiva
    ```

- ### ng generate enum
    El comando `ng generate enum` se utiliza para crear una enumeración en la aplicación Angular. Las enumeraciones son conjuntos de constantes con nombre.

    Ejemplo:
    ```
    ng generate enum nombre-enum
    ```

- ### ng generate guard
    El comando `ng generate guard` se utiliza para generar un guardia en la aplicación Angular. Los guardias son utilizados en la navegación para decidir si una ruta puede ser activada.

    Ejemplo:
    ```
    ng generate guard nombre-guard
    ```

- ### ng generate interface
    El comando `ng generate interface` se utiliza para crear una nueva interfaz en la aplicación Angular. Las interfaces en Angular son utilizadas para definir la estructura de un objeto.

    Ejemplo:
    ```
    ng generate interface nombre-interfaz
    ```

- ### ng generate pipe
    El comando `ng generate pipe` se utiliza para generar un nuevo filtro (pipe) en la aplicación Angular. Los pipes son utilizados para transformar datos en la presentación.

    Ejemplo:
    ```
    ng generate pipe nombre-pipe
    ```

- ### ng generate service
    El comando `ng generate service` se utiliza para crear un nuevo servicio en la aplicación Angular. Automatiza la creación de archivos y configuraciones básicas para un servicio en Angular.

    Ejemplo:
    ```
    ng generate service nombre-servicio
    ```

## ng serve
El comando `ng serve` se utiliza para compilar y ejecutar la aplicación en un servidor de desarrollo local. Este comando iniciará el servidor y proporcionará una URL local para acceder a la aplicación en un navegador web.

Ejemplo:
```
ng serve
```

## ng test
El comando `ng test` se utiliza para ejecutar pruebas unitarias en la aplicación Angular utilizando un entorno de prueba. Este comando lanzará el marco de pruebas y ejecutará todas las pruebas definidas en el proyecto.

Ejemplo:
```
ng test
```

## ng version
El comando `ng version` proporciona información sobre la versión de Angular CLI y las dependencias asociadas en el proyecto.

Ejemplo:
```
ng version
```