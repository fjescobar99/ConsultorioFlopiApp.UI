export class PacienteDto {
    id: number = 0;
    dni?: string = "";
    nombre: string = "";
    apellido: string = "";
    domicilio?: string = "";
    email?: string = "";
    fechaNac?: Date;
    ocupacion?: string;
    profesion?: string;
    antecedentesClinicos?: string;
    copago?: number;
    estadoCivil?: string;
    grupoFliar?: string;
    particular?: boolean;
    prepaga?: boolean;
    valorConsulta?: number;
  }
  