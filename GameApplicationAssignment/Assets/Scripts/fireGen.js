﻿#pragma strict
//This script will generate ufos in a random position
//between x=8 to 11 and  y=-4 to 4 every second

var fire:Rigidbody;




//creates an instance of enemy at 
//a random position in x and y
function createFire()
{
 //x,y,z position with 0 rotation
 //set the x position
 var xpos:int;
 xpos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.x + Random.Range(12,17);
 //set the y position
 var ypos:int;
 ypos = GameObject.FindGameObjectWithTag("MainCamera").transform.position.y + Random.Range(-3,8);
 
 //create an enemy relative to the game object
 Instantiate(fire,Vector3(xpos,ypos,0),Quaternion.identity);
}

function Start () {
 //parameter 1: wait 1.0 seconds
 //parameter 2: every 1.2 seconds
 InvokeRepeating("createFire",2.0,3.0);
}

function Update () {

}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}