import React from "react";
import { mount } from "enzyme";
import wait from "waait";
import { MemoryRouter } from "react-router";
import { MockedProvider } from "@apollo/react-testing";
import WorkerList from ".";
import workersQuery from "../../graphql/queries/workers.graphql";
import resolvers from "../../graphql/resolvers";
import { InMemoryCache } from 'apollo-boost';

const workers = [{
  id: 1,
  firstName: 'Tatenda',
  lastName: 'Chawanzwa',
  email: 'tatenda@chadigital.com',
  isOpen: false,
  bio: 'My short life story blah blah blah',
  skills: ['Node', 'React', 'Basketball', 'Speaker'],
  __typename: 'Worker'
}, {
  id: 2,
  firstName: 'Jon',
  lastName: 'Brian',
  email: 'j@b.com',
  isOpen: false,
  bio: 'The Jon bio',
  skills: ['Not sure', 'Teacher'],
  __typename: 'Worker'
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
  }
}];

async function renderComponent(component, mocks = defaultMocks) {
  const cache = new InMemoryCache();
  const app = mount(
    <MockedProvider mock={mocks} addTypename={false} cache={cache} resolvers={resolvers}>
      <MemoryRouter>
        {component}
      </MemoryRouter>
    </MockedProvider>
  );
  await wait(10);
  app.update();
  return app;
}

describe('WorkerList', () => {

  test('should render as expected', async () => {
    const component = await renderComponent(<WorkerList />);
    console.log(component.debug());
  });

});
