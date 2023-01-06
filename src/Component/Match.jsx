import React from 'react';
export class Match extends React.Component {
    render() {
      return (
        <div class="row center" >
        <legend class="col-form-legend col-sm-1-12"><h3>Match</h3></legend>
       <div class="col-sm-2">
         <h5>competition</h5>
         <form class="form-floating">
           <input type="text" class="form-control" id="Namear1" placeholder="Competition"/>
           <label for="Namear1">Competition</label>
         </form>
         
       </div>
       <div class="col-sm-2">
         <h5>categorie</h5>
         <form class="form-floating">
           <input type="text" class="form-control" id="Namear2" placeholder="categorie"/>
           <label for="Namear1">categorie</label>
         </form>
        
       </div>
       <div class="col-sm-1">
         <h5>heure</h5>
         <form class="form-floating">
           <input type="time" class="form-control" id="Namear3" placeholder="Heure"/>
           <label for="heure">Heure</label>
         </form>
         <br/>
         
       </div>
       <div class="col-sm-1">
         <h5>date</h5>
         <form class="form-floating">
           <input type="date" class="form-control" id="Comaissaire" placeholder="date"/>
           <label for="date">Date</label>
         </form>
       </div>
       <div class="col-sm-2">
         <h5>terrain</h5>
         <form class="form-floating">
           <input type="text" class="form-control" id="Comaissaire" placeholder="terrain"/>
           <label for="terrain">Terrain</label>
         </form>
       </div>
       <div class="col-sm-2">
         <h5>ville</h5>
         <form class="form-floating">
           <input type="text" class="form-control" id="Comaissaire" placeholder="ville"/>
           <label for="ville">Ville</label>
         </form>
       </div>
     </div>
      );}}