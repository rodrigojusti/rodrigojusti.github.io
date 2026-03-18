import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { WorkProcess } from './components/WorkProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeFilter, setActiveFilter] = useState('todos');

  return (
    <div className="app">
      <Header />
      <Hero onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <main>
        <Products filter={activeFilter} />
        <About />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
