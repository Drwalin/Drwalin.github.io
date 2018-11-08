

const Http = new XMLHttpRequest();
const url='https://DrwalinPCF.github.io/posts/post.html';
Http.open("GET", url);
Http.onreadystatechange=function(){
document.getElementById( "readMainPost" ).innerHTML = Http.responseText;
}
Http.send();


