import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from '../views/HomePage';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import TabLayout from '../layout/TabLayout';
import OnboardPage from '../views/OnboardPage';
import NotFound from '../views/NotFound';



const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Use TabLayout for routes where you want the tab bar */}
        <Route path="/home">
          <TabLayout>
            <HomePage/> {/* Include the first view component */}
          </TabLayout>
        </Route>
        <Route path="/about">
          <TabLayout>
            <AboutPage/> {/* Include additional view components */}
          </TabLayout>
        </Route>
        <Route path="/contact">
          <TabLayout>
            <ContactPage/>
          </TabLayout>
        </Route>
        {/* Other routes without the tab bar
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/home" component={HomePage} /> */}
        <Route exact path="/" component={OnboardPage} />
          {/* Catch-all route for Not Found */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
