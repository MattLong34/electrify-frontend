import React from 'react'
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'
// import Resources from '../components/Resources'
// import FeaturedTrails from '../components/FeaturedTrails'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

import CAR from '../assets/CAR.svg'
import BackgroundOne from '../assets/BackgroundOne.svg'
import Van from '../assets/001-van.svg'

export default function Home() {
    return (
    <div>
        <h2>The world is surging forward. Are you?</h2>
        <img src={CAR} className="background" />
        {/* <img src={BackgroundOne} className="background" />
        <img src={Van} className="shake-vertical" /> */}
        {/* <div>
          <Button variant="outlined" color="primary" component={Link} to="/cars/">View Electric Cars</Button>
          <Button variant="outlined" color="primary" component={Link} to="/trucks/">View Electric Trucks</Button>
        </div> */}
        {/* <div>
        {[...new Array(20)]
            .map(
              () => `The world is surging forward. Are you? The world is surging forward. Are you? 
              The world is surging forward. Are you? The world is surging forward. Are you? 
              The world is surging forward. Are you? The world is surging forward. Are you? 
              The world is surging forward. Are you? The world is surging forward. Are you? `,
              )
              .join('\n')}
        </div> */}
    </div>
    )
}