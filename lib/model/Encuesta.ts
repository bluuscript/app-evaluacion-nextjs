import { Schema, model, models } from "mongoose";

const encuestaSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: [false, "ID de Usuario requerido"],
    },
    nombreEncuesta: {
      type: String,
      required: [false, "Nombre de Encuesta requerida"],
    },
    fechaInicio: {
      type: Date,
      required: [false, "Fecha de Inicio requerida"],
    },
    fechaTermino: {
      type: Date,
      required: [false, "Fecha de Término requerida"],
    },
    fechaCreacion: {
      type: Date,
      required: [false, "Fecha de Creación requerida"],
    },
    fechaContestada: {
      type: Date,
      required: false,
    },
    encuestaContestada: {
      type: Boolean,
      required: [true, "Respuesta Contestada requerida"],
    },
    pregunta1: {
      type: JSON,
      required: false,
    },
    pregunta2: {
      type: JSON,
      required: false,
    },
    pregunta3: {
      type: JSON,
      required: false,
    },
    pregunta4: {
      type: JSON,
      required: false,
    },
    pregunta5: {
      type: JSON,
      required: false,
    },
    pregunta6: {
      type: JSON,
      required: false,
    },
    pregunta7: {
      type: JSON,
      required: false,
    },
    pregunta8: {
      type: JSON,
      required: false,
    },
    pregunta9: {
      type: JSON,
      required: false,
    },
    pregunta10: {
      type: JSON,
      required: false,
    },
    pregunta11: {
      type: JSON,
      required: false,
    },
    pregunta12: {
      type: JSON,
      required: false,
    },
    pregunta13: {
      type: JSON,
      required: false,
    },
    pregunta14: {
      type: JSON,
      required: false,
    },
    pregunta15: {
      type: JSON,
      required: false,
    },
    pregunta16: {
      type: JSON,
      required: false,
    },
    pregunta17: {
      type: JSON,
      required: false,
    },
    pregunta18: {
      type: JSON,
      required: false,
    },
    pregunta19: {
      type: JSON,
      required: false,
    },
    pregunta20: {
      type: JSON,
      required: false,
    },
  },
  {
    versionKey: false,
  },
);

const Encuesta = models.Encuesta || model("Encuesta", encuestaSchema);
export default Encuesta;
