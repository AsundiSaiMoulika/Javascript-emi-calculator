function EmiCalc(lam,ten,ri){
    this.loanAmount = lam;
    this.tenure = ten;
    this.ri = ri;
    this.emi = function(){
        var p = this.loanAmount;
        var n = this.tenure *12;
        var r = (this.ri)/(12*100);
        
        var emivalu = ((p*r)*(Math.pow((1+r),n)))/((Math.pow((1+r),n))-1);
        return emivalu.toFixed(2);
      }  
     this.onlyInterest = function(){
        var onlyint =  ((this.emi() * this.tenure * 12) - this.loanAmount).toFixed(2);
        return onlyint;
    
}
       
    }

window.onload = function(){
    //sliders values
    let p = document.getElementById("principle");
    let t = document.getElementById("period");
    let i = document.getElementById("ir");
    
    //input values
    let pi = document.getElementById("pramt");
    let ti = document.getElementById("lpr");
    let ii = document.getElementById("irt");
    //output values
    let emi = document.getElementById("emipm");
    let totinterest = document.getElementById("paidint");
    
    // add event listeners to sliders
    
    p.addEventListener("change",function(){
        pi.value = this.value;
        calcEmiInterest();
    });
    t.addEventListener("change",function(){
        ti.value = this.value;
        calcEmiInterest();
    });
    i.addEventListener("change",function(){
        ii.value = this.value;
        calcEmiInterest();
    });
    
    //add event listers to input fields
    pi.addEventListener("keyup",function(){
        p.value = this.value;
        calcEmiInterest();
    });
    ti.addEventListener("keyup",function(){
        t.value = this.value;
        calcEmiInterest();
    });
    ii.addEventListener("keyup",function(){
        i.value = this.value;
        calcEmiInterest();
    });
    
    
    function calcEmiInterest(){
        let pr = +pi.value;
        let ten = +ti.value;
        let intr = +ii.value;
        
        var emiandin = new EmiCalc(pr,ten,intr);
        emi.innerHTML = emiandin.emi();
        totinterest.innerHTML = emiandin.onlyInterest();
        
    }
    
    
}
    