import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../models/persona';
import { PersonaService } from '../../../services/persona.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crearpersona',
  templateUrl: './crearpersona.component.html',
  styleUrls: ['./crearpersona.component.css']
})
export class CrearpersonaComponent implements OnInit {

  
  Personas: Persona[]=[];
  public Persona:Persona = new Persona();
  public titulo:string="Crear Persona";
  constructor(private repuestoService:PersonaService,private router:Router,private activateRouter:ActivatedRoute) {

   }

    ngOnInit(): void {
      this.repuestoService.getPersonas().subscribe(
        Personas => this.Personas=Personas
      );
  
      this.cargarRepuesto()
      
    }

    public create():void{
      this.repuestoService.create(this.Persona).subscribe(
        response=> this.router.navigate(['/crearpersona'])
      )
      
    }
  
     cargarRepuesto(): void{
      this.activateRouter.params.subscribe(params=>{
        let id = params['id']
        if(id){
          this.repuestoService.getPersona(id).subscribe((Persona)=>this.Persona=Persona)
        }
      })
    }

    recargar():void{
      window.location.reload()
    }







  displayStyle = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  

  
  openPopup() {
    this.displayStyle = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayStyle3 = "block";
  }
  openPopup4() {
    this.displayStyle4 = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  closePopup2() {
    this.displayStyle2 = "none";
  }
  closePopup3() {
    this.displayStyle3 = "none";
  }
  closePopup4() {
    this.displayStyle4 = "none";
  }
}
