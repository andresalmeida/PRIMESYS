# Deploy a GoDaddy - Instrucciones

## Opción 1: Build Local (Recomendada)

1. **Asegúrate de tener el .env.local configurado:**
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_real
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_real  
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_key_real
   ```

2. **Crear el build:**
   ```bash
   npm run build
   ```

3. **Subir a GoDaddy:**
   - Sube TODO el contenido de la carpeta `dist/` (no el código fuente)
   - No subas `node_modules/`, `.env.local`, ni código fuente
   - Solo los archivos estáticos generados

4. **En GoDaddy:**
   - Apunta el dominio a la carpeta `dist/` o mueve el contenido a `public_html/`

## Opción 2: GitHub Actions (Automático)

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GoDaddy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      env:
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
      run: npm run build
      
    - name: Deploy to GoDaddy
      uses: SamKirkland/FTP-Deploy-Action@4.3.3
      with:
        server: ${{ secrets.GODADDY_SERVER }}
        username: ${{ secrets.GODADDY_USER }}
        password: ${{ secrets.GODADDY_PASS }}
        local-dir: ./dist/
        server-dir: /public_html/
```

Y en GitHub > Settings > Secrets and variables > Actions, agrega:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID` 
- `EMAILJS_PUBLIC_KEY`
- `GODADDY_SERVER`
- `GODADDY_USER`
- `GODADDY_PASS`

## Opción 3: Variables Hardcodeadas (No recomendada)

Si quieres que cualquiera pueda hacer deploy sin configurar nada, puedes crear un archivo de configuración pública (menos seguro):

```javascript
// src/config/email.js
export const emailConfig = {
  serviceId: 'TU_SERVICE_ID_AQUI',
  templateId: 'TU_TEMPLATE_ID_AQUI', 
  publicKey: 'TU_PUBLIC_KEY_AQUI'
};
```

⚠️ **Riesgo:** Cualquiera que vea el código puede ver tus credenciales.

---

## 🔒 Recomendación final:

Usa **Opción 1** (build local) si:
- Solo tú haces deploys
- No necesitas CI/CD automatizado

Usa **Opción 2** (GitHub Actions) si:
- Quieres deploy automático al hacer push
- El repo es privado
- Trabajan varios devs

---

## Nota importante sobre EmailJS:

Las variables de EmailJS son "NEXT_PUBLIC_" porque Next.js las necesita en el cliente (browser). Esto significa que **cualquiera puede verlas en el código fuente de la página** (inspeccionando el sitio).

Esto es normal y aceptable para EmailJS porque:
1. El Public Key está diseñado para ser público
2. EmailJS valida el origen (dominio) de los requests
3. Puedes configurar dominios permitidos en tu dashboard de EmailJS

Para mayor seguridad, en EmailJS dashboard > Security > Allowed domains, agrega:
- primesys.ec (tu dominio)
- www.primesys.ec
