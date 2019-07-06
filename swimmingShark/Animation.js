"use strict";

/**
 * This class will be used to create an animation by holding an array of frames.
 */
class Animation{

    /**
     *
     * @param frames -an array that contains sources for pictures that make up an animation.
     */
    constructor(frames){

        this.frames = frames;

    }


    /**
     * Go through each element in the frames array and set the loadImage element (an HTML img element with an ID of 'loadImage") to have its source equal
     * to the current element in the frames array.
     */
    playAnimation(){

        let pos = 0; //element position

        let id = setInterval(animate, 100);

        /**
         * iterate through each element in the frames array and set the image source to be the current frame.
         */
        function animate(){
            if(pos > frames.length - 1) //if the last frame has been reached, go back to the beginning and start the animation over.
            {
                pos = 0;
            }

            document.getElementById("loadImage").src = frames[pos]; //set the image's source to be equal to the current element in the frames array

            pos++;

        }
    }






}