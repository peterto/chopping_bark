#pragma strict

var score: int;
var f : Font;

function Start () {
}

function Update () {

}

function OnGui () {

	GUI.skin.label.font = f;
	GUI.skin.label.fontSize = 50;

	//GUI.Label(Rect(Screen.width/2, 0, Screen.width/2, Screen.height/2), Mathf.FloorToInt(Time.time).ToString());
}