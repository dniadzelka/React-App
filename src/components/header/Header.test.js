import React from 'react';
import {shallow} from "enzyme";
import {Header} from "./Header";

describe('Header component', () => {
	it('Should render without throwing an error', () => {
		expect(shallow(<Header/>).find('.App .Header').exists()).toBe(true)
	});
});