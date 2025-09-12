# 📊 Configuración de Dashboards de Power BI - GUÍA RÁPIDA

## 🚨 PROBLEMA COMÚN: La URL no funciona

Si tu dashboard no se muestra, es porque necesitas la **URL PÚBLICA**, no la URL de embed privada.

## ✅ SOLUCIÓN - Cómo obtener la URL correcta:

### Paso 1: Ve a Power BI Service
1. Abre https://app.powerbi.com/
2. Selecciona tu workspace
3. Encuentra tu dashboard/reporte

### Paso 2: Hacer público el dashboard  
1. Haz clic en tu dashboard
2. Ve a "Archivo" → **"Insertar en sitio web público"** 
3. ⚠️ IMPORTANTE: Lee las advertencias de seguridad
4. Si estás de acuerdo, haz clic en **"Crear código para insertar"**

### Paso 3: Copiar la URL correcta
1. Power BI te dará un código iframe como este:
```html
<iframe width="1140" height="541.25" src="https://app.powerbi.com/view?r=eyJrIjoiXXXXXXX" frameborder="0" allowFullScreen="true"></iframe>
```

2. **Copia SOLO la URL** que está después de `src="` y antes del siguiente `"`
3. Debe verse así: `https://app.powerbi.com/view?r=eyJrIjoiXXXXXXX`

### Paso 4: Actualizar el código
Reemplaza en `nuestroTrabajo.jsx`:
```javascript
embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiTU_URL_REAL_AQUI",
```

## 🔒 Nota de Seguridad:
Las URLs públicas pueden ser vistas por cualquiera. Solo usa datos que no sean confidenciales.

## 🧪 Para probar:
1. Guarda el archivo
2. Ve a http://localhost:3000/nuestro-trabajo  
3. Deberías ver tu dashboard directamente en la página
