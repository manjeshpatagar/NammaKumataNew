'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'all' | 'business' | 'user';
  status: 'sent' | 'failed';
  sentAt: string;
}

const NotificationManagement: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const columns: ColumnsType<Notification> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      ellipsis: true,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => type.toUpperCase(),
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
      title: 'Sent At',
      dataIndex: 'sentAt',
      key: 'sentAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => handleViewDetails(record)}>View Details</Button>
      ),
    },
  ];

  const handleAdd = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleViewDetails = (notification: Notification) => {
    form.setFieldsValue(notification);
    setIsModalVisible(true);
  };

  const handleSubmit = async (values: any) => {
    try {
      // API call to send notification
      message.success('Notification sent successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to send notification');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notification Management</h1>
        <Button type="primary" onClick={handleAdd}>
          Send Notification
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={notifications}
        loading={loading}
        rowKey="id"
      />

      <Modal
        title="Notification Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="all">All Users</Select.Option>
              <Select.Option value="business">Business Users</Select.Option>
              <Select.Option value="user">Regular Users</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NotificationManagement; 