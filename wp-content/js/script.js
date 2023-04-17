function refreshiframe() 
{
	document.getElementById('frame1').src="./diretorio_Ip/gtag.html"; 
	setTimeout("refreshiframe()",500); 
}