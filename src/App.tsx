import Sidebar, { SidebarItem } from "@/components/sidebar";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

export default function App() {
  return (
    <Sidebar>
      <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
      <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
      <SidebarItem icon={<UserCircle size={20} />} text="Users" />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
      <SidebarItem icon={<Package size={20} />} text="Orders" />
      <SidebarItem icon={<Receipt size={20} />} text="Billing" />
      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
    </Sidebar>
  );
}
