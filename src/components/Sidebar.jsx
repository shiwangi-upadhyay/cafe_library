"use client";
import React, { useEffect } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { TbVip } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import { CgStudio } from "react-icons/cg";
import { GrCafeteria } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";
import { IoLibrarySharp, IoLogInSharp } from "react-icons/io5";
import { MdEmojiEvents, MdKey } from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { SiMicrodotblog } from "react-icons/si";
import {
  UserCircleIcon,
  PowerIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  CubeTransparentIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useLazyGetUserDataQuery } from "@/redux/services/userApi";
import { useDispatch, useSelector } from "react-redux";
import { changeLoggedIn, setUserData } from "@/redux/slices/user";
import Image from "next/image";
export function Sidebar() {
  const justLoggedIn = useSelector((state) => state.user.justLoggedIn);
  const dispatch = useDispatch();
  const path = usePathname();
  const [pathname, setPathname] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [getUserData, { data, isLoading,isSuccess }] = useLazyGetUserDataQuery();
  // Setting Pathname on navigation change
  useEffect(() => {
    setPathname(window.location.pathname);
  }, [path]);
  // Checking isUserJustLoggedIn
  useEffect(() => {
    getUserData();
    if (justLoggedIn) {
      dispatch(changeLoggedIn(false));
    }
  }, [justLoggedIn]);
  // Storing useraData in Redux
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUserData(data.user)); // Store in Redux
    }
  }, [isSuccess, data]);
  //Handeling Logout
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout");
      const res = await response.json();
      if (res.success) {
        getUserData();
        router.push("/");
        toast.success(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // Accordation opening function
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center px-2 py-2 lg:px-4 justify-between rounded-b-xxl h-[8vh] md:h-[6vh] lg:h-[8.5vh]">
        <div className="flex items-center gap-4">
          <Image
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="brand logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <Typography variant="h5" color="blue-gray">
            Library-Cafe
          </Typography>
        </div>
        <div className="flex gap-4 items-center">
          <IconButton variant="text" size="lg" onClick={openDrawer}>
            {isDrawerOpen ? (
              <XMarkIcon className="h-8 w-8 stroke-2" />
            ) : (
              <Bars3Icon className="h-8 w-8 stroke-2" />
            )}
          </IconButton>
          {pathname !== "/login" && pathname !== "/signup" && (
            <Link
              href="/profile"
              className="cursor-pointer hover:scale-110 duration-150"
            >
              <UserCircleIcon className="aspect-square w-8 lg:w-10" />
            </Link>
          )}
        </div>
      </nav>
      {/* Sidebar */}
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] overflow-y-scroll w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <Image
              width={300}
              height={300}
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Library-Cafe
            </Typography>
          </div>
          <List>
            <Link className={`${pathname === "/" && "bg-[#f0f2f4]"}`} href="/">
              <ListItem>
                <ListItemPrefix>
                  <GrCafeteria className="text-xl" />
                </ListItemPrefix>
                Home
              </ListItem>
            </Link>
            <Link
              className={`${pathname === "/rentals" && "bg-[#f0f2f4]"}`}
              href="/rentals"
            >
              <ListItem>
                <ListItemPrefix>
                  <MdKey className="text-xl" />
                </ListItemPrefix>
                Rentals
              </ListItem>
            </Link>
            {/*<Link
              className={`${pathname === "/membership" && "bg-[#f0f2f4]"}`}
              href="/membership"
            >
              <ListItem>
                <ListItemPrefix>
                  <TbVip className="text-xl" />
                </ListItemPrefix>
                Membership
              </ListItem>
            </Link>
            <Link
              className={`${pathname === "/events" && "bg-[#f0f2f4]"}`}
              href="/events"
            >
              <ListItem>
                <ListItemPrefix>
                  <MdEmojiEvents className="text-xl" />
                </ListItemPrefix>
                Events
              </ListItem>
            </Link>*/}
            <Link
              className={`${pathname === "/franchise" && "bg-[#f0f2f4]"}`}
              href="/franchise"
            >
              <ListItem>
                <ListItemPrefix>
                  <PiHandCoinsFill className="text-xl" />
                </ListItemPrefix>
                Franchise
              </ListItem>
            </Link>
            <Link
              className={`${pathname === "/about" && "bg-[#f0f2f4]"}`}
              href="/about"
            >
              <ListItem>
                <ListItemPrefix>
                  <FcAbout className="text-xl text-black" />
                </ListItemPrefix>
                About
              </ListItem>
            </Link>
            <Link
              className={`${pathname === "/blog" && "bg-[#f0f2f4]"}`}
              href="/blog"
            >
              <ListItem>
                <ListItemPrefix>
                  <SiMicrodotblog className="text-xl" />
                </ListItemPrefix>
                Blog
              </ListItem>
            </Link>
            <Link
              className={`${pathname === "/contact" && "bg-[#f0f2f4]"}`}
              href="/contact"
            >
              <ListItem>
                <ListItemPrefix>
                  <BsFillTelephoneOutboundFill className="text-xl" />
                </ListItemPrefix>
                Contact US
              </ListItem>
            </Link>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              {data?.user?.isAdmin && (
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <RiAdminLine className="text-xl" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Admin
                    </Typography>
                  </AccordionHeader>
                </ListItem>
              )}
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link href="/admin">
                    <ListItem>
                      <ListItemPrefix>
                        <FaChartPie className="text-xl" />
                      </ListItemPrefix>
                      Panel
                    </ListItem>
                  </Link>
                  <Link href="/admin/studio">
                    <ListItem>
                      <ListItemPrefix>
                        <CgStudio className="text-xl" />
                      </ListItemPrefix>
                      CMS Studio
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            {/* Checking user is loged in or not */}
            {!isLoading && (
              <div>
                {data?.success ? (
                  <ListItem onClick={() => handleLogout()}>
                    <ListItemPrefix>
                      <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                  </ListItem>
                ) : (
                  <Link
                    className={`${pathname === "/login" && "bg-[#f0f2f4]"}`}
                    href="/login"
                  >
                    <ListItem>
                      <ListItemPrefix>
                        <IoLogInSharp className="text-3xl" />
                      </ListItemPrefix>
                      Login
                    </ListItem>
                  </Link>
                )}
              </div>
            )}
          </List>
          {/* Alert Message */}
          <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Upgrade to Library Cafe PRO and be our prioprity customers,
              premium benefits.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="button"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                as="a"
                href="/membership"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert>
        </Card>
      </Drawer>
    </>
  );
}
