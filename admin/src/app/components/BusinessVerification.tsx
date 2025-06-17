'use client';

import React, { useState } from 'react';
import { Table, Button, Modal, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Business {
  id: string;
  name: string;
  owner: string;
  status: 'pending' | 'approved' | 'rejected';
  documents: string[];
  submittedAt: string;
}

const BusinessVerification: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns: ColumnsType<Business> = [
    {
      title: 'Business Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
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
      title: 'Submitted At',
      dataIndex: 'submittedAt',
      key: 'submittedAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => handleViewDetails(record)}>View Details</Button>
      ),
    },
  ];

  const handleViewDetails = (business: Business) => {
    setSelectedBusiness(business);
    setIsModalVisible(true);
  };

  const handleApprove = async (id: string) => {
    try {
      // API call to approve business
      message.success('Business approved successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to approve business');
    }
  };

  const handleReject = async (id: string) => {
    try {
      // API call to reject business
      message.success('Business rejected successfully');
      setIsModalVisible(false);
      // Refresh the list
    } catch (error) {
      message.error('Failed to reject business');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Business Verification</h1>
      <Table
        columns={columns}
        dataSource={businesses}
        loading={loading}
        rowKey="id"
      />

      <Modal
        title="Business Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="reject" danger onClick={() => selectedBusiness && handleReject(selectedBusiness.id)}>
            Reject
          </Button>,
          <Button key="approve" type="primary" onClick={() => selectedBusiness && handleApprove(selectedBusiness.id)}>
            Approve
          </Button>,
        ]}
      >
        {selectedBusiness && (
          <div>
            <p><strong>Business Name:</strong> {selectedBusiness.name}</p>
            <p><strong>Owner:</strong> {selectedBusiness.owner}</p>
            <p><strong>Status:</strong> {selectedBusiness.status}</p>
            <p><strong>Submitted At:</strong> {selectedBusiness.submittedAt}</p>
            <div className="mt-4">
              <h3>Documents:</h3>
              {selectedBusiness.documents.map((doc, index) => (
                <div key={index} className="mt-2">
                  <a href={doc} target="_blank" rel="noopener noreferrer">
                    Document {index + 1}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BusinessVerification; 