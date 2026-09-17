# Talent Scout Cohort Hub — Vibramente

Portal de estudiantes y facilitador para el cohorte Talent Scout (AI Marketing-Operator Cohort). Reemplaza el sitio estático anterior (`talenscoutcohortforstudents.netlify.app`, sin login ni backend) con cuentas reales, modo estudiante / modo facilitador, asistencia y participación por sesión, un camino gamificado (insignias por sesión + Operator Stack) hacia un certificado, y un feed de anuncios.

## Stack

React 18 + Vite + React Router + Tailwind CSS v4 + Firebase (Auth + Firestore, proyecto `vibramente-ce5b8`, el mismo que usan SALUDSA y DCD-EA).

## Cómo guarda los datos

Colecciones Firestore con prefijo `talentscout_`:

- `talentscout_cohorts/{cohortId}` — códigos de acceso (estudiante/facilitador), nunca legible por el cliente.
- `talentscout_users/{uid}` — perfil + rol, asignado en el signup validando el código contra el cohorte.
- `talentscout_attendance/{cohortId}__{sessionId}__{uid}` — presente/ausente, participación (0–5). Solo el facilitador escribe.
- `talentscout_progress/{uid}` — checklist del Operator Stack (6 capas). Cada estudiante gestiona el suyo.
- `talentscout_announcements/{postId}` — feed de avisos. Solo el facilitador publica.

**Requiere que las reglas de Firestore estén publicadas** (ver el bloque en el mensaje de entrega) — sin esto, el signup y todo lo demás falla con "Missing or insufficient permissions".

## Gamificación

Una insignia por sesión (se desbloquea cuando el facilitador marca presente), una insignia por completar el Operator Stack, una por asistir a las 8 sesiones, y una por el capstone (Sesión 8). El certificado se desbloquea cuando: asististe a la Sesión 8 **y** completaste el 100% del stack — se renderiza como una página imprimible (botón "Descargar / Imprimir PDF", sin librería de PDF).

## Contenido

Las 8 sesiones, el glosario de 21 términos y las 6 capas del Operator Stack (con pesos y rúbrica) en `src/data/curriculum.js` — portados del sitio actual del cohorte, contenido propio de Vibramente.

## Desarrollo

```bash
npm install
npm run dev     # servidor local
npm run build   # build de producción en dist/
```
