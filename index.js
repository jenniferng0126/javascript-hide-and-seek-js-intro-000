
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const li = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<li.length; i++) {
    li[i].innerHTML = (parseInt(li[i].innerText) + n).toString();
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  let nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
