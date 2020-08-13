
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const liVal = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<li.length; i++) {
    liVal[i].innerHTML = (parseInt(liVal[i].innerText) + n).toString();
  }
}

function deepestChild() {
  const div = document.querySelector('div#grand-node');
  if (div.hasChildNodes()) {
    let next = div.querySelector('div');
    while(next.hasChildNodes()) {
      next = next.querySelector('div');
    }
    return next;
  }
}