function getFirstSelector(selector) {
	
	return document.querySelector(selector);

}

function nestedTarget() {
	
	return document.querySelector('#nested .target');
	
}

function deepestChild() {
  
  var nodeList = '#grand-node'

  while (document.querySelector(nodeList).children) {
    nodeList = nodeList + ' div'
  }
  
  return document.querySelector(nodeList);
  
}