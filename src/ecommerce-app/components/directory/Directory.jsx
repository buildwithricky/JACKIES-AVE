import React from 'react'
import directory from "../data/directory"
import MenuItem from '../menu-item/MenuItem';
class Directory extends React.Component {
   constructor(){
       super();
       
       this.state = {
           sections: directory
       }
       console.log(this.state.sections)
   }
 
    render(){
        return (
            <div className="directory-menu">
               
             {
                 this.state.sections.map((item)=>{
                     const {id, ...otherSectionProps } = item
                     return(
                         <MenuItem key={id} {...otherSectionProps}/>
                     )
                 })
             }
            </div>
        )
    }

}

export default Directory
