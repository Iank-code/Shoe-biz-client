"use client";
import { useState } from "react";
import { Group, Code, Paper, Text } from "@mantine/core";
import { IconSettings, IconReceipt2, IconLogout } from "@tabler/icons-react";
import classes from "./userdash.module.scss";
import Orders from "./pages/Orders";
import Setting from "./pages/Setting";
import { IconArrowBackUp, IconBrandProducthunt } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import AddProducts from "./pages/AddProducts";

const tabsData = [
  {
    label: "Order",
    icon: IconReceipt2,
    content: <Orders />,
  },
  {
    label: "Profile",
    icon: IconSettings,
    content: <Setting />,
  },
];

const sellerTabs = [
  {
    label: "All Products",
    icon: IconBrandProducthunt,
    content: <AddProducts />,
  },
  {
    label: "Add Product",
    icon: IconBrandProducthunt,
    content: <AddProducts />,
  },
];

export default function UserDash() {
  const loginState = useSelector((state: any) => {
    return state.login;
  });

  const [activeTab, setActiveTab] = useState("Order");

  const tabs = tabsData.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === activeTab || undefined}
      key={item.label}
      onClick={() => setActiveTab(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const sellerOnlyTabs = sellerTabs.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === activeTab || undefined}
      key={item.label}
      onClick={() => setActiveTab(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const activeTabContent =
    tabsData.find((tab) => tab.label === activeTab)?.content ||
    sellerTabs.find((tab) => tab.label === activeTab)?.content;

  return (
    <div className={classes.userDashboard}>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <Text>Hello {loginState.name}</Text>
          </Group>
          {tabs}
          {loginState.role === "Seller" && sellerOnlyTabs}
        </div>

        <div className={classes.footer}>
          <a href="/" className={classes.link}>
            <IconArrowBackUp className={classes.linkIcon} stroke={1.5} />
            <span>Back</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Logout
            </span>
          </a>
        </div>
      </nav>
      <div className={classes.tabContent}>
        <Paper className={classes.contentPaper}>{activeTabContent}</Paper>
      </div>
    </div>
  );
}
