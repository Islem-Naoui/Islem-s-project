
var array=['Take time to know yourself',"A narrow focus brings big results","Don't make assumptions","Be patient and persistent","In order to get, you have to give","Luck comes from hard work","Be your best at all times","Don't try to impress everyone","Don't be afraid of being afraid","Life's good, but it's not fair","No task is beneath you","You can't always get what you want","Don't make decisions when you are angry or ecstatic","Do what is right, not what is easy"]
function randomAdv(){
 console.log("hello");
    document.getElementById("advice").innerHTML = array[Math.floor(Math.random() * array.length)]
}