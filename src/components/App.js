import Header from './header/Header';
import './index.css';
import image from './backgroundheader.jpeg'
import HeaderTitles from './header/HeaderTitles';


const App = () => {
  return (
    <div style={{height:'200rem'}} className='relative'>
        <HeaderTitles />
      <div className='-mt-20' style={{ backgroundImage: `url(${image})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', width:'100%', height:'50rem' }}>
        <Header />
      </div>
    </div>
  )
}

export default App