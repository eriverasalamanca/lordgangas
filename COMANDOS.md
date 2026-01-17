<<<<<<< HEAD
# 🚀 COMANDOS PARA EJECUTAR LA APLICACIÓN

## Localización del Proyecto
```
c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG
```

## 📋 Pasos Iniciales (Primera Vez)

### 1. Abre PowerShell o CMD
```powershell
# Presiona Win + R y escribe:
powershell
# O abre CMD normalmente
```

### 2. Navega a la carpeta del proyecto
```powershell
cd "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
```

### 3. Instala dependencias
```powershell
npm install
```
Esto descargará todos los paquetes necesarios (toma 2-5 minutos la primera vez).

### 4. Inicia el servidor de desarrollo
```powershell
npm run dev
```

### 5. Abre en tu navegador
```
http://localhost:5173
```

---

## ⚡ Comandos Disponibles

### 🔧 Desarrollo
```powershell
npm run dev
```
- Inicia el servidor de desarrollo
- Hot reload automático
- Abre: http://localhost:5173

### 🏗️ Compilar para Producción
```powershell
npm run build
```
- Compila la aplicación
- Genera carpeta `dist/` lista para producción
- Optimizado para desempeño

### 👀 Ver Build Local
```powershell
npm run preview
```
- Visualiza cómo se verá en producción
- Sirve la carpeta `dist/` localmente

### 🔍 Linter (Revisar Código)
```powershell
npm run lint
```
- Revisa errores en el código
- Sugiere mejoras

---

## 📝 Scripts Rápidos

### En Windows, crea un archivo `run.bat`

1. Abre Notepad
2. Copia esto:
```batch
@echo off
cd /d "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
npm run dev
pause
```

3. Guarda como `run.bat` en el escritorio
4. Doble-click para ejecutar

---

## 🐛 Solucionar Problemas

### Si npm no está instalado
```powershell
# Descarga Node.js desde: https://nodejs.org
# Reinicia la terminal después de instalar
```

### Si ves errores de permisos
```powershell
# En PowerShell como Administrador:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Si los módulos están corruptos
```powershell
# Limpia y reinstala:
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

### Si ves "port already in use"
```powershell
# El puerto 5173 está ocupado, usa otro:
npm run dev -- --port 3000
# O cierra lo que esté usando el puerto
```

---

## 📦 Instalar Nuevas Dependencias

Si necesitas agregar un paquete:
```powershell
npm install nombre-del-paquete
```

Por ejemplo:
```powershell
npm install axios
npm install react-router-dom
```

---

## 🎯 Flujo Típico de Desarrollo

```
1. Terminal: npm run dev
2. Navegador: http://localhost:5173
3. Edita archivos en src/
4. Los cambios se actualizan automáticamente
5. Cuando termines: Ctrl + C en la terminal
```

---

## 📁 Archivos Importantes

- `src/App.tsx` - Componente principal
- `src/components/` - Todos los componentes
- `src/styles/` - Estilos CSS
- `public/` - Imágenes y assets
- `index.html` - HTML base
- `package.json` - Dependencias

---

## 📋 Checklist

Antes de usar:

- [ ] Node.js instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] Navegar a la carpeta correcta
- [ ] Ejecutar `npm install`
- [ ] Ejecutar `npm run dev`
- [ ] Verificar que abre http://localhost:5173
- [ ] Ver en navegador

---

## 💾 Guardar para Producción

Cuando todo esté listo:

```powershell
# 1. Compila
npm run build

# 2. Verifica
npm run preview

# 3. Sube la carpeta 'dist/' a tu servidor
```

---

## 🔗 Recursos Útiles

- Node.js: https://nodejs.org
- npm: https://www.npmjs.com
- React: https://react.dev
- Vite: https://vitejs.dev

---

## ❓ Preguntas Rápidas

**P: ¿Cómo veo los cambios en tiempo real?**
R: Con `npm run dev` los cambios se actualizan automáticamente

**P: ¿Cómo cambio el puerto?**
R: `npm run dev -- --port 3000`

**P: ¿Cómo compilo para producción?**
R: `npm run build`

**P: ¿Dónde subo los archivos finales?**
R: Sube la carpeta `dist/` a tu servidor

---

## 🎉 ¡Listo!

Ahora tienes tu aplicación React de Lord Gangas ejecutándose localmente.

**Próximo paso:** Ejecuta en terminal:
```powershell
npm install
npm run dev
```

¡Que disfrutes desarrollando! 🚀
=======
# 🚀 COMANDOS PARA EJECUTAR LA APLICACIÓN

## Localización del Proyecto
```
c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG
```

## 📋 Pasos Iniciales (Primera Vez)

### 1. Abre PowerShell o CMD
```powershell
# Presiona Win + R y escribe:
powershell
# O abre CMD normalmente
```

### 2. Navega a la carpeta del proyecto
```powershell
cd "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
```

### 3. Instala dependencias
```powershell
npm install
```
Esto descargará todos los paquetes necesarios (toma 2-5 minutos la primera vez).

### 4. Inicia el servidor de desarrollo
```powershell
npm run dev
```

### 5. Abre en tu navegador
```
http://localhost:5173
```

---

## ⚡ Comandos Disponibles

### 🔧 Desarrollo
```powershell
npm run dev
```
- Inicia el servidor de desarrollo
- Hot reload automático
- Abre: http://localhost:5173

### 🏗️ Compilar para Producción
```powershell
npm run build
```
- Compila la aplicación
- Genera carpeta `dist/` lista para producción
- Optimizado para desempeño

### 👀 Ver Build Local
```powershell
npm run preview
```
- Visualiza cómo se verá en producción
- Sirve la carpeta `dist/` localmente

### 🔍 Linter (Revisar Código)
```powershell
npm run lint
```
- Revisa errores en el código
- Sugiere mejoras

---

## 📝 Scripts Rápidos

### En Windows, crea un archivo `run.bat`

1. Abre Notepad
2. Copia esto:
```batch
@echo off
cd /d "c:\Users\kemie\OneDrive\Desktop\Lord Gangas\WebLG"
npm run dev
pause
```

3. Guarda como `run.bat` en el escritorio
4. Doble-click para ejecutar

---

## 🐛 Solucionar Problemas

### Si npm no está instalado
```powershell
# Descarga Node.js desde: https://nodejs.org
# Reinicia la terminal después de instalar
```

### Si ves errores de permisos
```powershell
# En PowerShell como Administrador:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Si los módulos están corruptos
```powershell
# Limpia y reinstala:
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run dev
```

### Si ves "port already in use"
```powershell
# El puerto 5173 está ocupado, usa otro:
npm run dev -- --port 3000
# O cierra lo que esté usando el puerto
```

---

## 📦 Instalar Nuevas Dependencias

Si necesitas agregar un paquete:
```powershell
npm install nombre-del-paquete
```

Por ejemplo:
```powershell
npm install axios
npm install react-router-dom
```

---

## 🎯 Flujo Típico de Desarrollo

```
1. Terminal: npm run dev
2. Navegador: http://localhost:5173
3. Edita archivos en src/
4. Los cambios se actualizan automáticamente
5. Cuando termines: Ctrl + C en la terminal
```

---

## 📁 Archivos Importantes

- `src/App.tsx` - Componente principal
- `src/components/` - Todos los componentes
- `src/styles/` - Estilos CSS
- `public/` - Imágenes y assets
- `index.html` - HTML base
- `package.json` - Dependencias

---

## 📋 Checklist

Antes de usar:

- [ ] Node.js instalado (`node --version`)
- [ ] npm instalado (`npm --version`)
- [ ] Navegar a la carpeta correcta
- [ ] Ejecutar `npm install`
- [ ] Ejecutar `npm run dev`
- [ ] Verificar que abre http://localhost:5173
- [ ] Ver en navegador

---

## 💾 Guardar para Producción

Cuando todo esté listo:

```powershell
# 1. Compila
npm run build

# 2. Verifica
npm run preview

# 3. Sube la carpeta 'dist/' a tu servidor
```

---

## 🔗 Recursos Útiles

- Node.js: https://nodejs.org
- npm: https://www.npmjs.com
- React: https://react.dev
- Vite: https://vitejs.dev

---

## ❓ Preguntas Rápidas

**P: ¿Cómo veo los cambios en tiempo real?**
R: Con `npm run dev` los cambios se actualizan automáticamente

**P: ¿Cómo cambio el puerto?**
R: `npm run dev -- --port 3000`

**P: ¿Cómo compilo para producción?**
R: `npm run build`

**P: ¿Dónde subo los archivos finales?**
R: Sube la carpeta `dist/` a tu servidor

---

## 🎉 ¡Listo!

Ahora tienes tu aplicación React de Lord Gangas ejecutándose localmente.

**Próximo paso:** Ejecuta en terminal:
```powershell
npm install
npm run dev
```

¡Que disfrutes desarrollando! 🚀
>>>>>>> 3f6d8b43aa82af2a764f36e6c8912219496b3ba4
