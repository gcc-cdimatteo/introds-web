import { ReactElement } from 'react';
import PageContainer from '../ui/page-container';
import { Typography } from 'antd';
import { Face, Face2, Face2Outlined, Face5, Face6, Person, School } from '@mui/icons-material';
import { Box, Icon } from '@mui/material';
import Tab from '../ui/tab';
import Teacher from '../ui/teacher';

export default function Page() {
  const p_content: ReactElement = (
    <>
      <Typography style={{ fontSize: '1rem' }}>
        <div>
          <h4>Docentes</h4>
          <br />
          <Teacher icon={<School style={{ color: '#006EAF' }} />} name={<> Lic. Bruno Lanzillotta </>} />
          <br />
          <Teacher icon={<Face style={{ color: '#006EAF' }} />} name={<> Martín Sosa </>} />
          <br />
          <Teacher icon={<Face style={{ color: '#006EAF' }} />} name={<> Franco Capra </>} />
          <br />
          <Teacher icon={<Face2 style={{ color: '#006EAF' }} />} name={<> Carolina Di Matteo </>} />
          <br />
          <Teacher icon={<Face6 style={{ color: '#006EAF' }} />} name={<> Leonel Chaves </>} />
          <br />
          <Teacher icon={<Face6 style={{ color: '#006EAF' }} />} name={<> Tomás Villegas </>} />
          <br />
          <Teacher icon={<Face6 style={{ color: '#006EAF' }} />} name={<> Nestor Palavecino </>} />
          <br />

          <h4>Colaboradores</h4>
          <br />
          <Teacher icon={<Face6 style={{ color: '#006EAF' }} />} name={<> Ing. Tomás Rodríguez </>} />
          <br />
          <Teacher icon={<Face style={{ color: '#006EAF' }} />} name={<> Flavio Villanueva </>} />
          <br />
        </div>
      </Typography>
    </>
  );

  return (
    <PageContainer breadcrumb='Docentes' content={p_content}></PageContainer>
  );
};