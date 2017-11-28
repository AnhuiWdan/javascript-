(function () {
  var tab = document.getElementsByClassName('tab')[0];
  var content = document.getElementsByClassName('content')[0];
  var tabList = tab.getElementsByTagName('li');
  var contentList = content.getElementsByTagName('div');
  for(var i =0; i<tabList.length;i++){
    fn(tabList[i], contentList[i]);
  }
  function tabs(event, content) {
    event.classList.add('active');
    content.style.display = 'block';
    if(event.previousElementSibling){
      event.previousElementSibling.classList.remove('active');
      content.previousElementSibling.style.display = 'none';
    } else {
      event.nextElementSibling.classList.remove('active');
      content.nextElementSibling.style.display = 'none';
    }
  }
  function fn(obj, content) {
    if(document.addEventListener){
      obj.addEventListener('click', function () {
        tabs(obj, content)
      }, false)
    } else {
      obj.attachEvent('click', function () {
        tabs(obj, content)
      }, false)
    }
  }
})();