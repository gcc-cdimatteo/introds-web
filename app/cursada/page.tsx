import { Typography } from 'antd';
import PageContainer from '../ui/page-container';
import ListItem from '../ui/list-item';
import { CheckBox, Info, Report } from '@mui/icons-material';
import { tasks_aprobar, tasks_promocion, tasks_aclaraciones } from './tasks';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Para regularizar la materia es <b>obligatorio</b>:
      {tasks_aprobar.map((task, index) => (
        <ListItem
          key={index}
          icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />}
          text={<p>{task}</p>}
        />
      ))}

      <h4>Aclaraciones</h4>
      {tasks_aclaraciones.map((task, index) => (
        <ListItem
          icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />}
          text={<p>{task}</p>}
        />
      ))}

      <h4>Promoción</h4>
      <p>La materia se <u>promociona</u> sí y sólo sí:</p>
      {tasks_promocion.map((task, index) => (
        <ListItem
          key={index}
          icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />}
          text={<p>{task}</p>}
        />
      ))}

    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Cursada' content={p_content}></PageContainer>
  );
};