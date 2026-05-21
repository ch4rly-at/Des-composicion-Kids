# Des-composición-Kids 💰🧩

**Des-composición-Kids** es una aplicación educativa interactiva diseñada para ayudar a los niños a entender la composición y descomposición de números del 1 al 199. Utiliza una metáfora financiera con billetes de $100, $10 y monedas de $1 para hacer el aprendizaje tangible, divertido e intuitivo.

## 🌟 Características

- **Modo Padres/Docentes**: Permite establecer un número objetivo personalizado (1 - 199) antes de empezar la sesión.
- **Aprendizaje por Categorías**: Tres zonas interactivas de colocación (*drop zones*) separadas para Centenas, Decenas y Unidades.
- **Billetes y Monedas**:
  - 🟦 **$100** (Centenas - con limitador inteligente que se deshabilita automáticamente al colocar uno para no exceder el límite de 199).
  - 🟥 **$10** (Decenas)
  - 🟩 **$1** (Unidades - monedas representativas).
- **Mecánica Didáctica Activa (Total Oculto)**: Por defecto, el total acumulado y la suma en la fórmula se ocultan tras símbolos de interrogación (`??`) para incentivar el cálculo mental del niño.
- **Botón de Ayuda (Ojo)**: Permite revelar u ocultar el total calculado en tiempo real en la fórmula (ej: `100 + 40 + 5 = 145`) cuando el niño o docente lo requiera.
- **Feedback Inteligente**:
  - Mensajes de felicitación al descomponer de manera exacta.
  - Avisos dinámicos en caso de que falte dinero o se hayan pasado del valor objetivo.
- **Animaciones Suaves**: Integración de Framer Motion para entradas, salidas y rotaciones dinámicas y divertidas de los billetes en el tablero.

## 🚀 Tecnologías

- **React 19** + **TypeScript**
- **Vite** (Herramienta de desarrollo)
- **Framer Motion** (Animaciones fluidas)
- **Lucide React** (Iconos modernos)
- **Vanilla CSS** (Estilos optimizados y child-friendly sin sobrecargar el renderizado)

## 🛠️ Instalación y Despliegue

### Local

1. Clona el repositorio e ingresa a la carpeta:
   ```bash
   cd Des-composicion-kids
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo clásico:
   ```bash
   npm run dev
   ```
4. **Recomendado para pruebas con niños (Multidispositivo):** Si quieres probar la interfaz táctil en una tablet o celular dentro de la misma red local (LAN), levanta el servidor exponiendo el host:
   ```bash
   npm run dev -- --host --port 5174
   ```
   Luego abre en el navegador de tu dispositivo móvil la IP local provista en el puerto `5174`.

### Despliegue en GitHub Pages

La aplicación está lista para ser desplegada en GitHub Pages. Para compilar y publicar cualquier actualización en la versión en línea de manera automática, ejecuta:

```bash
npm run deploy
```

---
*Desarrollado con pasión para fomentar el pensamiento lógico-matemático de forma lúdica y segura.*

