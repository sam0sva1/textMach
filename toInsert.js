var project = new Storage('Development');
project.insert('Base', 'Теперь здесть будет @@Chapter1@@');
project.insert('Chapter1', 'немного интересного текста с тегом @@Chapter2@@ вот здесь, а вот тут @@Булочка@@.')
project.insert('Булочка', 'немного нового текста с использованием @@Сосиска@@');
project.insert('Сосиска', 'мясных изделий');
project.complit();

var pathHolder = [];

// function buildPath(route) {
//   var name = route || 'Base';
//   var position = pathHolder.indexOf(name);
//   if(position === -1) {
//     pathHolder.push(name);
//   } else {
//     pathHolder.splice(position+1);
//   }
//   path.innerHTML = '';
//   pathHolder.forEach(function(elem) {
//     path.innerHTML += "<span data-name='" + elem + "'class='path__elem'>" + elem + " </span>";
//   });
// }

// function buildSidebar(route) {
//   var name = route || 'Base';
//   var tags = project[name].listInc();
//   sidebar.innerHTML = '';
//   tags.forEach(function(elem) {
//     sidebar.innerHTML += "<div data-name='" + elem + "'class='sidebar__elem'>" + elem + " </div>";
//   });
// }

// function init() {
//   buildPath();
//   buildSidebar();
//   holder.innerHTML = project.complit();
//   holder.setAttribute('data-inner', 'Base');
// }

function moveTo(name) {
  holder.contentEditable = false;
  buildPath(name);
  buildSidebar(name);
  holder.innerHTML = project.concat(name);
  holder.setAttribute('data-inner', name);
}

init();

holder.onclick = function(e) {
  var last;
  if(e.target.dataset.name) {
    tag.innerHTML = "<span data-name='" + 
      e.target.dataset.name + 
      "'class='tag'>" + 
      e.target.dataset.name + 
      " </span>";
    last = document.querySelector('.bordered');
    if(last){
      last.classList.remove('bordered');
    }
    e.target.classList.add('bordered');
  } else {
      (document.querySelector('.bordered')).classList.remove('bordered');
  }
};

var onClickHandler = function(e) {
  var name = e.target.dataset.name;
  state.innerHTML = 'Редактирование';
  holder.setAttribute('data-inner', name);
  holder.innerHTML = project[name].showText();
  holder.contentEditable = true;
};

sidebar.onclick = onClickHandler;
path.onclick = onClickHandler;
tag.onclick = onClickHandler;

holder.onblur = function(e) {
  var tag = this.dataset.inner;
  project.insert(tag, this.innerHTML);
};

document.ondblclick = function(e) {
  if(e.target.dataset.name) {
    state.innerHTML = 'Компазит';
    moveTo(e.target.dataset.name);
  }
};