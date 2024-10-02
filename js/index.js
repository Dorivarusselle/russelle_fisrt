
var $mediaElements = $(".cd-item");
$(".filter_link").click(function(e) {
  e.preventDefault();
  var filterVal = $(this).data("filter");
  if (filterVal === "all") {
    $mediaElements.slideDown("slow");
  } else {
    $mediaElements
      .hide("slow")
      .filter("." + filterVal)
      .slideDown("slow");
  }
});


function myFunction() {
  var elmnt = document.getElementsByClassName("col-sm-4")[0];

var rowDiv = document.getElementsByClassName("row")[0].className;
document.getElementById("demo").innerHTML=rowDiv;
  var cln = elmnt.cloneNode(true);
  rowDiv.appendChild(cln);
}
