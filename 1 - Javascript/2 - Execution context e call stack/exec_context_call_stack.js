 // Execution context e call stack: desenha a pilha de um código com 3 funções.

 function first(){
    console.log(1)
    segunda()
    console.log(3)
   }
   
   function segunda() {
      console.log(2)
   }
   var zero = 0
   console.log(zero)

first()

function a() {
   b()
   console.log('depois de b')
}

function b(){
   c()
}

function c() {
   throw new Error("quebrou")
}

a()