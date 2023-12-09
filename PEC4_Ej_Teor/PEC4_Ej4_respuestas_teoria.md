## Ejercicio 4 – Directivas de atributo y directivas estructurales

1. ### Variables locales de la Directiva Estructural NgFor:

    #### `index`
    La variable `index` contiene el índice actual del elemento en la iteración.

    #### `even`
    La variable `even` es un booleano que indica si el índice actual es par.

    #### `odd`
    La variable `odd` es un booleano que indica si el índice actual es impar.

    #### `first`
    La variable `first` es un booleano que indica si el elemento actual es el primer elemento de la iteración.

    #### `last`
    La variable `last` es un booleano que indica si el elemento actual es el último elemento de la iteración.


2. ### Opción `trackBy` de la Directiva Estructural NgFor:
    La opción `trackBy` se utiliza para mejorar el rendimiento al reutilizar elementos en la iteración. Permite a Angular realizar un seguimiento de los elementos por un identificador único en lugar de por el valor del índice. Esto es útil cuando los elementos en la lista cambian pero el identificador único permanece constante.

    Ejemplo de uso:
    ```
    <div *ngFor="let item of items; trackBy: trackByIdentifier">
        <!-- Contenido del elemento -->
    </div>

    trackByIdentifier(index: number, item: any): string {
        return item.id;
    }
    ```
2. ### Ejecución Simultánea de Directivas Estructurales:

    No es posible ejecutar simultáneamente dos directivas estructurales en un solo elemento en Angular. La razón es que cada directiva estructural tiene su propio propósito y lógica, y ejecutarlas simultáneamente podría llevar a resultados incoherentes o inesperados. Angular sigue un enfoque basado en templates y la ejecución secuencial de directivas para mantener la coherencia en la manipulación del DOM.