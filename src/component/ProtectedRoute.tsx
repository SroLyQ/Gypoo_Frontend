import React from 'react';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  useNavigate,
  RouteProps,
  Navigate,
} from 'react-router-dom';

export type ProtectedRoutes = {
  authenPath: string;
  next: JSX.Element;
  role: string;
};

export default function ProtectedRoutes({
  authenPath,
  next,
  role,
}: ProtectedRoutes) {
  <div>Dont Do Anything Yet</div>;
}
