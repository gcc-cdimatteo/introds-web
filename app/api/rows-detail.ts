import { getSheetData } from "./googleSheets";

export const getCalendarRowsDetails = async () => {
    const rows = await getSheetData();

    const calendar_rows_details = rows?.map((row: any) => {
        return {
            semana: row[0],
            teorica_fecha: row[1],
            teorica_modalidad: row[3],
            teorica_temas: row[4],
            teorica_diapositiva: row[5],
            teorica_grabacion: row[6],
            practica_fecha: row[9],
            practica_modalidad: row[11],
            practica_temas: row[12],
            practica_diapositiva: row[13],
            practica_grabacion: row[14],
        };
    });

    return calendar_rows_details;
}