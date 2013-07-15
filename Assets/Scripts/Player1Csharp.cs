using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Player1Csharp : MonoBehaviour {
	
	int score = new int();
	string playerLabel = "P1";
	float timer = new float();    
	Font f = new Font();

	// Use this for initialization
	void Start () {
		score = 0;
	}

	// Update is called once per frame
	void Update () {
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
	
	
	bool GetInput() {
		if(Input.GetButtonDown("Fire1") || Input.GetButtonDown("Fire2") || Input.GetButtonDown("Fire3") || Input.GetButtonDown("JumpP1") ||
				Input.GetKeyDown(KeyCode.Z) || Input.GetKeyDown(KeyCode.X) || Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.S)) {
			return true;
		} else {
			return false;
		}
	}
	
	void GetCombo () {
		//Stack combo = new Stack();
		//combo.Push();
		Queue<string> combo = new Queue<string>();
		if(Input.GetButtonDown("Fire1")){
			combo.Dequeue();
			combo.Enqueue("Fire1");
		}
	}
	
		
	void OnGUI()
	{
		GUI.skin.label.font = f;
		GUI.skin.label.fontSize = 50;
		
//		GUI.Label(Rect(Screen.width/2, 0, Screen.width/2, Screen.height/2), Mathf.FloorToInt(Time.time).ToString());
		
//		GUI.Label(Rect(Screen.width/2, 0, Screen.width/2, Screen.height/2), Mathf.FloorToInt(Time.time).ToString());
//	
//		GUI.Label(Rect(0, 0, Screen.width/2, Screen.height/2), playerLabel);
//		GUI.Label(Rect(50, 50, Screen.width/2, Screen.height/2), score.ToString());
	}
}


