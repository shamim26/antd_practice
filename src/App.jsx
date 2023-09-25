import { Button, Layout, Menu, Modal, Select, Table } from "antd";
import "./App.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = [
    {
      key: "1",
      index: "1",
      name: "John",
      age: "32",
      action: (
        <Select
          style={{
            width: 120,
            margin: "auto",
          }}
          onChange={handleChange}
          defaultValue="Choose"
          options={[
            { value: "remove", label: "Remove" },
            { value: "add", label: "Add" },
          ]}
        />
      ),
    },
    {
      key: "2",
      index: "1",
      name: "John",
      age: "32",
      action: (
        <Select
          style={{
            width: 120,
            margin: "auto",
          }}
          onChange={handleChange}
          defaultValue="Choose"
          options={[
            { value: "remove", label: "Remove" },
            { value: "add", label: "Add" },
          ]}
        />
      ),
    },
    {
      key: "3",
      index: "1",
      name: "John",
      age: "32",
      action: (
        <Select
          style={{
            width: 120,
            margin: "auto",
          }}
          onChange={handleChange}
          defaultValue="Choose"
          options={[
            { value: "remove", label: "Remove" },
            { value: "add", label: "Add" },
          ]}
        />
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Header
        style={{
          backgroundColor: "gray",
        }}
      >
        <h2>Top Navigation</h2>
      </Header>
      <Layout>
        <Sider style={{ backgroundColor: "white" }} width={250}>
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                children: [
                  { label: "Profile", key: "profile" },
                  { label: "User", key: "user" },
                ],
              },
              {
                label: "About",
                key: "about",
              },
            ]}
          />
        </Sider>
        <Content>
          <Table
            style={{ margin: "20px" }}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <div style={{ margin: "20px" }}>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Modal
            </Button>
            <Modal
              onCancel={() => setIsModalOpen(false)}
              onOk={() => setIsModalOpen(false)}
              open={isModalOpen}
              title="Modal"
            >
              <div>
                <p>Modal from antd</p>
              </div>
            </Modal>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
