public var NotePrefab:GameObject;
private var gameover:boolean = false;
private var notes: ArrayList = new ArrayList();
public var P1: GameObject;
public var P2: GameObject;
public var MCGO: GameObject;

function Start () {
//		for(int i = 0; i < 5; i++) {
//			AddUnityNote(new Vector3(5f, 11f, 0));
//		}
}

// Update is called once per frame
function Update () {
	if(Time.time >= 30){
		GameOver();
	}
	else {
		if (Time.frameCount % 120 == 0) {
			//Debug.Log((int)Time.time);
			AddUnityNote(new Vector3(5f, 11f, 0));
		}
	}
	
	if(Input.GetKeyDown(KeyCode.Escape)) {
		Application.LoadLevel("MainMenu");
	}
}

function AddUnityNote(position){
	var temp:GameObject = Instantiate(NotePrefab, position, Quaternion.identity);
	//GameObject tempGO = (GameObject)Instantiate(NotePrefab, position, Quaternion.identity);
	//tempGO.transform.Rotate(new Vector3(270f, 360f, 0));
	//notes.Add(tempGO);
	
	temp.transform.Rotate(Vector3(270f, 360f, 0));
	notes.Add(temp);
	
	//var GO:GameObject;
	
	//GO = 
}

function GameOver(){
	gameover = true;
}

function OnGUI(){
	if(gameover == true) {
		audio.Stop();
		MCGO = GameObject.Find("Main Camera");
		MCGO.audio.Stop();
		
		//ScriptName script;
		P1 = GameObject.Find("Player1");
		P2 = GameObject.Find("Player2");
		
		//Debug.Log(P1);
		//var score_P1;
		//var score_P2;
		
		var score_P1 = P1.GetComponent("Player1").score;
		var score_P2 = P2.GetComponent("Player2").score;
		
		if(score_P1 == score_P2) {
			GUI.Label(new Rect(Screen.width/2 - 55, Screen.height/2 - 50, Screen.width, Screen.height), "TIE!!");
		} else if (score_P1 > score_P2) {
			GUI.Label(new Rect(Screen.width/2 - 55, Screen.height/2 - 50, Screen.width, Screen.height), "P1 WINS!");
		} else {
			GUI.Label(new Rect(Screen.width/2 - 55, Screen.height/2 - 50, Screen.width, Screen.height), "P2 WINS!");
		}
		//ScriptName other = gameObject.GetComponent<ScriptName>();
		
    	//ScriptName script_name_P1 = P1.GetComponent("Player1");
    	//score_P1 = script_name_P1.score;
		
		//Debug.Log(score_P1);
		
		GUI.Label(Rect(Screen.width/2, 0, Screen.width/2, Screen.height/2), "30");

		GUI.Label(new Rect(Screen.width/2 - 155, Screen.height/2, Screen.width, Screen.height), "GAME OVER!");
	} else {
	
		GUI.Label(Rect(Screen.width/2, 0, Screen.width/2, Screen.height/2), Mathf.FloorToInt(Time.time).ToString());
	}

	
}
