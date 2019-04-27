/** 
 * Import React Component as a Template estructure to work with. 
*/
import React, {Component} from "react"

class ArtistGallery extends Component {
    
    /** 
     * Constructor handles State and Functions.
     * Make sure to "Bind".
     * "State" is a reserved method that comes with imported React Component.
    */
    constructor(artworkOne, artworkTwo, artworkThree, artworkFour, props) {
        super(props);
        this.artworkOne= artworkOne;
        this.artworkTwo= artworkTwo;
        this.artworkThree= artworkThree;
        this.artworkFour= artworkFour;
        this.state = {toggleSlider: false};
        this.scrollerSlider = this.scrollerSlider.bind(this);
    }

    /** 
     * After Constructor Create Functions that relate to Constructor's block.
     * "SetState" is a reserved method that comes with imported React Component.
    */
   scrollerSlider() {
       console.log(this.artworkOne,this.artworkTwo,this.artworkThree,this.artworkFour);
   }

  /**
   * Render() method, to create Elements that are going to be into the DOM.
   */
  render() {

    this.renderedArray = [
      this.artworkOne,
      this.artworkTwo,
      this.artworkThree,
      this.artworkFour,
    ]

    return(
      <div id={"container"}>
        <button onClick={this.scrollerSlider}>
          This is a Button Component. 
        </button>
      </div>
    );
  }

    /**
   * () method, to create Elements that are going to be into the DOM.
   * Inside of the Render() method, it should be the Return() method.
   * Return() will give us back the complete element, with Methods and Styles.
   */
}

export default ArtistGallery