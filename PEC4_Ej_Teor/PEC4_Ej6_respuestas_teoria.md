## Ejercicio 6 – Directivas de atributo y directivas estructurales

1. ### ¿Cuáles son los `style encapsulation` de los componentes?

    En Angular, los componentes utilizan tres métodos de encapsulación de estilos:

    ### Emulated 

    El estilo de los componentes se encapsula utilizando atributos únicos, de modo que no afecta a otros elementos en la página.
    ```
    @Component({
        selector: 'app-ejemplo',
        template: '<p class="emulated">Estilo Emulated</p>',
        styles: ['.emulated { color: blue; }'],
        encapsulation: ViewEncapsulation.Emulated
    })
    export class EjemploComponent { }
    ```
    En este ejemplo, el estilo definido en .emulated está encapsulado usando atributos únicos generados por Angular, asegurando que no afecte a otros elementos en la página.

    ### None

    Los estilos del componente son globales y afectan a toda la aplicación.
    ```
    @Component({
        selector: 'app-ejemplo',
        template: '<p class="none">Estilo None</p>',
        styles: ['.none { color: red; }'],
        encapsulation: ViewEncapsulation.None
    })
    export class EjemploComponent { }
    ```

    ### ShadowDom

    Angular usa la API Shadow DOM integrada del navegador para encerrar la vista del componente dentro de un ShadowRoot
    ```
    @Component({
        selector: 'app-ejemplo',
        template: '<p class="shadow-dom">Estilo Shadow DOM</p>',
        styles: ['.shadow-dom { color: green; }'],
        encapsulation: ViewEncapsulation.ShadowDom
    })
    export class EjemploComponent { }
    ```
    En este caso, el estilo está encapsulado utilizando la tecnología Shadow DOM. Este método proporciona una verdadera encapsulación de estilos.

2. ### ¿Qué es el `shadow DOM`?

    El Shadow DOM es una tecnología que permite encapsular la presentación y el comportamiento de un componente web, creando un árbol DOM independiente.

3. ### ¿Qué es el `changeDetection`?

    El Change Detection es el proceso mediante el cual Angular detecta y responde a los cambios en los datos de la aplicación. Cuando se producen cambios, Angular actualiza la vista para reflejar el nuevo estado de los datos.

4. ### ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándodebes usar una y otra?

    | Característica                 | Estrategia Default                                | Estrategia OnPush                              |
    |---------------------------------|---------------------------------------------------|------------------------------------------------|
    | **Frecuencia de Detección de Cambios** | En cada evento del ciclo de vida de Angular.   | Solo cuando hay cambios en las referencias.   |
    | **Triggers de Detección**        | Cualquier evento que Angular considere un cambio. | Cambios en referencias de `@Input`, eventos del componente, o cambios manuales. |
    | **Manejo de Referencias**        | Revisa todas las propiedades de los objetos vinculados. | Solo revisa las referencias de los objetos vinculados. |
    | **Uso Recomendado**              | Por defecto; para aplicaciones con cambios frecuentes. | Para componentes independientes con cambios poco frecuentes. |
    | **Ventajas**                     | Sencillez y previsibilidad.                      | Mejora el rendimiento reduciendo la frecuencia de comprobaciones de cambio. |
    | **Inconvenientes**               | Puede llevar a un rendimiento subóptimo en aplicaciones grandes. | Requiere un manejo cuidadoso de referencias y puede ser más complejo. |


5. ### Explica con detalle el ciclo de vida de los componentes.

    El ciclo de vida de un componente se inicia cuando Angular crea la instancia de la clase del componente y renderiza su vista junto con las vistas secundarias. Este ciclo abarca la detección de cambios, donde Angular verifica las propiedades vinculadas a los datos, actualizando tanto la vista como la instancia del componente según sea necesario. Concluye cuando Angular destruye la instancia del componente y elimina su plantilla renderizada del DOM.

    | Hook                  | Disparador                                                             |
    |-----------------------|-------------------------------------------------------------------------|
    | **OnInit**            | Después de que Angular ha inicializado todas las propiedades del componente.    |
    | **OnChanges**         | Cuando los datos de entrada (`@Input`) del componente cambian.                  |
    | **AfterViewInit**     | Después de que Angular haya inicializado la vista del componente y sus vistas secundarias. |
    | **OnDestroy**         | Justo antes de que Angular destruya el componente. |

