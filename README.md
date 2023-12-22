# Base Node Project
Estructura base para proyectos de node con typescript

## Características Principales

- **Express:** Framework de Node.js para construir aplicaciones web y APIs.
- **ESLint:** Herramienta para identificar y arreglar patrones de código problemáticos.
- **Babel:** Transpilador de JavaScript para compatibilidad con versiones anteriores y características avanzadas.
- **Prettier:** Formateador de código para mantener un estilo consistente.

## Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu máquina.

## Configuración

1. Clona o haz un fork del repositorio:

   ```bash
   git clone https://github.com/RodrigoChumpitaz/base-express-project
   git fork https://github.com/usuario-original/proyecto-base-express.git
   cd base-express-project
   npm i
## Scripts disponibles

- **build:** Transpila el código con Babel.
- **start:** Ejecuta el código transpilado en modo PROD
- **dev:** Inicia el servidor en modo de desarrollo.

## Estructura del proyecto
   ```bash
      ├── .eslintrc.json
      ├── .gitignore
      ├── .nvmrc
      ├── .prettierrc
      ├── babel.config.js
      ├── build/
      ├── package.json
      ├── README.md
      ├── src/
      │   ├── index.ts
      └── tsconfig.json
   ```
## Nota
Después de clonar o hacer fork del repositorio, puedes eliminar el historial de Git existente y comenzar un nuevo repositorio con estos pasos:
```bash
      rm -rf .git
      git init
      git add .
      git commit -m "Initial commit"
   ```
