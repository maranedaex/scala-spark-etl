### Descripcion de las carpetas

- Plantilla: es el codigo de la plataaforma que nos vamos a basar
- Plataforma: es la aplicacion en react desde 0 para comenzar a construir

Solo deberian necesitar descargar el proyecto, abrir terminal y ejecutar npm start para iniciar la aplicacion

### Comandos npm
- npm install
- npm start

### datos de desarrollo Jose Campos 

- version npm 7.10.0
- Visual Studio Code

### Comandos git que son de utilidad

- git checkout -b feature-namechange:  Crea nueva rama para una caracteristica
- git add -A:  agrega los cambios a git localmente
- git commit -a -m '{mensaje}': hacer una confirmacion de los cambios con un mensaje 
- git checkout devel: cambiarse a la rama "devel"
- git merge --no-ff feature-namechange: une los cambios de la rama "feature-namechange" con la actual
- git pull origin devel: obtiene los cambios del repositorio de la rama master
- git push -u origin devel: sube los cambios al repositorio

### remove all files from git cache
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"

### IF you have NOT pushed your changes to remote
git reset HEAD~1

### ELSE you have pushed your changes to remote
git revert HEAD