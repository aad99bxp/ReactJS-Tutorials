<script>
    const mainFunction = (paramfunc)=> {
        setTimeout(()=>{
            paramfunc([2,3,4]);
        }, 2000);
    }


    //Add Function

    const add=(array)=>{
        let sum=0;
        for(let i of array){
            sum +=i;
        }
        console.log(sum);
    }

    //Calling Mian Function
    mainFunction(add);
</script>