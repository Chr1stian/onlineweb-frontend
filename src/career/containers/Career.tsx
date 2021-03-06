import CareerOpportunities from 'career/providers/CareerProvider';
import { Route } from 'core/components/Router';
import React from 'react';
import { Switch } from 'react-router-dom';
import DetailView from './DetailView';
import FilterableJobList from './FilterableJobList';

class Career extends React.Component<{}> {
  public render() {
    return (
      <section>
        <CareerOpportunities>
          <Switch>
            <Route exact path="/career" component={FilterableJobList} />
            <Route path="/career/:id" render={(props) => <DetailView {...props} />} />
          </Switch>
        </CareerOpportunities>
      </section>
    );
  }
}

export default Career;
