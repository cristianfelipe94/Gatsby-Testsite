/** 
 * Import React Component as a Template estructure to work with. 
*/
import React, {Component} from "react"

import AlexTrochutFirstWork from "../components/AlexComponents/alexImg2"
import AlexTrochutSecondWork from "../components/AlexComponents/alexImg3"
import AlexTrochutThirdWork from "../components/AlexComponents/alexImg4"
import AlexTrochutFourthWork from "../components/AlexComponents/alexImg5"

import AlexTrochutFifthWork from "../components/AlexComponents/alexImg6"
import AlexTrochutSixthWork from "../components/AlexComponents/alexImg7"
import AlexTrochutSeventhWork from "../components/AlexComponents/alexImg8"
import AlexTrochutEighthWork from "../components/AlexComponents/alexImg9"

import styles from "../components/customeStyles.module.css"

class ArtistAlexGallery extends Component {
    
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
              <AlexTrochutFirstWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutSecondWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutThirdWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutFourthWork />
            </div>

            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutFifthWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutSixthWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutSeventhWork />
            </div>
            <div className={styles.polygonClipRhomboid}>
              <AlexTrochutEighthWork />
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

export default ArtistAlexGallery