import { Col, Row } from "antd";
import Sidebar from "./components/Sidebar";
import Header from "./components/main/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className="h-screen overflow-auto font-sans bg-gradient-to-tl from-[rgba(200,202,230,255)] from-10% via-[rgba(222,235,236,1)] via-55% to-[rgba(173,207,210,1)] to-95% ">
      <Row>
        <Col className="hidden md:block" span={4}>
          <Sidebar />
        </Col>
        <Col span={20}>
          <Header />
          <Main />
        </Col>
      </Row>
    </div>
  );
};

export default App;
