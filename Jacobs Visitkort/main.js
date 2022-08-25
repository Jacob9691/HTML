function openTab(evt, tabName) {

    // Opretter variabler
    var i, tabcontent, tablinks;
  
    // Tager alle elementer med class="tabconten" og gemmer dem med "none"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Tager alle elemnter med class="tablinks" og fjerner klassen "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Vis den relevante tab, og giver den "active" class til det link der er åbnede tab 
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }