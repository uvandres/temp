<?php namespace flow\db\migrations;
use flow\db\FFDB;
use flow\db\FFDBMigration;

if ( ! defined( 'WPINC' ) ) die;
/**
 * Flow-Flow.
 *
 * @package   FlowFlow
 * @author    Looks Awesome <email@looks-awesome.com>

 * @link      http://looks-awesome.com
 * @copyright 2014-2016 Looks Awesome
 */
class FFMigration_2_5 implements FFDBMigration{

	public function version() {
		return '2.5';
	}

	public function execute($manager) {
		if (!FFDB::existColumn($manager->posts_table_name, 'post_timestamp')){
			FFDB::conn()->query("ALTER TABLE ?n ADD COLUMN ?n INT", $manager->posts_table_name, 'post_timestamp');
		}
		if (FFDB::existColumn($manager->posts_table_name, 'post_date')){
			FFDB::conn()->query("ALTER TABLE ?n DROP `post_date`",  $manager->posts_table_name);
		}

		FFDB::conn()->query('DELETE FROM ?n', $manager->cache_table_name);
	}
}