'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { UploadFile } from 'antd/es/upload/interface';

interface Category {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  parentId: string | null;
}

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const columns: ColumnsType<Category> = [
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
      title: 'Icon',
      dataIndex: 'iconUrl',
      key: 'iconUrl',
      render: (url: string) => (
        <img src={url} alt="category" className="w-8 h-8 object-contain" />
      ),
    },
    {
      title: 'Parent Category',
      dataIndex: 'parentId',
      key: 'parentId',
      render: (parentId: string | null) => {
        const parent = categories.find(cat => cat.id === parentId);
        return parent ? parent.name : 'None';
      },
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
    setFileList([]);
    setIsModalVisible(true);
  };

  const handleEdit = (category: Category) => {
    form.setFieldsValue(category);
    setFileList([{ uid: '-1', name: 'icon.png', status: 'done', url: category.iconUrl }]);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      // API call to delete category
      message.success('Category deleted successfully');
      // Refresh the list
    } catch (error) {
      message.error('Failed to delete category');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      // API call to create/update category
      message.success('Category saved successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to save category');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Category Management</h1>
        <Button type="primary" onClick={handleAdd}>
          Add Category
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={categories}
        loading={loading}
        rowKey="id"
      />

      <Modal
        title="Category Details"
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
            name="icon"
            label="Icon"
            rules={[{ required: true }]}
          >
            <Upload
              listType="picture"
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload Icon</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="parentId"
            label="Parent Category"
          >
            <Input />
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

export default CategoryManagement; 