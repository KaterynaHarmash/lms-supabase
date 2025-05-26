import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  useEffect(() => {
    async function fetchRoles() {
      const { data, error } = await supabase.from('event_types').select('*');
      console.log('Types:', data, 'Error:', error);
    }
    fetchRoles();
  }, []);

  return <div>Hello LMS</div>;
}

export default App;
