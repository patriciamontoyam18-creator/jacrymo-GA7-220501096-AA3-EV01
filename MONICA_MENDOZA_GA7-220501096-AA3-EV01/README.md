# JACRYMO - GA7-220501096-AA3-EV01

## 1. Descripción
Este proyecto corresponde a la evidencia **GA7-220501096-AA3-EV01: Codificación de módulos del software stand-alone, web y móvil** del programa Tecnología en Análisis y Desarrollo de Software del SENA.

Se seleccionó la modalidad **web** y se implementó un módulo de **gestión de productos e inventario** para el proyecto empresarial JACRYMO, orientado a la comercialización de calzado.

## 2. Módulo desarrollado
El módulo permite:

- Registrar productos.
- Consultar y filtrar productos.
- Actualizar productos.
- Eliminar productos.
- Visualizar cantidad de productos y unidades disponibles.
- Calcular el valor estimado del inventario.
- Persistir temporalmente la información en `localStorage`.

## 3. Tecnologías
- React 18
- Vite
- JavaScript ES6+
- HTML5
- CSS3
- Git para versionamiento

## 4. Requisitos
- Node.js 18 o superior.
- npm.

## 5. Instalación
Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Luego abrir la dirección que indique Vite, normalmente `http://localhost:5173`.

Para validar la compilación de producción:

```bash
npm run build
```

## 6. Estructura

```text
JACRYMO/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── README.md
├── docs/
│   ├── articulacion_artefactos.md
│   ├── casos_de_uso.md
│   ├── historia_de_usuario.md
│   └── diagrama_clases.md
└── repository-link.txt
```

## 7. Estándares aplicados
- Nombres de variables y funciones descriptivos.
- Componentización básica.
- Validación de datos antes de guardar.
- Comentarios únicamente donde aportan contexto.
- Indentación consistente.
- Separación de estructura, lógica y estilos.
- Uso de `const`, funciones y estados de React.
- Interfaz adaptable a dispositivos móviles.

## 8. Versionamiento
El proyecto está preparado para Git. Para crear el repositorio local:

```bash
git init
git add .
git commit -m "feat: implementa modulo de gestion de productos"
```

Para conectarlo a GitHub:

```bash
git branch -M main
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Después de nuevas modificaciones:

```bash
git add .
git commit -m "feat: actualiza funcionalidades del inventario"
git push
```

## 9. Evidencia
La carpeta comprimida debe contener el código fuente, la documentación de articulación con los artefactos previos y el archivo `repository-link.txt` con la URL real del repositorio una vez publicado.
