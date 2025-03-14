import { Col, Grid, Row } from "antd";
import { diapositiva_col, modalidad_col } from "./col-lengths";
import { ReactElement } from "react";
import Link from "next/link";
import { FilePresentOutlined, VideoLibrary, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/material";
import Space from "../space";

interface Props {
    url_diapositiva: string[],
    modalidad: ReactElement,
    url_grabacion: string[]
}

export default function ColDiapositivaModalidadGrabacion({ url_diapositiva, modalidad, url_grabacion }: Props) {
    // Fila Normal
    return (
        <>
            {
                url_diapositiva.length == 0 ? (
                    // Cabecera
                    <Col span={diapositiva_col + modalidad_col}>
                        <Row justify={'center'} hidden={modalidad != <></>}>
                            {modalidad}
                        </Row>
                    </Col>
                ) :
                    (
                        <Col span={diapositiva_col + modalidad_col}>

                            <Row justify={'center'}>
                                {modalidad}
                            </Row>

                            <Box display={url_diapositiva.length > 0 && url_diapositiva[0] != "" ? "" : "none"}>
                                <br />
                                {
                                    url_diapositiva.map((diapo, index) => (
                                        <>
                                            <br />
                                            <Row key={index} justify={'center'}>
                                                <Link
                                                    href={diapo ?? ""}
                                                    target='_blank'>
                                                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                                        <FilePresentOutlined />
                                                        <Space />
                                                        Diapositiva
                                                    </Box>
                                                </Link>
                                            </Row>
                                        </>
                                    ))
                                }
                            </Box>

                            <Box display={url_grabacion.length > 0 && url_grabacion[0] != "" ? "" : "none"}>
                                {
                                    url_grabacion.map((grabacion, index) => (
                                        <>
                                            <br />
                                            <Row justify={'center'}>
                                                <Link
                                                    href={grabacion ?? ""}
                                                    target='_blank'>
                                                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                                        <VideoLibrary />
                                                        <Space />
                                                        Grabacion
                                                    </Box>
                                                </Link>
                                            </Row>

                                        </>
                                    ))
                                }
                            </Box>
                        </Col >
                    )
            }
        </>
    );
};