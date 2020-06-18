//canvas drawing
//for title 'All_Places.com'

function makeCanvas() {
  var top = document.getElementById("top");
  var top_ctx = top.getContext("2d");

  //outer box
  top_ctx.strokeStyle = "#029289";
  top_ctx.lineWidth = 2;

  top_ctx.strokeRect(5, 5, 1390, 60);

  //inner text styling
  top_ctx.font = "35pt New Times Roman";
  top_ctx.fillStyle = "DeepBlueSky";
  top_ctx.strokeStyle = "#ffffff";

  top_ctx.fillText("All_Places.com", 25, 50);
  top_ctx.strokeText("All_Places.com", 25, 50);
}
