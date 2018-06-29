import Link from 'next/link'
import Navbar from '../components/Navbar'
import '../scss/style.scss'


const Index = () => (
<section>
  <Navbar />
  <h1>Hello world from Next.js</h1>
  <Link href='/about'>
    <a title='About NextJS' >About this project</a>
  </Link>
</section>
);

export default Index;
