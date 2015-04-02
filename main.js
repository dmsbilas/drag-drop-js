var drag = function(e){
	e.dataTransfer.setData("dragObject" , e.target.id );
};

var drop = function(e){
	e.preventDefault();
	var data = e.dataTransfer.getData("dragObject");
	e.target.appendChild(document.getElementById(data));
};

var allowDrop = function(e){
	e.preventDefault();
};

