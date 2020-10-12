import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({selector: 'app-pagina', templateUrl: './pagina.component.html', styleUrls: ['./pagina.component.scss']})
export class PaginaComponent implements OnInit {
    public name : string;
    public lastName : string;
    constructor(private _route : ActivatedRoute, private _router : Router) {}

    ngOnInit() : void {

        this
            ._route
            .params
            .subscribe((params : Params) => {
                console.log(params);
                this.name = params.nombre;
                this.lastName = params.apellido;
            });
    }
    redireccion(){
      this._router.navigate(['/pagina-test', 'Nombre' , 'Apellido'])
    }

    redireccionHome(){
      this._router.navigate(['/home']);
    }
    redireccionBlog(){
      this._router.navigate(['/blog']);
    }
    redireccionForm(){
      this._router.navigate(['/form']);
    }

}
