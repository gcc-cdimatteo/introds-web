import { Divider, Row } from 'antd';
import PageContainer from '../ui/page-container';
import CalendarRow from '../ui/calendario/calendar-row';
import CalendarRowHeader from '../ui/calendario/calendar-row-header';
import { getCalendarRowsDetails } from '../api/rows-detail';
import React from 'react';
import ModalidadVirtual from '../ui/calendario/modalidad-virtual';
import ModalidadPresencial from '../ui/calendario/modalidad-presencial';
import ModalidadFeriado from '../ui/calendario/modalidad-feriado';
import ModalidadPresencialObligatorio from '../ui/calendario/modalidad-presencial-obligatorio';
import ModalidadSinClases from '../ui/calendario/modalidad-sin-clases';
import ModalidadADefinir from '../ui/calendario/modalidad-a-definir';

const MODALIDADES = ["VIRTUAL", "PRESENCIAL OBLIGATORIO", "PRESENCIAL", "FERIADO", "SIN CLASES", "A DEFINIR"];

const getModalidad = (modalidad: string) => {
  switch (modalidad) {
    case MODALIDADES[0]:
      return <ModalidadVirtual />;
    case MODALIDADES[1]:
      return <ModalidadPresencialObligatorio />;
    case MODALIDADES[2]:
      return <ModalidadPresencial />;
    case MODALIDADES[3]:
      return <ModalidadFeriado />;
    case MODALIDADES[4]:
      return <ModalidadSinClases />;
    default:
      return <ModalidadADefinir />;
  }
}

export default async function Page() {

  const calendar = await getCalendarRowsDetails();

  const p_content = (
    <>
      <Row style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <CalendarRowHeader />

        <Divider style={{ borderWidth: 4, borderColor: '#306CBE' }} />

        {calendar?.map((row: any, index: number) => {
          return (
            <React.Fragment key={index}>
              <CalendarRow
                semana={row.semana}
                teorica_fecha={row.teorica_fecha}
                teorica_modalidad={getModalidad(row.teorica_modalidad)}
                teorica_temas={row.teorica_temas?.split('\n') ?? []}
                teorica_diapositiva={row.teorica_diapositiva?.split('\n') ?? []}
                teorica_grabacion={row.teorica_grabacion?.split('\n') ?? []}
                practica_fecha={row.practica_fecha}
                practica_modalidad={getModalidad(row.practica_modalidad)}
                practica_temas={row.practica_temas?.split('\n') ?? []}
                practica_diapositiva={row.practica_diapositiva?.split('\n') ?? []}
                practica_grabacion={row.practica_grabacion?.split('\n') ?? []} />

              <Divider style={{ borderWidth: 1, borderColor: '#607899' }} />
            </React.Fragment>
          )
        }
        )}
      </Row>
    </>
  );

  return (
    <PageContainer breadcrumb='Calendario' content={p_content} />
  );
};