<?php
  use Starbase\Hyperdrive\Assets;
?>

<footer class="content-info">
	<div class="content">
		<ul class="social">
			<li class="twitter">
				<a href="#">
					<?= Assets\include_svg('twitter') ?>
				</a>
			</li>

			<li class="facebook">
				<a href="#">
					<?= Assets\include_svg('facebook') ?>
				</a>
			</li>
		</ul>

		<nav class="main-navigation">
			<?php
			if (has_nav_menu('primary_navigation')) :
				wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
			endif;
			?>
		</nav>

		<a href="#" class="home">
			<img src="<?= Assets\asset_path('images/equal-home.png'); ?>">
		</a>

		<p class="copyright">Copyright © 2016 Brookfield Residential. All Rights Reserved</p>

		<img class="logo" alt="Brookfield Residential" title="Brookfield Residential" src="<?= Assets\asset_path('images/logo-brookfield-white.png'); ?>">
	</div>
</footer>
