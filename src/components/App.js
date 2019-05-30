import React from 'react';
// import AllCharacters from './AllCharacters';
import { getCharacters } from '../services/getCharacters';


export default function App() {
  console.log(getCharacters());
  return <AllCharacters />;
}
