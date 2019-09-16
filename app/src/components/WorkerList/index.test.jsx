import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { MockedProvider } from "@apollo/react-testing";
import wait from "waait";
import WorkerList from ".";
import workersQuery from "../../graphql/queries/workers.graphql";
import { InMemoryCache } from 'apollo-boost';

const workers = [{
  id: 1,
  firstName: 'Tatenda',
  lastName: 'Chawanzwa',
  email: 'tatenda@chadigital.com',
  isOpen: false,
  bio: 'My short life story blah blah blah',
  skills: ['Node', 'React', 'Basketball', 'Speaker']
}, {
  id: 2,
  firstName: 'Jon',
  lastName: 'Brian',
  email: 'j@b.com',
  isOpen: false,
  bio: 'The Jon bio',
  skills: ['Not sure', 'Teacher']
}];

const defaultMocks = [{
  request: {
    query: workersQuery,
    variables: {
      options: { limit: 200 },
      conditions: {}
    }
  },
  result: {
    data: { workers }
  },
}];

function renderComponent(component, mocks = defaultMocks, cache = null) {
  const defaultCache = cache ? cache : new InMemoryCache();
  return mount(
    <MockedProvider mock={mocks}>
      <MemoryRouter>
        {component}
      </MemoryRouter>
    </MockedProvider>
  );
}

describe('WorkerList', () => {

  test('should render as expected', () => {
    const component = renderComponent(<WorkerList />);
    console.log(component.debug());
  });

});
