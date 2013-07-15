using UnityEngine;
using System.Collections;

public class GameManager : MonoBehaviour {

	// Use this for initialization
	
	public GameObject NotePrefab;
	private bool gameover = false;
	private ArrayList notes = new ArrayList();
	public GameObject P1;
	public GameObject P2;
	
	void Start () {
//		for(int i = 0; i < 5; i++) {
//			AddUnityNote(new Vector3(5f, 11f, 0));
//		}
	}
	
	// Update is called once per frame
	void Update () {
		if(Time.time >= 3){
			GameOver();
		}
		else {
			if (Time.frameCount % 120 == 0) {
				//Debug.Log((int)Time.time);
				AddUnityNote(new Vector3(5f, 11f, 0));
			}
		}
	}
	
	private void AddUnityNote(Vector3 position){
		GameObject tempGO = (GameObject)Instantiate(NotePrefab, position, Quaternion.identity);
		tempGO.transform.Rotate(new Vector3(270f, 360f, 0));
		notes.Add(tempGO);
	}
	
	void GameOver(){
		gameover = true;
	}
	
	void OnGUI(){
		if(gameover == true) {
			//ScriptName script;
			P1 = GameObject.Find("Player1");
			P2 = GameObject.Find("Player2");
			
			Debug.Log(P1);
			//Debug.Log(P1.GetComponent<Player1>());
			
			
			int score_P1;
			//ScriptName other = gameObject.GetComponent<ScriptName>();
			
        	//ScriptName script_name_P1 = P1.GetComponent("Player1");
        	//score_P1 = script_name_P1.score;
			
			//Debug.Log(score_P1);

			GUI.Label(new Rect(Screen.width/2 - 50, Screen.height/2, Screen.width, Screen.height), "GAME OVER!");
		}
		
	}
}
