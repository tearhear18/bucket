"use strict";var CordovaInit=function(){var a=function(){b("deviceready")},b=function(a){console.log("Start event received, bootstrapping application setup.");var b=document.querySelector("body");angular.bootstrap(b,["yeomanApp"])};this.bindEvents=function(){document.addEventListener("deviceready",a,!1)},void 0!==window.cordova?(console.log("Cordova found, wating for device."),this.bindEvents()):(console.log("Cordova not found, booting application"),b("manual"))};document.addEventListener("DOMContentLoaded",function(a){console.log("Bootstrapping!"),new CordovaInit}),angular.module("yeomanApp",["ngTouch","ui.router","angular-carousel"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("featured"),a.state("index",{url:"/",templateUrl:"views/index.html",controller:"IndexCtrl"}).state("index.featured",{url:"featured",templateUrl:"views/index.featured.html"}).state("index.main",{url:"main",templateUrl:"views/index.main.html"}).state("index.login",{url:"login",templateUrl:"views/index.login.html"}).state("index.signup",{url:"signup",templateUrl:"views/index.signup.html"}).state("index.signup-email",{url:"signup-email",templateUrl:"views/index.signup-email.html"})}]).config(["$httpProvider",function(a){a.defaults.headers.common={},a.defaults.headers.post={},a.defaults.headers.put={},a.defaults.headers.patch={}}]),angular.module("yeomanApp").controller("IndexCtrl",["$scope",function(a){console.log("index")}]),angular.module("yeomanApp").run(["$templateCache",function(a){a.put("views/index.featured.html",'<div class="mainContainer"> <ul rn-carousel class="slider"> <li class="smooth-legs"> <div class="slider1"> <div class="container-masterX"> <div class="container-masterY"> <div class="introWrapper text-center"> <div class="errand_icon"> <img src="images/beta.a61f5f3e.png"> </div> <h2 class="white">Welcome to Errands</h2> </div> </div> </div> </div> </li> <li class="smooth-legs"> <div class="slider2"> <div class="container-masterX"> <div class="container-masterY"> <div class="introWrapper text-center"> <div class="errand_icon"> <img src="images/time.5a08cf76.png"> </div> <h2 class="white">Great moments from time you can save from being stuck in traffic</h2> </div> </div> </div> </div> </li> <li class="smooth-legs"> <div class="slider3"> <div class="container-masterX"> <div class="container-masterY"> <div class="introWrapper text-center"> <div class="errand_icon"> <img src="images/family.c6ce821b.png"> </div> <h2 class="white">Spend more quality time with your family & catch up with friends</h2> </div> </div> </div> </div> </li> <!-- <li class="smooth-legs">\r\n	 		<div class="slider4">\r\n	    		<div class="container-masterX">\r\n	            	<div class="container-masterY">\r\n	                \r\n	                	<div class="introWrapper text-center">\r\n		                    <div class="errand_icon">\r\n		                    	<img src="images/furniture.c9e17d52.png">\r\n		                    </div>\r\n		                    <h2 class="white">Take pleasure in your free time relaxing at home or chilling at your favorite coffee shop</h2>\r\n		                </div>\r\n	                </div>\r\n	            </div>\r\n	        </div>\r\n	  	</li>\r\n	  	<li class="smooth-legs">\r\n	 		<div class="slider5">\r\n	    		<div class="container-masterX">\r\n	            	<div class="container-masterY">\r\n	                \r\n	                	<div class="introWrapper text-center">\r\n		                    <div class="errand_icon">\r\n		                    	<img src="images/variety.f7bf05de.png">\r\n		                    </div>\r\n		                    <h2 class="white">Choose from a variety of products and enjoy discounts & rewards</h2>\r\n		                </div>\r\n	                </div>\r\n	            </div>\r\n	        </div>\r\n	  	</li>\r\n	  	<li class="smooth-legs">\r\n	 		<div class="slider6">\r\n	    		<div class="container-masterX">\r\n	            	<div class="container-masterY">\r\n	                \r\n	                	<div class="introWrapper text-center">\r\n	                		<h2 class="black">Here\'s what you can do within the Errands App</h2>\r\n		                    <div class="errand_icon2">\r\n		                    	<img src="images/create.630c2819.png">\r\n		                    	<br>\r\n		                    	<img src="images/track.9bf1941e.png">\r\n		                    	<br>\r\n		                    	<img src="images/connect.82046b43.png">\r\n		                    </div>\r\n		                    \r\n		                </div>\r\n	                </div>\r\n	            </div>\r\n	        </div>\r\n	  	</li>\r\n	  	<li class="smooth-legs">\r\n	 		<div class="slider7">\r\n	    		<div class="container-masterX">\r\n	            	<div class="container-masterY">\r\n	                \r\n	                	<div class="introWrapper text-center">\r\n		                    <h2>Enjoy Promos and Deals</h2>\r\n		                    <div class="slider7-images">\r\n		                    	<img src="images/surprise.8e4eac53.jpg">\r\n		                   \r\n                   				<img src="images/surprise1.c9e9dc24.jpg">\r\n		                    </div>\r\n		                    \r\n		                </div>\r\n	                </div>\r\n	            </div>\r\n	        </div>\r\n	  	</li>\r\n	  	<li class="smooth-legs">\r\n	 		<div class="slider8">\r\n	    		<div class="container-masterX">\r\n	            	<div class="container-masterY">\r\n	                \r\n	                	<div class="introWrapper text-center">\r\n		                    <div class="errand_icon">\r\n		                    	<img src="images/time.5a08cf76.png">\r\n		                    </div>\r\n		                    <h2 class="white">Great moments from time you can save from being stuck in traffic</h2>\r\n		                </div>\r\n	                </div>\r\n	            </div>\r\n	        </div>\r\n	  	</li> --> </ul> <div class="static_footer"> <a ui-sref="index.main" class="black">Get Started</a> </div> </div>'),a.put("views/index.html","<div ui-view> <h1>index</h1> </div>"),a.put("views/index.login.html",'<div class="mainContainer index"> <div class="container-masterX"> <div class="container-masterY"> <div ui-view> <div class="introWrapper text-center"> <div class="errand_icon3"> <img src="./images/beta.a61f5f3e.png"> </div> <div class="loginwrapper"> <form> <div class="form-group"> <input type="email" placeholder="Email Address"> </div> <div class="form-group"> <input type="password" placeholder="Password"> </div> <div class="form-group"> <button class="white">LOGIN</button> </div> </form> </div> <a href=""> <h3 class="forgot">Forgot Password</h3> </a> </div> <!--\r\n                <div class="footer-intro">\r\n                    <a class="sign-in-footer" ui-sref="index.login">Already have an account? Login</a>\r\n                </div>           \r\n                --> </div> </div> </div> </div> <div class="static_footer"> <a ui-sref="index.main" class="black">Dont have an account? Signup</a> </div>'),a.put("views/index.main.html",'<div class="mainContainer index"> <div class="container-masterX"> <div class="container-masterY"> <div ui-view> <div class="introWrapper text-center"> <div class="errand_icon3"> <img src="./images/beta.a61f5f3e.png"> </div> <h4 class="white"> Be part of our journey to empower families and busy persons like you to gain more time by reducing footprints in the tradiitonal grocery stores. </h4> <div class="action-container"> <button ui-sref="index.login" class="btn-primary white">LOG IN</button> <button ui-sref="index.signup" class="btn-primary white">SIGN UP</button> </div> </div> <!--\r\n                <div class="footer-intro">\r\n                    <a class="sign-in-footer" ui-sref="index.login">Already have an account? Login</a>\r\n                </div>           \r\n                --> </div> </div> </div> </div>'),a.put("views/index.signup-email.html",'<div class="mainContainer index"> <div class="container-masterX"> <div class="container-masterY"> <div ui-view> <div class="introWrapper text-center"> <div class="errand_icon3"> <img src="./images/beta.a61f5f3e.png"> </div> <div class="loginwrapper"> <form> <div class="form-group"> <input type="email" placeholder="Email Address"> </div> <div class="form-group"> <input type="password" placeholder="Password"> </div> <div class="form-group"> <input type="password" placeholder="Verify Password"> </div> <div class="form-group"> <button class="white">Sign up</button> </div> </form> </div> </div> <!--\r\n                <div class="footer-intro">\r\n                    <a class="sign-in-footer" ui-sref="index.login">Already have an account? Login</a>\r\n                </div>           \r\n                --> </div> </div> </div> </div> <div class="static_footer"> <a ui-sref="index.login" class="black">have an account? Sign in</a> </div>'),a.put("views/index.signup.html",'<div class="mainContainer index"> <div class="container-masterX"> <div class="container-masterY"> <div ui-view> <div class="introWrapper text-center"> <div class="errand_icon3"> <img src="./images/beta.a61f5f3e.png"> </div> <div class="form_group"> <button ng-click="sign_with_facebook()" class="button signup-fb text-left">Sign up with Facebook </button> <button ng-click="sign_with_google()" class="button signup-google text-left">Sign up with Google</button> <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> </div> <a ui-sref="index.signup-email"> <h3 class="signup">Sign up with email</h3> </a> </div> <!--\r\n                <div class="footer-intro">\r\n                    <a class="sign-in-footer" ui-sref="index.login">Already have an account? Login</a>\r\n                </div>           \r\n                --> </div> </div> </div> </div>')}]);