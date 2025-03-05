"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  LayoutGrid, 
  Inbox, 
  Users, 
  Package, 
  LogIn, 
  UserPlus,
  Menu,
  X,
  icons
} from 'lucide-react';
import { link } from 'fs';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/dashboard' },
    { icon: <LayoutGrid size={20} />, label: 'Kanban', href: '/kanban', badge: 'Pro' },
    { icon: <Inbox size={20} />, label: 'Inbox', href: '/inbox', badge: '3' },
    { icon: <Users size={20} />, label: 'Users', href: '/users' },
    { icon: <Package size={20} />, label: 'Products', href: '/Products' }, // Changed to match Products folder
     
    { icon: <LogIn size={20} />, label: 'Sign In', href: '/signin' },
    { icon: <UserPlus size={20} />, label: 'Sign Up', href: '/signup' },
  ];

  // Import and use Link from Next.js

  return (
    <div className={`h-screen bg-gray-900 text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex justify-between items-center">
        {!collapsed && <h1 className="text-xl font-bold">Menu</h1>}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1.5 rounded-lg hover:bg-gray-800"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>
      
      <nav className="mt-4">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href}
                className="flex items-center p-2 rounded-lg hover:bg-gray-800 group transition-all"
              >
                <div className="text-gray-400 group-hover:text-white">
                  {item.icon}
                </div>
                
                {!collapsed && (
                  <div className="ml-3 flex-1 flex justify-between items-center">
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        item.badge === 'Pro' ? 'bg-purple-900 text-purple-100' : 'bg-blue-900 text-blue-100'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
                
                {collapsed && item.badge && (
                  <span className={`absolute left-10 px-2 py-0.5 text-xs font-medium rounded-full ${
                    item.badge === 'Pro' ? 'bg-purple-900 text-purple-100' : 'bg-blue-900 text-blue-100'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
    </div>
  );
};

export default Sidebar;