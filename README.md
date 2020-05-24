# Окружение для веб-разработки

## Установка
Для установки зависимостей проекта необходимо в командной строке ввести команды:
-	`yarn install`

## Запуск
- `yarn build` # проект собирается в папку **build**
- `yarn start` # проект собирается в папку **build** и доступен на **localhost:3000**

## Настройки
- sass/cusom.scss # ваш код
- sass/cusom.scss # ваши импорты 
- sass/variables.scss # scss переменные свои и для переопределения Bootstrap
- sass/helpers # полезные миксины и sass функции
- css/*.css # сдесь можно положить css файлы которые не будут обрабатываться и будут скопированы в **build/css/** как есть
- js/script.js # ваш код
- js/main.js # импорты через **gulp-include**
- js/main_babel.js # импорты кода которым требуется **babel**
- js/external/*.js # сдесь можно положить js файлы которые не будут обрабатываться и будут скопированы в **build/js/external** как есть

- gulp/tasks - задачи gulp
- gulp/config - список задач для gulp которые подгружаются в конфигурацию **gulpfile.js**
- gulpfile.js - ядро настроек gulp

По умолчанию устанавливаются jQuery, Popper.js, Bootstrap