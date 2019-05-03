/** 
 * Import React Component as a Template estructure to work with. 
*/
import React, {Component} from "react"

import styles from "../components/customeStyles.module.css"

import PalomaFirstWork from "../components/PalomaComponents/palomaImg2"
import PalomaSecondWork from "../components/PalomaComponents/palomaImg3"
import PalomaThirdWork from "../components/PalomaComponents/palomaImg4"
import PalomaFourthWork from "../components/PalomaComponents/palomaImg5"

import PalomaFifthWork from "../components/PalomaComponents/palomaImg6"
import PalomaSixthWork from "../components/PalomaComponents/palomaImg7"
import PalomaSeventhWork from "../components/PalomaComponents/palomaImg8"
import PalomaEighthWork from "../components/PalomaComponents/palomaImg9"

class ArtistPalomaGallery extends Component {
    
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
              <PalomaFirstWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <PalomaSecondWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <PalomaThirdWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <PalomaFourthWork />
            </div>

            <div className={styles.polygonClipRhomboid}>
              <PalomaFifthWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <PalomaSixthWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <PalomaSeventhWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <PalomaEighthWork />
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

export default ArtistPalomaGallery