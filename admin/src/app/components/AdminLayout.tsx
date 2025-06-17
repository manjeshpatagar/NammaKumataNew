import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  BellOutlined,
  AppstoreOutlined,
  TagsOutlined,
  SettingOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/admin/dashboard',
      icon: <DashboardOutlined />,
      label: <Link href="/admin/dashboard">Dashboard</Link>,
    },
    {
      key: '/admin/business',
      icon: <UserOutlined />,
      label: <Link href="/admin/business">Business Verification</Link>,
    },
    {
      key: '/admin/ads',
      icon: <AppstoreOutlined />,
      label: <Link href="/admin/ads">Advertisement Management</Link>,
    },
    {
      key: '/admin/notifications',
      icon: <BellOutlined />,
      label: <Link href="/admin/notifications">Notifications</Link>,
    },
    {
      key: '/admin/banners',
      icon: <AppstoreOutlined />,
      label: <Link href="/admin/banners">Banner Management</Link>,
    },
    {
      key: '/admin/categories',
      icon: <TagsOutlined />,
      label: <Link href="/admin/categories">Categories</Link>,
    },
    {
      key: '/admin/services',
      icon: <SettingOutlined />,
      label: <Link href="/admin/services">Services</Link>,
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