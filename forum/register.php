<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Register With Us</title>

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
						<h1 class="pull-left">Register</h1>
						<h4 class="pull-right">A Simple Forum</h4>
						<div class="clearfix"></div>
						<hr>
						<form role="form" enctype="multipart/form-data" method="post" action="register.php">
							<div class="form-group">
								<label>Name*</label> <input type="text" class="form-control" name="name"
									placeholder="Enter Your Name">
							</div>
							<div class="form-group">
								<label>Email Address*</label> <input type="email" class="form-control" name="email"
									placeholder="Enter Your Email Address">
							</div>
							<div class="form-group">
								<label>Choose Username*</label> <input type="text" class="form-control" name="username"
									placeholder="Create A Username">
							</div>
							<div class="form-group">
								<label>Password*</label> <input type="password" class="form-control" name="password"
									placeholder="Enter A Password">
							</div>
							<div class="form-group">
								<label>Confirm Password*</label> <input type="password" class="form-control"
									name="password2" placeholder="Enter Password Again">
							</div>
							<div class="form-group">
								<label>Upload Avatar</label>
								<input type="file" name="avatar">
								<p class="help-block"></p>
							</div>
							<div class="form-group">
								<label>About Me</label>
								<textarea id="about" rows="6" cols="80" class="form-control" name="about"
									placeholder="Tell us about yourself (Optional)"></textarea>
							</div>
							<input name="register" type="submit" class="color btn btn-default" value="Register" />
						</form>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div id="sidebar">
					<div class="block">
						<div class="block">
							<h3>Categories</h3>
							<div class="list-group">
								<a href="#" class="list-group-item active">All Topics </a>
								<a href="#" class="list-group-item"></a>
								<a href="#" class="list-group-item">Development</a>
								<a href="#" class="list-group-item">Business & Marketing </a>
								<a href="#" class="list-group-item">Search Engines</a>
								<a href="#" class="list-group-item">Cloud & Hosting</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="js/bootstrap.js"></script>
	</div>
</body>

</html>