<script type="text/javascript">

 const func2=()=> {
    console.log("func2 is starting")};

 const func1=()=> {
    console.log("func1 is starting");
    func2();
    console.log("func1 is ending");
  };

 func1();


</script>
