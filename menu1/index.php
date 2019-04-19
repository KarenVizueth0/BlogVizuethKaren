
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Reservaciones</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/CSS/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/CSSS/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">	
	<link rel="stylesheet" type="text/css" href="vendor/CSSS-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/animsition/CSSS/animsition.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
	<link rel="stylesheet" type="text/css" href="CSSS/util.css">
	<link rel="stylesheet" type="text/css" href="CSSS/main.css">
</head>
<body>


	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
					<span class="login100-form-title p-b-34">
						Su reservacion fue confirmada
					</span>
					Cantidad de personas; <?php echo $_POST['username'] ?><br/><br/><br/>
					Fecha de reservacion; <?php echo $_POST['fecha'] ?><br/><br/>
					Hora de reservacion; <?php echo $_POST['hora'] ?><br/><br/>
					Tipo de mesa a reservar:; <?php echo $_POST['mesa'] ?><br/><br/>

					




					<div class="w-full text-center">
						<a href="#" class="txt3">

							<br/>
<br/>
							<li><a href="videos\videos.html">Regresar</a></li>

						</a>
					</div>
				</form>
</form>
				<div class="login100-more" style="background-image: url('images/comida.jpg');"></div>
			</div>
		</div>
	</div>
	
	

	<div id="dropDownSelect1"></div>
	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/animsition/JSS/animsition.min.js"></script>
	<script src="vendor/bootstrap/JSS/popper.js"></script>
	<script src="vendor/bootstrap/JSS/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script>
		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script>
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
	<script src="vendor/countdowntime/countdowntime.js"></script>





	<script src="js/main.js"></script>

</body>
</html>