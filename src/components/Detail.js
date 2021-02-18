import React from 'react'
import { Row, Col, Card } from 'antd';
import { useNavigate, useLocation } from "react-router-dom";
import {
    LeftCircleOutlined
} from '@ant-design/icons';

const { Meta } = Card;
function Detail(res) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);

    const back = () => {
        navigate('/');
    }
    return (
        <div>
            <Row type="flex" align="middle" >
                <Col span={12} offset={6}>
                    <LeftCircleOutlined style={{ fontSize: "30px", marginTop: 80 }} onClick={() => back()} />
                    <Card hoverable style={{
                        marginTop: 20,
                        maxWidth: 1500, width: 900,
                        borderRadius: "16px",
                        marginRight: "24px",
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",

                    }}
                        cover={<img alt="example" src={location.state.img} />}>

                        <Meta title={location.state.title} description={location.state.des} />

                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Detail;