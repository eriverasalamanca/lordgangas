<<<<<<< HEAD
# 🚀 Guía Rápida - Lord Gangas React

## ¿Qué se migró?

Tu sitio HTML completo de Lord Gangas ha sido convertido a una aplicación React moderna. ¡Todo está listo para usar!

## 📂 Estructura del Proyecto

```
WebLG/
├── src/
│   ├── components/          # 8 componentes React
│   ├── styles/              # CSS para cada componente
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entrada de la app
│   └── index.css            # Estilos globales
├── public/                  # Imágenes y assets
├── index.html               # HTML base
├── package.json             # Dependencias
└── vite.config.ts          # Configuración Vite
```

## ⚡ Inicio Rápido

### 1️⃣ Abre la terminal
```bash
cd "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
```

### 2️⃣ Instala dependencias (primera vez)
```bash
npm install
```

### 3️⃣ Ejecuta el servidor
```bash
npm run dev
```

### 4️⃣ Abre en navegador
```
http://localhost:5173
```

## 🎨 Componentes Principales

| Componente | Archivo | Función |
|-----------|---------|---------|
| Hero | `Hero.tsx` | Banner principal con animaciones |
| Mas  | `Carousel.tsx` | Carousel de anuncios |
| Redes | `Social.tsx` | Tarjetas de redes sociales |
| Educación | `Education.tsx` | Cursos y recursos |
| WhatsApp | `WhatsApp.tsx` | Grupo VIP con QR |
| Features | `Features.tsx` | Características principales |
| Partners | `Partners.tsx` | Socios y alianzas |
| CTA | `CTA.tsx` | Llamada a acción |
| Footer | `Footer.tsx` | Pie de página |

## 📝 ¿Cómo Modificar?

### Cambiar Texto
```jsx
// En cualquier componente, busca el texto y cámbialo
<h1>Nuevo Título</h1>
```

### Cambiar Enlaces
```jsx
// Los enlaces están en el onClick o href
onClick={() => window.open('https://tu-link.com', '_blank')}
href="https://tu-link.com"
```

### Cambiar Imágenes
1. Coloca la imagen en `public/`
2. Usa así:
```jsx
<img src="/nombre-imagen.png" alt="descripción" />
```

### Cambiar Colores
Abre `src/styles/globals.css` y busca:
- `#00ffc8` - Verde/Cian
- `#00d4ff` - Azul
- `#25D366` - Verde WhatsApp

## 🎯 Funcionalidades Preservadas

✅ **Parallax** - Movimiento con scroll y mouse  
✅ **Carousel** - Auto-scroll de anuncios  
✅ **Animaciones** - Todos los efectos visuales  
✅ **Responsive** - Funciona en móvil, tablet, desktop  
✅ **Links Funcionales** - Todos los botones redirigen  
✅ **Redes Sociales** - Acceso directo a plataformas  

## 📦 Compilar para Producción

```bash
npm run build
```

Esto crea una carpeta `dist/` lista para subir a un servidor.

## 🐛 Solucionar Problemas

### Si ves errores al iniciar:
```bash
# Limpia y reinstala
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Si faltan imágenes:
- Asegúrate que estén en `public/`
- Nombres sin espacios: `imagen-1.png` NO `imagen 1.png`
- Usa rutas relativas: `/imagen.png`

## 🔗 Links Importantes

- **TikTok**: https://www.tiktok.com/@lord.gangas.descuentos
- **Instagram**: https://www.instagram.com/lordgangas/
- **Facebook**: https://www.facebook.com/lordgangas
- **WhatsApp**: https://chat.whatsapp.com/L9JBGlrG0VC5IYWoPB3Cv0

## 📚 Aprende Más

- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

## 💡 Tips Útiles

1. **Hot Reload**: Los cambios se actualizan al guardar automáticamente
2. **Consola**: Abre F12 para ver errores o logs
3. **Responsive**: Usa Ctrl+Shift+M en navegador para ver mobile

## ❓ Preguntas Frecuentes

**P: ¿Cómo agrego una nueva página?**
R: Crea un nuevo componente en `src/components/` e impórtalo en `App.tsx`

**P: ¿Cómo cambio el color del fondo?**
R: Edita `src/styles/globals.css` línea de `background:`

**P: ¿Cómo agrego Google Analytics?**
R: Agrega el script en `index.html` en el `<head>`

---

**¡Tu sitio React está listo para usar! 🎉**

Cualquier pregunta, revisa los archivos de documentación:
- `MIGRATION_GUIDE.md` - Guía completa
- `MIGRATION_SUMMARY.md` - Resumen de cambios
=======
# 🚀 Guía Rápida - Lord Gangas React

## ¿Qué se migró?

Tu sitio HTML completo de Lord Gangas ha sido convertido a una aplicación React moderna. ¡Todo está listo para usar!

## 📂 Estructura del Proyecto

```
WebLG/
├── src/
│   ├── components/          # 8 componentes React
│   ├── styles/              # CSS para cada componente
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entrada de la app
│   └── index.css            # Estilos globales
├── public/                  # Imágenes y assets
├── index.html               # HTML base
├── package.json             # Dependencias
└── vite.config.ts          # Configuración Vite
```

## ⚡ Inicio Rápido

### 1️⃣ Abre la terminal
```bash
cd "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
```

### 2️⃣ Instala dependencias (primera vez)
```bash
npm install
```

### 3️⃣ Ejecuta el servidor
```bash
npm run dev
```

### 4️⃣ Abre en navegador
```
http://localhost:5173
```

## 🎨 Componentes Principales

| Componente | Archivo          | Función                           |
|-----------|-------------------|-----------------------------------|
| Hero      | `Hero.tsx`        | Banner principal con animaciones  |
| Mas       | `Carousel.tsx`    | Carousel de anuncios              |
| Redes     | `Social.tsx`      | Tarjetas de redes sociales        |
| Educación | `Education.tsx`   | Cursos y recursos                 |
| WhatsApp  | `WhatsApp.tsx`    | Grupo VIP con QR                  |
| Features  | `Features.tsx`    | Características principales       |
| Partners  | `Partners.tsx`    | Socios y alianzas                 |
| CTA       | `CTA.tsx`         | Llamada a acción                  |
| Footer    | `Footer.tsx`      | Pie de página                     |

## 📝 ¿Cómo Modificar?

### Cambiar Texto
```jsx
// En cualquier componente, busca el texto y cámbialo
<h1>Nuevo Título</h1>
```

### Cambiar Enlaces
```jsx
// Los enlaces están en el onClick o href
onClick={() => window.open('https://tu-link.com', '_blank')}
href="https://tu-link.com"
```

### Cambiar Imágenes
1. Coloca la imagen en `public/`
2. Usa así:
```jsx
<img src="/nombre-imagen.png" alt="descripción" />
```

### Cambiar Colores
Abre `src/styles/globals.css` y busca:
- `#00ffc8` - Verde/Cian
- `#00d4ff` - Azul
- `#25D366` - Verde WhatsApp

## 🎯 Funcionalidades Preservadas

✅ **Parallax** - Movimiento con scroll y mouse  
✅ **Carousel** - Auto-scroll de anuncios  
✅ **Animaciones** - Todos los efectos visuales  
✅ **Responsive** - Funciona en móvil, tablet, desktop  
✅ **Links Funcionales** - Todos los botones redirigen  
✅ **Redes Sociales** - Acceso directo a plataformas  

## 📦 Compilar para Producción

```bash
npm run build
```

Esto crea una carpeta `dist/` lista para subir a un servidor.

## 🐛 Solucionar Problemas

### Si ves errores al iniciar:
```bash
# Limpia y reinstala
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Si faltan imágenes:
- Asegúrate que estén en `public/`
- Nombres sin espacios: `imagen-1.png` NO `imagen 1.png`
- Usa rutas relativas: `/imagen.png`

## 🔗 Links Importantes

- **TikTok**: https://www.tiktok.com/@lord.gangas.descuentos
- **Instagram**: https://www.instagram.com/lordgangas/
- **Facebook**: https://www.facebook.com/lordgangas
- **WhatsApp**: https://chat.whatsapp.com/L9JBGlrG0VC5IYWoPB3Cv0

## 📚 Aprende Más

- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

## 💡 Tips Útiles

1. **Hot Reload**: Los cambios se actualizan al guardar automáticamente
2. **Consola**: Abre F12 para ver errores o logs
3. **Responsive**: Usa Ctrl+Shift+M en navegador para ver mobile

## ❓ Preguntas Frecuentes

**P: ¿Cómo agrego una nueva página?**
R: Crea un nuevo componente en `src/components/` e impórtalo en `App.tsx`

**P: ¿Cómo cambio el color del fondo?**
R: Edita `src/styles/globals.css` línea de `background:`

**P: ¿Cómo agrego Google Analytics?**
R: Agrega el script en `index.html` en el `<head>`

---

**¡Tu sitio React está listo para usar! 🎉**

Cualquier pregunta, revisa los archivos de documentación:
- `MIGRATION_GUIDE.md` - Guía completa
- `MIGRATION_SUMMARY.md` - Resumen de cambios
>>>>>>> 3f6d8b43aa82af2a764f36e6c8912219496b3ba4
