import colors from "colors";

class Loader{
    
}

var P = ["\\", "|", "/", "-"];
var x = 0;
const loading = setInterval(() => {
  process.stdout.write(
    "  Downloading Template...".cyan + "\r" + P[x++].red + "   "
  );
  x &= 3;
}, 50);
setTimeout(() => {
  clearInterval(loading);
  process.stdout.write("\r");
}, 2000);
