var type;
var val;
document.getElementById("txtarea").designMode = "on";
function changeType(e) {
  type = e.getAttribute("id");
  switch (type) {
    case "txtbg":
    case "txtcolor":
      val = document.getElementById("color").value;
      break;
    default:
      val = e.value;
      break;
  }
  changeText(type, val);
}
function redo() {
  document.execCommand("redo");
}
function undo() {
  document.execCommand("undo");
}
function changeText(type, val) {
  switch (type) {
    case "txtbg":
      document.execCommand("backColor", false, val);
      break;
    case "txtcolor":
      document.execCommand("foreColor", false, val);
      break;
    case "fontSize":
      document.execCommand("fontSize", false, val);
      break;
    case "textdeco":
      document.execCommand(val);
      break;
    case "fontstyle":
      document.execCommand(val);
      break;
    default:
      break;
  }
}
