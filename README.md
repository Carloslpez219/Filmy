# Filmy
## Descripción
Aplicación móvil híbrida para recomendación y búsqueda de películas. Realizada en base a [Ionic Framework](https://ionicframework.com).
## Tecnologías utilizadas
- Ionic: framework de desarrollo de aplicaciones móviles híbridas. Permite crear aplicaciones utilizando tecnologías web, y luego empaquetarlas como aplicaciones nativas para múltiples plataformas, como iOS y Android.
- Typescript: lenguaje de programación desarrollado por Microsoft que se basa en JavaScript. TypeScript agrega características adicionales a JavaScript, incluyendo tipado estático opcional y características de programación orientada a objetos.
- Html: lenguaje estándar utilizado para crear y estructurar contenido en la web.
- Scss: preprocesador de CSS que extiende la funcionalidad del lenguaje permitiendo el uso de variables, anidamiento de selectores, mixins, etc.
## Comandos
Instalar las dependencias del proyecto
```sh
npm install
```
Al momento de desarrollar, generar un Angular Live Development Server
```sh
npm run start
```
## Estructura
> ## Filmy
>
>>  ## src
>> 
>>> ### app
>>> 
>>>> #### categorias
>>>>> categorias.page.html
>>>>> 
>>>>> categorias.page.scss
>>>>> 
>>>>> categorias.page.ts
>>>>> 
>>>>> categorias.module.ts
>>>>> 
>>>>> categorias-routing.module.ts
>>>>> 
>>>> #### guards
>>>>> guard.guard.ts
>>>>> 
>>>> #### home
>>>>> home.page.html
>>>>> 
>>>>> home.page.scss
>>>>> 
>>>>> home.page.ts
>>>>> 
>>>>> home.module.ts
>>>>> 
>>>>> home-routing.module.ts
>>>>> 
>>>> #### interfaces
>>>>> interfaces.ts
>>>>> 
>>>> #### login
>>>>> login.page.html
>>>>> 
>>>>> login.page.scss
>>>>> 
>>>>> login.page.ts
>>>>> 
>>>>> login.module.ts
>>>>> 
>>>>> login-routing.module.ts
>>>>>
>>>> #### pelicula
>>>>> pelicula.page.html
>>>>> 
>>>>> pelicula.page.scss
>>>>> 
>>>>> pelicula.page.ts
>>>>> 
>>>>> pelicula.module.ts
>>>>> 
>>>>> pelicula-routing.module.ts
>>>>> 
>>>> #### perfil
>>>>> perfil.page.html
>>>>> 
>>>>> perfil.page.scss
>>>>> 
>>>>> perfil.page.ts
>>>>> 
>>>>> perfil.module.ts
>>>>> 
>>>>> perfil-routing.module.ts
>>>>> 
>>>> #### registro
>>>>> registro.page.html
>>>>> 
>>>>> registro.page.scss
>>>>> 
>>>>> registro.page.ts
>>>>> 
>>>>> registro.module.ts
>>>>> 
>>>>> registro-routing.module.ts
>>>> #### search
>>>>> search.page.html
>>>>> 
>>>>> search.page.scss
>>>>> 
>>>>> search.page.ts
>>>>> 
>>>>> search.module.ts
>>>>> 
>>>>> search-routing.module.ts
>>>>> 
>>>> #### pipes
>>>>> imagen.pipe.ts
>>>>> 
>>>>> pares.pipe.ts
>>>>> 
>>>>> pipes.module.ts
>>>>> 
>>>> #### services
>>>>> alert.service.ts
>>>>> 
>>>>> movies.service.ts
>>>>> 
>>>>> user.service.ts
>>>>> 
>>>> #### app.component.html
>>>> #### app.component.ts
>>>> #### app.component.scss
>>>> #### app.module.ts
>>>> #### app-routing.module.ts
