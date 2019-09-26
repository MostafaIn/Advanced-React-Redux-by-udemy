import React from 'react';
import { mount } from 'enzyme';
import Root from 'reducers/Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'fetched #1' }, { name: 'fetched #2' }]
    })
});
afterEach(() => {
    moxios.uninstall();
});

it('can fetch list of comments and display', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        wrapped.unmount();
        done();
    })

});