import React from 'react'

import LeftSidebar from '../Components/leftSidebar/LeftSidebar'
import Feed from '../Components/feed/Feed'
import RightSidebar from '../Components/rightSidebar/RightSidebar'

import '../Styles/HomePage.css'

function HomePage() {
    return (
        <div style={{ display: "flex", flexDirection: 'row' }}>
            {/* left sideBar */}
            <LeftSidebar />
            <div className='homeRight'>
                {/* feed */}
                <Feed />

                {/* right sideBar */}
                <RightSidebar />
            </div>
        </div>
    )
}

export default HomePage