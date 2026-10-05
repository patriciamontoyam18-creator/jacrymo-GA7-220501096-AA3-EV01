# Articulación de artefactos previos con la codificación

## Proyecto
JACRYMO - sistema web para apoyar la gestión y comercialización de calzado.

## Módulo seleccionado
Gestión de productos e inventario.

La codificación toma como referencia los artefactos desarrollados durante las fases anteriores del ciclo de software:

1. **Historias de usuario:** permiten identificar la necesidad funcional del usuario y convertirla en funcionalidades concretas.
2. **Casos de uso:** orientan las operaciones de registrar, consultar, actualizar y eliminar productos.
3. **Diagrama de clases:** sirve como referencia para los atributos principales de la entidad Producto.
4. **Diseños y prototipos:** orientan la distribución visual del formulario, indicadores y tabla.
5. **Plan técnico:** sustenta la selección de tecnologías web y del framework React.
6. **Versionamiento:** Git permite registrar cambios y mantener trazabilidad del desarrollo.

## Correspondencia funcional

| Artefacto | Aplicación en el módulo |
|---|---|
| Historia de usuario | El usuario administra productos del inventario |
| Caso de uso Registrar | Formulario de creación |
| Caso de uso Consultar | Tabla y buscador |
| Caso de uso Actualizar | Botón Editar y formulario |
| Caso de uso Eliminar | Botón Eliminar con confirmación |
| Clase Producto | referencia, nombre, categoría, talla, precio y stock |
| Prototipo | Estructura visual del formulario y tabla |
| Plan técnico | React + Vite + JavaScript + CSS |
| Versionamiento | Git y repositorio remoto |

## Criterios técnicos
La solución se implementó con una arquitectura sencilla orientada a componentes. La información se conserva en `localStorage` para permitir la demostración funcional sin requerir todavía un servidor o una base de datos.

En una siguiente iteración, esta capa puede reemplazarse por una API REST y una base de datos MySQL sin modificar la lógica principal de interacción del usuario.
