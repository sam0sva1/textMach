var Storage = require('./storage');

var project = new Storage();
project.insert('Base', 'Теперь здесть будет @@Chapter1@@');
project.insert('Chapter1', 'немного интересного текста с тегом @@Chapter2@@ вот здесь, а вот тут @@Булочка@@.')
project.insert('Булочка', 'немного нового текста с использованием @@Сосиска@@');
project.insert('Сосиска', 'мясных изделий');
console.log(project);