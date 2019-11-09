import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { MockedProvider } from "@apollo/react-testing";
import { InMemoryCache } from 'apollo-boost';
import Worker from ".";
import setWorkerOpenMutation from "../../graphql/mutations/setWorkerOpen.graphql";

const defaultMocks = [{
  request: {
    query: setWorkerOpenMutation,
    variables: { id: 1, isOpen: true },
  },
  result: () => null,
}];

const worker = {
  id: 1,
  firstName: 'Tatenda',
  lastName: 'Chawanzwa',
  email: 'tatenda@chadigital.com',
  isOpen: false,
  bio: 'My short life story blah blah blah',
  skills: ['Node', 'React', 'Basketball', 'Speaker']
}

function renderComponent(component, { mocks = defaultMocks, cache, resolvers } = {}) {
  return mount(
    <MemoryRouter>
      <MockedProvider mock={mocks} cache={cache || new InMemoryCache()} resolvers={resolvers}>
        {component}
      </MockedProvider>
    </MemoryRouter>
  )
}

describe('Worker', () => {

  beforeEach(() => {
    jest.spyOn(Math, 'random').mockImplementation(() => 0.6);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render children as expected', () => {
    const component = renderComponent(<Worker worker={worker} />);
    expect(component.find('Memo(WorkerComponent)').html()).toMatchSnapshot();
  });

  test('should fire the setWorkerOpenMutation when Divider is clicked', () => {
    const mutationFn = jest.fn();
    jest.spyOn(ApolloHooks, 'useMutation').mockImplementation(() => ([mutationFn]));
    const component = mount(
      <MemoryRouter>
        <Worker worker={worker} />
      </MemoryRouter>
    );
    expect(ApolloHooks.useMutation).toHaveBeenCalledWith(setWorkerOpenMutation);
    component.find('StyledComponent[data-test-id="worker-divider"]').simulate('click');
    expect(mutationFn).toHaveBeenCalledTimes(1);
    expect(mutationFn).toHaveBeenCalledWith({ variables: {
      id: 1,
      isOpen: true
    } });
  });

});
