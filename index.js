function getFirstSelector(selector) {
	
	return document.querySelector(selector);

}

function nestedTarget() {
	
	return document.querySelector('#nested .target');
	
}
function deepestChild() {
  
  var nodeList = document.querySelector('#grand-node');
  while (nodeList.children[0]) {
    
    console.log(nodeList);
    nodelist = nodeList.children[0];
  }
  
  return nodeList;
  
}
