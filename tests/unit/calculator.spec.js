import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper; 

  beforeEach( () => {
    wrapper = shallowMount(App)
  }),

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  it('should add', () => {
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5)
  });

  it('should subtract', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('should multiply', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  });

  it('should divide', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('should concatenate multiple number button clicks', () => {
    wrapper.vm.numberClick(1)
    expect(wrapper.vm.runningTotal).to.equal(1)
  });

  it('should chain multiple operation together', () => {
    wrapper.vm.previousTotal = 15
    wrapper.vm.numberClick(5)
    wrapper.vm.previousOperator = "+"
    wrapper.vm.operatorClick("=")
    expect(wrapper.vm.previousTotal).to.equal(20)
    expect(wrapper.vm.newTotal).to.equal(true)
  });

  it('should chain multiple operation together', () => {
    wrapper.vm.previousTotal = 6
    wrapper.vm.numberClick(3)
    wrapper.vm.previousOperator = "*"
    wrapper.vm.operatorClick("=")
    expect(wrapper.vm.previousTotal).to.equal(18)
    expect(wrapper.vm.newTotal).to.equal(true)
  });
  
  it('should clear the running total without affecting calculation', () => {
    wrapper.vm.numberClick(3);
    wrapper.vm.operatorClick("*");
    wrapper.vm.numberClick(6);
    wrapper.vm.operatorClick("=");
    wrapper.vm.operatorClick("+");
    wrapper.vm.numberClick(1);
    wrapper.vm.clearClick();
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick("=");
    expect(wrapper.vm.runningTotal).to.equal(20);
  })
})

