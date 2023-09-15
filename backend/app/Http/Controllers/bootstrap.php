<?php

require_once __DIR__ . '/../../../vendor/autoload.php';

use PhpOffice\PhpWord\Settings;

Settings::setZipClass(Settings::PCLZIP);

Settings::loadConfig();