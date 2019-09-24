import React from 'react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

configure({ adapter: new Adapter() });

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(2);
});

it('shows comment List', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})