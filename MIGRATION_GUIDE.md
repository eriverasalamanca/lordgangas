# Lord Gangas - React Webapp

Bienvenido a la versión React migrada del sitio web Lord Gangas. Este proyecto incluye todos los componentes y estilos necesarios para una experiencia completa de ofertas inteligentes.

## 🚀 Características

- ✅ **Hero Banner** con animaciones parallax y efectos de flotación
- ✅ **Carousel de Anuncios** con scroll automático y navegación manual
- ✅ **Secciones de Redes Sociales** con tarjetas interactivas
- ✅ **Educación e Información** con cursos y recursos
- ✅ **Sección WhatsApp VIP** con QR y beneficios
- ✅ **Características y Beneficios** destacados
- ✅ **Partners y Alianzas** con grid responsivo
- ✅ **Call-to-Action** con botones a redes sociales
- ✅ **Footer** con parallax background
- ✅ **Animaciones Suaves** en toda la aplicación
- ✅ **Diseño Responsivo** (mobile, tablet, desktop)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.tsx           # Banner principal
│   ├── AdsCarousel.tsx    # Carousel de anuncios
│   ├── Social.tsx         # Tarjetas de redes sociales
│   ├── Education.tsx      # Sección educativa
│   ├── WhatsApp.tsx       # Sección VIP WhatsApp
│   ├── Features.tsx       # Características principales
│   ├── Partners.tsx       # Socios y alianzas
│   ├── CTA.tsx            # Call-to-Action
│   └── Footer.tsx         # Pie de página
├── styles/
│   ├── globals.css        # Estilos globales
│   ├── Hero.css
│   ├── AdsCarousel.css
│   ├── Social.css
│   ├── Education.css
│   ├── WhatsApp.css
│   ├── Features.css
│   ├── Partners.css
│   ├── CTA.css
│   └── Footer.css
├── App.tsx                # Componente principal
├── App.css               # Estilos de App
├── index.css             # Estilos globales del index
└── main.tsx              # Punto de entrada
```

## 🛠️ Instalación y Setup

### Requisitos previos
- Node.js 16+ 
- npm o yarn

### Pasos de instalación

1. **Navega a la carpeta del proyecto**
```bash
cd "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:5173
```

## 📦 Estructura de Componentes

### Hero Component
- Logo y título principal con gradiente
- Badges de características
- Botones CTA (Call-to-Action)
- Efectos parallax en mousemove

### AdsCarousel Component
- Scroll horizontal automático
- Controles de navegación (flechas)
- Tarjetas con efecto blur/scale
- Tooltips en hover

### Social Component
- 3 tarjetas para redes (TikTok, Instagram, Facebook)
- Estadísticas de seguidores
- Enlaces directos a redes

### Education Component
- Grid de cursos y recursos
- Botones para acceso a plataformas educativas
- Ebooks recomendados

### WhatsApp Component
- QR para grupo VIP
- Beneficios y características del grupo
- Botón CTA principal

### Features Component
- 6 características principales
- Iconos emoji
- Descripciones detalladas

### Partners Component
- Grid de logos de socios
- Botón "+Más" para ampliaciones
- CTA para nuevos socios

### CTA Component
- Sección de llamada a acción
- Botones para todas las redes sociales
- Diseño llamativo con gradientes

## 🎨 Personalización

### Cambiar Colores
Los colores principales están en `styles/globals.css`:
- Color primario: `#00ffc8` (cian)
- Color secundario: `#00d4ff` (azul)
- Color de fondo: Verde gradiente

### Cambiar Imágenes
Las imágenes deben estar en la carpeta `public/`:
- `lordgangaslogo.png` - Logo pequeño del hero
- `aby.png`, `didi.png`, etc. - Imágenes de anuncios
- `qr-whatsapp.png` - QR del grupo
- Logo partners: `tiktok.png`, `mercadolibre.png`, etc.

### Agregar/Cambiar Enlaces
Los enlaces están en los componentes. Por ejemplo:
- Redes sociales en `Social.tsx`
- WhatsApp en `WhatsApp.tsx`
- Botones CTA en `CTA.tsx`

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

## 📱 Responsividad

El sitio es completamente responsivo con breakpoints en:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🎯 Próximas Mejoras

- [ ] Agregar más animaciones
- [ ] Integrar backend para contenido dinámico
- [ ] Analytics mejorado
- [ ] Modo oscuro/claro
- [ ] PWA (Progressive Web App)

## 📧 Contacto

Para colaboraciones y alianzas:
- WhatsApp: +52 334-247-0959
- Instagram: @lordgangas
- TikTok: @lord.gangas.descuentos

---

**© 2026 Lord Gangas. Todos los derechos reservados.**
