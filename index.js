/*
  Thomas Yahl
  JS File for Personal Webpage
  Initiated 3/22/25
*/

function handleClick(n) {
    if (n==1) {
	$("#research-dropdown").slideToggle("slow")
	$("#teaching-dropdown").slideUp("slow")
	$("#projects-dropdown").slideUp("slow")
    } else if (n==2) {
	$("#research-dropdown").slideUp("slow")
	$("#teaching-dropdown").slideToggle("slow")
	$("#projects-dropdown").slideUp("slow")
    } else if (n==3) {
	$("#research-dropdown").slideUp("slow")
	$("#teaching-dropdown").slideUp("slow")
	$("#projects-dropdown").slideToggle("slow")
    }
}
