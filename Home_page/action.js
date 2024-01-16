var menuBtn = document.querySelector("#menu");
var slider = document.querySelector(".slider");
var sliderElements = document.querySelectorAll(".slider *");
var composant = document.querySelector(".componement");
var product = document.querySelector(".Product");
var Acceuil = document.querySelector("#acc");

/*var image = document.querySelector("#view");*/

var subscription = document.querySelector(".sub");
var touch = document.querySelector("#CC");

slider.style.display = "none";
var sliderIsOpen = false;

menuBtn.addEventListener("click", () => {
  if (sliderIsOpen) {
    slider.style.display = "none";
    sliderIsOpen = false;
  } else {
    slider.style.display = "block";
    sliderIsOpen = true;
  }
});

Acceuil.addEventListener("click", () => {
  composant.classList.remove("buy", "Subscription", "touch");
  composant.classList.add("componement");
  composant.innerHTML = ` 
  <div><img src="../resources/logo_v1.svg" alt="logo ver.1" ></div>
  <nav>
    <span>Bienvenue à infinity link là où vos accès internet sont plus libre et flexible</span>
  </nav>

  `;

  slider.style.display = "block";
  sliderIsOpen = true;
});

product.addEventListener("click", () => {
  composant.classList.remove("touch", "Subscription", "componement");
  composant.classList.add("buy");
  composant.innerHTML = `


    
    <div class="One">
    <img  src="../resources/logo_v1.svg" alt="" >
    <span>Produits</span>
  </div>

  <div class="kitO contain">

            <div>       
            <p >        le kit standard est un de nos appareils vendu, d'accès à connexion satellite .<br>
                        Ce kit a été conçu dans le soucis de répondre  de la plus efficace des façons possibles, <br /> aux besoins de de connexion domestiques,<br/> ou un cadre fixe dont le besoin<br />
                        en internet n'est pas très consequent.<br /><br />
                        <span style="font-size:20px;color:yellow">Installation:500€</span>
                    
            </p>
              </div>

              <div class="sales">
                <img src="../resources/kitstandard.jpeg"   alt="image">
                <button class = "add">Achéter</button>
              </div>

              <div class="other">
      
              <button class="direct"><a href="index.html">spécification</a></button>
                
              </div>

  </div>

  <div class="kitS contain">

              <div>       
                      <p>
                            Le kit de haute performance à été conçu pour répondre à des besoin plus important de connexion internet,<br>
                              c'est un kit adapter à des utilisations d'entreprises.<br />
                              vous avez à votre disposition selon les niveaux de performance les differentes caracteistiques<br /> 
                              des produits  de cette catégorie dans la specification
                              <span style="font-size:20px;color:yellow">Installation:500€</span>
                        </p>
              </div>

              <div class="sales">
                <img src="../resources/satelites.webp" style="height: 200px;"  alt="image">
                <button class = "add">Achéter</button>
              </div>

              <div class="other">
  
              <button class="direct"><a href="index.html">spécification</a></button>
              </div>

  </div>


  <div class="kitThird contain">


                <div>        
                    <p>
                        le kit de haute performance mobile comme  son nom l'indique est un kit de <br/> haute performance mais mobile <br />
                      donc avec des conditions adapté pour le  déplacemennt. <br />
                      <span style="font-size:20px;color:yellow">Installation:500€</span>
                    </p>

                </div>

                <div class="sales">
                  <img src="../resources/Capture d'écran 2024-01-15 231402.png" alt="image">
                  <button class = "add">Achéter</button>
                </div>

                <div class="other">
              
                <button class="direct"><a href="index.html">spécification</a></button>
            
              </div>

  </div>

  
          

          </div>



`;

  slider.style.display = "block";
  sliderIsOpen = true;
});

subscription.addEventListener("click", () => {
  composant.classList.remove("touch", "buy", "componement");
  composant.classList.add("Subscription");
  composant.innerHTML = `  <div id="Abn">
  <span>Abonnement</span>
</div>

<img  class="logo" src="../resources/logo_v2.svg" alt="">

  <div class="offer">

    <div  class="subscription">

                    <span class="title">Kit standard</span>

                    <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Adhésion classique</span>
                    </div>

                    <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Accès Internet connexion satelite </span>
                    </div>
                    


                    <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Assitance technique</span>
                    </div>

                    <div>

                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>durée : 1 mois</span>

                    </div>
                    <div class="Choice">
                        <button id="prix">50€</button>
                        <button id="choose"> Je choisi</button>
                    </div> 
         
    </div>
        

        <div class="subscription">

                  <span class="title">Kit de haut <br />performance </span>

                   <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Adhésion Prenium  </span>
                    </div>

                    <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Accès Internet connexion satelite </span>
                    </div>


                    <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Assitance technique</span>
                    </div>

                    <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Durée : 1mois  </span>
                    </div>
                    
                    <div class="Choice">
                        <button id="prix">120€</button>
                        <button id="choose"> Je choisi</button>
                    </div> 

        </div>
    

    

    <div class="subscription">

                      <span class="title">Kit de haut <br />performance mobile</span>

                      <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span> Accès Internet connexion satelite  </span>
                       </div>

                      <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Assitance technique</span>
                      </div>

                      <div>
                        <span class="material-symbols-outlined">
                                check
                        </span>
                        <span>Durée : 1 mois </span>
                      </div>
        
        
                      <div class="Choice">
                       <button id="prix">160€</button>
                       <button id="choose"> Je choisi</button>
                      </div> 

    </div>
    
  </div>
`;

  slider.style.display = "block";
  sliderIsOpen = true;
});

touch.addEventListener("click", () => {
  composant.classList.remove("buy", "Subscription", "componement");
  composant.classList.remove();
  composant.classList.add("touch");
  composant.innerHTML = `

  <div class="topCnt"><span>Contact</span></div>
  <div class="Cnt">

      <div id = "contact" >
          <p>
            Si vous avez un problème en rapport avec nos sources <br /> n'hésiter pas à contacter le 
            service client à l'aide des contact suivant :
          </p>
      </div>

      <div class="call">
          <div class="callService">
              <span class="material-symbols-outlined">
                    call
              </span>
              service téléphonique : 0575225993
          </div>

          <div class="callService">
                <span class="material-symbols-outlined">
                        mail
                </span>
                 Adresse email : Arnaud@gmail.com
          </div>
      </div>

  </div>`;

  slider.style.display = "block";
  sliderIsOpen = true;
});
/*
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1500);
}); */

var bye = document.querySelector("#go");
bye.addEventListener("click", () => {
  window.location.assign("../connexion/ConnectBase.php");
});
