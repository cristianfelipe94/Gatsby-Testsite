/** 
 * Import React Component as a Template estructure to work with. 
*/
import React, {Component} from "react"

import styles from "../components/customeStyles.module.css"

import MaxOMaticFirstWork from "./MaxComponents/maxImg2"
import MaxOMaticSecondWork from "./MaxComponents/maxImg3"
import MaxOMaticThirdWork from "./MaxComponents/maxImg4"
import MaxOMaticFourthWork from "./MaxComponents/maxImg5"

import MaxOMaticFifthWork from "./MaxComponents/maxImg6"
import MaxOMaticSixthWork from "./MaxComponents/maxImg7"
import MaxOMaticSeventhWork from "./MaxComponents/maxImg8"
import MaxOMaticEighthWork from "./MaxComponents/maxImg9"

class ArtistMaxGallery extends Component {
    
    /** 
     * Constructor handles State and Functions.
     * Make sure to "Bind".
     * "State" is a reserved method that comes with imported React Component.
    */
    constructor(props) {
        super(props);
        this.state = {toggleSlider: true};
        this.scrollerSlider = this.scrollerSlider.bind(this);
    }

    /** 
     * After Constructor Create Functions that relate to Constructor's block.
     * "SetState" is a reserved method that comes with imported React Component.
    */
   scrollerSlider() {
    this.setState(previousState => ({
      toggleSlider: !previousState.toggleSlider
    }));
    console.log(this.state.toggleSlider);
   }

  /**
   * Render() method, to create Elements that are going to be into the DOM.
   */
  render() {
    return(
      <div style={{textAlign:`center`}}>
        <button onClick={this.scrollerSlider} className={styles.bntActionScroller}>
          Ver más
        </button>
        <div style= {{position: `relative`, overflow: `hidden`, height: `550px`}}>
          <div className={`${this.state.toggleSlider ? styles.portfolioBlocksDisplayFirstPage: styles.portfolioBlocksDisplaySecondPage}`}>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticFirstWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticSecondWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticThirdWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticFourthWork />
            </div>

            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticFifthWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticSixthWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticSeventhWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <MaxOMaticEighthWork />
            </div>
          </div>
        </div>
      </div>
    );
  }

    /**
   * () method, to create Elements that are going to be into the DOM.
   * Inside of the Render() method, it should be the Return() method.
   * Return() will give us back the complete element, with Methods and Styles.
   */
}

export default ArtistMaxGallery