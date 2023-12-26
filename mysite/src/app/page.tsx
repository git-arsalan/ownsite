import Image from 'next/image'
import Hero from './components/Hero'
import Contact from './components/contact';
import Project from './components/project';


//import Navbar from '../../components/Navbar' // importing Navbar components from Components folder
export default function Home() {
  return (     
        <div>
       <Hero> </Hero>
       <Contact></Contact>
       <Project></Project>
       </div>
     );
}
