function ChangeToLeft () {
	var Pscroll=document.getElementById("picScroll");
	var Pscrollw = Pscroll.childNodes[1];
	Pscroll.scrollLeft++;
	if(Pscroll.scrollLeft>Pscrollw.offseWidth){
		Pscroll.scrollLeft=0;
	}
}
function OpenCTL(){
	var Pscroll = document.getElementById("picScroll");
	Pscroll.scrollLeft=0;
	DoCTL=setInterval("ChangeToLeft()",10);

}
var DoCTL;
window.onload = OpenCTL;