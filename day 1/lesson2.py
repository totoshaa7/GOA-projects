from turtle import *

#we want to paint a house

#step 1: draw a square

color("gray")
begin_fill()

speed(10)
width(7)
color("purple")

forward(200)
left(90)

forward(200)
left(90)


forward(200)
left(90)



forward(200)
left(90)
end_fill()
#end of square

#drawing a door


forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)      #height of the door
right(90)
forward(60)
right(90)
forward(120)
penup()
end_fill()
goto(200, 200)
pendown()




#end of door

#drawing a roof 

penup()
goto(200, 200)
pendown()

color("red")
right("150")
forward("200")
left("150")


begin_fill()

end_fill()

exitonclick()



















exitonclick()