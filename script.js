var array =[75,82,38,90,65]
var tol=(array[0]+array[1]+array[2]+array[3]+array[4]);
console.log(tol)
var avr=tol/5
console.log(avr)
console.log(avr>50)
console.log(array[0]>40 && array[1]>40 && array[2]>40 && array[3]>40 && array[4]>40)
console.log(avr>=75 && array[1]>=80)

var array=[15000, 22000, 18000, 25000, 12000, 28000]
var sale=(array[0]+array[1]+array[2]+array[3]+array[4]+array[5])
var avrg=sale/6
a=20000
var elig=(array[0]>a&&array[1]>a&&array[2]>a&&array[3]>a && array[4]>a&&+array[5]>a)



console.log(sale)
console.log(avrg)
console.log(sale>100000)
console.log(avrg>=20000)
console.log(sale>=100000 && avrg>=20000)
console.log(elig)

var cart=[
    {
        name:"shirt",
        price:600,
        quantity:2
    },
     {
        name:"jeans",
        price:1000,
        quantity:3
    },
     {
        name:"tshirt",
        price:300,
        quantity:2
    }
]
console.log(cart)
cart.push(
    {
       name:"nikker",
        price:100,
        quantity:2 
    }
)
cart.pop()
console.log(cart[0].price>500)&&(cart[0].quantity>0)

var student={
        name:"shan",
        age:19,
        mark:[75,80,65]
    }
student.mark.push(90)  
console.log(student)
student.mark.pop()
student.mark.push(85,95)
console.log(student.name)
console.log(student.age)
console.log(student.mark)
console.log(student.mark.length)