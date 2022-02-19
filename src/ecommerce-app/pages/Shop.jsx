import React from "react"
import ShopData from "../components/data/collections"
import PreviewCollection from "../components/preview-collection/PreviewCollection";
class ShopPage extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state ={
            collection:ShopData
        }
        
        
    }
    render(){
        const {collection} = this.state
        return (
            <div>
              {collection.map(({id,...otherCollectionProps})=>{
                  
                  return(
                      <PreviewCollection key={id} {...otherCollectionProps}/>
                  )
                  
              })}
            </div>
        )
    }
}

export default ShopPage