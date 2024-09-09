import '../App.css';

import Carousel from './Carousel.component.jsx';

function Portfolio() {

    return (
        <>
            <div className='portfolioRow'>
                <h1 className='portfolioTitle'>Projects</h1>
                <Carousel />
            </div>
        </>
    )
}

export default Portfolio;