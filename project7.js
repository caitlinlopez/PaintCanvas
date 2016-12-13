var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

var pen = false;

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
 var shape = document.getElementById("shapeSelect").value
 var size = document.getElementById("sizeSelect").value

   if (pen){
     var pt = transformPoint(e, screen)

     if(color == "red" && shape == "circle" && size == "10"){
      drawCircle(pt.x, pt.y, 10, "red")
     }
      else if(color == "blue" && shape == "circle" && size == "10"){
       drawCircle(pt.x, pt.y, 10, "blue")
     }
     else if(color == "green" && shape == "circle" && size == "10"){
      drawCircle(pt.x, pt.y, 10, "green")
    }
    else if(color == "yellow" && shape == "circle" && size == "10"){
     drawCircle(pt.x, pt.y, 10, "yellow")
   }
    }

 })
