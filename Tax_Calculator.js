function tax (n,s) {

    if(n<250000)
    {
        return "no tax"
    }
    else if(n>=250000 && n<=500000)
    {
        var taxable_income =n-(s/2)
        if(taxable_income<250000){
                return "no tax"
        }
        else if(taxable_income>=250000){
            let tax=(taxable_income-250000)*10/100
            return tax
        }
    }
 else if(n>500000 && n<=1000000)
    {
        
         var taxable_income =n-(s*0.7)
         let tax=(taxable_income-250000)*0.2
        return tax
    }

    else if(n>1000000)
    {
         var taxable_income =n-(s*0.9)
         let tax=((taxable_income-250000)*0.3)
        return tax     
    }

}
module.exports = tax