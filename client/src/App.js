import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
const express = require("express");
const morgan = require("morgan");

//Import cors library
const cors = require("cors");

//Enable all cors request
app.use(cors());
//Import Components
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./Components/UserSignIn";
import UserSignUp from ".components/UserSignUp";
import CreateCourse from ".components/CreateCourse";
import UpdateCourse from ".components/UpdateCourse";
import Header from ".components/Header";
import UserSignOut from ".components/UserSignOut";
import PrivateRoute from "./PrivateRoute";
import Authenicated from "components/Authenicated";

//Context
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const HeaderWithContext = withContext(Header);
const UserSignOutWithContext = withContext(UserSignOut);
const PrivateRouteWithContext = withContext(PrivateRoute);
const AuthenicatedWithContext = withContext(Authenicated);

class App extends Component {
  render() {
    retuen (
    <Router>
      <div>
        <HeaderwithContext />
        <Switch>
          <Route exact path="/" component={CoursesWithContext} />
          <PrivateRoute
            path="/authenitcated"
            component={AuthenicatedWithContext}
          />
          <Route path="/courses/create" component={CreateCoursesWithContext} />
          <Route path="/courses/:id/update" component={CoursesWithContext} />
          <Route path="courses/:id" component={CourseDetailsWithContext} />
          <Route path="courses/signin" component={UserSignInsWithContext} />
          <Route path="courses/signup" component={UserSignUpWithContext} />
          <Route path="courses/signout" component={UserSignOutWithContext} />
        </Switch>
      </div>
    </Router>
  );
    };
  }
export default App;
