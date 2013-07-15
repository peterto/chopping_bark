#pragma strict

var score: int;
var spacing: int = 25;
var playerLabel: String = "P1";
var aTexture : Texture;
var timer : float;    
var f : Font;
public var timeAllowedToChain : float = 0.5;
private var lastPressFire1 : float = 0.0;
var combo: int;
var comboTime: float;
var comboInputs = new Array();
//var chopping: texture;
var texture:Texture2D;
var logAsset : GameObject;
var chopGO: GameObject;

function Start() {
	score = 0;	
}

function Update() {

	//GetCombo();

	if(Time.time <= 10) {
		if(GetInput()) {
			score += 1;
		}
	} else {
		if(GetInput()) {
			if(score > 0)
				score -= 1;
		}
	}
}

function GetInput() {
	if(Input.GetButtonDown("Fire1") || Input.GetButtonDown("Fire2") || Input.GetButtonDown("Fire3") || Input.GetButtonDown("JumpP1") ||
			Input.GetKeyDown(KeyCode.Z) || Input.GetKeyDown(KeyCode.X) || Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.S)) {
		
		chopGO = gameObject.Find("Player2");
		chopGO.audio.PlayOneShot(chopGO.audio.clip);
		
		texture = Resources.Load("P1_Chop");
		renderer.material.mainTexture = texture;
		
		logAsset = gameObject.Find("P1_log");
		logAsset.renderer.material.mainTexture = Resources.Load("Log_Sprite");
		//comboInputs[0] = MapInput();
//		if(comboInputs.length > 0) {
//			comboInputs.push(MapInput());
//			Debug.Log(MapInput());
//			Debug.Log(comboInputs);
//		} else if (comboInputs.length == 2) {
//			comboInputs.shift();
//		}
	GetCombo();
		
		return true;
	} else {
		return false;
	}
}

function MapInput() {
	if(Input.GetButtonDown("Fire1") || Input.GetKeyDown(KeyCode.X)){
		return "Fire1";
	} else if(Input.GetButtonDown("Fire2") || Input.GetKeyDown(KeyCode.Z)) {
		return "Fire2";
	} else if(Input.GetButtonDown("Fire3") || Input.GetKeyDown(KeyCode.S)) {
		return "Fire3";
	} else if(Input.GetButtonDown("JumpP1") || Input.GetKeyDown(KeyCode.A)) {
		return "JumpP1";
	}
}

function GetCombo() {

	if(Input.GetButtonDown("Fire1") || Input.GetKeyDown(KeyCode.X)){
		if(comboInputs.length > 0){
			comboInputs.clear();
		}
        lastPressFire1 = Time.time;
        comboInputs.push(MapInput());
        Debug.Log(MapInput());
    }

    if((Input.GetButtonDown("Fire2")  || Input.GetKeyDown(KeyCode.Z))  && (Time.time <= (lastPressFire1 + timeAllowedToChain))){
    	lastPressFire1 = Time.time;
    	comboInputs.push(MapInput());
		Debug.Log(MapInput());
    } else {
    	comboInputs.clear();
    }
    
  	if((Input.GetButtonDown("JumpP1")  || Input.GetKeyDown(KeyCode.A)) && (Time.time <= (lastPressFire1 + timeAllowedToChain))) {
  		score += 2;
	    combo = 1;
	    comboTime = Time.time;
	    audio.PlayOneShot(audio.clip);
	    comboInputs.clear();
	    Debug.Log(MapInput());
  	}
}

function comboTypeCheck(){
	
}

function ScoreAdd(){
	score += 5;
}

function OnGUI()
{
	if(combo == 1) {
		GUI.Label(Rect(150, Screen.height/2 - 100, Screen.width, Screen.height), "COMBO!");
		if(Time.time >= (comboTime + 1)) {
			combo = 0;
		}
	}
	GUI.skin.label.font = f;
	//GUI.skin.label.
	GUI.skin.label.fontSize = 30;

	GUI.Label(Rect(0, 0, Screen.width/2, Screen.height/2), playerLabel);
	GUI.Label(Rect(50, 30, Screen.width/2, Screen.height/2), score.ToString());
}