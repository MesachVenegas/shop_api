# Guía para la creación de un API REST usando TypeScript y Prisma con Express.

Esta es una guía hecha para recordar y afianzar la construcción de un API, es un repo mas a modo explicativo y de notas y recodatorio para realizar un API REST, pretendo incorporar varias librerías, asi como aprender nuevas y su funcionamiento basico entre ellas estare trabajando con las siguientes:

- Express
- Prisma
- TypeScript
- NodeJs

como base principal del proyecto, ademas de las siguientes librerías
> Ire agregando mas con forme el API valla creciendo.

- cors
- morgan
- bcrypt
- dotenv

## Configuraciones básicas del proyecto.

Para comenzar el proyecto procederemos a crear la carpeta contenedora del mismo y nos colocamos dentro de la misma.

```bash
mkdir shop_api && cd shop_api
```
una vez estamos dentro de la carpeta en nuestra terminal procedemos a correr el comando de inicializado de proyecto de node usando ```npm```

```bash
npm init -y
```

lo cual nos creara un archivo llamado ```package.json``` donde podremos encontrar la siguiente estructura

```json
{
  "name": "shop_api",
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo script test to app"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {},
  "dependencies": {}
}
```

### Configurando TypeScript

Ahora bien procederemos a instalar TypeScript y iniciar su configuración para ello podemos usar el siguiente comando:

```bash
npm i typescript -D -E
```

una vez esta instalado podemos agregar un nuevo script en nuestro package.json para trabajar con typescript, en este caso seria un script para el compilador le pueden poner el nombre que gustes yo lo llamare ```build```

```json
{
  "scripts": {
    "build": "tsc",
    "test": "echo script de test del app"
  }
}
```

una vez esta listo esto procedemos a ejecutar el comando de la siguiente manera

```bash
npm run build -- --init
```
> Este comando nos inicializa la configuración de typescript en el proyecto, creandonos un archivo tsconfig.json en la raíz de nuestro proyecto. El cual cuenta con un template de las configuraciones que se pueden realizar.

Ahora en nuestro nuevo archivo de configuración de typescript procedemos a ajustar las verificaciones que debe realizar en el compilado de nuestra app. En mi caso usare solo las siguientes configuraciones:

```json
{
  "compilerOptions": {
    // Establece la version de ECMA Script que usaremos.
    "target": "es2016", 
    // Establece la forma en la que se exportaran los módulos
    "module": "commonjs",
    // Establece el fichero de salida de nuestro compilado lo pueden llamar como gusten por convención se le suele llamar dist 
    "outDir": "./build", 
    // Indica el modo de compatibilidad de los módulos en este caso para que puede trabajar con las 2 formas.
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    // Verifica que no se hayan declarado variables sin utilizar
    "noUnusedLocals": true,
    // Verifica que no hayan parametros sin usar
    "noUnusedParameters": true,
    // Verifica que todas la funciones tengan un return, y no sea implícito.
    "noImplicitReturns": true,
    // Verifica que en cada case de los switch tenga un return
    "noFallthroughCasesInSwitch": true,
    // Establece el modo de inspeccion estricta.
    "strict": true,
    "skipLibCheck": true,
    // establece un alias, para las rutas relativas.
     "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules"]
}
```

### Instalacion de dependencies.

Ahora con TypeScript listo para trabajar instalaremos las dependencias básicas de nuestro proyecto y las dependencias de desarrollo:

```bash
#NPM
npm i express morgan cors bcrypt dotenv @prisma/client
#BUN
bun i express morgan cors bcrypt dotenv @prisma/client
```
Ahora las dependencias de desarrollo:

```bash
#NPM
npm i -D prisma ts-node-dev @types/express @types/bcrypt @types/morgan @types/cors
```

### Scripts funcionales.

Bien hasta ahora ya tenemos todo lo necesario para trabajar, solo faltan un par de ajustes mas como nuestros scripts para desarrollo, producción y pruebas. por el momento creemos nuestros scripts de producción y desarrollo, para ello volvemos a nuestro package.json y agregamos lo siguiente:

```json
{
  "scripts": {
    "start": "node build/index.js",
    "dev": "ts-node-dev src/index.ts",
    "build": "tsc",
  }
}
```

