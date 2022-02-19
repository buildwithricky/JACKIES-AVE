import React from 'react'
import { withRouter } from 'react-router-dom'
const MenuItem = ({title, imageUrl,size,history,linkUrl,match}) => {
    return (
        <div className={`${size} menu-item`}
        onClick={()=> 
            {
                history.push(`${match.url}${linkUrl}`)
                console.log(`${match.url} this is a match`)
        
        }}
        
        >
            <div className='background-image'
            
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            >
                
            </div>
                    <div className="content">
                        <h1 className="title">
                          {title.toUpperCase()}
                        </h1>
                        <span className="subtitle">
                                SHOP NOW
                                </span>
                    </div>
                </div>
    )
}

export default withRouter(MenuItem); //gives access to props of the components upper in the tree
