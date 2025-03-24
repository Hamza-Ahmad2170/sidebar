import { cn } from "@/lib/utils";

interface Props {
  readonly children: React.ReactNode;
}

export default function Sidebar({ children }: Props) {
  return (
    <div className="relative h-screen overflow-y-auto text-white">
      <aside className="fixed top-0 bottom-0 min-w-56 bg-black">
        <nav className="px-3">
          <ul className="my-20">{children}</ul>
        </nav>
      </aside>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  dropdown?: boolean;
}

export function SidebarItem({ icon, text, dropdown }: SidebarItemProps) {
  return (
    <li className="relative my-1 px-3 py-2 hover:bg-blue-600">
      <a
        href="#"
        className="flex items-center gap-2 font-medium transition-colors"
      >
        {icon}
        <span>{text}</span>
      </a>

      {/* <ul></ul> */}
    </li>
  );
}
