import React from 'react';
// import '../component_css/index_html.css';
import '../component_css/bootstrap.min.css';
import '../component_css/slick.css';
import '../component_css/style.css';
import '../component_css/venobox.css';
// import '../conponent_css/ie9.css';
import '../App.css';



function Index() {
    return (
		<html lang="ko">
		<head>
			<meta charset="utf-8"/>
			<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<title>Movie Star - Cinema HTML Template</title>
			<link rel="icon" type="image/png" href="images/favicon.png" />
			<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
			{/* <!--[if IE 9]> */}
				<link href="css/ie9.css" rel="stylesheet" />
			{/* <![endif]--> */}
			{/* <!--[if lt IE 9]> */}
				<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
				<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
			{/* <![endif]--> */}
		</head>
		<body>
			
			{/* <!-- Wrapper --> */}
			<div class="wrapper">
	
				{/* <!-- Navigation --> */}
				<div class="navbar" role="navigation">
					{/* <!-- Heading --> */}
					<div class="heading">
						<div class="container">
							<div class="row">
								<div class="col-sm-12">
									<div class="search">
										<a href="#">
											<i class="material-icons">search</i>
										</a>
									</div>
									<div class="tel">
										<a href="tel:0330 123 4567">
											<i class="material-icons">phone in talk</i> 0330  123 4567
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
	
					<div class="container">
						<div class="navbar-header">
							<a href="index.html" class="logo" title="Movie star landing page">
								<img src="images/logo.svg" alt="Movie star HTML Template" />
							</a>
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar top-bar"></span>
								<span class="icon-bar middle-bar"></span>
								<span class="icon-bar bottom-bar"></span>
							</button>
						</div>  
						<div class="navbar-collapse collapse">
							<ul id="menu-primary" class="nav navbar-nav">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="whats-on.html">What's on</a>
								</li>
								<li>
									<a href="shortcodes.html">Shortcodes</a>
								</li>
								<li class="dropdown active">
									<a href="news.html">News</a>
									<ul class="dropdown-menu">
										<li><a href="news-single.html">News single</a></li>
									</ul>
								</li>
								<li>
									<a href="contact.html">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
	
				{/* <!-- Hero --> */}
				<div id="content_hero" style={{backgroundImage: "url(http://via.placeholder.com/1440x435)"}}>
					
					<img src="images/scroll-arrow.svg" alt="Scroll down" class="scroll" />
	
					{/* <!-- Content --> */}
					<div class="container">
						<div class="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
							<div class="col-md-9">
								<span class="title">The very latest</span>
								<h1>Cinema news</h1>
							</div>
						</div>
					</div>
	
				</div>
	
				{/* section */}
				<div class="container section news">
					<div class="row">
						<div class="col-sm-7">
							<article>
								<a href="news-single.html" class="img">
									<aside>
										<div>
											<i class="material-icons">link</i>
											<span class="date">7 Mar, 2017 by Lee Grant</span>
										</div>
									</aside>
									<img src="http://via.placeholder.com/750x350" alt="" />
								</a>
								<span class="categories">New releases, What's hot</span>
								<h2 class="no-underline">15 Tips To Increase Your Adwords Profits</h2>
								<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
								<a href="news-single.html" class="btn btn-ghost">
									<span>Read full post</span>
								</a>
							</article>
							<article>
								<a href="news-single.html" class="img">
									<aside>
										<div>
											<i class="material-icons">link</i>
											<span class="date">7 Mar, 2017 by Lee Grant</span>
										</div>
									</aside>
									<img src="http://via.placeholder.com/750x350" alt="" />
								</a>
								<span class="categories">New movies, Animation</span>
								<h2 class="no-underline">There Is No Competition</h2>
								<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
								<a href="news-single.html" class="btn btn-ghost">
									<span>Read full post</span>
								</a>
							</article>
							<article>
								<a href="news-single.html" class="img">
									<aside>
										<div>
											<i class="material-icons">link</i>
											<span class="date">7 Mar, 2017 by Lee Grant</span>
										</div>
									</aside>
									<img src="http://via.placeholder.com/750x350" alt="" />
								</a>
								<span class="categories">New releases, What's hot</span>
								<h2 class="no-underline">15 Tips To Increase Your Adwords Profits</h2>
								<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
								<a href="news-single.html" class="btn btn-ghost">
									<span>Read full post</span>
								</a>
							</article>
							<article>
								<a href="news-single.html" class="img">
									<aside>
										<div>
											<i class="material-icons">link</i>
											<span class="date">7 Mar, 2017 by Lee Grant</span>
										</div>
									</aside>
									<img src="http://via.placeholder.com/750x350" alt="" />
								</a>
								<span class="categories">New movies, Animation</span>
								<h2 class="no-underline">There Is No Competition</h2>
								<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
								<a href="news-single.html" class="btn btn-ghost">
									<span>Read full post</span>
								</a>
							</article>
							<article>
								<a href="news-single.html" class="img">
									<aside>
										<div>
											<i class="material-icons">link</i>
											<span class="date">7 Mar, 2017 by Lee Grant</span>
										</div>
									</aside>
									<img src="http://via.placeholder.com/750x350" alt="" />
								</a>
								<span class="categories">New releases, What's hot</span>
								<h2 class="no-underline">15 Tips To Increase Your Adwords Profits</h2>
								<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
								<a href="news-single.html" class="btn btn-ghost">
									<span>Read full post</span>
								</a>
							</article>
						</div>
						<aside class="col-sm-3 col-sm-push-1 sidebar">
							<div class="widget">
								<form>
									<input type="text" placeholder="Search..." class="search" />
									<i class="material-icons">search</i>
								</form>
							</div>
							<div class="widget">
								<h3>Categories</h3>
								<ul>
									<li><a href="#">Coming soon</a></li>
									<li><a href="#">New releases</a></li>
									<li><a href="#">What's hot</a></li>
									<li><a href="#">Events</a></li>
								</ul>
							</div>
							<div class="widget">
								<h3>Archives</h3>
								<ul>
									<li><a href="#">July 2017</a></li>
									<li><a href="#">June 2017</a></li>
									<li><a href="#">May 2017</a></li>
									<li><a href="#">April 2017</a></li>
								</ul>
							</div>
							<div class="widget">
								<h3>Tags</h3>
								<ul>
								<a href="#" class="tag">Thriller</a>
								<a href="#" class="tag">Kids</a>
								<a href="#" class="tag">Offers</a>
								<a href="#" class="tag">Movie nights</a>
								<a href="#" class="tag">Premiere</a>
								<a href="#" class="tag">Animation</a>
								<a href="#" class="tag">Comedy</a>
								<a href="#" class="tag">New</a>
								</ul>
							</div>
						</aside>
					</div>
				</div>
	
				{/* <!-- Pagination --> */}
				<div class="section small-padding border-top">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<ul class="pagination">
									<li><a href="#">Prev</a></li>
									<li><a href="#">1</a></li>
									<li><a href="#" class="active">2</a></li>
									<li><span>&hellip;</span></li>
									<li><a href="#">7</a></li>
									<li><a href="#">8</a></li>
									<li><a href="#">Next</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
	
				{/* <!-- Footer --> */}
				<footer>
					<div class="container">
						<div class="row">
							<div class="col-sm-3">
								<h6>Get in touch</h6>
								<ul>
									<li><a href="#">FAQs</a></li>
									<li><a href="#">Give us feedback</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>
							<div class="col-sm-3">
								<h6>About Movie star</h6>
								<ul>
									<li><a href="#">About us</a></li>
									<li><a href="#">Find us</a></li>
									<li><a href="#">Schedule</a></li>
									<li><a href="#">News</a></li>
								</ul>
							</div>
							<div class="col-sm-3">
								<h6>Legal stuff</h6>
								<ul>
									<li><a href="#">Terms &amp; Conditions</a></li>
									<li><a href="#">Privacy policy</a></li>
									<li><a href="#">Cookie policy</a></li>
								</ul>
							</div>
							<div class="col-sm-3">
								<h6>Connect with us</h6>
								<ul>
									<li><a href="#"><i class="fa fa-facebook"></i> Facebook</a></li>
									<li><a href="#"><i class="fa fa-twitter"></i> Twitter</a></li>
									<li><a href="#"><i class="fa fa-google-plus"></i> Google +</a></li>
								</ul>
							</div>
						</div>
						<div class="copyright">
							<p>2017 &copy; Movie Star  /  <a href="http://www.klevermedia.co.uk">Web design by Klever media</a></p>
						</div>
					</div>
				</footer>
	
			</div>
			
			<script src="js/jquery-2.2.4.min.js"></script>
			<script src="js/jquery-ui.min.js"></script>
			<script src="js/bootstrap.min.js"></script>
			<script src="js/headhesive.min.js"></script>
			<script src="js/matchHeight.min.js"></script>
			<script src="js/modernizr.custom.js"></script>
			<script src="js/slick.min.js"></script>
			<script src="js/venobox.min.js"></script>
			<script src="https://use.fontawesome.com/4dfd2d448a.js"></script>
			<script src="js/custom.js"></script>
		</body>
	</html>
		);
	  }

  export default Index;
  