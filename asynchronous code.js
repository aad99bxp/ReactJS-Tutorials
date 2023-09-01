<script>
 const func2=()=> {
    setTimeout(()=>{
        console.log('func2 is starting');
    }, 3000);    
};

 const func1=()=> {
    console.log("func1 is starting");
    func2();
    console.log("func1 is ending");
  };

 func1();


</script>
