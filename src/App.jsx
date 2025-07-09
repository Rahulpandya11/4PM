import React from "react";

function App() {
  return (
    <>
      <div class="page-wrapper"><div class="cursor_wrapper"><div class="cursor"><div class="arrow-1 w-embed"><svg fill="none" height="24" viewbox="0 0 29 24" width="29" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3875 10.8791L17.9693 0.460636C17.6719 0.16324 17.2755 0 16.8529 0C16.4298 0 16.0336 0.163474 15.7362 0.460636L14.7903 1.40677C14.4932 1.7037 14.3295 2.1003 14.3295 2.52318C14.3295 2.94582 14.4932 3.3558 14.7903 3.65272L20.8682 9.74396H1.55852C0.687906 9.74396 0 10.4255 0 11.2964V12.634C0 13.5048 0.687906 14.2551 1.55852 14.2551H20.9371L14.7906 20.3803C14.4934 20.6777 14.3297 21.0636 14.3297 21.4864C14.3297 21.9088 14.4934 22.3003 14.7906 22.5975L15.7365 23.5405C16.0339 23.8379 16.43 24 16.8531 24C17.2757 24 17.6721 23.8358 17.9695 23.5384L28.3878 13.1202C28.6859 12.8218 28.8498 12.4236 28.8486 12.0002C28.8496 11.5755 28.6859 11.177 28.3875 10.8791Z" fill="currentColor"></path>
</svg>
<style>
.cursor_wrapper {
pointer-events: none;
}
</style></div><div class="arrow-2 w-embed"><svg fill="none" height="24" viewbox="0 0 29 24" width="29" xmlns="http://www.w3.org/2000/svg">
<path d="M0.461093 13.1209L10.8794 23.5394C11.1768 23.8368 11.5731 24 11.9958 24C12.4189 24 12.815 23.8365 13.1124 23.5394L14.0583 22.5932C14.3555 22.2963 14.5192 21.8997 14.5192 21.4768C14.5192 21.0542 14.3555 20.6442 14.0583 20.3473L7.98044 14.256L27.2901 14.256C28.1607 14.256 28.8486 13.5745 28.8486 12.7036L28.8486 11.366C28.8486 10.4952 28.1607 9.7449 27.2901 9.7449L7.91149 9.7449L14.0581 3.61965C14.3552 3.32226 14.5189 2.93644 14.5189 2.51356C14.5189 2.09116 14.3552 1.69971 14.0581 1.40255L13.1122 0.459462C12.8148 0.162065 12.4186 -1.88715e-06 11.9955 -1.92413e-06C11.5729 -1.96108e-06 11.1765 0.164175 10.8791 0.461571L0.460859 10.8798C0.162758 11.1782 -0.00118412 11.5764 -1.14539e-05 11.9998C-0.000949651 12.4245 0.162758 12.823 0.461093 13.1209Z" fill="currentColor"></path>
</svg></div></div></div><div class="global-styles w-embed"><style>

/* Make text look crisper and more legible in all browsers */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Focus state style for keyboard navigation for the focusable elements */
*[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
   outline: 0.125rem solid #4d65ff;
   outline-offset: 0.125rem;
}

/* Get rid of top margin on first element in any rich text element */
.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {
  margin-top: 0 !important;
}

/* Get rid of bottom margin on last element in any rich text element */
.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {
	margin-bottom: 0 !important;
}

/* Prevent all click and hover interaction with an element */
.pointer-events-off {
	pointer-events: none;
}

/* Enables all click and hover interaction with an element */
.pointer-events-on {
  pointer-events: auto;
}

/* Create a class of .div-square which maintains a 1:1 dimension of a div */
.div-square::after {
	content: "";
	display: block;
	padding-bottom: 100%;
}

/* Make sure containers never lose their center alignment */
.container-medium,.container-small, .container-large {
	margin-right: auto !important;
  margin-left: auto !important;
}

/* 
Make the following elements inherit typography styles from the parent and not have hardcoded values. 
Important: You will not be able to style for example "All Links" in Designer with this CSS applied.
Uncomment this CSS to use it in the project. Leave this message for future hand-off.
*/
/*
a,
.w-input,
.w-select,
.w-tab-link,
.w-nav-link,
.w-dropdown-btn,
.w-dropdown-toggle,
.w-dropdown-link {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}
*/

/* Apply "..." after 3 lines of text */
.text-style-3lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

/* Apply "..." after 2 lines of text */
.text-style-2lines {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

/* Adds inline flex display */
.display-inlineflex {
  display: inline-flex;
}

/* These classes are never overwritten */
.hide {
  display: none !important;
}

@media screen and (max-width: 991px) {
    .hide, .hide-tablet {
        display: none !important;
    }
}
  @media screen and (max-width: 767px) {
    .hide-mobile-landscape{
      display: none !important;
    }
}
  @media screen and (max-width: 479px) {
    .hide-mobile{
      display: none !important;
    }
}
 
.margin-0 {
  margin: 0rem !important;
}
  
.padding-0 {
  padding: 0rem !important;
}

.spacing-clean {
padding: 0rem !important;
margin: 0rem !important;
}

.margin-top {
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}

.padding-top {
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}
  
.margin-right {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
  margin-left: 0rem !important;
}

.padding-right {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
  padding-left: 0rem !important;
}

.margin-bottom {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}

.padding-bottom {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}

.margin-left {
  margin-top: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 0rem !important;
}
  
.padding-left {
  padding-top: 0rem !important;
  padding-right: 0rem !important;
  padding-bottom: 0rem !important;
}
  
.margin-horizontal {
  margin-top: 0rem !important;
  margin-bottom: 0rem !important;
}

.padding-horizontal {
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}

.margin-vertical {
  margin-right: 0rem !important;
  margin-left: 0rem !important;
}
  
.padding-vertical {
  padding-right: 0rem !important;
  padding-left: 0rem !important;
}

.services_service-content:last-child {
margin-bottom: 0;
}

.about_talent-row {
  will-change: transform;
  animation: marquee-horizontal 40s linear infinite;
  /* manipulate the speed of the marquee by changing "40s" line above*/
}

@keyframes marquee-horizontal {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media only screen and (min-width: 992px) {
  .about_talent-row:hover {
    animation-play-state: paused;
  }
}

.about_talent-row-reverse {
  will-change: transform;
  animation: marquee-reverse 40s linear infinite;
  /* manipulate the speed of the marquee by changing "40s" line above*/
}

@keyframes marquee-reverse {
  from { transform: translateX(0); }
  to { transform: translateX(50%); }
}

@media only screen and (min-width: 992px) {
  .about_talent-row-reverse:hover {
    animation-play-state: paused;
  }
}
</style></div><div class="navbar w-nav" data-animation="default" data-collapse="none" data-duration="400" data-easing="ease" data-easing2="ease" role="banner"><div class="padding-global"><div class="container-large"><div class="navbar_component"><a aria-current="page" class="nav_logo w-nav-brand w--current" href="/"><img alt="Logo Goodbrand" loading="lazy" src="images/642310daa3b521638aa4719d_logo-goodbrand.svg"/></a><nav class="nav_menu w-nav-menu" role="navigation"><a class="nav_link w-inline-block" href="/services"><div>services</div><div class="underline_hover"></div></a><a class="nav_link w-inline-block" href="/about"><div>about</div><div class="underline_hover"></div></a><a class="nav_link w-inline-block" href="/contact"><div>contact</div><div class="underline_hover"></div></a><a class="nav_link w-inline-block" href="/blog"><div>Blog</div><div class="underline_hover"></div></a></nav><div class="nav_toggle" data-w-id="366fffae-d8b0-d4f1-dd39-8babd0c061ca"><div class="nav_toggle-line"></div><div class="nav_toggle-line last"></div></div><div class="hide-tablet"><a class="nav_link w-inline-block" href="/contact"><div>let’s grow</div><div class="underline"></div><div class="underline_hover"></div></a></div></div></div></div></div><div class="nav_mobile-wrapper"><div class="nav_mobile-menu"><a class="nav_link w-inline-block" href="/services"><div>services</div><div class="underline_hover"></div></a><a class="nav_link w-inline-block" href="/about"><div>about</div><div class="underline_hover"></div></a><a class="nav_link w-inline-block" href="/blog"><div>Blog</div><div class="underline_hover"></div></a><a class="nav_link w-inline-block" href="/contact"><div>contact</div><div class="underline_hover"></div></a></div><a class="button is-mobile w-button" href="/contact">Let's grow</a></div><main class="main-wrapper"><div class="section_header"><div class="padding-global"><div class="container-large"><div class="header_component"><div class="scroll_wrapper"><div class="scroll_text">Scroll</div><div class="scroll-down-loop-wrap"><div class="scroll-down-loop"></div></div></div><div class="label_rotation" data-w-id="6e5dfdb9-abc4-aafa-e28a-b65712ab5560" style="opacity:0"><img alt="" class="label_text" loading="lazy" src="images/642310daa3b52189b7a47194_label-round.svg"/><div class="label_gb w-embed"><svg fill="none" height="32" viewbox="0 0 41 32" width="41" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2758 5.16242C16.384 6.36595 16.9951 7.94796 16.985 9.58751C16.985 13.2353 13.7387 16.1515 9.65296 16.1515C8.1748 16.1657 6.72238 15.7626 5.46108 14.9881C4.58629 15.7298 4.03007 16.6392 4.03007 17.4115C4.03007 18.4276 4.8644 19.0982 6.08809 19.0982H14.7045C17.3591 19.0982 19.2149 20.3581 19.2149 22.6088C19.2149 27.1812 12.7172 31.2456 7.72135 31.2456C3.3171 31.2456 0 29.2439 0 26.5766C0 24.7883 1.92149 23.4166 4.15649 22.8222V22.5072C2.5839 21.9991 1.62821 20.8916 1.62821 19.4589C1.62821 17.9347 2.88223 16.37 5.0161 14.7544C4.15955 14.1939 3.45328 13.4305 2.95949 12.5312C2.4657 11.632 2.19953 10.6246 2.18443 9.59768C2.18443 5.80764 5.47119 2.82031 9.62768 2.82031C13.7842 2.82031 15.2758 5.16242 15.2758 5.16242ZM17.4754 24.7121C17.4754 23.5182 16.6715 22.8171 14.8915 22.8171H6.56846C4.54584 22.8171 3.42329 23.8687 3.42329 25.271C3.42329 27.4861 6.25495 29.1321 10.2345 29.061C14.4263 28.995 17.4653 27.0644 17.4653 24.7121M12.9599 9.5926C12.9599 5.69587 11.7009 3.37917 9.64284 3.37917C7.47358 3.37917 6.17405 5.67046 6.17405 9.5926C6.17405 13.3471 7.46347 15.5926 9.63273 15.5926C11.6907 15.5926 12.9498 13.4182 12.9498 9.5926" fill="currentColor"></path>
<path d="M13.4287 4.91341C13.9344 3.01331 14.9457 0.955718 16.6649 0.254611C18.1212 -0.339805 19.4612 0.13776 19.9618 1.36216C20.3966 2.4443 20.0225 3.45023 19.092 3.83127C17.3728 4.5273 16.402 2.54083 15.2693 3.00315C14.4249 3.34863 13.9748 4.58826 13.722 5.645" fill="#6100FF"></path>
<path d="M22.0304 31.9995V6.59714L19.583 5.58104L26.1869 2.66992V16.2043C28.073 14.9088 30.6922 13.1865 32.5075 13.1865C36.9775 13.1865 40.0165 16.8038 40.0165 22.0672C40.0165 27.8945 36.4213 31.9995 30.7276 31.9995C28.5538 31.9867 26.4302 31.3408 24.6143 30.1401L22.0304 31.9995ZM36.214 23.2967C36.214 18.5261 33.8728 15.2238 30.7681 15.2238C29.7163 15.2238 28.3561 15.8538 26.8189 16.7479V26.5279C27.1678 29.5762 29.1247 31.4356 31.3951 31.4356C34.2571 31.4356 36.214 28.0673 36.214 23.3068" fill="currentColor"></path>
</svg></div></div><div class="header_heading-component" data-w-id="7c8afe0d-a9bf-61eb-dd05-d3b9587549a0" style="opacity:0"><h1 class="header_heading">Create the <span class="header_heading-italic">growth</span><br/> your company is</h1><div class="header_heading-mark"><h1 class="header_heading-italic">capable of.</h1><img alt="" loading="lazy" src="images/642310daa3b52127b6a47193_header_mark-text.svg"/></div></div><div class="w-layout-grid header_text-grid"><div id="w-node-f198370c-27be-60da-7ba5-0ec7adc1977b-f5a47174"><p id="w-node-bddfc2e7-1f0b-1eba-28e4-77f04009547e-f5a47174" text-split="" words-slide-from-right="">We are Goodbrand, a full-service marketing agency based in Austin. We work with believers &amp; big dreamers to help them achieve their vision.</p><div class="padding-bottom padding-large" id="w-node-_720981df-a110-d5fd-3a73-46972e578a00-f5a47174"></div><div class="button-group"><a class="button is-cta w-inline-block" href="/contact" style="background-color:rgb(97,0,255)"><div class="text-size-regular">Let's grow</div><div class="button_cta-arrow w-embed"><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666308 17.4221C0.138574 17.9498 0.138574 18.8055 0.666308 19.3332C1.19404 19.8609 2.04968 19.8609 2.57741 19.3332L0.666308 17.4221ZM19.73 1.62088C19.73 0.874553 19.1249 0.269531 18.3786 0.269531H6.21645C5.47013 0.269531 4.8651 0.874553 4.8651 1.62088C4.8651 2.36721 5.47013 2.97223 6.21645 2.97223H17.0273V13.783C17.0273 14.5294 17.6323 15.1344 18.3786 15.1344C19.1249 15.1344 19.73 14.5294 19.73 13.783V1.62088ZM2.57741 19.3332L19.3342 2.57643L17.423 0.665331L0.666308 17.4221L2.57741 19.3332Z" fill="currentColor"></path>
</svg></div></a><a class="link_underline w-inline-block" href="mailto:farris@goodbrand.io"><div>book a meeting</div><div class="underline"></div><div class="underline_hover"></div></a></div></div></div></div><div class="header_logos-component"><div class="logos_wrapper"><div class="logos_loop"><img alt="" loading="lazy" src="images/642310daa3b5218c4fa471ae_ATOM.svg"/><img alt="" loading="lazy" src="images/642310daa3b5219a22a471af_Cognizant.svg"/><img alt="" loading="lazy" src="images/642310daa3b521685ba471c7_Index%20Pro.svg"/><img alt="" loading="lazy" src="images/642310daa3b5212944a471b3_M%20Science.svg"/><img alt="" loading="lazy" src="images/642310daa3b52157b0a471b0_Maiden%20Century.svg"/><img alt="" loading="lazy" src="images/642310daa3b521ae68a471b2_Northeastern%20University.svg"/><img alt="" loading="lazy" src="images/642310daa3b52179c9a471c6_Sundial.svg"/><img alt="" loading="lazy" src="images/642310daa3b5211168a471b1_Viva%20Eve.svg"/></div><div class="logos_loop"><img alt="" loading="lazy" src="images/642310daa3b5218c4fa471ae_ATOM.svg"/><img alt="" loading="lazy" src="images/642310daa3b5219a22a471af_Cognizant.svg"/><img alt="" loading="lazy" src="images/642310daa3b521685ba471c7_Index%20Pro.svg"/><img alt="" loading="lazy" src="images/642310daa3b5212944a471b3_M%20Science.svg"/><img alt="" loading="lazy" src="images/642310daa3b52157b0a471b0_Maiden%20Century.svg"/><img alt="" loading="lazy" src="images/642310daa3b521ae68a471b2_Northeastern%20University.svg"/><img alt="" loading="lazy" src="images/642310daa3b52179c9a471c6_Sundial.svg"/><img alt="" loading="lazy" src="images/642310daa3b5211168a471b1_Viva%20Eve.svg"/></div><div class="logos_loop"><img alt="" loading="lazy" src="images/642310daa3b5218c4fa471ae_ATOM.svg"/><img alt="" loading="lazy" src="images/642310daa3b5219a22a471af_Cognizant.svg"/><img alt="" loading="lazy" src="images/642310daa3b521685ba471c7_Index%20Pro.svg"/><img alt="" loading="lazy" src="images/642310daa3b5212944a471b3_M%20Science.svg"/><img alt="" loading="lazy" src="images/642310daa3b52157b0a471b0_Maiden%20Century.svg"/><img alt="" loading="lazy" src="images/642310daa3b521ae68a471b2_Northeastern%20University.svg"/><img alt="" loading="lazy" src="images/642310daa3b52179c9a471c6_Sundial.svg"/><img alt="" loading="lazy" src="images/642310daa3b5211168a471b1_Viva%20Eve.svg"/></div></div></div></div></div></div><div class="section_growth"><div class="padding-global"><div class="container-large"><div class="growth_component"><h2 letters-slide-down="" text-split="">We help ambitious companies meet &amp; exceed their <span class="heading-style-h2-italic">growth goals.</span></h2></div><div class="w-layout-grid growth_grid"><div id="w-node-_91b39279-9f06-d98d-1f52-e4f1cf5c7ce7-f5a47174"><div class="heading-style-h1 text-weight-bold">63<span class="heading-style-h2 text-weight-bold">%</span></div><div class="padding-bottom padding-custom1"></div><p>Blogs are 63% more likely to influence purchase decisions than ads.</p></div><div id="w-node-ec021a1e-46b6-8897-a008-938e627f0a71-f5a47174"><div class="heading-style-h1 text-weight-bold">20x</div><div class="padding-bottom padding-custom1"></div><p>For every $1 businesses invest in design, they can expect over $20 in return through revenue.</p></div><div id="w-node-_6413dd54-e3ce-3131-3aae-9778bacf9051-f5a47174"><div class="heading-style-h1 text-weight-bold">72<span class="heading-style-h2 text-weight-bold">%</span></div><div class="padding-bottom padding-custom1"></div><p>Of clients experienced an increase in lead volume within 90 days.</p></div></div><div class="padding-vertical padding-xhuge"><div class="line" data-w-id="629f6e7f-81b5-ab62-9701-5396f9d8ac8e" style="width:0%"></div></div></div></div></div><div class="section_funnel"><div class="padding-global"><div class="container-large"><h2 class="text-align-center">Our Marketing Services are purpose-built around your <span class="heading-style-h2-italic">funnel</span>, to help you create sustainable, predictable <span class="heading-style-h2-italic">growth.</span></h2><div class="padding-bottom padding-xxlarge"></div><div class="w-layout-grid funnel_grid"><div class="funnel_card _01" data-w-id="1f775110-618d-eab1-f88a-1c2a02bd7760" id="w-node-_1f775110-618d-eab1-f88a-1c2a02bd7760-9bc5ae42"><div class="text-size-regular text-weight-bold">01</div><div class="padding-vertical padding-small"><div class="text-size-regular text-weight-bold">ATTRACT CUSTOMERS</div></div><p class="text-size-small">Attract more visitors to your website and use proven strategies to convert visitors into qualified leads and delighted customers.</p></div><div class="funnel_card _02" data-w-id="5869257d-8939-7bbe-0978-d6be3b7cbc46" id="w-node-_5869257d-8939-7bbe-0978-d6be3b7cbc46-9bc5ae42"><div class="text-size-regular text-weight-bold">02</div><div class="padding-vertical padding-small"><div class="text-size-regular text-weight-bold">ENGAGE PROSPECTS</div></div><p class="text-size-small">Engage your contacts and visitors with interactive and high performance content, email marketing campaigns, and webinars.</p></div><div class="funnel_card _03" data-w-id="54f10b61-2aae-48db-43cf-607578a33473" id="w-node-_54f10b61-2aae-48db-43cf-607578a33473-9bc5ae42"><div class="text-size-regular text-weight-bold">03</div><div class="padding-vertical padding-small"><div class="text-size-regular text-weight-bold">CONVERT CLIENTS</div></div><p class="text-size-small">Use advanced marketing predictive analytics to score and convert the right prospects, at precisly the right time.</p></div><div class="funnel_card _04" data-w-id="8a39f348-f64b-fa19-bc48-0dccf70094e4" id="w-node-_8a39f348-f64b-fa19-bc48-0dccf70094e4-9bc5ae42"><div class="text-size-regular text-weight-bold">04</div><div class="padding-vertical padding-small"><div class="text-size-regular text-weight-bold">RETAIN CLIENTS</div></div><p class="text-size-small">Keeping your customers happy goes beyond just your product. Engage your customers through various other channels.</p></div></div><div class="padding-bottom padding-large"></div><div class="funnel_01" data-animation-type="lottie" data-autoplay="0" data-default-duration="0.6666666666666666" data-direction="1" data-duration="0" data-is-ix2-target="1" data-loop="0" data-renderer="svg" data-src="https://cdn.prod.website-files.com/642310daa3b5216f73a47172/642310daa3b52154a8a471ca_funnel-01.lottie" data-w-id="dae20542-e408-66bf-3b1c-eb87b7210041"></div><div class="funnel_02" data-animation-type="lottie" data-autoplay="0" data-default-duration="0.75" data-direction="1" data-duration="0" data-is-ix2-target="1" data-loop="0" data-renderer="svg" data-src="https://cdn.prod.website-files.com/642310daa3b5216f73a47172/642310daa3b5211ed7a471cc_funnel-02.lottie" data-w-id="0f788632-691d-3f39-43cf-d28c547689bd"></div><div class="funnel_03" data-animation-type="lottie" data-autoplay="0" data-default-duration="0.6666666666666666" data-direction="1" data-duration="0" data-is-ix2-target="1" data-loop="0" data-renderer="svg" data-src="https://cdn.prod.website-files.com/642310daa3b5216f73a47172/642310daa3b5218476a471c9_funnel-03.lottie" data-w-id="f29c3539-a2ce-1c6d-8877-9ae4145dea94"></div><div class="funnel_04" data-animation-type="lottie" data-autoplay="0" data-default-duration="0.6666666666666666" data-direction="1" data-duration="0" data-is-ix2-target="1" data-loop="0" data-renderer="svg" data-src="https://cdn.prod.website-files.com/642310daa3b5216f73a47172/642310daa3b521551aa471cb_funnel-04.lottie" data-w-id="3b51575a-3bd2-4e08-5bc4-48f7fffdc637"></div></div></div></div><div class="section_home-services"><div class="padding-global"><div class="container-large"><div class="w-layout-grid home_services_heading"><div class="text-style-allcaps" id="w-node-_694ec0ef-a3db-4a5b-61ef-8bc2a74e0159-f5a47174">Services</div><div id="w-node-_177171d8-b0c2-e280-79f7-4b007a325f7e-f5a47174"><h2>Conception to scale,<br/>we cover the entire <span class="heading-style-h2-italic" letters-slide-down="" text-split="">growth journey</span></h2><div class="padding-bottom padding-xlarge"></div><div class="max-width-large"><p class="text-size-medium text-weight-normal" text-split="" words-slide-from-right="">Whether you're just building out your marketing or looking to explore new strategies, we have the toolkits and experience to help you grow your business.</p></div></div></div><div class="w-layout-grid home_services_grid"><div class="home_services_heading-services" id="w-node-_002b3b34-b4b7-6d4e-a224-073466df18b5-f5a47174"><div class="home_services_link">Branding &amp; Design</div></div><div class="home_services_services-component w-node-_82231bbe-a517-166b-9eec-6ff70e3c915a-f5a47174" id="design"><a class="home_services_link is-mobile" href="#">Branding &amp; Design</a><div class="home_services_services"><div>Branding</div><div>Creative</div><div>UI/UX Design</div><div>Video</div><div>Web Design</div><div>Photography</div></div><a class="button is-arrow w-inline-block" href="/services"><div class="button_cta-arrow w-embed"><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666308 17.4221C0.138574 17.9498 0.138574 18.8055 0.666308 19.3332C1.19404 19.8609 2.04968 19.8609 2.57741 19.3332L0.666308 17.4221ZM19.73 1.62088C19.73 0.874553 19.1249 0.269531 18.3786 0.269531H6.21645C5.47013 0.269531 4.8651 0.874553 4.8651 1.62088C4.8651 2.36721 5.47013 2.97223 6.21645 2.97223H17.0273V13.783C17.0273 14.5294 17.6323 15.1344 18.3786 15.1344C19.1249 15.1344 19.73 14.5294 19.73 13.783V1.62088ZM2.57741 19.3332L19.3342 2.57643L17.423 0.665331L0.666308 17.4221L2.57741 19.3332Z" fill="currentColor"></path>
</svg></div></a></div></div><div class="w-layout-grid home_services_grid"><div class="home_services_heading-services" id="w-node-_300ccf8c-7fb2-4a70-b8fd-ce65ccaba94e-f5a47174"><div class="home_services_link">Marketing Ops</div></div><div class="home_services_services-component" id="marketing"><a class="home_services_link is-mobile" href="#">Marketing Ops</a><div class="home_services_services"><div>Marketing Automation</div><div>Database Management</div><div>MarTech Consulting</div><div>WordPress</div></div><a class="button is-arrow w-inline-block" href="/services"><div class="button_cta-arrow w-embed"><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666308 17.4221C0.138574 17.9498 0.138574 18.8055 0.666308 19.3332C1.19404 19.8609 2.04968 19.8609 2.57741 19.3332L0.666308 17.4221ZM19.73 1.62088C19.73 0.874553 19.1249 0.269531 18.3786 0.269531H6.21645C5.47013 0.269531 4.8651 0.874553 4.8651 1.62088C4.8651 2.36721 5.47013 2.97223 6.21645 2.97223H17.0273V13.783C17.0273 14.5294 17.6323 15.1344 18.3786 15.1344C19.1249 15.1344 19.73 14.5294 19.73 13.783V1.62088ZM2.57741 19.3332L19.3342 2.57643L17.423 0.665331L0.666308 17.4221L2.57741 19.3332Z" fill="currentColor"></path>
</svg></div></a></div></div><div class="w-layout-grid home_services_grid"><div class="home_services_heading-services" id="w-node-_2bafeabc-f6bb-afb5-369e-fbc5f6fdce97-f5a47174"><div class="home_services_link">Strategy &amp; Growth</div></div><div class="home_services_services-component" id="strategy"><a class="home_services_link is-mobile" href="#">Strategy &amp; Growth</a><div class="home_services_services"><div>Strategy Development</div><div>Strategy Implementation</div><div>Campaign Management</div><div>Account Based Marketing</div><div>Content Marketing</div></div><a class="button is-arrow w-inline-block" href="/services"><div class="button_cta-arrow w-embed"><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666308 17.4221C0.138574 17.9498 0.138574 18.8055 0.666308 19.3332C1.19404 19.8609 2.04968 19.8609 2.57741 19.3332L0.666308 17.4221ZM19.73 1.62088C19.73 0.874553 19.1249 0.269531 18.3786 0.269531H6.21645C5.47013 0.269531 4.8651 0.874553 4.8651 1.62088C4.8651 2.36721 5.47013 2.97223 6.21645 2.97223H17.0273V13.783C17.0273 14.5294 17.6323 15.1344 18.3786 15.1344C19.1249 15.1344 19.73 14.5294 19.73 13.783V1.62088ZM2.57741 19.3332L19.3342 2.57643L17.423 0.665331L0.666308 17.4221L2.57741 19.3332Z" fill="currentColor"></path>
</svg></div></a></div></div></div></div></div><div class="section_about-photo"><img alt="" class="about_photo" data-w-id="2d98e75f-d980-51e1-5e71-58b7a4a153d4" loading="lazy" sizes="100vw" src="images/642310daa3b521e92fa471a0_about-goodbrand.jpg" srcset="images/642310daa3b521e92fa471a0_about-goodbrand-p-500.jpg 500w, images/642310daa3b521e92fa471a0_about-goodbrand-p-800.jpg 800w, images/642310daa3b521e92fa471a0_about-goodbrand-p-1080.jpg 1080w, images/642310daa3b521e92fa471a0_about-goodbrand-p-1600.jpg 1600w, images/642310daa3b521e92fa471a0_about-goodbrand.jpg 1920w"/></div><div class="section_home-blog"><div class="padding-global"><div class="container-large"><div class="home-blog_component"><div class="max-width-large"><h2 class="heading-style-h4">Insights and lessons about marketing, digital strategy, growth, SEO, product, and more.</h2></div><div class="hide-tablet"><a class="link_underline w-inline-block" href="/blog"><div>See all posts</div><div class="underline"></div><div class="underline_hover"></div></a></div></div><div class="padding-bottom padding-xlarge"></div><div class="w-dyn-list"><div class="blog_grid w-dyn-items" role="list"><div class="w-dyn-item" role="listitem"><div class="blog_card"><a class="blog_image-wrapper w-inline-block" data-w-id="a4268922-fbd0-b616-174c-ccd42e61a517" href="/blog/top-mistakes-organizations-make-in-b2b-marketing-part-one"><img alt="" class="blog_image" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 44vw, 28vw" src="images/642310daa3b5211154a47186_final-four.jpg" srcset="images/642310daa3b5211154a47186_final-four-p-500.jpg 500w, images/642310daa3b5211154a47186_final-four-p-800.jpg 800w, images/642310daa3b5211154a47186_final-four-p-1080.jpg 1080w, images/642310daa3b5211154a47186_final-four.jpg 1128w"/></a><div class="blog_content" id="w-node-a4268922-fbd0-b616-174c-ccd42e61a519-f5a47174"><div class="blog-card_content-info"><a class="link_underline is-category w-inline-block" href="/category/digital-marketing"><div> Digital Marketing</div><div class="underline_hover is-blue"></div></a><div class="display-inlineflex"><div class="icon w-embed"><svg fill="none" height="14" viewbox="0 0 19 14" width="19" xmlns="http://www.w3.org/2000/svg">
<path d="M0.875 6.99993C0.875 6.99993 3.96591 0.818115 9.375 0.818115C14.7841 0.818115 17.875 6.99993 17.875 6.99993C17.875 6.99993 14.7841 13.1818 9.375 13.1818C3.96591 13.1818 0.875 6.99993 0.875 6.99993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M9.37482 9.318C10.6551 9.318 11.693 8.28012 11.693 6.99982C11.693 5.71953 10.6551 4.68164 9.37482 4.68164C8.09453 4.68164 7.05664 5.71953 7.05664 6.99982C7.05664 8.28012 8.09453 9.318 9.37482 9.318Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></div><div class="padding-right padding-xsmall"></div><div>7</div><div> min</div></div></div><div class="padding-vertical padding-small"><a class="blog_card-heading" href="/blog/top-mistakes-organizations-make-in-b2b-marketing-part-one">Top Mistakes Organizations Make in B2B Marketing: Part One</a></div><p class="text-size-small text-color-grey">Marketing to other businesses takes a nuanced approach, and long-term thinking is critical for success.</p><div class="padding-bottom padding-small"></div><div class="blog_author">Farris Qunibi</div></div></div></div><div class="w-dyn-item" role="listitem"><div class="blog_card"><a class="blog_image-wrapper w-inline-block" data-w-id="a4268922-fbd0-b616-174c-ccd42e61a517" href="/blog/ducimus-quo-repellat"><img alt="" class="blog_image" loading="lazy" src="images/640770c864548ca6b3044918_image12.jpeg"/></a><div class="blog_content" id="w-node-a4268922-fbd0-b616-174c-ccd42e61a519-f5a47174"><div class="blog-card_content-info"><a class="link_underline is-category w-inline-block" href="/category/digital-strategy"><div>Digital Strategy</div><div class="underline_hover is-blue"></div></a><div class="display-inlineflex"><div class="icon w-embed"><svg fill="none" height="14" viewbox="0 0 19 14" width="19" xmlns="http://www.w3.org/2000/svg">
<path d="M0.875 6.99993C0.875 6.99993 3.96591 0.818115 9.375 0.818115C14.7841 0.818115 17.875 6.99993 17.875 6.99993C17.875 6.99993 14.7841 13.1818 9.375 13.1818C3.96591 13.1818 0.875 6.99993 0.875 6.99993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M9.37482 9.318C10.6551 9.318 11.693 8.28012 11.693 6.99982C11.693 5.71953 10.6551 4.68164 9.37482 4.68164C8.09453 4.68164 7.05664 5.71953 7.05664 6.99982C7.05664 8.28012 8.09453 9.318 9.37482 9.318Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></div><div class="padding-right padding-xsmall"></div><div>5</div><div> min</div></div></div><div class="padding-vertical padding-small"><a class="blog_card-heading" href="/blog/ducimus-quo-repellat">What is customer service and why is it important?</a></div><p class="text-size-small text-color-grey">Officiis neque harum nostrum occaecati eaque est error quo vel.</p><div class="padding-bottom padding-small"></div><div class="blog_author">Farris Qunibi</div></div></div></div><div class="w-dyn-item" role="listitem"><div class="blog_card"><a class="blog_image-wrapper w-inline-block" data-w-id="a4268922-fbd0-b616-174c-ccd42e61a517" href="/blog/illo"><img alt="" class="blog_image" loading="lazy" src="images/64089883bb26c546ee637b3b_image19.jpeg"/></a><div class="blog_content" id="w-node-a4268922-fbd0-b616-174c-ccd42e61a519-f5a47174"><div class="blog-card_content-info"><a class="link_underline is-category w-inline-block" href="/category/digital-marketing"><div> Digital Marketing</div><div class="underline_hover is-blue"></div></a><div class="display-inlineflex"><div class="icon w-embed"><svg fill="none" height="14" viewbox="0 0 19 14" width="19" xmlns="http://www.w3.org/2000/svg">
<path d="M0.875 6.99993C0.875 6.99993 3.96591 0.818115 9.375 0.818115C14.7841 0.818115 17.875 6.99993 17.875 6.99993C17.875 6.99993 14.7841 13.1818 9.375 13.1818C3.96591 13.1818 0.875 6.99993 0.875 6.99993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
<path d="M9.37482 9.318C10.6551 9.318 11.693 8.28012 11.693 6.99982C11.693 5.71953 10.6551 4.68164 9.37482 4.68164C8.09453 4.68164 7.05664 5.71953 7.05664 6.99982C7.05664 8.28012 8.09453 9.318 9.37482 9.318Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
</svg></div><div class="padding-right padding-xsmall"></div><div>7</div><div> min</div></div></div><div class="padding-vertical padding-small"><a class="blog_card-heading" href="/blog/illo">The 9 best tools for your early-stage startup tech stack</a></div><p class="text-size-small text-color-grey">Dignissimos architecto neque fugit praesentium eveniet debitis. Ab quis nihil.</p><div class="padding-bottom padding-small"></div><div class="blog_author">Farris Qunibi</div></div></div></div></div></div></div></div></div><div class="section_testimonials"><div class="padding-global"><div class="container-large"><div class="testimonial_pagination"><div>what our clients say</div><div class="swiper-pagination"><div class="swiper-pagination-current">1</div><div>—</div><div class="swiper-pagination-total">1</div></div></div><div class="swiper testimonials w-dyn-list"><div class="swiper-wrapper w-dyn-items" role="list"><div class="swiper-slide swiper-slide-active w-dyn-item" role="listitem"><div class="testimonial_component"><div class="w-embed"><svg fill="none" height="48" viewbox="0 0 78 48" width="78" xmlns="http://www.w3.org/2000/svg">
<path d="M77.1548 17.824C76.0377 25.2374 69.6785 30.5205 62.4599 30.8613C64.2646 37.5078 68.6473 40.1493 73.9752 41.6831C74.4909 41.8535 74.4049 42.3648 74.4049 42.3648L73.5456 47.6479C73.5456 47.6479 73.4596 48.0739 72.7722 47.9887C54.382 45.9437 41.9215 32.0543 44.2417 15.1825C46.3901 3.50857 55.5851 -1.00762 64.0927 0.185336C72.6003 1.54871 78.4439 9.38813 77.1548 17.824ZM18.4612 30.8613C20.1799 37.5078 24.7345 40.1493 29.9765 41.6831C30.4921 41.8535 30.4062 42.3648 30.4062 42.3648L29.6327 47.6479C29.6327 47.6479 29.5468 48.0739 28.8593 47.9887C10.3833 45.9437 -1.90542 32.0543 0.242956 15.1825C2.47727 3.50857 11.7583 -1.00762 20.1799 0.185336C28.6875 1.54871 34.531 9.38813 33.1561 17.824C32.0389 25.3226 25.7657 30.6057 18.4612 30.8613Z" fill="currentColor"></path>
</svg></div><div class="padding-vertical padding-medium"><p class="heading-style-h3">Index Pro partnered with Goodbrand to help the company grow their business from launch to 10,000+ customers."</p></div><div class="display-inlineflex"><div>— </div><div> Jacob Sussman</div><div>, </div><div>Project Manager</div><div>, </div><div>Index Pro</div></div></div></div><div class="swiper-slide swiper-slide-active w-dyn-item" role="listitem"><div class="testimonial_component"><div class="w-embed"><svg fill="none" height="48" viewbox="0 0 78 48" width="78" xmlns="http://www.w3.org/2000/svg">
<path d="M77.1548 17.824C76.0377 25.2374 69.6785 30.5205 62.4599 30.8613C64.2646 37.5078 68.6473 40.1493 73.9752 41.6831C74.4909 41.8535 74.4049 42.3648 74.4049 42.3648L73.5456 47.6479C73.5456 47.6479 73.4596 48.0739 72.7722 47.9887C54.382 45.9437 41.9215 32.0543 44.2417 15.1825C46.3901 3.50857 55.5851 -1.00762 64.0927 0.185336C72.6003 1.54871 78.4439 9.38813 77.1548 17.824ZM18.4612 30.8613C20.1799 37.5078 24.7345 40.1493 29.9765 41.6831C30.4921 41.8535 30.4062 42.3648 30.4062 42.3648L29.6327 47.6479C29.6327 47.6479 29.5468 48.0739 28.8593 47.9887C10.3833 45.9437 -1.90542 32.0543 0.242956 15.1825C2.47727 3.50857 11.7583 -1.00762 20.1799 0.185336C28.6875 1.54871 34.531 9.38813 33.1561 17.824C32.0389 25.3226 25.7657 30.6057 18.4612 30.8613Z" fill="currentColor"></path>
</svg></div><div class="padding-vertical padding-medium"><p class="heading-style-h3">Goodbrand helped us define our brand purpose, transforming how we attract customers and keep them happy. I look forward to continuing our work with them.</p></div><div class="display-inlineflex"><div>— </div><div>Ryan Levitz</div><div>, </div><div>CMO</div><div>, </div><div>Index Pro</div></div></div></div><div class="swiper-slide swiper-slide-active w-dyn-item" role="listitem"><div class="testimonial_component"><div class="w-embed"><svg fill="none" height="48" viewbox="0 0 78 48" width="78" xmlns="http://www.w3.org/2000/svg">
<path d="M77.1548 17.824C76.0377 25.2374 69.6785 30.5205 62.4599 30.8613C64.2646 37.5078 68.6473 40.1493 73.9752 41.6831C74.4909 41.8535 74.4049 42.3648 74.4049 42.3648L73.5456 47.6479C73.5456 47.6479 73.4596 48.0739 72.7722 47.9887C54.382 45.9437 41.9215 32.0543 44.2417 15.1825C46.3901 3.50857 55.5851 -1.00762 64.0927 0.185336C72.6003 1.54871 78.4439 9.38813 77.1548 17.824ZM18.4612 30.8613C20.1799 37.5078 24.7345 40.1493 29.9765 41.6831C30.4921 41.8535 30.4062 42.3648 30.4062 42.3648L29.6327 47.6479C29.6327 47.6479 29.5468 48.0739 28.8593 47.9887C10.3833 45.9437 -1.90542 32.0543 0.242956 15.1825C2.47727 3.50857 11.7583 -1.00762 20.1799 0.185336C28.6875 1.54871 34.531 9.38813 33.1561 17.824C32.0389 25.3226 25.7657 30.6057 18.4612 30.8613Z" fill="currentColor"></path>
</svg></div><div class="padding-vertical padding-medium"><p class="heading-style-h3">Molestias consequatur sapiente est quia asperiores non fugiat temporibus sed. Ex voluptas id tempora. Et veniam est minus. Facere esse repr</p></div><div class="display-inlineflex"><div>— </div><div>Tom Gerencer</div><div>, </div><div>Marketing Director</div><div>, </div><div>Chase</div></div></div></div><div class="swiper-slide swiper-slide-active w-dyn-item" role="listitem"><div class="testimonial_component"><div class="w-embed"><svg fill="none" height="48" viewbox="0 0 78 48" width="78" xmlns="http://www.w3.org/2000/svg">
<path d="M77.1548 17.824C76.0377 25.2374 69.6785 30.5205 62.4599 30.8613C64.2646 37.5078 68.6473 40.1493 73.9752 41.6831C74.4909 41.8535 74.4049 42.3648 74.4049 42.3648L73.5456 47.6479C73.5456 47.6479 73.4596 48.0739 72.7722 47.9887C54.382 45.9437 41.9215 32.0543 44.2417 15.1825C46.3901 3.50857 55.5851 -1.00762 64.0927 0.185336C72.6003 1.54871 78.4439 9.38813 77.1548 17.824ZM18.4612 30.8613C20.1799 37.5078 24.7345 40.1493 29.9765 41.6831C30.4921 41.8535 30.4062 42.3648 30.4062 42.3648L29.6327 47.6479C29.6327 47.6479 29.5468 48.0739 28.8593 47.9887C10.3833 45.9437 -1.90542 32.0543 0.242956 15.1825C2.47727 3.50857 11.7583 -1.00762 20.1799 0.185336C28.6875 1.54871 34.531 9.38813 33.1561 17.824C32.0389 25.3226 25.7657 30.6057 18.4612 30.8613Z" fill="currentColor"></path>
</svg></div><div class="padding-vertical padding-medium"><p class="heading-style-h3">They have delivered more outcomes to us in a couple of weeks than any other agencies did in months.</p></div><div class="display-inlineflex"><div>— </div><div>Darren Woods</div><div>, </div><div>CEO</div><div>, </div><div>ExxonMobil</div></div></div></div><div class="swiper-slide swiper-slide-active w-dyn-item" role="listitem"><div class="testimonial_component"><div class="w-embed"><svg fill="none" height="48" viewbox="0 0 78 48" width="78" xmlns="http://www.w3.org/2000/svg">
<path d="M77.1548 17.824C76.0377 25.2374 69.6785 30.5205 62.4599 30.8613C64.2646 37.5078 68.6473 40.1493 73.9752 41.6831C74.4909 41.8535 74.4049 42.3648 74.4049 42.3648L73.5456 47.6479C73.5456 47.6479 73.4596 48.0739 72.7722 47.9887C54.382 45.9437 41.9215 32.0543 44.2417 15.1825C46.3901 3.50857 55.5851 -1.00762 64.0927 0.185336C72.6003 1.54871 78.4439 9.38813 77.1548 17.824ZM18.4612 30.8613C20.1799 37.5078 24.7345 40.1493 29.9765 41.6831C30.4921 41.8535 30.4062 42.3648 30.4062 42.3648L29.6327 47.6479C29.6327 47.6479 29.5468 48.0739 28.8593 47.9887C10.3833 45.9437 -1.90542 32.0543 0.242956 15.1825C2.47727 3.50857 11.7583 -1.00762 20.1799 0.185336C28.6875 1.54871 34.531 9.38813 33.1561 17.824C32.0389 25.3226 25.7657 30.6057 18.4612 30.8613Z" fill="currentColor"></path>
</svg></div><div class="padding-vertical padding-medium"><p class="heading-style-h3">Ut velit ipsam consequatur enim id harum vitae laboriosam eum. Libero voluptates necessit</p></div><div class="display-inlineflex"><div>— </div><div> Stephanie Ashcroft</div><div>, </div><div>Co-Owner</div><div>, </div><div>Adia</div></div></div></div></div></div><div class="testimonial_nav-swipper"><div class="swiper-button-prev"><div class="swiper-button w-embed"><svg fill="none" height="100%" viewbox="0 0 29 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0.461093 13.1209L10.8794 23.5394C11.1768 23.8368 11.5731 24 11.9958 24C12.4189 24 12.815 23.8365 13.1124 23.5394L14.0583 22.5932C14.3555 22.2963 14.5192 21.8997 14.5192 21.4768C14.5192 21.0542 14.3555 20.6442 14.0583 20.3473L7.98044 14.256L27.2901 14.256C28.1607 14.256 28.8486 13.5745 28.8486 12.7036L28.8486 11.366C28.8486 10.4952 28.1607 9.7449 27.2901 9.7449L7.91149 9.7449L14.0581 3.61965C14.3552 3.32226 14.5189 2.93644 14.5189 2.51356C14.5189 2.09116 14.3552 1.69971 14.0581 1.40255L13.1122 0.459462C12.8148 0.162065 12.4186 -1.88715e-06 11.9955 -1.92413e-06C11.5729 -1.96108e-06 11.1765 0.164175 10.8791 0.461571L0.460859 10.8798C0.162758 11.1782 -0.00118412 11.5764 -1.14539e-05 11.9998C-0.000949651 12.4245 0.162758 12.823 0.461093 13.1209Z" fill="currentColor"></path>
</svg></div></div><div class="swiper-button-next"><div class="swiper-button w-embed"><svg fill="none" height="100%" viewbox="0 0 29 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3875 10.8791L17.9693 0.460636C17.6719 0.16324 17.2755 0 16.8529 0C16.4298 0 16.0336 0.163474 15.7362 0.460636L14.7903 1.40677C14.4932 1.7037 14.3295 2.1003 14.3295 2.52318C14.3295 2.94582 14.4932 3.3558 14.7903 3.65272L20.8682 9.74396H1.55852C0.687906 9.74396 0 10.4255 0 11.2964V12.634C0 13.5048 0.687906 14.2551 1.55852 14.2551H20.9371L14.7906 20.3803C14.4934 20.6777 14.3297 21.0636 14.3297 21.4864C14.3297 21.9088 14.4934 22.3003 14.7906 22.5975L15.7365 23.5405C16.0339 23.8379 16.43 24 16.8531 24C17.2757 24 17.6721 23.8358 17.9695 23.5384L28.3878 13.1202C28.6859 12.8218 28.8498 12.4236 28.8486 12.0002C28.8496 11.5755 28.6859 11.177 28.3875 10.8791Z" fill="currentColor"></path>
</svg></div></div></div></div><div class="swiper-button-prev area" data-w-id="bf482e2e-4a69-955a-17ee-c82880859d30"></div><div class="swiper-button-next area" data-w-id="bf482e2e-4a69-955a-17ee-c82880859d31"></div></div></div><div class="section_approach"><div class="padding-global"><div class="container-large"><div class="padding-section-large"><div class="max-width-large"><h2 class="heading-style-h2">Our approach is <span class="heading-style-h2-italic">different</span> than other agencies.</h2></div><div class="w-layout-grid approach_text-grid"><div id="w-node-_94e290bc-6e36-d693-6836-114ecde722b4-cde722aa"><p id="w-node-_94e290bc-6e36-d693-6836-114ecde722b5-cde722aa" text-split="" words-slide-from-right="">The traditional agency model is flawed. Marketing agencies typically place a group of talent around managing your account, with one goal in mind, get you to renew your contract. We do the opposite by focusing on precisly what your goals are, and placing the best team around to accomplish those goals.</p><div class="padding-bottom padding-large" id="w-node-_94e290bc-6e36-d693-6836-114ecde722b7-cde722aa"></div><div class="button-group"><a class="button is-cta w-inline-block" href="/contact"><div class="text-size-regular">Let's grow</div><div class="button_cta-arrow w-embed"><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666308 17.4221C0.138574 17.9498 0.138574 18.8055 0.666308 19.3332C1.19404 19.8609 2.04968 19.8609 2.57741 19.3332L0.666308 17.4221ZM19.73 1.62088C19.73 0.874553 19.1249 0.269531 18.3786 0.269531H6.21645C5.47013 0.269531 4.8651 0.874553 4.8651 1.62088C4.8651 2.36721 5.47013 2.97223 6.21645 2.97223H17.0273V13.783C17.0273 14.5294 17.6323 15.1344 18.3786 15.1344C19.1249 15.1344 19.73 14.5294 19.73 13.783V1.62088ZM2.57741 19.3332L19.3342 2.57643L17.423 0.665331L0.666308 17.4221L2.57741 19.3332Z" fill="currentColor"></path>
</svg></div></a><a class="link_underline w-inline-block" href="mailto:farris@goodbrand.io"><div>book a meeting</div><div class="underline"></div><div class="underline_hover"></div></a></div></div></div></div></div></div></div></main><div class="footer"><div class="padding-global"><div class="container-large"><div class="w-layout-grid footer_top-grid"><h2>Start making the most of your company's <span class="heading-style-h2-italic">potential.</span></h2><div id="w-node-_5127e6a1-a5c8-8f8d-3227-f4376805da27-6805da1f"><div class="padding-bottom padding-large"></div><div class="button-group"><a class="button is-cta w-inline-block" href="/contact"><div class="text-size-regular">Let's grow</div><div class="button_cta-arrow w-embed"><svg fill="none" height="20" viewbox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666308 17.4221C0.138574 17.9498 0.138574 18.8055 0.666308 19.3332C1.19404 19.8609 2.04968 19.8609 2.57741 19.3332L0.666308 17.4221ZM19.73 1.62088C19.73 0.874553 19.1249 0.269531 18.3786 0.269531H6.21645C5.47013 0.269531 4.8651 0.874553 4.8651 1.62088C4.8651 2.36721 5.47013 2.97223 6.21645 2.97223H17.0273V13.783C17.0273 14.5294 17.6323 15.1344 18.3786 15.1344C19.1249 15.1344 19.73 14.5294 19.73 13.783V1.62088ZM2.57741 19.3332L19.3342 2.57643L17.423 0.665331L0.666308 17.4221L2.57741 19.3332Z" fill="currentColor"></path>
</svg></div></a><a class="link_underline is-white w-inline-block" href="mailto:farris@goodbrand.io"><div>book a meeting</div><div class="underline is-white"></div><div class="underline_hover is-white"></div></a></div></div></div><div class="line is-white" data-w-id="5127e6a1-a5c8-8f8d-3227-f4376805da33"></div><div class="w-layout-grid footer_bottom-grid"><div id="w-node-_5127e6a1-a5c8-8f8d-3227-f4376805da35-6805da1f"><a class="w-inline-block" href="#"><img alt="" loading="lazy" src="images/642310daa3b521903fa4719b_logo-goodbrand-white.svg"/></a><div class="padding-bottom padding-huge"></div><div>+01 234 567 77</div><div class="padding-bottom padding-xsmall"></div><a class="link_underline is-footer w-inline-block" href="mailto:grow@goodbrand.io"><div>grow@goodbrand.io</div><div class="underline is-white"></div><div class="underline_hover is-white"></div></a><div class="padding-bottom padding-medium"></div><div>3711 South Mopac Expressway, Austin TX 78746</div></div><div id="w-node-_5127e6a1-a5c8-8f8d-3227-f4376805da44-6805da1f"><div class="text-color-white">Discover</div><div class="padding-bottom padding-medium"></div><div class="padding-bottom padding-xsmall"><a class="footer_link" href="/services">Services</a></div><div class="padding-bottom padding-xsmall"><a class="footer_link" href="/about">About</a></div><div class="padding-bottom padding-xsmall"><a class="footer_link" href="/work">Work</a></div><div class="padding-bottom padding-xsmall"><a class="footer_link" href="/contact">Contact</a></div><a class="footer_link" href="/blog">Blog</a></div><div id="w-node-_5127e6a1-a5c8-8f8d-3227-f4376805da53-6805da1f"><div class="text-color-white">Sign up for our newsletter</div><div class="padding-bottom padding-medium"></div><div class="w-form"><form data-name="Email Form" data-wf-element-id="5127e6a1-a5c8-8f8d-3227-f4376805da58" data-wf-page-id="642310daa3b52158f5a47174" id="newsletter_form" method="get" name="email-form"><div class="z-index-1"><input class="form_input is-white w-input" data-name="Email 2" id="email_newsletter" maxlength="256" name="email-2" placeholder="E-mail" required="" type="email"/><input class="footer_email-arrow w-button" data-wait="" type="submit" value=""/></div></form><div class="form_message-success is-footer w-form-done"><div>Thank you for your interest in our newsletter.</div></div><div class="form_message-error w-form-fail"><div>Something went wrong while submitting the email.</div></div></div><div class="padding-bottom padding-small"></div><p class="text-size-tiny">By signing up to receive emails from Goodbrand, you agree to our <a class="text-color-white" href="#">Privacy Policy</a>. We treat your info responsibly. Unsubscribe anytime.</p></div><div id="w-node-_5127e6a1-a5c8-8f8d-3227-f4376805da68-6805da1f">Copyright © 2023 Goodbrand®</div><div class="footer_social" id="w-node-_5127e6a1-a5c8-8f8d-3227-f4376805da6a-6805da1f"><a class="w-inline-block" href="#"><div class="icon-small w-embed"><svg role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"></path></svg></div></a><a class="w-inline-block" href="#"><div class="icon-small w-embed"><svg role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"></path></svg></div></a></div></div></div></div></div></div><script crossorigin="anonymous" src="js/jquery-3.5.1.min.dc5e7f18c8.js" type="text/javascript"></script><script src="js/goodbrand-io.dbd810ea1.js" type="text/javascript"></script><script src="js/jquery.validate.min.js"></script>
<!-- Start of HubSpot Embed Code -->
<script async="" defer="" id="hs-script-loader" src="js/23587213.js" type="text/javascript"></script>
<!-- End of HubSpot Embed Code -->
<!-- Fully Custom Form Input Settings -->
<script>

var $form = $("#newsletter_form");
$.validator.addMethod("letters", function(value, element) {
  return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
});
$form.validate({
  rules: {
    email_newsletter: {
      required: true,
      email: true
    },
  },
  message: {
    email_newsletter: "*Please specify a valid email address",
  }
});
</script>
<script type="module">
import Lenis from "https://cdn.skypack.dev/@studio-freight/lenis@0.1.12";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  smooth: true,
  direction: 'vertical',
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
 </script>
<script src="https://unpkg.com/split-type"></script>
<script src="js/gsap.min.js"></script>
<script src="js/ScrollTrigger.min.js"></script>
<script>
window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-down]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});
</script><script src="js/swiper-bundle.min.js"></script>
<!-- Initialize Swiper -->
<script>
      var swiper = new Swiper(".testimonials", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
  	 		delay: 5000,
 				},
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      });
    </script>
    </>
  );
}

export default App;
