import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "../HomePage";
import Favorite from "../Favorite";
import Profile from "../Profile";
import Register from "../Register";
import Login from "../Login";
import ForgotPassword from "../ForgotPassword";
import Service from "../Service";
import About from "../About";
import History from "../History";
import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import RegisterSalon from "../salonOwners/RegisterSalon";
import SalonDashboard from "../salonOwners/SalonDashboard";
import SalonHeader from "../salonOwners/SalonHeader";
import ManageService from "../salonOwners/ManageService";
import AddService from "../salonOwners/AddService";
import Staff from "../Staff";
import FinishBooking from "../FinishBooking";
import { AccountRoles } from "../../constants";

import HomepageMockup from "../mockUp/Homepage";
import ServiceMockup from "../mockUp/Service";
import FinishBookingMockup from "../mockUp/FinishBooking";
import ProfileMockup from "../mockUp/Profile";
import SalonStaff from "../salonOwners/SalonStaff";



const SwitchRoutes = () => {
  const { account } = useSelector((state) => state.loginAccount);

  if (account) {
    if (account.role === AccountRoles.Customer) {
      return (
        <>
          <Navigation />
          <Header />
          <div className="component">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/about" element={<About />} />
              <Route path="/history" element={<History />} />
              <Route path="/services/:salonId" element={<Service />} />
              <Route path="/staff/:serviceId" element={<Staff />} />
              <Route path="/finish_booking" element={<FinishBooking />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </>
      );
    }
    if (account.role === AccountRoles.Salon) {
      return (
        <>
          <SalonDashboard />
          <div className="component salon-page">
            <SalonHeader />
            <Routes>
              <Route path="/" element={<AddService />} />
              <Route path="/manage_service" element={<ManageService />} />
            </Routes>
          </div>
          <Footer />
        </>
      );
    }

    if (account.role === AccountRoles.Admin) {
      return <></>;
    }
  } else {
    return (
      <>
        <Navigation />
        <Header />
        <div className="component">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Mockup */}
            <Route path="/HomepageMockup" element={<HomepageMockup />} />
            <Route
              path="/servicesMockup/:salonId"
              element={<ServiceMockup />}
            />
            <Route
              path="/FinishBookingMockup"
              element={<FinishBookingMockup />}
            />
            <Route path="/ProfileMockUp" element={<ProfileMockup />} />

            {/*  */}
            <Route path="/about" element={<About />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register_salon" element={<RegisterSalon />} />
            <Route path="/login" element={<Login />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="SalonDashboard" element={<SalonDashboard />} />
            <Route path="ManageService" element={<ManageService />} />
            <Route path="AddService" element={<AddService />} />
            <Route path="SalonStaff" element={<SalonStaff />} />
            <Route path="History" element={<History />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="/services/:salonId" element={<Service />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
};

export default SwitchRoutes;
