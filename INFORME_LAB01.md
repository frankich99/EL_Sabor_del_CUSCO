# INFORME DE LABORATORIO N° 01
## INTRODUCCIÓN AL ENTORNO DE DESARROLLO Y GIT

---

### DATOS GENERALES
- **Universidad:** Universidad Nacional de San Antonio Abad del Cusco (UNSAAC)
- **Facultad:** Facultad de Ingeniería Eléctrica, Electrónica, Informática y Mecánica
- **Escuela Profesional:** Ingeniería Informática y de Sistemas
- **Asignatura:** Ingeniería de Software
- **Estudiante:** Frank (Usuario Git: `frankich99`)
- **Código / Correo:** `133962@unsaac.edu.pe`
- **Fecha:** Septiembre de 2026
- **Repositorio Remoto en GitHub:** [https://github.com/frankich99/EL_Sabor_del_CUSCO](https://github.com/frankich99/EL_Sabor_del_CUSCO)

---

## 1. OBJETIVO DEL LABORATORIO
Configurar un entorno de desarrollo profesional y aplicar control de versiones distribuido utilizando Git y GitHub en un proyecto de software inicial, siguiendo las mejores prácticas de la ingeniería de software.

## 2. RESULTADOS DE APRENDIZAJE ALCANZADOS
- Comprensión sólida del control de versiones en el ciclo de vida del software.
- Configuración de identidad y credenciales en herramientas modernas (Git CLI y GitHub).
- Gestión integral de repositorios locales (áreas de trabajo, staging, commits) y remotos (branches, remote tracking, push).

## 3. CASO PRÁCTICO
> **Enunciado:** *"Una startup en Cusco desea desarrollar un sistema web para gestionar pedidos de comida local. El equipo necesita organizar su código desde el inicio."*

**Solución desarrollada:**  
Se diseñó y estructuró la solución **"El Sabor del Cusco"**, una plataforma web orientada a conectar las picanterías y restaurantes tradicionales de la Ciudad Imperial con el público local y turistas, permitiendo visualizar cartas de platos típicos (Chiri Uchu, Lechón Cusqueño, Kapchi de Setas, etc.) y realizar pedidos en línea.

---

## 4. DESARROLLO DE ACTIVIDADES Y EVIDENCIAS

### PARTE 1: Configuración del Entorno de Desarrollo
Se verificó la instalación de Git y se configuró la identidad global del desarrollador en el sistema operativo.

**Comandos ejecutados:**
```bash
git config --global user.name "frankich99"
git config --global user.email "133962@unsaac.edu.pe"
git config --global init.defaultBranch main
```

**Verificación:**
```bash
git config --global --get user.name
# Salida: frankich99

git config --global --get user.email
# Salida: 133962@unsaac.edu.pe
```

> 📷 **EVIDENCIA 1 - Captura de pantalla de la configuración global de Git:**  
> *(Inserta aquí tu captura de pantalla de la terminal con los comandos de verificación)*  
> ![Captura Configuración](file:///F:/unsaac/Ing%20de%20Software/laboratorio/Guia01/el-sabor-del-cusco/docs/captura_configuracion.png)

---

### PARTE 2: Creación del Proyecto e Inicialización del Repositorio Local
Se creó la carpeta del proyecto `el-sabor-del-cusco` para aislar el código fuente de los documentos académicos, y se inicializó el repositorio Git con la rama principal `main`.

**Comandos ejecutados:**
```bash
mkdir el-sabor-del-cusco
cd el-sabor-del-cusco
git init
```

**Salida en consola:**
```text
Initialized empty Git repository in F:/unsaac/Ing de Software/laboratorio/Guia01/el-sabor-del-cusco/.git/
```

> 📷 **EVIDENCIA 2 - Captura de pantalla de la inicialización de Git (`git init`):**  
> *(Inserta aquí tu captura de la terminal mostrando la inicialización del repositorio)*  
> ![Captura Init](file:///F:/unsaac/Ing%20de%20Software/laboratorio/Guia01/el-sabor-del-cusco/docs/captura_init.png)

---

### PARTE 3: Construcción de la Landing Page y Versionamiento
Para cumplir con los requerimientos del caso práctico, se diseñó una landing page amigable, moderna y ligera construida únicamente con **HTML5 y CSS3**, acompañada de su respectivo archivo `.gitignore` y una documentación exhaustiva en el `README.md`.

#### Estructura del Proyecto:
```text
el-sabor-del-cusco/
├── README.md               # Documentación general del sistema
├── INFORME_LAB01.md        # Informe académico de actividades
├── .gitignore              # Ignora temporales y configuraciones de IDEs
└── src/
    ├── index.html          # Interfaz web amigable de la startup
    └── css/
        └── styles.css      # Hoja de estilos (diseño limpio y responsivo)
```

**Comandos ejecutados para versionamiento:**
```bash
# Verificación de archivos nuevos
git status

# Preparación en el área de staging
git add .

# Creación del commit inicial con autor institucional
git commit -m "Primer commit"
```

**Salida en consola:**
```text
[main (root-commit) 5a8a97c] Primer commit
 3 files changed, 198 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 src/index.html
```

> 📷 **EVIDENCIA 3 - Captura de pantalla de la preparación y primer commit:**  
> *(Inserta aquí tu captura del `git status` y `git commit -m "Primer commit"`)*  
> ![Captura Commit](file:///F:/unsaac/Ing%20de%20Software/laboratorio/Guia01/el-sabor-del-cusco/docs/captura_commit.png)

---

### PARTE 4: Conexión y Despliegue en Repositorio Remoto (GitHub)
Se creó el repositorio público en GitHub bajo la cuenta `frankich99` con el nombre `EL_Sabor_del_CUSCO`. Posteriormente se vinculó el repositorio local con el remoto mediante SSH/HTTPS y se publicó la rama `main`.

**Comandos ejecutados:**
```bash
git remote add origin https://frankich99@github.com/frankich99/EL_Sabor_del_CUSCO.git
git push -u origin main
```

**Salida en consola:**
```text
To https://github.com/frankich99/EL_Sabor_del_CUSCO.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

> 📷 **EVIDENCIA 4 - Captura de pantalla del `git push` y repositorio en GitHub:**  
> *(Inserta aquí tu captura de la terminal al hacer el push y de la interfaz web de GitHub)*  
> ![Captura GitHub](file:///F:/unsaac/Ing%20de%20Software/laboratorio/Guia01/el-sabor-del-cusco/docs/captura_github.png)

---

## 5. ENTREGABLES DEL LABORATORIO

### A. Enlace del Repositorio en GitHub
- **URL Oficial:** [https://github.com/frankich99/EL_Sabor_del_CUSCO](https://github.com/frankich99/EL_Sabor_del_CUSCO)

### B. Registro de Commits Realizados
Visualización mediante comando `git log --pretty=format:"%h - %an (%ae), %ar : %s"`:
```text
* 5a8a97c - frankich99 (133962@unsaac.edu.pe), hace unos minutos : Primer commit
```

### C. Características de la Landing Page Integrada
- **Diseño visual:** Estilo cálido y tradicional cusqueño (tonos terracota, dorado andino y gris pizarra).
- **Secciones incluidas:**
  1. *Barra de navegación:* Acceso rápido a las secciones clave.
  2. *Hero Section:* Mensaje de bienvenida enfocado en comida cusqueña tradicional.
  3. *Carta de Platos Típicos:* Tarjetas con Chiri Uchu, Lechón Cusqueño, Kapchi de Setas, Trucha Frita, Choclo con Queso y Caldo de Gallina.
  4. *Flujo de Servicio:* Explicación en 3 pasos sencillos del funcionamiento del delivery.
  5. *Formulario de Pedidos:* Formulario amigable para la toma de órdenes.

---

## 6. REFLEXIÓN Y FUNDAMENTACIÓN (SECCIÓN 8 DE LA GUÍA)

### ¿Por qué Git es crítico en proyectos colaborativos?
1. **Desarrollo concurrente y desacoplado:** Permite que varios ingenieros de software trabajen simultáneamente en diferentes características (mediante ramas o *branches*) sin interferir en el trabajo de los demás ni bloquear la versión estable del producto.
2. **Trazabilidad y auditoría:** Cada modificación queda registrada con una firma digital única (hash SHA-1), autor, fecha y mensaje de justificación, permitiendo saber exactamente por qué y cuándo se introdujo un cambio.
3. **Mecanismos de integración controlada:** Facilita la revisión por pares (*Code Review*) mediante *Pull Requests* antes de que el código se integre a la rama de producción, asegurando la calidad del software.

### ¿Qué problemas evita?
1. **Pérdida irreversible de código:** Cada clon local es un respaldo íntegro de todo el historial del proyecto.
2. **Caos de versionamiento manual:** Erradica definitivamente las malas prácticas de respaldar carpetas con nombres como `proyecto_v1`, `proyecto_final_corregido`, etc.
3. **Sobreescritura destructiva:** Evita que un miembro del equipo reemplace involuntariamente las líneas de código de otro al momento de guardar archivos compartidos.
4. **Facilidad de recuperación ante regresiones:** Permite revertir fallos o bugs en segundos volviendo a un commit estable anterior mediante comandos como `git revert` o `git checkout`.

---

## 7. CONCLUSIONES
- Se configuró con éxito el entorno de control de versiones con Git y la vinculación a GitHub respetando los estándares de la ingeniería de software.
- Se dio solución al caso práctico planteado mediante la creación de la startup cusqueña "El Sabor del Cusco", estructurando su repositorio de manera profesional, modular y documentada.
- El uso de Git y GitHub desde el inicio de un proyecto previene la deuda técnica organizativa y sienta las bases para metodologías ágiles e integración continua (CI/CD).
