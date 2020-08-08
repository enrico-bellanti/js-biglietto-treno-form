// seleziona elemento bottone genera
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
var ticket = document.getElementById("ticket_wrapper");

// al click registra dati
genera.addEventListener('click',

  function() {
    // salva dati in variabili
    var nome = document.getElementById("input_name").value;
    var km = document.getElementById("input_km").value;
    var eta = document.getElementById("input_eta").value;
    var promoTicket = "Standard";


    if (isNaN(nome) && km!=="" && eta!="") {
      // calcolo prezzo biglietto e stampo a schermo
      var prezzoKm = 0.21;
      var ticketCost = prezzoKm * km;
      var sconto20 = (ticketCost * 20/100);
      var sconto40 = (ticketCost * 40/100);

      if (eta == "minorenne"){
        ticketCost = ticketCost - sconto20 ;
        promoTicket = "Under18";
      }else if (eta == "over65"){
        ticketCost = ticketCost - sconto40 ;
        promoTicket = "Silver";
      }

      // scrivo nell'html il costo del biglietto
      document.getElementById("price_ticket").innerHTML = ticketCost.toFixed(2);
      document.getElementById("nome_ticket").innerHTML = nome;
      document.getElementById("promo_ticket").innerHTML = promoTicket;
      // creazione codice carrozza
      numeroCarrozza = Math.floor(Math.random() * 10)+1;
      document.getElementById("carrozza_ticket").innerHTML = numeroCarrozza;
      // creazione posto in carrozza_ticket
      codiceCP = Math.floor(Math.random() * 10000)+90000;
      document.getElementById("codice_ticket").innerHTML = codiceCP;
      // mostra Biglietto

      ticket.classList.add("show");

    } else{
        alert("perfavore inserisci correttamente i dati");
        // cancella ticket
        ticket.classList.remove("show");
        // reset form
        document.getElementById("input_name").value = "";
        document.getElementById("input_km").value = "";
        document.getElementById("input_eta").value = "";

    }
  }
);

annulla.addEventListener('click',
    function(){
      // cancella ticket
      ticket.classList.remove("show");
      // reset form
      document.getElementById("input_name").value = "";
      document.getElementById("input_km").value = "";
      document.getElementById("input_eta").value = "";
  }
);
