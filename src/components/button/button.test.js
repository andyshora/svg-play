import test from 'ava';
import React from 'react';
import Button from './button';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('Button component basics', t => {
  const wrapper = shallow(<Button
    type='secondary'
    size='large'
    label='Buy!'
    theme='light' />);

  // check the html structure
  t.is(wrapper.find('button').length, 1);
  t.is(wrapper.find('button').text(), 'Buy!');
  t.true(wrapper.find('button').hasClass('qb-button'));
  t.true(wrapper.find('button').hasClass('qb-button--theme-light'));
  t.true(wrapper.find('button').hasClass('qb-button--type-secondary'));
  t.true(wrapper.find('button').hasClass('qb-button--size-large'));
});

test('Button component click', t => {
  const callback = sinon.spy();

  const data = { id: 'marketing' };

  const wrapper = shallow(<Button
    data={ data }
    type='primary'
    size='medium'
    label='Sell!'
    onTapped={ callback }
    onHoverIn={ callback }
    onHoverOut={ callback } />);

  // simulate a click event
  const node = wrapper.find('button');
  node.simulate('click');
  t.true(callback.calledOnce);
  t.deepEqual(callback.firstCall.args[0].data, data);
  // mouseover
  node.simulate('mouseover');
  t.is(callback.callCount, 2);
  t.deepEqual(callback.secondCall.args[0].data, data);
  // mouseout
  node.simulate('mouseout');
  t.is(callback.callCount, 3);
  t.deepEqual(callback.thirdCall.args[0].data, data);
});
