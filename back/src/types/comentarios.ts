
import { Type, Static } from "@sinclair/typebox";
export const ComentarioSchema = Type.Object(
    {
        username: Type.String({ description: "Nombre de usuario que hace el comentario" }),
        comentario: Type.String({ description: "comentario" }),
    },
    {
        examples: [
            { username: "admin", descripcion: "mal hecha la tarea" },
            { username: "pepe", descripcion: "le falta titulo" },
        ],
    }
);
export type ComentarioType = Static<typeof ComentarioSchema>;