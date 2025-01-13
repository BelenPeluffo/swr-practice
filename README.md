Éste es un pequeño proyecto para ejercitar el uso de SWR.

No prestar atención a la forma en que se organizaron los archivos, simplemente se siguieron las indicaciones del [video de Code Genix](https://youtu.be/qURCyd3ycfw?si=9MxfE9zi9K3ZSj6l).

Para levantar el DB mockeado, correr `npm run json-server` en el terminal.

### Lógica interna
El `layout.tsx` es donde se renderiza todo. Fijate se wrappea a children con el `Providers` y el `AppProvider`.

El `Providers` es donde se envuelve todo con el `SWRConfig` y se pasa el fetcher. Ésta pareciera ser la forma correcta de settear a SWR. El fetcher no es otra cosa que el método GET para obtener las distintas entidades.

En el `AppProvider` tenemos el gestor del estado `user` para usar para condicionar el fetch de datos sobre posts.

### Observaciones
LOG - 11/ENERO - El refresh funciona todo bien cuando el condicionante para el hook useSWR es data de otro hook, cuando es un valor "estático" (porque el User no es estático), no funciona.
