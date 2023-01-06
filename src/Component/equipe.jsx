import React from 'react';
import {Buts} from "./buts"
export class Equipe extends React.Component {
    render() {
      return (
        <div>
            <p>Equipe <input type="text" class="form" id="Namear1" placeholder="Nom d'equipe" /></p>
            <hr/>
            <Buts/>
        </div>
            )
            }
        }