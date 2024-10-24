export type UserSession = {
  _id: string;
  fullname: string;
  rol: string;
  email: string;
  password: string;
};

export type Encuesta = {
  _id: String;
  userId: String;
  nombreEncuesta: String;
  fechaInicio: Date;
  fechaTermino: Date;
  fechaCreacion: Date;
  fechaContestada: Date;
  encuestaContestada: boolean;
  pregunta1: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: boolean;
  };
  pregunta2: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta3: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta4: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta5: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta6: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta7: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta8: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta9: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta10: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta11: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta12: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta13: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta14: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta15: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta16: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta17: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta18: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta19: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
  pregunta20: {
    id: String;
    pregunta: String;
    tipo: String;
    opciones: Array<String>;
    respuesta: String;
    respuestaCorrecta: String;
    puntaje: String;
    correcta: Boolean;
  };
};
