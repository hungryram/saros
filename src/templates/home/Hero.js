import * as React from "react"
import * as Styles from "../../styles/home.module.css"

export default function Hero() {
    return (
        <div>
            <ul className="uk-slideshow-items uk-viewport-height">
            <li>
            <div class="uk-position-cover uk-transform-origin-center-left">
                <img src="" alt="" data-uk-cover />
                <div class="hero-overlay uk-position-cover"></div>
            </div>
            <div class="uk-position-center uk-position-small uk-text-center">
                <div class="uk-width-2xlarge uk-transition-slide-bottom-small">

                </div>
            </div>
        </li>
            </ul>
        </div>
    )
}