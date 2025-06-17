'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, InputNumber, Switch, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Service {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  price: number;
  duration: number;
  isActive: boolean;
}

const ServiceManagement: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const columns: ColumnsType<Service> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: (categoryId: string) => {
        // Get category name from categories list
        return 'Category Name';
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Duration (mins)',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: boolean) => (
        <span className={isActive ? 'text-green-500' : 'text-red-500'}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="space-x-2">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  const handleAdd = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (service: Service) => {
    form.setFieldsValue(service);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      // API call to delete service
      message.success('Service deleted successfully');
      // Refresh the list
    } catch (error) {
      message.error('Failed to delete service');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      // API call to create/update service
      message.success('Service saved successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to save service');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Service Management</h1>
        <Button type="primary" onClick={handleAdd}>
          Add Service
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={services}
        loading={loading}
        rowKey="id"
      />

      <Modal
        title="Service Details"
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
            name="name"
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="categoryId"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select>
              {/* Add category options here */}
              <Select.Option value="1">Category 1</Select.Option>
              <Select.Option value="2">Category 2</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={0}
              step={0.01}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value: string | undefined) => {
                if (!value) return 0;
                return parseFloat(value.replace(/\$\s?|(,*)/g, ''));
              }}
            />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Duration (minutes)"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            name="isActive"
            label="Active"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ServiceManagement; 