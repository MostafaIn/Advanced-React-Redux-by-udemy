import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';


let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox />);
})
afterEach(() => {
    wrapped.unmount()
})


it('has a textarea and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        })
        wrapped.update();
    })
    it('has a textarea user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    it('when form is submitted, textarea get empty', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual("");
    });
})
