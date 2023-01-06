import React from 'react';
export class Arbitre extends React.Component {
    render() {
      return (
     <div class="row center" >
      <><legend class="col-form-legend col-sm-1-12"><h3>Arbitre</h3></legend>
      <div class="col-sm-2">
         <h5>Arbitre 1</h5>
         <form class="form-floating">
           <input type="text" class="form-control" id="Namear1" placeholder="Nom et prenom" />
           <label for="Namear1">Nom et prenom</label>
         </form>
         <br />
         <form class="form-floating">
           <input type="text" class="form-control" id="villear1" placeholder="Nom et prenom" />
           <label for="Namear1">Ville</label>
         </form>
       </div><div class="col-sm-2">
           <h5>Arbitre 2</h5>
           <form class="form-floating">
             <input type="text" class="form-control" id="Namear2" placeholder="Nom et prenom" />
             <label for="Namear1">Nom et prenom</label>
           </form>
           <br />
           <form class="form-floating">
             <input type="text" class="form-control" id="Villear2" placeholder="Nom et prenom" />
             <label for="Namear1">Ville</label>
           </form>
         </div><div class="col-sm-2">
           <h5>Arbitre Table</h5>
           <form class="form-floating">
             <input type="text" class="form-control" id="Namear3" placeholder="Nom et prenom" />
             <label for="Namear1">Nom et prenom</label>
           </form>
           <br />
           <form class="form-floating">
             <input type="text" class="form-control" id="Villear3" placeholder="Nom et prenom" />
             <label for="Namear1">Ville</label>
           </form>
         </div><div class="col-sm-2">
           <h5>Comaissaire</h5>
           <form class="form-floating">
             <input type="text" class="form-control" id="Comaissaire" placeholder="Nom et prenom" />
             <label for="Namear1">Nom et prenom</label>
           </form>
           <br />
           <form class="form-floating">
             <input type="text" class="form-control" id="Comaissaire" placeholder="Nom et prenom" />
             <label for="Namear1">Ville</label>
           </form>
         </div></>
   </div>
   
      )
    }
  }