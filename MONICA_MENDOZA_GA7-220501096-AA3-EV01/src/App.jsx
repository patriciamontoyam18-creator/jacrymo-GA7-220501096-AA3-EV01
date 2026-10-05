import { useEffect, useMemo, useState } from "react";

const productosIniciales = [
  { id: 1, referencia: "JAC-001", nombre: "Tenis urbano", categoria: "Tenis", talla: "38", precio: 89000, stock: 12 },
  { id: 2, referencia: "JAC-002", nombre: "Zapato escolar", categoria: "Escolar", talla: "35", precio: 76000, stock: 7 },
  { id: 3, referencia: "JAC-003", nombre: "Botín casual", categoria: "Botines", talla: "39", precio: 125000, stock: 4 }
];

const formularioVacio = {
  referencia: "",
  nombre: "",
  categoria: "Tenis",
  talla: "",
  precio: "",
  stock: ""
};

function App() {
  const [productos, setProductos] = useState(() => {
    // Persistencia local para simular una fuente de datos durante la demostración.
    const guardados = localStorage.getItem("jacrymo_productos");
    return guardados ? JSON.parse(guardados) : productosIniciales;
  });

  const [formulario, setFormulario] = useState(formularioVacio);
  const [busqueda, setBusqueda] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    localStorage.setItem("jacrymo_productos", JSON.stringify(productos));
  }, [productos]);

  const productosFiltrados = useMemo(() => {
    const termino = busqueda.toLowerCase().trim();
    if (!termino) return productos;

    return productos.filter((producto) =>
      `${producto.referencia} ${producto.nombre} ${producto.categoria}`
        .toLowerCase()
        .includes(termino)
    );
  }, [productos, busqueda]);

  const totalUnidades = productos.reduce((total, producto) => total + Number(producto.stock), 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + Number(producto.precio) * Number(producto.stock),
    0
  );

  function mostrarMensaje(texto) {
    setMensaje(texto);
    window.setTimeout(() => setMensaje(""), 2500);
  }

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario((actual) => ({ ...actual, [name]: value }));
  }

  function validarFormulario() {
    if (!formulario.referencia.trim() || !formulario.nombre.trim()) {
      mostrarMensaje("La referencia y el nombre son obligatorios.");
      return false;
    }

    if (Number(formulario.precio) <= 0 || Number(formulario.stock) < 0) {
      mostrarMensaje("Verifica el precio y la cantidad disponible.");
      return false;
    }

    return true;
  }

  function guardarProducto(evento) {
    evento.preventDefault();
    if (!validarFormulario()) return;

    const producto = {
      id: editandoId ?? Date.now(),
      referencia: formulario.referencia.trim().toUpperCase(),
      nombre: formulario.nombre.trim(),
      categoria: formulario.categoria,
      talla: formulario.talla.trim(),
      precio: Number(formulario.precio),
      stock: Number(formulario.stock)
    };

    if (editandoId) {
      setProductos((actuales) =>
        actuales.map((item) => (item.id === editandoId ? producto : item))
      );
      mostrarMensaje("Producto actualizado correctamente.");
    } else {
      setProductos((actuales) => [...actuales, producto]);
      mostrarMensaje("Producto registrado correctamente.");
    }

    limpiarFormulario();
  }

  function editarProducto(producto) {
    setEditandoId(producto.id);
    setFormulario({
      referencia: producto.referencia,
      nombre: producto.nombre,
      categoria: producto.categoria,
      talla: producto.talla,
      precio: producto.precio,
      stock: producto.stock
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function eliminarProducto(id) {
    const confirmar = window.confirm("¿Deseas eliminar este producto?");
    if (!confirmar) return;

    setProductos((actuales) => actuales.filter((producto) => producto.id !== id));
    mostrarMensaje("Producto eliminado.");
  }

  function limpiarFormulario() {
    setFormulario(formularioVacio);
    setEditandoId(null);
  }

  function formatoMoneda(valor) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(valor);
  }

  return (
    <main className="contenedor">
      <header className="encabezado">
        <div>
          <p className="etiqueta">PROYECTO JACRYMO</p>
          <h1>Módulo de gestión de productos</h1>
          <p className="subtitulo">
            Registro, consulta, actualización y eliminación de productos del inventario.
          </p>
        </div>
        <div className="badge">React + Vite</div>
      </header>

      {mensaje && <div className="mensaje">{mensaje}</div>}

      <section className="resumen">
        <article>
          <span>Productos</span>
          <strong>{productos.length}</strong>
        </article>
        <article>
          <span>Unidades</span>
          <strong>{totalUnidades}</strong>
        </article>
        <article>
          <span>Valor inventario</span>
          <strong>{formatoMoneda(valorInventario)}</strong>
        </article>
      </section>

      <section className="panel">
        <h2>{editandoId ? "Editar producto" : "Registrar producto"}</h2>
        <form className="formulario" onSubmit={guardarProducto}>
          <label>
            Referencia
            <input name="referencia" value={formulario.referencia} onChange={manejarCambio} placeholder="JAC-004" />
          </label>

          <label>
            Nombre
            <input name="nombre" value={formulario.nombre} onChange={manejarCambio} placeholder="Nombre del producto" />
          </label>

          <label>
            Categoría
            <select name="categoria" value={formulario.categoria} onChange={manejarCambio}>
              <option>Tenis</option>
              <option>Escolar</option>
              <option>Botines</option>
              <option>Formal</option>
              <option>Deportivo</option>
            </select>
          </label>

          <label>
            Talla
            <input name="talla" value={formulario.talla} onChange={manejarCambio} placeholder="38" />
          </label>

          <label>
            Precio
            <input type="number" min="1" name="precio" value={formulario.precio} onChange={manejarCambio} placeholder="89000" />
          </label>

          <label>
            Stock
            <input type="number" min="0" name="stock" value={formulario.stock} onChange={manejarCambio} placeholder="10" />
          </label>

          <div className="acciones-formulario">
            <button className="principal" type="submit">
              {editandoId ? "Guardar cambios" : "Registrar producto"}
            </button>
            {editandoId && (
              <button className="secundario" type="button" onClick={limpiarFormulario}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="barra">
          <div>
            <h2>Inventario</h2>
            <p>Consulta y administra los productos registrados.</p>
          </div>
          <input
            className="buscador"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Buscar por referencia, nombre o categoría..."
          />
        </div>

        <div className="tabla-contenedor">
          <table>
            <thead>
              <tr>
                <th>Referencia</th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Talla</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan="7" className="vacio">No se encontraron productos.</td>
                </tr>
              ) : (
                productosFiltrados.map((producto) => (
                  <tr key={producto.id}>
                    <td><strong>{producto.referencia}</strong></td>
                    <td>{producto.nombre}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.talla}</td>
                    <td>{formatoMoneda(producto.precio)}</td>
                    <td>
                      <span className={producto.stock <= 5 ? "stock bajo" : "stock"}>
                        {producto.stock}
                      </span>
                    </td>
                    <td className="acciones">
                      <button onClick={() => editarProducto(producto)}>Editar</button>
                      <button className="peligro" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <p>GA7-220501096-AA3-EV01 · Codificación de módulos del software</p>
      </footer>
    </main>
  );
}

export default App;