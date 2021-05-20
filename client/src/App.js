import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Components
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import UserSignIn from "./Components/UserSignIn";
import UserSignUp from ".components/UserSignUp";
import CreateCourse from ".components/CreateCourse";
import UpdateCourse from ".components/UpdateCourse";
/*import Header from ".components/Header";*/
import UserSignOut from ".components/UserSignOut";
import PrivateRoute from "./PrivateRoute";
/*import Authenicated from "components/Authenicated";*/

/*//Context
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
*/

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Courses} />
      <Route exact path="/courses/:id" component={CourseDetail} />
      <Route exact path="/signin" component={UserSignIn} />
      <Route exact path="/signup" component={UserSignUp} />
      <Route exact path="/signout" component={UserSignOut} />
      <PrivateRoute>
        <Route exact path="/courses/create" component={CreateCourse} />
        <Route exact path="/courses/:id/update" component={UpdateCourse} />
      </PrivateRoute>
    </Router>
  );
};

export default App;
