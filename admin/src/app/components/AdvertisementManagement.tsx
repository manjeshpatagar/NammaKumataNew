import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { UploadFile } from 'antd/es/upload/interface';

interface Advertisement {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive';
}

const AdvertisementManagement: React.FC = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const columns: ColumnsType<Advertisement> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
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

  const handleEdit = (ad: Advertisement) => {
    form.setFieldsValue({
      ...ad,
      startDate: ad.startDate,
      endDate: ad.endDate,
    });
    setFileList([{ uid: '-1', name: 'image.png', status: 'done', url: ad.imageUrl }]);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      // API call to delete advertisement
      message.success('Advertisement deleted successfully');
      // Refresh the list
    } catch (error) {
      message.error('Failed to delete advertisement');
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      // API call to create/update advertisement
      message.success('Advertisement saved successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to save advertisement');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Advertisement Management</h1>
        <Button type="primary" onClick={handleAdd}>
          Add Advertisement
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={advertisements}
        loading={loading}
        rowKey="id"
      />

      <Modal
        title="Advertisement Details"
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
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
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
            name="startDate"
            label="Start Date"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true }]}
          >
            <DatePicker />
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

export default AdvertisementManagement; 