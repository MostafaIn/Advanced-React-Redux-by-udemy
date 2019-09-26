import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'reducers/Root';


let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['c1', 'c2', 'c3', 'c4']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

it('creates an li per comment', () => {
    console.log(wrapped.find('li').length)
});