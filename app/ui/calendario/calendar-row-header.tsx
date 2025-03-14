import CalendarRow from "./calendar-row";

export default function CalendarRowHeader() {
    return (
        <>
            <CalendarRow
                semana="# sem"
                teorica_fecha=""
                teorica_modalidad={<></>}
                teorica_temas={['TEÓRICA']}
                teorica_diapositiva={[]}
                teorica_grabacion={[]}
                practica_fecha=""
                practica_modalidad={<></>}
                practica_temas={['PRÁCTICA']}
                practica_diapositiva={[]}
                practica_grabacion={[]}
            />
        </>
    );
}