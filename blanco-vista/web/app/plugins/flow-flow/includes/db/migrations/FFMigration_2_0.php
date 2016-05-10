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
class FFMigration_2_0 implements FFDBMigration {

	public function version() {
		return '2.0';
	}

	public function execute($manager) {
		if (FF_USE_WP) {
			global $wpdb;

			$option_name = 'flow_flow_options';
			$sql = "INSERT INTO ?n (`id`, `value`) SELECT ?s, wp1.option_value as 'settings' FROM ?n wp1 WHERE wp1.option_name = ?s";
			FFDB::conn()->query($sql, $manager->option_table_name, $option_name, $wpdb->prefix . 'options', $option_name);

			$option_name = 'flow_flow_fb_auth_options';
			$sql = "INSERT INTO ?n (`id`, `value`) SELECT ?s, wp1.option_value as 'settings' FROM ?n wp1 WHERE wp1.option_name = ?s";
			FFDB::conn()->query($sql, $manager->option_table_name, $option_name, $wpdb->prefix . 'options', $option_name);

			$option_name = 'flow_flow_facebook_access_token';
			$sql = "INSERT INTO ?n (`id`, `value`) SELECT ?s, wp1.option_value as 'settings' FROM ?n wp1 WHERE wp1.option_name = ?s";
			FFDB::conn()->query($sql, $manager->option_table_name, $option_name, $wpdb->prefix . 'options', '_transient_' . $option_name);

			$option_name = 'flow_flow_facebook_access_token_expires';
			$sql = "INSERT INTO ?n (`id`, `value`) SELECT ?s, wp1.option_value as 'settings' FROM ?n wp1 WHERE wp1.option_name = ?s";
			FFDB::conn()->query($sql, $manager->option_table_name, $option_name, $wpdb->prefix . 'options', '_transient_' . $option_name);

			$options = $manager->getOption('options', true);
			if (isset($options['streams'])){
				$json = json_decode($options['streams']);
				foreach ( $json as $stream) {
					$obj = (object)$stream;
					FFDB::setStream($manager->streams_table_name, $obj->id, $obj);
				}
				unset($options['streams']);
			}
			unset($options['streams_count']);
			$manager->setOption('options', $options, true);
		}
	}
}