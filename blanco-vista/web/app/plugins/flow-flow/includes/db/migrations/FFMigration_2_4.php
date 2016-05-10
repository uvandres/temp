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
class FFMigration_2_4 implements FFDBMigration {

	public function version() {
		return '2.4';
	}

	public function execute($manager) {
		if (!FFDB::existColumn($manager->streams_table_name, 'status')){
			$sql = "ALTER TABLE ?n ADD COLUMN ?n INT DEFAULT 0";
			FFDB::conn()->query($sql, $manager->streams_table_name, 'status');
		}

		FFDB::conn()->query('DELETE FROM ?n', $manager->cache_table_name);
	}
}