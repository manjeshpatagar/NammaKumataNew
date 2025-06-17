'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';
import {
  DashboardOutlined,
  ShopOutlined,
  BellOutlined,
  PictureOutlined,
  AppstoreOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/admin/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/admin/business-verification',
      icon: <ShopOutlined />,
      label: 'Business Verification',
    },
    {
      key: '/admin/ads',
      icon: <PictureOutlined />,
      label: 'Advertisements',
    },
    {
      key: '/admin/notifications',
      icon: <BellOutlined />,
      label: 'Notifications',
    },
    {
      key: '/admin/banners',
      icon: <PictureOutlined />,
      label: 'Banners',
    },
    {
      key: '/admin/categories',
      icon: <AppstoreOutlined />,
      label: 'Categories',
    },
    {
      key: '/admin/services',
      icon: <ToolOutlined />,
      label: 'Services',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="light">
        <div className="p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px' }}>
          <div className="flex justify-end items-center h-full">
            <span className="text-gray-600">Admin User</span>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout; 