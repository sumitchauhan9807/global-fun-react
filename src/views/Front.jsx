import { Link } from 'react-router';
import ModelsGrid from 'src/components/ModelsGrid/Index';
import LiveModels from 'src/components/ModelsGrid/LIveModels';

import Header from 'src/components/common/Header'
import Sidebar from 'src/components/common/Sidebar'
import Footer from 'src/components/common/Footer'
import Page from 'src/views/LiveSession';
import FrontHeader from 'src/components/common/FrontHeader'

function Front(){ 
  return (
    <div>
    <div id="body">
      <div className="indexpage main-layout main-layout__with-navbar sticky-header-desktop sticky-header-mobile sticky-subheader-mobile">
        <div className="wrapper">
          <Header/>
          <FrontHeader/>
          <main id="app" className="main-layout-main main-layout-main-multiple-column">
            <Sidebar/>
            <div className="main-layout-main-right">
              <div className="main-layout-main-content">
                <div className="page-wrapper">
                  <div className="index-page index-page-multiple page page-columns">
                    <div className="model-list-wrapper multiple-categories-wrapper">
                      <div className="model-list-container">
                        <ModelsGrid/>
                        <LiveModels/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="sticky-bottom sticky-bottom__with-navbar sticky-bottom__with-navbar-ios-safe-space" />
          <div id="bs-actions-menu-portal-container" />
        </div>
          <Footer/>
      </div>
    </div>
  </div>
  )
}

export default Front