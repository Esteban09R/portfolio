# 🛡️ Documentación de Seguridad: Arquitectura "Local-Only CV"

Esta guía explica la arquitectura de seguridad implementada para proteger tus datos sensibles (Email, Teléfono y Ubicación) dentro del portafolio, garantizando que el acceso al CV y la generación de PDF estén restringidos exclusivamente a tu entorno de desarrollo local.

---

## 🏗️ Filosofía: Seguridad por Aislamiento

El objetivo es que **nada** del contenido delos privados llegue al bundle de JavaScript que se envía al navegador en produc CV o de tus datción. Para lograr esto, implementamos cuatro capas de blindaje:

### 1. Aislamiento de Datos a Nivel de Compilación (`server-only`)

Movimos los datos sensibles de `PROFILE` a un nuevo módulo: `constants/private-profile.ts`.

- **Implementación**: Utilizamos el paquete oficial de Next.js `server-only`.
- **Seguridad**: Si accidentalmente intentas importar estos datos en un componente de cliente (`'use client'`), Next.js lanzará un error de compilación. Esto previene que datos privados terminen en el código fuente visible desde el navegador.

### 2. Gestión Estricta de Environment Variables

Next.js inyecta automáticamente en el navegador cualquier variable que empiece con `NEXT_PUBLIC_`.

- **Acción**: Eliminamos el prefijo `NEXT_PUBLIC_` de `EMAIL`, `PHONE` y `LOCATION`.
- **Resultado**: Estas variables ahora son **solo accesibles por Node.js/Bun**. El cliente recibe `undefined` si intenta consultarlas, evitando fugas de información en los logs o el DOM.

### 3. Migración de Arquitectura: Cliente ➔ API (Servidor)

Anteriormente, el PDF se generaba en el navegador usando `@react-pdf/renderer`. Esto obligaba a enviar **todo** el JSON del CV al cliente para que React pudiera renderizarlo.

- **Nueva Arquitectura**: Creamos un endpoint dedicado: `/api/cv/download/[lang]/route.tsx`.
- **Ventaja**: El navegador ahora solo recibe un stream de bits (el PDF ya procesado) o un `iframe` que apunta a la API. Los datos fuente (JSON) nunca salen del servidor.

### 4. Bloqueo de Rutas en Producción (`notFound`)

Implementamos una "Kill Switch" basada en el entorno.

- **Lógica**: `if (process.env.NODE_ENV === 'production') return notFound();`
- **Efecto**: Tanto las páginas `/es/cv` y `/en/cv` como la API de descarga devolverán un error **404 (Página no encontrada)** instantáneo en el servidor de producción. Next.js ni siquiera intentará cargar las librerías pesadas de PDF, ahorrando recursos y escondiendo la funcionalidad.

---

## 🎨 Solución de Problemas Específicos

### 🐧 Fuentes Locales en Arch Linux

Al generar el PDF en el servidor (fuera del contexto del navegador), el sistema no tiene acceso a las fuentes del usuario.

- **Reto**: @react-pdf/renderer fallando con "Unknown font format".
- **Solución**: Copiamos archivos `.ttf` reales (como Hack o Roboto) a `public/fonts/` y los registramos manualmente en la API mediante `Font.register()`. Esto garantiza que el PDF se vea igual en cualquier máquina Linux donde corras el portafolio.

### ⚡ Prevención de Errores en Cloudflare/Vercel (Workers)

Las librerías de PDF suelen ser pesadas y usar APIs nativas de Node que rompen los builds de Edge Runtime.

- **Blindaje**: Usamos **Dynamic Imports** (`await import(...)`) dentro de la función `GET`. Al estar protegidos por el chequeo de `NODE_ENV`, el servidor de producción nunca intentará importar la librería en tiempo de ejecución, evitando crasheos en el despliegue.

---

## 🛠️ Cómo Visualizar en Local

Para ver tu CV y probar la generación:

1.  Asegúrate de estar corriendo el servidor en desarrollo (`bun run dev`).
2.  Accede a `http://localhost:3000/es/cv`.
3.  Tus datos sensibles se cargarán dinámicamente desde tu archivo `.env` local.

> [!IMPORTANT]
> Nunca añadas el prefijo `NEXT_PUBLIC_` a los datos de contacto si deseas mantener este nivel de protección. Si necesitas mostrar un correo en el portafolio público, usa un método de ofuscación o un formulario de contacto.
