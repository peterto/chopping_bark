#pragma strict

function Start () {

//	this.gameObject.transform.position.y += 0.5;
	
//	for (var y = 0; y < 5; y++) {
//        for (var x = 0; x < 5; x++) {
//            var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
//            //cube.AddComponent(Rigidbody);
//            cube.transform.position = Vector3 (x, y, 0);
//        }
//    }
    
//    var go = Instantiate("Cube");
//	go.transform.position = Vector3(5, 5, 0);
//	go.renderer.material.color = Color.blue;
//	

}

function Update () {

//	var file: String = Application.OpenURL((Application.dataPath()) + "/notes.txt");
//	var y_position = this.gameObject.transform.position.y;
	this.gameObject.transform.position.y -= 0.2;
	var y_position = this.gameObject.transform.position.y;

		
	if(y_position <= -3){
		Destroy(this.gameObject);
		//this.gameObject.StopAnimation();
		//this.gameObject.transform.position.y = 11;
	}


}