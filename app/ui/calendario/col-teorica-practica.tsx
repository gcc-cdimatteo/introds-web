import { Col } from "antd";
import { semana_col, teorica_practica_col } from "./col-lengths";
import { Fragment, ReactElement } from "react";
import ListItem from "../list-item";
import { FiberManualRecordTwoTone } from "@mui/icons-material";

export default function ColTeoricaPractica({ content }: { content: string[] }) {
    if (!content) return <></>;

    // Cabecera
    if (content.length == 1 && (content[0] == "TEÓRICA" || content[0] == "PRÁCTICA" || content[0] == "FERIADO")) {
        return (
            <Col span={teorica_practica_col}>
                <b>{content[0]}</b>
            </Col>
        );
    }

    // Fila Normal
    return (
        <>
            <Col span={teorica_practica_col}>
                {content.map((topic, index) => {
                    if (topic == "") return <></>;
                    return <ListItem key={index} icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>{topic.replace('- ', '')}</p>} />
                })
                }
            </Col>
        </>
    );
};