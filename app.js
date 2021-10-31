
(function(window, document, undefined){
    window.onload = init;

      function init()
      {
        $(document).ready(function()
        {
            $(".btn").click(function(ev)
            {
              let name = $("#avenger").val();
              if(name == "")
              {
                ev.preventDefault();
                fetch("http://localhost/info2180-lab4/superheroes.php?q="+name)
                .then(response => response.text())
                .then(data => {
                  $("#result h3").html(data);
                })
                .catch(error => {
                console.log(error);
                });
              }
              else
              {
                ev.preventDefault();
                fetch("http://localhost/info2180-lab4/superheroes.php?q="+name)
                .then(response => response.text())
                .then(data => {
                let chara = JSON.parse(data);
                console.log(chara);
                $("#result h3").html(chara['alias']);
                $("h4").html(chara['name']);
                $("p").html(chara['biography']);
               })
                .catch(error => {
               console.log(error);
                });
              }
              
            });  
        });
      }
    
    })(window, document, undefined);
