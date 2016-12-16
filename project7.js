var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

var pen = false;

var convert = {
  "pink":"#E8B9C4",
  "orange":"#FDAB3D",
  "yellow":"#F5E89A",
  "green":"#AAD7C1",
  "blue":"#BACAE2",
  "purple":"#D0BBD9",
  "black":"black",
  "eraser":"#EFEDEC"
}

var sConvert = {
  "5":"5",
  "10":"10",
  "15":"15",
  "20":"20",
  "25":"25"
}

var rainbow = {
  "0":"#E8B9C4",
  "1":"#F2B280",
  "2":"#FDAB3D",
  "3":"#F9C96B",
  "4":"#F5E89A",
  "5":"#CFDFAD",
  "6":"#AAD7C1",
  "7":"#B2D0D1",
  "8":"#BACAE2",
  "9":"#C5C2DD",
  "10":"#D0BBD9",
  "11":"#DCBACE"

}

var rainbowcolor;
var addedNum = 0;

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var square = document.createElementNS(namespace, "rect")
 square.setAttribute("x", x)
 square.setAttribute("y", y)
 square.setAttribute("width", size)
 square.setAttribute("height", size)
 square.setAttribute("fill", color)
 screen.appendChild(square)
}

function drawCircle(x, y, size, color) {
  var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", x)
 circle.setAttribute("cy", y)
 circle.setAttribute("r", size)
 circle.setAttribute("fill", color)
 screen.appendChild(circle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  pen = true;
})
document.addEventListener("mouseup", function(e) {
  pen = false;
})

document.addEventListener("mousemove", function(e) {
 var color = document.getElementById("colorSelect").value
 var convertColor = convert[color]
 var shape = document.getElementById("shapeSelect").value
 var size = document.getElementById("sizeSelect").value
 var convertSize = sConvert[size]

   if (pen){
     var pt = transformPoint(e, screen)

     if(shape == "circle" && color == "rainbow"){
      drawCircle(pt.x, pt.y, convertSize, rainbowcolor)
     }
     else if(shape == "square" && color == "rainbow"){
      drawSquare(pt.x, pt.y, convertSize, rainbowcolor)
     }
     else if(shape == "circle"){
      drawCircle(pt.x, pt.y, convertSize, convertColor)
     }
     else if(shape == "square"){
      drawSquare(pt.x, pt.y, convertSize, convertColor)
     }
     else if(shape == "square"){
      drawSquare(pt.x, pt.y, convertSize, convertColor)
     }
     addedNum += 1;
     if(addedNum > 11){
        addedNum = 0;
      }
      rainbowcolor = rainbow[addedNum];
    }

 })

 while (screen.lastChild) {
      screen.removeChild(screen.lastChild);
   }

  document.getElementById("undo").addEventListener("click", function(){
      screen.removeChild(screen.lastChild);
  })

  document.getElementById("clear").addEventListener("click", function(){
    while (screen.lastChild) {
      screen.removeChild(screen.lastChild);
    }
  })
