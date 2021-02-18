import React, { useState } from 'react'
import { Row, Col, Card, Image, Drawer, List, Avatar, Divider, Timeline, Typography } from 'antd';
import { useNavigate } from "react-router-dom";


const { Meta } = Card;
const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);
function Main() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const attraction = [
        {
            img: "https://cms.dmpcdn.com/travel/2017/08/03/73b05b6c-d3b6-4808-8a69-426b15b56fac.jpg",
            title: "ภูชี้ฟ้า",
            des: "ภูชี้ฟ้า เป็นยอดเขาสูงที่สุดในเทือกเขาดอยผาหม่น ติดชายแดนไทย-ลาว ค่ะ ตั้งอยู่ในอำเภอเทิง จังหวัดเชียงราย ด้วยความมีเอกลักษณ์ทางธรรมชาติของลักษณะหน้าผาปลายยอดแหลม เป็นแนวยาวที่ชี้ไปบนฟ้าทางฝั่งประเทศลาว จึงเป็นที่มาของชื่อเรียกว่า “ภูชี้ฟ้า” นั่นเอง"
        },
        {
            img: "https://cms.dmpcdn.com/travel/2017/08/03/5ec6258d-0c7d-4367-bb8e-46b3ef8d6dcb.jpg",
            title: "วัดพระธาตุเขาน้อย",
            des: "สำหรับวันนี้เราจะพาไปชมวิวที่สวยที่สุดของจังหวัดน่าน พร้อมนมัสการองค์พระใหญ่คู่บ้านคู่เมืองน่าน ที่ “วัดพระธาตุเขาน้อย” วัดพระธาตุเขาน้อยตั้งอยู่ใน ตำบลไชยสถาน องค์พระธาตุตั้งอยู่บนยอดดอยเขาน้อยซึ่งอยู่ด้านตะวันตกของตัวเมืองน่านซึ่งสูงจากระดับน้ำทะเลประมาณ 240 ม. ค่ะ สันนิษฐานว่ามีอายุรุ่นราวคราวเดียวกับพระธาตุแช่แห้ง ที่นี่เป็นจุดชมวิวเมืองน่านที่สวยงามแบบ 360 องศา"
        },
        {
            img: "https://cms.dmpcdn.com/travel/2017/08/03/2e1f5e5d-f88b-49d4-af6c-ed90b3eae6b4.jpg",
            title: "หมู่บ้านมอญ ท่าเสา",
            des: "ภายในหมู่บ้านจะมีบ้านเรือนของคนในชุมชน มีโรงเรียนซึ่งเปิดเฉพาะวันหยุดเพื่อให้เด็กๆ ได้มาเรียนภาษามอญกัน นอกเหนือจากภาษาไทยที่ไปเรียนกันตามปกติในโรงเรียนอยู่แล้ว เดินมาอีกหน่อยก็จะมี วัดมอญ ด้วยค่ะ ซึ่งมีพระสงฆ์จำพรรษาอยู่ตามปกติ เราสามารถทำบุญไหว้พระได้ และบริเวณใกล้ๆ วัดมอญ เราจะได้เจอกับ เจดีย์ชเวดากององค์จำลอง ซึ่งหันหน้าไปทางเมืองหาสาวดี"
        },
        {
            img: "https://cms.dmpcdn.com/travel/2017/08/03/a4730591-ce6c-4e15-b162-f54d144ac627.jpg",
            title: "แพหอยนางรม",
            des: "ภายในหมู่บ้านจะมีบ้านเรือนของคนในชุมชน มีโรงเรียนซึ่งเปิดเฉพาะวันหยุดเพื่อให้เด็กๆ ได้มาเรียนภาษามอญกัน นอกเหนือจากภาษาไทยที่ไปเรียนกันตามปกติในโรงเรียนอยู่แล้ว เดินมาอีกหน่อยก็จะมี วัดมอญ ด้วยค่ะ ซึ่งมีพระสงฆ์จำพรรษาอยู่ตามปกติ เราสามารถทำบุญไหว้พระได้ และบริเวณใกล้ๆ วัดมอญ เราจะได้เจอกับ เจดีย์ชเวดากององค์จำลอง ซึ่งหันหน้าไปทางเมืองหาสาวดี"
        },

    ];

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const detail = (res) => {
        console.log(res);
        navigate("/detail", { state: res });
    }
    return (
        <div>




            <Row type="flex" align="middle" >

                <Col span={12} offset={6}>

                    <Card hoverable style={{

                        borderRadius: "16px",
                        marginRight: "24px",
                        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
                    }}>
                        <List bordered style={{ maxWidth: 820, marginBottom: 20 }}>
                            <List.Item

                                actions={[
                                    <a onClick={() => showDrawer()}>
                                        View Profile
                </a>,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                                    }
                                    title={<a href="https://ant.design/index-cn">Worawit Panomroengchai</a>}
                                    description="Dev"
                                />
                            </List.Item>
                        </List>
                        <Timeline >



                            {
                                attraction.map(res => {
                                    return <Timeline.Item >

                                        <Image onClick={() => detail(res)}
                                            src={res.img}
                                        /></Timeline.Item>
                                })
                            }
                        </Timeline>

                    </Card>
                </Col>
            </Row>
            <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={() => onClose()}
                visible={visible}
            >
                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                    โปรไฟล์
          </p>
                <Row>
                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            ชื่อ: นายวรวิทย์ พนมเริงไชย
                         </Typography.Text>

                    </Col>
                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            เมลติดต่อ: worawit.pa.61@ubu.ac.th
                        </Typography.Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            นักศึกษาปีที่ 3
                         </Typography.Text>

                    </Col>
                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            รหัสนักศึกษา 61114440586
                        </Typography.Text>
                    </Col>
                </Row>
                <Row>

                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            มหาวิทยาลัย อุบลราชธานี
                        </Typography.Text>
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                    วิชา
          </p>
                <Row span={12}>
                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            การบ้าน วิชาจริยธรรมและการเตรียมความพร้อมสำหรับการประกอบอาชีพ ( 1144336-60 )
                        </Typography.Text>
                    </Col>
                </Row>
                <Row span={12}>
                    <Col span={12}>
                        <Typography.Text className="ant-form-text" type="secondary">
                            อาจารย์ผู้สอน อาจารย์วิชิต สมบัติ
                        </Typography.Text>
                    </Col>
                </Row>
                <Divider />

                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                    รายละเอียดงานในครั้งนี้
          </p><Row span={12}>
                    <Col>
                        <Typography.Text className="ant-form-text" type="secondary">
                            - ใช้ React และ Ant Design
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text className="ant-form-text" type="secondary">
                            - ในการตกแต่งในหน้าแรก ทำการฟิกค่าข้อมูล 4 ชุดและวนลูปแสดงสถานที่ท่องเที่ยว
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text className="ant-form-text" type="secondary">
                            - เมื่อกด view profile จะเปิดแทปด้านข้างเพื่อแสดงรายละเอียด
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text className="ant-form-text" type="secondary">
                            - เมื่อกดที่รูปสถานที่ท่องเที่ยว จะนำไปยังหน้าแสดงรายละเอียดที่แห่งนั้น
                        </Typography.Text>
                    </Col>
                    <Col>
                        <Typography.Text className="ant-form-text" type="secondary">
                            - ทำการ deploy ขึ้น github hosting
                        </Typography.Text>
                    </Col>

                </Row>

            </Drawer>



        </div >
    )
}
export default Main;