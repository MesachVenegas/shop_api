# 📚 Guía para la creación de un API REST.

Esta es una guía hecha para recordar y afianzar la construcción de un API, es un repositorio mas a modo explicativo y de notas para realizar un API REST, pretendo incorporar varias librerías, asi como aprender nuevas y su funcionamiento básico.

<div align="center" style="display:flex; justify-content:center; align-items:center; gap:40px; padding:40px " >
  <img src="./public/nodejs.svg" alt="NodeJs" width="70" title="NodeJs">
  <img src="./public/typescript.svg" alt="TypeScript" width="80" title="TypeScript">
  <img src="./public/expressjs.svg" alt="ExpressJs" width="80" title="ExpressJs">
  <img src="./public/prisma.svg" alt="Prisma" width="60" title="Prisma">
</div>

como base principal del proyecto, ademas de las siguientes librerías
> 💡 Ire agregando mas con forme el API valla creciendo.

- Prisma
- Cors
- Morgan
- Bcrypt
- Dotenv

## 🛠️ Configuraciones básicas del proyecto.

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

### ⚙️ Configurando TypeScript

Ahora bien procederemos a instalar TypeScript y iniciar su configuración para ello podemos usar el siguiente comando:

```bash
npm i typescript -D
```

una vez esta instalado podemos agregar un nuevo script en nuestro package.json para trabajar con typescript, en este caso seria un script para el compilador le pueden poner el nombre que gusten yo lo llamare ```build```

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
> 🔎 Este comando nos inicializa la configuración de typescript en el proyecto, creándonos un archivo tsconfig.json en la raíz de nuestro proyecto. El cual cuenta con un template de las configuraciones que se pueden realizar.

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
    // Verifica que los nombres de los archivos coincidan con sus definiciones(case sensitive) al se llamados.
    "forceConsistentCasingInFileNames": true,
    // Verifica que no se hayan declarado variables sin utilizar
    "noUnusedLocals": true,
    // Verifica que no hayan parámetros sin usar
    "noUnusedParameters": true,
    // Verifica que todas la funciones tengan un return, y no sea implícito.
    "noImplicitReturns": true,
    // Verifica que en cada case de los switch tenga un return
    "noFallthroughCasesInSwitch": true,
    // Establece el modo de inspección estricta.
    "strict": true,
    // Salta la verificación de tipos en las librerías externas
    "skipLibCheck": true,
    // establece un alias, para las rutas relativas.
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules"]
}
```

### 📥 Instalación de dependencies.

Ahora con TypeScript listo para trabajar instalaremos las dependencias básicas de nuestro proyecto y las dependencias de desarrollo:

```bash
#BUN
bun i express morgan cors bcrypt dotenv @prisma/client
#NPM
npm i express morgan cors bcrypt dotenv @prisma/client
```
Ahora las dependencias de desarrollo:

```bash
#BUN
bun i -D prisma ts-node-dev @types/express @types/bcrypt @types/morgan @types/cors
#NPM
npm i -D prisma ts-node-dev @types/express @types/bcrypt @types/morgan @types/cors
```

### 🔧 Scripts funcionales.

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

## 🗄️ Configurando Prisma y la base de datos.

Prisma es un ORM como lo es Sequelize entre otros, utilizare este ya que me pare mas sencillo de utilizar en comparación con Sequelize, fuero de eso no hay una gran diferencia permite conectase a diversas bases de datos. Para poder empezar a trabajar hay que inicializar prisma en nuestro proyecto para ello seguiremos una serie de pasos que al finalizar nos permitirá tener una base de datos conectada y funcional, con nuestros modelos, semillas y migraciones.

### 🏁 Inicializando Prisma.

Ya vimos como configurar nuestro proyecto ahora configuraremos nuestro ORM para trabar con el. Como ya hemos instalado Prisma en los pasos anteriores, ya podemos acceder a la linea de comandos de prisma por lo que ejecutaremos el comando de inicio que nos creara una nueva carpeta llamada ```prisma```, y un archivo ```.env```, dentro de la carpeta prisma tendremos un archivo llamado  ```prisma.schema``` en cual contiene las variables de conexión con nuestra base de datos y el esquema de los modelos que usaremos(tablas o entidades).

```console
npx prisma init
```

Y listo ahora en el archivo env colocamos nuestro URI para conectarnos con la base de datos de nuestra preferencia, en nuestro caso usaremos una base de datos MySQL, en caso de que quieras utilizar otra puede revisar como debería ser el URI en [Prisma Docs Databases]([https://](https://www.prisma.io/docs/orm/overview/databases)):

```console
mysql://USER:PASSWORD@HOST:PORT/DATABASE?connection_limit=5&socket_timeout=3
```
> 💡 En el URI se coloca un pool connection con máximo de 5 conexiones y un tiempo de espera de 3 segundos entre las peticiones.

Ahora dentro de la carpeta ```prisma``` en nuestro schema procederemos a declarar los modelos que usaremos para crear nuestra base de datos. De igual manera puedes revisar la documentación sobre como crear un modelo en [Prisma Docs Models](https://www.prisma.io/docs/orm/prisma-schema/data-model/models)