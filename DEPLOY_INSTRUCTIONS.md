# 🚀 Instrucciones de Deploy Automático

## Configuración inicial (solo una vez)

### 1. Preparar el repositorio local

```bash
# Asegúrate de estar en la rama main
git checkout main

# Verificar que tienes el remoto configurado
git remote -v
# Debería mostrar algo como:
# origin  https://github.com/tuusuario/primesys.git (fetch)
# origin  https://github.com/tuusuario/primesys.git (push)
```

### 2. Subir código a GitHub (sin credenciales)

```bash
# Agregar todos los cambios
git add .

# Commit
git commit -m "feat: mejoras UI, confetti, validaciones, deploy automático"

# Push a main
git push origin main
```

### 3. Configurar Secrets en GitHub (IMPORTANTE)

Ve a tu repositorio en GitHub:

1. **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Agrega estos 6 secrets uno por uno:

| Nombre | Valor | Descripción |
|--------|-------|-------------|
| `EMAILJS_SERVICE_ID` | `tu_service_id` | De EmailJS Dashboard |
| `EMAILJS_TEMPLATE_ID` | `tu_template_id` | De EmailJS Dashboard |
| `EMAILJS_PUBLIC_KEY` | `tu_public_key` | De EmailJS Dashboard > Account |
| `GODADDY_SERVER` | `ftp.tudominio.com` | Servidor FTP de GoDaddy |
| `GODADDY_USERNAME` | `tu_usuario` | Usuario FTP de GoDaddy |
| `GODADDY_PASSWORD` | `tu_password` | Password FTP de GoDaddy |

### 4. Encontrar credenciales de GoDaddy

1. Ve a [GoDaddy](https://godaddy.com) → My Products → Web Hosting → Manage
2. En el cPanel, busca **FTP Accounts** o **Files → FTP Accounts**
3. Ahí verás:
   - **Server/FTP Host**: ej. `ftp.primesys.ec` o `primesys.ec`
   - **Username**: ej. `primesys` o `primesys@primesys.ec`
   - **Password**: La que configuraste

### 5. Probar el deploy

Una vez configurados los secrets, cada vez que hagas push a `main`:

```bash
git push origin main
```

GitHub Actions automáticamente:
1. ✅ Instala dependencias
2. ✅ Build con las variables de entorno
3. ✅ Deploy a GoDaddy vía FTP

Puedes ver el progreso en GitHub → **Actions** tab

---

## 🔄 Flujo de trabajo diario

```bash
# 1. Hacer cambios locales
# 2. Probar en localhost: npm run dev

# 3. Commit y push → Deploy automático
git add .
git commit -m "fix: corrección de bug X"
git push origin main

# 4. Esperar 2-3 minutos y listo!
# Ver en: https://primesys.ec
```

---

## 🛠️ Si algo falla

### Ver logs de GitHub Actions
1. GitHub → Actions → Selecciona el workflow que falló
2. Revisa el paso que dio error

### Problemas comunes

**Error: "Authentication failed"**
→ Verifica que `GODADDY_SERVER`, `USERNAME` y `PASSWORD` sean correctos

**Error: "npm ci failed"**
→ Borra `node_modules` y `package-lock.json` localmente, corre `npm install` y sube el nuevo lock

**Error: "Build failed"**
→ Revisa que `EMAILJS_SERVICE_ID`, `TEMPLATE_ID` y `PUBLIC_KEY` estén correctos

---

## 🔒 Seguridad

- ✅ Los secrets en GitHub están encriptados
- ✅ Nunca se muestran en los logs
- ✅ El código público no tiene credenciales
- ✅ Solo tú (con acceso al repo) puedes ver/modificar los secrets

---

## 📞 Soporte

Si tienes problemas, revisa:
1. GitHub → Actions → Logs del workflow
2. Tu email de GitHub (notificaciones de fallos)
3. GoDaddy → cPanel → Error Logs
