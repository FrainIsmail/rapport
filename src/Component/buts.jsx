import React from 'react';
export class Buts extends React.Component {
 
    render() {
      return (
        <div class="row center" >
          <div class="col-sm-5">        
         <form class="form-floating">
           <input type="text" class="form-control" id="Namear1" placeholder="Nom" />
           <label for="Namear1">Nom</label>
         </form>
         </div>
         <div class="col-sm-3">
         <form class="form-floating">
           <input type="text" class="form-control" id="Namear1" placeholder="License" />
           <label for="Namear1">License</label>
         </form>
         </div> 
         <div class="col-sm-1">
         <button class="btn btn-primary"><i class="fa fa-plus fa-lg fa-rotate-90"></i> </button>
         
         </div>
        </div>
      
        
      )
    }
}