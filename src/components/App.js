import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./pickship/Dashboard";
import Navbar from "./pickship/nav/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import UpdateProfile from "./auth/UpdateProfile";
import ForgotPassword from "./auth/ForgotPassword";
import Locations from "./pickship/locations/Locations";
import Picklist from "./pickship/picklist/Picklist";
import Products from "./pickship/products/Products";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from "./auth/Profile";
import { AppBridgeProvider } from "./providers/AppBridgeProvider";
import { GraphQLProvider } from "./providers/GraphQLProvider";

function App() {
  return (
      <Router>
        <AppBridgeProvider>
          <GraphQLProvider>
            <AuthProvider>
              <div className="App">
                <Navbar />
                <div className="content">
                  <Routes>
                    {/* PickShip */}
                    <Route exact path='/' element={<PrivateRoute>
                                                    <Dashboard/>
                                                  </PrivateRoute>}>
                    </Route>
                    <Route exact path='/locations' element={<PrivateRoute>
                                                            <Locations/>
                                                          </PrivateRoute>}>
                    </Route>
                    <Route exact path='/products' element={<PrivateRoute>
                                                            <Products/>
                                                          </PrivateRoute>}>
                    </Route>
                    <Route exact path='/picklist' element={<PrivateRoute>
                                                            <Picklist/>
                                                          </PrivateRoute>}>
                    </Route>
                    {/* Profile */}
                    <Route exact path='/user' element={<PrivateRoute>
                                                        <Profile/>
                                                      </PrivateRoute>}>
                    </Route>
                    <Route exact path='/update-profile' element={<PrivateRoute>
                                                                  <UpdateProfile/>
                                                                </PrivateRoute>}>
                    </Route>
                    {/* Auth */}
                    <Route exact path="/signup" element={<Signup />}/>
                    <Route exact path="/login" element={<Login />}/>
                    <Route exact path="/forgot-password" element={<ForgotPassword />}/>
                  </Routes>
                </div>
              </div>
            </AuthProvider>
          </GraphQLProvider>
        </AppBridgeProvider>
      </Router>
  );
}

export default App;
