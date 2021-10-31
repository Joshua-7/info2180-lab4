
(function(window, document, undefined){
    window.onload = init;

      function init()
      {
        $(document).ready(function()
        {
            $(".btn").click(function()
            {

              fetch("http://localhost/info2180-lab4/superheroes.php")
              .then(response => response.text())
              .then(data => {
              alert(data);
              })
              .catch(error => {
              console.log(error);
              });
            });  
        });
      }
    
    })(window, document, undefined);
