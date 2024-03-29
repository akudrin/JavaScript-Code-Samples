project
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Template • TodoMVC</title>
<link rel="stylesheet" href="bower_components/todomvc-common/base.css"> <!-- CSS overrides - remove if you don't need it -->
<link rel="stylesheet" href="css/app.css"> </head>
<body>
<section id="todoapp">
<header id="header">
<h1>todos</h1>
<input id="new-todo" placeholder="What needs to be done?" autofocus>
</header>
<!-- This section should be hidden by default and shown when there are todos --> <section id="main">
<input id="toggle-all" type="checkbox">
<label for="toggle-all">Mark all as complete</label>
<ul id="todo-list">
<!-- These are here just to show the structure of the list items -->
<!-- List items should get the class `editing` when editing and
`completed` when marked as completed -->
<li class="completed">
<div class="view">
<input class="toggle" type="checkbox" checked>
<label>Create a TodoMVC template</label>
<button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
</li>
<li>
<div class="view">
<input class="toggle" type="checkbox">
<label>Rule the web</label>
<button class="destroy"></button>
</div>
<input class="edit" value="Rule the web">
</li>
</ul>
</section>
<!-- This footer should hidden by default and shown when there are todos --> <footer id="footer">
<!-- This should be `0 items left` by default -->
<span id="todo-count"><strong>1</strong> item left</span>
<!-- Remove this if you don't implement routing -->
<ul id="filters">
  <li>
<a class="selected" href="#/">All</a>
</li>
<li>
<a href="#/active">Active</a>
</li>
<li>
<a href="#/completed">Completed</a>
</li>
</ul>
<!-- Hidden if no completed items are left ↓ -->
<button id="clear-completed">Clear completed (1)</button>
</footer>
</section>
<footer id="info">
<p>Double-click to edit a todo</p>
<!-- Remove the below line ↓ -->
<p>Template by <a href="http://github.com/sindresorhus">Sindre Sorhus</a></p> <!-- Change this out with your name and url ↓ -->
<p>Created by <a href="http://todomvc.com">you</a></p>
<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
<!-- Scripts here. Don't remove this ↓ -->
<script src="bower_components/todomvc-common/base.js"></script>
<script src="js/app.js"></script>
</body>
</html>
