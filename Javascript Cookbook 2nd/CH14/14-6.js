 <!doctype html>
<html lang="en"> <head>
<meta charset="utf-8" />
<title>Widgets</title> </head>
<body>
<h1>Add Widget:</h1>
<form method="POST" action="/widgets/create" enctype="application/x-www-form-urlencoded">
<p>Widget Serial Number: <input type="text" id="widgetsn" name="widgetsn" size="25" required /></p>
<p>Widget name: <input type="text" name="widgetname" id="widgetname" size="25" required/></p>
<p>Widget Price: <input type="text" pattern="^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$" name="widgetprice" id="widgetprice" size="25" required/></p>
<p>Widget Description: <br />
<textarea name="widgetdesc" id="widgetdesc" cols="20" rows="5"></textarea>
<p>
<input type="submit" name="submit" id="submit" value="Submit"/> <input type="reset" name="reset" id="reset" value="Reset"/> </p>
</form>
</body>
