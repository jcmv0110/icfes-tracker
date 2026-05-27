# icfes.track — Habit Tracker

App PWA para seguimiento de hábitos: ICFES + Running (Maratón Medellín 10K) + Gym + Lectura + Skincare + Inglés.  
Sincronización en tiempo real entre celular y PC via Firebase.

---

## 🚀 Despliegue completo: GitHub Pages + Firebase

### PASO 1 — Crear proyecto Firebase

1. Ve a **console.firebase.google.com** e inicia sesión con tu cuenta Google
2. Clic en **Agregar proyecto** → nombre: `habitos-icfes` → desactiva Analytics → **Crear proyecto**
3. En el menú izquierdo: **Compilación** → **Realtime Database** → **Crear base de datos**
   - Ubicación: `us-central1`
   - Modo: **Iniciar en modo de prueba** → Habilitar
4. Ve a **Reglas** (pestaña dentro de Realtime Database) y reemplaza con:
   ```json
   { "rules": { ".read": true, ".write": true } }
   ```
   Clic en **Publicar**
5. Vuelve al inicio del proyecto → ícono **`</>`** (Web)
   - Nombre de app: `habitos-web` → **Registrar app**
   - Copia el bloque `firebaseConfig` — necesitas `databaseURL` y `apiKey`

---

### PASO 2 — Subir a GitHub Pages

1. Ve a **github.com** → **New repository**
   - Nombre: `habitos-icfes`
   - Visibilidad: **Public**
   - Clic en **Create repository**

2. En el repositorio → **uploading an existing file** → arrastra estos 5 archivos:
   ```
   index.html
   manifest.json
   sw.js
   icon-192.png
   icon-512.png
   ```
   → **Commit changes**

3. **Settings** → **Pages** (menú izquierdo)
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - **Save**

4. En ~2 minutos tu app queda en:
   ```
   https://TU_USUARIO.github.io/habitos-icfes/
   ```

---

### PASO 3 — Conectar Firebase desde la app

1. Abre la URL en **Chrome del celular**
2. Toca el indicador **`local`** arriba a la derecha
3. Pega:
   - **Database URL**: `https://habitos-icfes-default-rtdb.firebaseio.com`
   - **API Key**: `AIzaSy...`
   - **ID de usuario**: cualquier nombre sin espacios, ej: `sofia`
4. Clic en **Guardar y conectar** → verás `sync ✓`

5. Repite exactamente igual en el **PC** (mismos 3 datos)

Desde ese momento los datos se sincronizan automáticamente entre todos tus dispositivos.

---

### PASO 4 — Instalar como app en el celular

**Android (Chrome):**
- Abre la URL → menú ⋮ → "Agregar a pantalla de inicio"

**iPhone (Safari):**
- Abre la URL → botón compartir → "Agregar a pantalla de inicio"

---

## 📋 Hábitos configurados

| Hábito | Días | Cambio |
|--------|------|--------|
| Preguntas ICFES | Todos | Contador +1/+5 |
| Lectura | Todos | — |
| Skincare | Todos | — |
| Inglés | Todos | Duolingo / Leer / IA |
| Gym | Lun, Mié, Vie | — |
| Running | Mar, Jue, **Sáb**, Dom | Antes del 4 jul 2026 |
| Running | Mar, Jue, **Vie**, Dom | Después del 4 jul 2026 |

**ICFES**: domingo 26 julio 2026 · 7:00 AM hora Colombia  
**Meta running**: Maratón Medellín 10K en menos de 50:00

---

## 💡 Todo gratis

- **GitHub Pages**: gratis para repositorios públicos
- **Firebase Spark (gratis)**: 1 GB almacenamiento, 10 GB/mes transferencia
  - Tu app usará < 1 MB aunque la uses por años
