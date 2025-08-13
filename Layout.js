
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, UserPlus, Users, Calendar, Award } from "lucide-react";

const navigationItems = [
{ title: "Home", url: createPageUrl("Home"), icon: Home },
{ title: "Join DECA", url: createPageUrl("Join"), icon: UserPlus },
{ title: "Members", url: createPageUrl("Dashboard"), icon: Users },
{ title: "Events", url: createPageUrl("Events"), icon: Calendar }];


export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      {/* Floating Circular Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3e398a9e8_download.png" alt="DECA Logo" className="w-aut w-au w-a w- w- w- h- h-6 w-30" />
              </div>
              <span className="text-gray-900 font-bold text-lg tracking-tight">DECA</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navigationItems.map((item) =>
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname === item.url ?
                "bg-red-500 text-white shadow-md" :
                "text-gray-600 hover:text-red-600 hover:bg-red-50"}`
                }>

                  <item.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{item.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3e398a9e8_download.png" alt="DECA Logo" className="h-6 w-auto" />
              <span className="text-gray-800 font-bold">Memorial High School DECA</span>
            </div>
            <a href="mailto:decamemorialclub@gmail.com" className="text-gray-500 text-sm hover:text-red-500 transition-colors">
              decamemorialclub@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>);

}