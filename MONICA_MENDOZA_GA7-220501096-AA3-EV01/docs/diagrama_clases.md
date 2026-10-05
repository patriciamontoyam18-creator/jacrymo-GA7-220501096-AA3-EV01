# Diagrama de clases - referencia para la codificación

```mermaid
classDiagram
    class Producto {
        +number id
        +string referencia
        +string nombre
        +string categoria
        +string talla
        +number precio
        +number stock
    }

    class GestionProductos {
        +registrarProducto()
        +consultarProductos()
        +actualizarProducto()
        +eliminarProducto()
        +buscarProducto()
    }

    GestionProductos --> Producto : administra
```

## Relación con el código

La estructura `Producto` se representa en JavaScript mediante objetos con los atributos `id`, `referencia`, `nombre`, `categoria`, `talla`, `precio` y `stock`.

Las funciones de `App.jsx` implementan las operaciones principales de gestión del producto.
