const display = document.getElementById("display");

var count = 10;
display.textContent = count;
const print = function(callBackFunc){
        setTimeout(()=>{
          count--;
          display.textContent = count;
          callBackFunc(); 
        },1000);
}
print(function(){
    print(function(){
        print(function(){
            print(function(){
                print(function(){
                    print(function(){
                        print(function(){
                            print(function(){
                                print(function(){
                                    print(function(){
                                        display.textContent = "Happy Independence Day!";
                                    })
                                })  
                            })
                        })
                    })
                })
            })
        })
    })
});