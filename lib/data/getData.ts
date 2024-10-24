export async function getEncuestas({
  id,
  userId,
  fechaInicio,
  fechaTermino,
}: {
  id?: string;
  userId?: string;
  fechaInicio?: Date;
  fechaTermino?: Date;
}) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/auth/evaluaciones?id=${id ? id : ""}&userId=${userId ? userId : ""}`,
      {
        method: "GET",
        mode: "same-origin",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error as string;
  }
}
