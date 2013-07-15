#pragma strict

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1") || Input.GetButtonDown("Fire5") || Input.GetKeyDown(KeyCode.X) || Input.GetKeyDown(KeyCode.M)){
		Application.LoadLevel ("Play");
	} else if (Input.GetButtonDown("Fire2") || Input.GetButtonDown("Fire6") || Input.GetKeyDown(KeyCode.Z) || Input.GetKeyDown(KeyCode.N)) {
		if(Application.loadedLevelName == "Instructions"){
			Application.LoadLevel ("MainMenu");
		} else if (Application.loadedLevelName == "MainMenu") {
			Application.LoadLevel ("Instructions");
		}
	}

}