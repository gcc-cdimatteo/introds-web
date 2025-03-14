// import { Star } from '@mui/icons-material';
import ListItem from '../ui/list-item';
import PageContainer from '../ui/page-container';

import { Typography } from 'antd';
import { StarOutline } from '@mui/icons-material';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Durante la materia, desarrollaremos los siguientes contenidos:
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Nociones Básicas de Sistemas Operativos Linux</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Nociones básicas de Entorno de Programación</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Depuración (debugging)</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Manejo de la Terminal y Comandos Básicos</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Control de Versiones</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Manejo básico de Shell-Scripting</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Nociones básicas de Ingeniería de Software</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Nociones Básicas de Desarrollo Web: Front-End, Back-End y Frameworks</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Introducción a Bases de Datos</p>} />
      <ListItem icon={<StarOutline style={{ color: '#006EAF' }} />} text={<p>Docker, Containerizacion</p>} />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Programa' content={p_content}></PageContainer>
  );
};