'use client';

import React from 'react';
import { Row, Col, Card, Statistic, Table, List, Avatar } from 'antd';
import {
  UserOutlined,
  ShoppingOutlined,
  BellOutlined,
  AppstoreOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DollarOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Line, Pie } from '@ant-design/plots';

const DashboardPage: React.FC = () => {
  // Sample data for charts
  const lineData = [
    { date: '2024-01', value: 350 },
    { date: '2024-02', value: 420 },
    { date: '2024-03', value: 380 },
    { date: '2024-04', value: 450 },
    { date: '2024-05', value: 500 },
  ];

  const pieData = [
    { type: 'Active', value: 65 },
    { type: 'Pending', value: 25 },
    { type: 'Inactive', value: 10 },
  ];

  // Recent activities data
  const recentActivities = [
    {
      id: 1,
      type: 'business',
      title: 'New Business Registration',
      description: 'ABC Company has registered for verification',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'service',
      title: 'New Service Added',
      description: 'Plumbing service has been added to the platform',
      time: '4 hours ago',
    },
    {
      id: 3,
      type: 'notification',
      title: 'System Notification',
      description: 'System maintenance scheduled for tomorrow',
      time: '6 hours ago',
    },
  ];

  // Recent transactions data
  const recentTransactions = [
    {
      id: 1,
      business: 'XYZ Services',
      amount: 1500,
      status: 'completed',
      date: '2024-03-15',
    },
    {
      id: 2,
      business: 'ABC Company',
      amount: 2500,
      status: 'pending',
      date: '2024-03-14',
    },
    {
      id: 3,
      business: 'DEF Enterprises',
      amount: 1800,
      status: 'completed',
      date: '2024-03-13',
    },
  ];

  const transactionColumns = [
    {
      title: 'Business',
      dataIndex: 'business',
      key: 'business',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span className={`status-${status}`}>{status.toUpperCase()}</span>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const config = {
    data: lineData,
    xField: 'date',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Businesses"
              value={1250}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
              suffix={
                <span className="text-green-500">
                  <ArrowUpOutlined /> 12%
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Services"
              value={450}
              prefix={<ShoppingOutlined />}
              valueStyle={{ color: '#3f8600' }}
              suffix={
                <span className="text-green-500">
                  <ArrowUpOutlined /> 8%
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Notifications"
              value={89}
              prefix={<BellOutlined />}
              valueStyle={{ color: '#cf1322' }}
              suffix={
                <span className="text-red-500">
                  <ArrowDownOutlined /> 3%
                </span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Categories"
              value={24}
              prefix={<AppstoreOutlined />}
              valueStyle={{ color: '#3f8600' }}
              suffix={
                <span className="text-green-500">
                  <ArrowUpOutlined /> 5%
                </span>
              }
            />
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={24} lg={16}>
          <Card title="Business Growth">
            <Line {...config} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Business Status">
            <Pie
              data={pieData}
              angleField="value"
              colorField="type"
              radius={0.8}
              label={{
                type: 'outer',
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* Recent Activities and Transactions */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Recent Activities">
            <List
              itemLayout="horizontal"
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        icon={
                          item.type === 'business' ? (
                            <UserOutlined />
                          ) : item.type === 'service' ? (
                            <ShoppingOutlined />
                          ) : (
                            <BellOutlined />
                          )
                        }
                      />
                    }
                    title={item.title}
                    description={
                      <div>
                        <p>{item.description}</p>
                        <span className="text-gray-500 text-sm">
                          {item.time}
                        </span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Recent Transactions">
            <Table
              columns={transactionColumns}
              dataSource={recentTransactions}
              pagination={false}
              rowKey="id"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage; 