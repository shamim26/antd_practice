import { Col, Row } from "antd";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-screen font-sans bg-gradient-to-bl from-[rgba(172,178,216,1)] from-10% via-[rgba(222,235,236,1)] via-55% to-[rgba(173,207,210,1)] to-95% ">
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20}></Col>
      </Row>
    </div>
  );
};

export default App;
