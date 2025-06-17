'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, Switch, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { UploadFile } from 'antd/es/upload/interface';

interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
  isActive: boolean;
  position: number;
}

const BannerManagement: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const columns: ColumnsType<Banner> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (url: string) => (
        <img src={url} alt="banner" className="w-20 h-12 object-cover" />
      ),
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      ellipsis: true,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: boolean) => (
        <Switch checked={isActive} disabled />
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
    setFileList([]);
    setIsModalVisible(true);
  };

  const handleEdit = (banner: Banner) => {
    form.setFieldsValue(banner);
    setFileList([{ uid: '-1', name: 'banner.png', status: 'done', url: banner.imageUrl }]);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      // API call to delete banner
      message.success('Banner deleted successfully');
      // Refresh the list
    } catch (error) {
      message.error('Failed to delete banner');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      // API call to create/update banner
      message.success('Banner saved successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to save banner');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Banner Management</h1>
        <Button type="primary" onClick={handleAdd}>
          Add Banner
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={banners}
        loading={loading}
        rowKey="id"
      />

      <Modal
        title="Banner Details"
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
            name="image"
            label="Image"
            rules={[{ required: true }]}
          >
            <Upload
              listType="picture"
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="link"
            label="Link"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="position"
            label="Position"
            rules={[{ required: true }]}
          >
            <Input type="number" min={1} />
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

export default BannerManagement; 