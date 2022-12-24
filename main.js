document.querySelectorAll(".text-input").forEach((element) => {
    element.addEventListener("blur", (event) => {
      if (event.target.value != "") {
        event.target.nextElementSibling.classList.add("filled");
      } else {
        event.target.nextElementSibling.classList.remove("filled");
      }
    });
  });
  
  function cEmder() {
    let cep = document.querySelector('#cep').value;
  
    if (cep.length !== 8) {
      alert('CEP INVALIDO!');
      return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url).then(function(response)
    {
      response.json().then(function(data)
      {
        console.log(data)
      })
    });
      }
      const $html = document.querySelector('html')
      const $checkbox = document.querySelector('#switch')

      $checkbox.addEventListener('change', function(){
        $html.classList.toggle('dark-mode')
      })
      $('.telefone').mask('(00) 0 0000-0000');
<script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>    




      