function getFirstSelector(selector) {
	
	return document.querySelector(selector);

}

function nestedTarget() {
	
	return document.querySelector('#nested .target');
	
}

function increaseRankBy(n) {
  
  var nodeList = document.querySelectorAll('ul.ranked-list li');
  
  for(var i = 0; i < nodeList.length; i ++) {
    document.querySelectorAll('ul.ranked-list li')[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
  }
  
}


function deepestChild() {
  
  var nodeList = '#grand-node';

  while (document.querySelector(nodeList).children[0]) {
    nodeList = nodeList + ' div';
  }
  
  return document.querySelector(nodeList);
  
}