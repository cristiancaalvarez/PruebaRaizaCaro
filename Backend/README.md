# E-commerce Backend

Este proyecto representa el backend para una aplicación de e-commerce desarrollada en **Spring Boot**. La aplicación está estructurada en módulos para ofrecer una solución robusta y escalable. A continuación, se describen los principales módulos del proyecto y su funcionalidad.

---

## Módulos del Proyecto

### 1. **Seguridad**
Gestión de usuarios y autenticación en la plataforma. Este módulo asegura que solo los usuarios autorizados puedan acceder a las funcionalidades del sistema.
- Registro de nuevos usuarios.
- Inicio de sesión (autenticación).
- Recuperación y actualización de contraseñas.
- Validación de tokens para garantizar la seguridad de las solicitudes.

### 2. **Descuentos**
Manejo de reglas y políticas de descuentos aplicables a las órdenes. Este módulo permite implementar descuentos automáticos y personalizados según las condiciones definidas.
- Configuración de reglas de descuento.
- Consulta y aplicación de descuentos activos.
- Gestión de excepciones en las reglas de descuento.

### 3. **Órdenes**
Gestión del ciclo de vida de las órdenes en el sistema. Este módulo permite administrar los pedidos de los clientes.
- Creación, consulta, actualización y eliminación de órdenes.
- Actualización del estado de las órdenes (pendiente, procesada, cancelada, etc.).

### 4. **Detalles de Orden**
Gestión de los elementos individuales dentro de cada orden. Este módulo permite detallar los productos y servicios adquiridos.
- Adición y eliminación de productos en una orden.
- Modificación de cantidades y precios en los detalles de una orden.
- Consulta de detalles específicos de una orden.

### 5. **Productos**
Gestión de los productos disponibles en el catálogo del e-commerce, incluyendo su inventario y características.
- Creación y actualización de productos.
- Consulta de productos por diferentes criterios (categorías, stock, etc.).
- Eliminación de productos discontinuados.
- Gestión del inventario (entrada/salida de stock).

---

## Documentación Detallada

Para obtener más información sobre los endpoints y las funcionalidades de cada módulo, consulta la documentación publicada en **Postman**:

- [Documentación en Postman](https://documenter.getpostman.com/view/40469405/2sAYHzHPDP)

---

## Requisitos

- **Java 17**
- **Spring Boot 3.3.0**
- **Base de datos**: MySQL
- **Herramienta de compilación**: Maven

---

## Configuración del Proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-repositorio/backend-ecommerce.git
   ```

2. Configura las propiedades de la base de datos en el archivo `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/db_ecommerce
   spring.datasource.username = root
   spring.datasource.password =
   spring.jpa.hibernate.ddl-auto= update
   ```

3. Ejecuta el proyecto:
   ```bash
   mvn spring-boot:run
   ```

---

## Pruebas Unitarias

El proyecto incluye pruebas unitarias para garantizar la calidad del código. Puedes ejecutarlas con:
    ```bash
    mvn test
    ```

---