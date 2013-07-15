#pragma strict

var score: int;
var spacing: int = 25;
var playerLabel: String = "P2";
var aTexture : Texture;
var timer : float;    
var f : Font;
public var timeAllowedToChain : float = 0.5;
private var lastPressFire1 : float = 0.0;
var combo: int;
var comboTime: float;
var comboInputs = new Array();
var texture:Texture2D;
var logAsset : GameObject;
var chopGO: GameObject;

function Start () {
	score = 0;	
}

function Update () {
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
	if(Input.GetButtonDown("Fire5") || Input.GetButtonDown("Fire6") || Input.GetButtonDown("Fire7") || Input.GetButtonDown("JumpP2") || Input.GetKeyDown(KeyCode.N) || Input.GetKeyDown(KeyCode.M) || Input.GetKeyDown(KeyCode.J) || Input.GetKeyDown(KeyCode.K)) {

		audio.PlayOneShot(audio.clip);

		texture = Resources.Load("P2_Chop");
		renderer.material.mainTexture = texture;
		
		logAsset = gameObject.Find("P2_log");
		//Debug.Log(logAsset);
		logAsset.renderer.material.mainTexture = Resources.Load("Log_Sprite");
		//logAsset.renderer.material.mainTexture = Resources.Load("Log_Sprite");
		
		GetCombo();
		return true;
	} else {
		return false;
	}
}

function MapInput() {
	if(Input.GetButtonDown("Fire5") || Input.GetKeyDown(KeyCode.M)){
		return "Fire5";
	} else if(Input.GetButtonDown("Fire6") || Input.GetKeyDown(KeyCode.N)) {
		return "Fire6";
	} else if(Input.GetButtonDown("Fire7") || Input.GetKeyDown(KeyCode.K)) {
		return "Fire7";
	} else if(Input.GetButtonDown("JumpP2") || Input.GetKeyDown(KeyCode.J)) {
		return "JumpP2";
	}
}

function GetCombo() {

	if((Input.GetButtonDown("Fire5") || Input.GetKeyDown(KeyCode.M))){
		if(comboInputs.length > 0){
			comboInputs.clear();
		}
        lastPressFire1 = Time.time;
        comboInputs.push(MapInput());
        Debug.Log(MapInput());
    }

    if((Input.GetButtonDown("Fire6") || Input.GetKeyDown(KeyCode.N)) && (Time.time <= (lastPressFire1 + timeAllowedToChain))){
    	//print("successfully chained.");
    	lastPressFire1 = Time.time;
    	comboInputs.push(MapInput());
//    	score += 10;
//    	combo = 1;
//    	comboTime = Time.time;
		Debug.Log(MapInput());
    } else {
    	comboInputs.clear();
    }
    
  	if((Input.GetButtonDown("JumpP2") || Input.GetKeyDown(KeyCode.J)) && (Time.time <= (lastPressFire1 + timeAllowedToChain))) {
  		//if (comboInputs.length == 2) {
	  		//if(comboInputs[0] == "Fire1" && comboInputs[1] == "Fire2"){
  				score += 2;
	    		combo = 1;
	    		comboTime = Time.time;
	    		chopGO = gameObject.Find("Player1");
				chopGO.audio.PlayOneShot(chopGO.audio.clip);
	    		comboInputs.clear();
	    		Debug.Log(MapInput());
	  		//}
//			comboInputs.shift();
  	}

}


function ScoreAdd(){
	score += 5;
}


function OnGUI()
{
	if(combo == 1) {
		GUI.Label(Rect(Screen.width - 300, Screen.height/2 - 100, Screen.width, Screen.height), "COMBO!");
		if(Time.time >= (comboTime + 1)) {
			combo = 0;
		}
	}
	GUI.skin.label.font = f;
	GUI.skin.label.fontSize = 30;
	
	GUILayout.Space(spacing);
	
	GUI.Label(Rect(Screen.width - 100, 0, Screen.width/2, Screen.height/2), playerLabel);
	GUI.Label(Rect(Screen.width - 100, 30, Screen.width/2, Screen.height/2), score.ToString());
}