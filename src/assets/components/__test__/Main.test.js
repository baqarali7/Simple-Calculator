
import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';

import Main from '../../../pages/main';
import Screen from '../Screen';
import buttonPanel from '../ButtonsPanel';
import CalculatorBase from '../CalculatorBase';

it('Button render', () => {
  const div = document.createElement('div');
  ReactDom.render(<Button></Button>, div);
});

it('CalculatorBase render', () => {
  const div = document.createElement('div');
  ReactDom.render(<CalculatorBase screen={Screen} buttonPanel = {buttonPanel}  ></CalculatorBase>, div);
});

it('Main App render', () => {
  const div = document.createElement('div');
  ReactDom.render(<Main ></Main>, div);
});
