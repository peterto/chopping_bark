#pragma strict

var target: Transform;
var gameManager : GameObject;

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Fire1") || Input.GetKeyDown(KeyCode.X)){
        Shoot();
        //Debug.Log("pressed");
        //print("button pressed");
    }
}

function Shoot(){
    //if (shotSound) audio.PlayOneShot(shotSound); // play the shot sound
    var ray = new Ray(transform.position, transform.forward);
    var up = transform.TransformDirection(Vector3.up);
    var hit: RaycastHit;
    Debug.DrawRay(transform.position, -up * 10, Color.green);
    if (Physics.Raycast(transform.position, transform.forward, hit)){
        // prepare rotation to instantiate blood or sparks
        var rot = Quaternion.FromToRotation(Vector3.up, hit.normal);
//        if (hit.collider.gameObject.name == "NotePrefab"){
        if (hit.collider.gameObject.tag == "Agent"){
        	gameManager = gameObject.Find("Player1");
        	gameManager.SendMessage("ScoreAdd",5);
        	audio.PlayOneShot(audio.clip);
        	
//        if (hit.transform.tag == "Note"){ // if enemy hit...
            //if (bloodPrefab) Instantiate(bloodPrefab, hit.point, rot); // make it bleed...
            //Debug.Log("P1 hit!");
            //hit.transform.SendMessage("ApplyDamage", 5, SendMessageOptions.DontRequireReceiver); // and consume its health
        } else { // otherwise emit sparks at the hit point
            //if (sparksPrefab) Instantiate(sparksPrefab, hit.point, rot);
        }
    }
}