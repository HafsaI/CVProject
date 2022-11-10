import './App.css';
import Sidebar from './components/Sidebar';
import { Layout} from 'antd';
import React from 'react';
const { Header, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Sidebar/>
        <Layout className="site-layout">
          <Header
          className="site-layout-background"
          style={{
              padding: 0,
              textAlign:'center'
          }}
          >
          Dashboard
          </Header>
          <Content
          className="site-layout-background"
          style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 800,
          }}
          >
          Video from webcam
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
