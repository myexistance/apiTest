import { render, screen } from '@testing-library/react';
import App from './App';
import Axios from "axios";


Axios.get("https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false").then((res) => {
  setName(res.data.Name);
});

test('name equals badges', () => {
  expect(res.data.Name).toEqual("Badges");
});
