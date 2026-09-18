# Publicar este portafolio en GitHub Pages

Este proyecto ya está preparado como un sitio estático para GitHub Pages. `index.html` está en la raíz, todas las rutas son relativas y el archivo `.nojekyll` evita que GitHub intente procesarlo como un proyecto Jekyll.

## Opción recomendada: URL principal de tu cuenta

Crea un repositorio público llamado exactamente:

```text
jorgegomez92.github.io
```

La dirección pública será:

```text
https://jorgegomez92.github.io/
```

### Con GitHub Desktop

1. Descomprime esta carpeta.
2. En GitHub, crea el repositorio público `jorgegomez92.github.io` sin agregar archivos iniciales.
3. Abre GitHub Desktop y usa **File → Add local repository**. Si la carpeta todavía no es un repositorio, selecciona **create a repository**.
4. Usa `jorgegomez92.github.io` como nombre del repositorio.
5. Haz el primer commit y selecciona **Publish repository**.
6. En GitHub abre **Settings → Pages**.
7. En **Build and deployment**, selecciona **Deploy from a branch**.
8. Selecciona la rama `main`, la carpeta `/ (root)` y guarda.

GitHub mostrará la URL cuando termine el despliegue.

## Opción por terminal

Dentro de la carpeta del portafolio:

```bash
git init
git add .
git commit -m "Publish portfolio"
git branch -M main
git remote add origin https://github.com/JorgeGomez92/jorgegomez92.github.io.git
git push -u origin main
```

Después configura **Settings → Pages → Deploy from a branch → main → / (root)**.

## Usar otro nombre de repositorio

También puedes crear, por ejemplo, un repositorio llamado `portfolio`. En ese caso la dirección sería:

```text
https://jorgegomez92.github.io/portfolio/
```

Las rutas del proyecto también funcionan en ese formato.

## Nota sobre los videos

El video más grande de esta versión supera el límite de carga individual del navegador de GitHub, pero permanece por debajo del límite de Git. Por eso es mejor usar GitHub Desktop o la terminal en lugar de arrastrar todos los archivos desde la web de GitHub.
