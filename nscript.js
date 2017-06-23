function c(val)
  {
    document.getElementById("display").value = val;
  }
  
  function math(val) 
  {
    document.getElementById("display").value += val;
  
  }
  function e()
  {
    try
    {
		c(eval(document.getElementById("display").value))
    }
    catch (e)
    {
		c('Error')
    }
}

  function bs() 
   {
	   var value = document.getElementById("display").value; 
	   document.getElementById("display").value = value.substr(0, value.length - 1);
   }