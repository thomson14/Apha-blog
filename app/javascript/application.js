// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false

import "controllers"

import * as bootstrap from "bootstrap"
import Rails from '@rails/ujs';
Rails.start();
