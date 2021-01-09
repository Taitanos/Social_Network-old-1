import React from 'react';
import './App.css';

const App = () => {
  return (
      <div className='app-wrapper'>
        <header className='header'>
          <img src="https://s1.logaster.com/static/v3/img/products/logo.png"/>
        </header>
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Setting</a>
            </div>
        </nav>
        <div className='content'>
           <div>
               <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg' />
            </div>
            <div>
                ava
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default App;
