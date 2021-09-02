import {shallowMount, mount} from '@vue/test-utils'
import Chat from '../components/chat'

describe('Chat', () => {
    it('Display message', () => {
        const wrapper = shallowMount(Chat, {
            data() {
                return {
                    msgs: [{type: 'in', text: 'Привет! Это тест!'}]
                }
            }
        })
        expect(wrapper.text()).toMatch('Привет! Это тест!')
    })
})
