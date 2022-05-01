var div=document.createElement("div");
function addDivWithSpans(){
  div.id="my-div";
  div.innerHTML= '<span>Hello</span>'
  div.innerHTML= '<span>Hello</span>'
  div.innerHTML= '<span>Hello</span>'
  document.body.appendChild(div)
};


function removeParagraphs(){
  let d = document.querySelectorAll("p");
  for (let i = 0; i < d.length; i++){
  	d[i].remove();

    }
}
