import React from 'react'
// import Hero from '../components/Hero'
// import Banner from '../components/Banner'
// import {Link} from 'react-router-dom'
// import Resources from '../components/Resources'
// import FeaturedTrails from '../components/FeaturedTrails'

export default function Home() {
    return (
    <div>
        [home] The world is surging forward. Are you?

        {[...new Array(120)]
            .map(
              () => `The world is surging forward. Are you? The world is surging forward. Are you? 
              The world is surging forward. Are you? The world is surging forward. Are you? 
              The world is surging forward. Are you? The world is surging forward. Are you? 
              The world is surging forward. Are you? The world is surging forward. Are you? `,
            )
            .join('\n')}
    </div>
    )
}