<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Welcome To Forum</title>

	<!-- Bootstrap core CSS -->
	<link href="css/bootstrap.css" rel="stylesheet">
	<!-- Custom styles for this template -->
	<link href="css/custom.css" rel="stylesheet">
</head>

<body>

	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="index.php">Forum</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li class="active"><a href="index.php">Home</a></li>
					<li><a href="register.php">Register</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<div class="main-col">
					<div class="block">
						<h1 class="pull-left">Welcome to Forum</h1>
						<h4 class="pull-right">A Simple Forum</h4>
						<div class="clearfix"></div>
						<hr>
						<ul id="topics">
							<li class="topic">
								<div class="row">
									<div class="col-md-2">
										<img class="avatar pull-left" src="img/man.png" />
									</div>
									<div class="col-md-10">
										<div class="topic-content pull-right">
											<h3><a href="topic.php">How did you learn CSS and HTML?</a></h3>
											<div class="topic-info">
												<a href="category.php">Development</a> >> <a href="profile.html">Abdul
													Hassan</a> >> Posted on: June 12, 2014
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="topic">
								<div class="row">
									<div class="col-md-2">
										<img class="avatar pull-left" src="img/woman.png" />
									</div>
									<div class="col-md-10">
										<div class="topic-content pull-right">
											<h3><a href="topic.html">Best Web Application Frameworks</a></h3>
											<div class="topic-info">
												<a href="category.html">Development</a> >> <a href="profile.html">Totini
													Talukder</a> >> Posted on: June 12, 2014
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>

					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="sidebar">


					<div class="block">
						<h3>Categories</h3>
						<div class="list-group block ">
							<a href="#" class="list-group-item active">All Topics </a>
							<a href="#" class="list-group-item">Design</a>
							<a href="#" class="list-group-item">Development</a>
							<a href="#" class="list-group-item">Business & Marketing</a>
							<a href="#" class="list-group-item">Search Engines</a>
							<a href="#" class="list-group-item">Cloud & Hosting</a>
						</div>
					</div>

					<div class="block" style="margin-top: 20px;">
						<h3 class="margin-top: 40px">Forum Statistics</h3>
						<div class="list-group">
							<a href="#" class="list-group-item">Total Number of Users:</a>
							<a href="#" class="list-group-item">Total Number of Topics:</a>
							<a href="#" class="list-group-item">Total Number of Categories:</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="js/bootstrap.js"></script>
</body>

</html>