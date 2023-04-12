import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';

const Error = () => {
    return (
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/appliedjobs" component={AppliedJobs} />
          <Route path="/blog" component={Blog} />
          {/* <Route path="/blog" component={Blog} /> */}
          <Route component={Error} />
        </Switch>
      </Router>
    );
};

export default Error;