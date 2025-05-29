import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
const SideBar = () => {
  return (
    <div>
      <Sidebar aria-label="Sidebar with logo branding example">
        <SidebarLogo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
          Flowbite
        </SidebarLogo>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarItem href="/admin/dashboard/upload" icon={HiViewBoards}>
              Upload Books
            </SidebarItem>
            <SidebarItem href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Users
            </SidebarItem>
            <SidebarItem href="#" icon={HiShoppingBag}>
              Products
            </SidebarItem>
            <SidebarItem href="/login" icon={HiArrowSmRight}>
              Sign In
            </SidebarItem>
            <SidebarItem href="/logout" icon={HiTable}>
              Log Out
            </SidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup>
            <SidebarItem href="#" icon={HiChartPie}>
              Upgrade to Pro
            </SidebarItem>
            <SidebarItem href="#" icon={HiViewBoards}>
              Documentation
            </SidebarItem>
            <SidebarItem href="#" icon={HiUser}>
              Help
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
};

export default SideBar;
