'use strict';

/**
 * munch-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::munch-box.munch-box');
