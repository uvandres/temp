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
class FFMigration_2_14 implements FFDBMigration{

	public function version() {
		return '2.14';
	}

	public function execute($manager) {
		if (!FFDB::existColumn($manager->image_cache_table_name, 'original_url')){
			FFDB::conn()->query("ALTER TABLE ?n ADD COLUMN ?n VARCHAR(300)", $manager->image_cache_table_name, 'original_url');
		}
	}
}