import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../app'
import { wrap } from 'module'

describe('App tests', () => {
    it('renders correctly', () => {
        const app = shallow(<App />)
        expect(app).toMatchSnapshot()
    })
})
